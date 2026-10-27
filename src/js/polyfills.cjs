//@ts-check

// Polyfills for older browsers
// webp polyfill can use data-fallback-ext attribute on img elements to specify alternative extension
// e.g., <img src="image.webp" data-fallback-ext="jpg" />
// default fallback is .backup.png
//
// webp polyfill server can be specified with a meta tag:
// <meta name="webp-polyfill-server" content="https://example.com/images/" />

/**
 * Legacy CSS fallback swap.
 *
 * USAGE:
 * Add `data-fallback-href` to any stylesheet <link> that has a
 * legacy-compatible alternate build. The attribute value is the URL of
 * that alternate file, including its own cache-busting query param:
 *
 *   <link rel="stylesheet"
 *         href="/css/cagov-custom.min.css?vNov26"
 *         data-fallback-href="/css/cagov-custom.flat.css?vNov26" />
 *
 * On browsers without CSS nesting support, every matching <link> has its
 * href swapped to the fallback URL before first paint. Links without the
 * attribute are ignored, so this is opt-in and safe to add incrementally.
 * Multiple stylesheets may each declare their own fallback.
 *
 * Both URLs carry independent cache-busting params, so they can drift
 * apart if edited by hand. Generate the tag from a shared version value
 * (see the `cssLink` Eleventy shortcode) rather than maintaining both.
 *
 * The fallback build is produced at build time by the `flattenCSS`
 * filter: postcss-nested flattens nested rules, postcss-media-minmax
 * rewrites modern media query range syntax to min-width/max-width form.
 *
 * WHY THIS RUNS INLINE IN <head> AND NOT ON DOMContentLoaded:
 * DOMContentLoaded fires only after the full document is parsed — by
 * which time the modern stylesheet has already loaded, applied, and
 * painted. Swapping the href at that point produces a visible flash of
 * broken layout followed by a reflow, which is worst on exactly the
 * old hardware this fallback exists to serve (iPhone 6s-era devices
 * stuck on iOS 15). Running parser-blocking in <head>, immediately
 * after the link tag, means the swap happens before first paint.
 *
 * Must stay inline (not an external file): an external script would be
 * a separate network round trip, reintroducing the paint delay.
 *
 * WHY AN IIFE: keeps `links`, `original`, etc. out of the global scope.
 * Inline <head> scripts share the global namespace with everything else
 * on the page, so an unwrapped `const links` risks collision.
 *
 * WHY ONE CHECK: CSS nesting is the binding constraint for our flattened
 * bundle. Media query range syntax shipped earlier in every engine, so
 * any browser supporting nesting also supports range. If a CSS feature
 * with a later baseline is adopted (e.g. @scope), revisit this.
 *
 * SYNTAX FLOOR: ES2015. Safari 10+ parses this fine, which covers every
 * browser in our support matrix. Note the inline script is all-or-nothing
 * — a parse error anywhere kills the whole fallback, so avoid syntax
 * newer than the oldest browser we intend to serve.
 */
(function () {
  if (window.CSS && CSS.supports && CSS.supports("selector(&)")) return;

  const links = /** @type {NodeListOf<HTMLLinkElement>} */ (
    document.querySelectorAll("link[rel='stylesheet'][data-fallback-href]")
  );

  for (const link of links) {
    const fallback = link.dataset.fallbackHref;
    if (!fallback) continue;

    // Note: link.href returns the resolved absolute URL, not the literal
    // attribute value. Fine for restoring — same file either way.
    const original = link.href;

    // If the fallback file is missing (bad deploy, cache mismatch),
    // restore the original rather than leaving the page unstyled.
    link.onerror = function () {
      link.onerror = null;
      link.href = original;
    };

    link.href = fallback;
  }
})();

window.addEventListener("DOMContentLoaded", () => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const webpImages = document.querySelectorAll('img[src*=".webp" i]');
  if (!webpImages.length) return;

  // Read meta tag for external server
  /** @type {HTMLMetaElement | null} */
  const serverMeta = document.querySelector(
    'meta[name="webp-polyfill-server"]'
  );
  const serverPrefix = serverMeta ? serverMeta.content : "";

  const defaultReplacement = ".backup.png";

  const detectWebP = () =>
    new Promise(resolve => {
      const webpData = "UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
      if (typeof createImageBitmap === "function") {
        const blob = new Blob(
          [Uint8Array.from(atob(webpData), c => c.charCodeAt(0))],
          { type: "image/webp" }
        );
        createImageBitmap(blob)
          .then(() => resolve(true))
          .catch(() => resolve(false));
      } else {
        const img = new Image();
        img.onload = () => resolve(img.height === 1);
        img.onerror = () => resolve(false);
        img.src = `data:image/webp;base64,${webpData}`;
      }
    });

  detectWebP().then(supported => {
    if (!supported) {
      webpImages.forEach(img => {
        // Decide fallback extension
        const fallbackExt = img.dataset.fallbackExt
          ? `.${img.dataset.fallbackExt}`
          : defaultReplacement;

        // Extract filename only (strip directories)
        const fileName = (img.src.split("/").pop() || "").replace(
          /\.webp$/i,
          fallbackExt
        );

        // Build new src
        const newSrc = serverPrefix
          ? serverPrefix + fileName
          : img.src.replace(/\.webp$/i, fallbackExt);

        if (img.src !== newSrc) img.src = newSrc;
      });

      console.log("POLYFILL: Using fallback images instead of WEBP");
    }
  });
});
