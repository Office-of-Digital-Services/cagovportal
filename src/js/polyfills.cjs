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
 * Add `data-fallback-href` to any stylesheet <link> that has a
 * legacy-compatible alternate build:
 *
 *   <link rel="stylesheet"
 *         href="/css/cagov-custom.min.css?vNov26"
 *         data-fallback-href="/css/cagov-custom.flat.css?vNov26" />
 *
 * On browsers without CSS nesting support, every matching <link> is
 * swapped to its fallback URL. Links without the attribute are ignored,
 * so this is opt-in. Both URLs carry their own cache-bust param — keep
 * them in sync when bumping the version.
 *
 * The fallback build comes from the `flattenCSS` filter: postcss-nested
 * flattens nested rules, postcss-media-minmax rewrites media query range
 * syntax to min-width/max-width.
 *
 * MUST RUN INLINE IN <head>, immediately after the link tag. On
 * DOMContentLoaded the modern stylesheet has already painted, so the swap
 * causes a visible reflow — worst on the old hardware this exists to
 * serve. An external script would reintroduce the same delay.
 *
 * ONE CHECK IS ENOUGH: nesting is the binding constraint. Range syntax
 * shipped earlier in every engine, so nesting support implies range
 * support. Revisit if a later-baseline feature is adopted (e.g. @scope).
 *
 * SYNTAX FLOOR: ES2015 (Safari 10+). A parse error kills the entire
 * fallback, so don't exceed the oldest browser in the support matrix.
 * In particular, no optional chaining (`?.`) — that's ES2020 and fails
 * to parse on Safari 13.0 and below, which still reach this code path.
 *
 * No onerror handler — link error events don't fire reliably on Safari
 * 15.6 and below. A bad path shows as a 404 in the network tab instead.
 */

if (!(window.CSS && CSS.supports && CSS.supports("selector(&)")))
  /** @type {NodeListOf<HTMLLinkElement>} */ (
    document.querySelectorAll("link[rel='stylesheet'][data-fallback-href]")
  ).forEach(link => {
    const fallback = link.dataset.fallbackHref;
    if (fallback) link.href = fallback;
  });

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
