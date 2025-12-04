//@ts-check

window.addEventListener("DOMContentLoaded", () => {
  //POLYFILL for CSS nesting
  if (!CSS.supports("selector(&)")) {
    // CSS Nesting not supported. Load alternative CSS file
    const links = document.querySelectorAll("link[rel='stylesheet']");
    const link = Array.prototype.find.call(links, l =>
      l.href.includes("/css/cagov-custom.")
    );

    if (link) {
      link.href = link.href.replace("min", "flat");
      console.log("POLYFILL: Using FLAT CSS instead of Nested");
    }
  }

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

        if (img.src !== newSrc) {
          img.src = newSrc;
        }
      });

      console.log("POLYFILL: Using fallback images instead of WEBP");
    }
  });
});
