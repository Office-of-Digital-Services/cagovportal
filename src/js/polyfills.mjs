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

  // POLYFILL for WEBP images
  /** @type {NodeListOf<HTMLImageElement>} */
  const webpImages = document.querySelectorAll('img[src*=".webp" i]');
  if (webpImages.length) {
    // WebP images are present. Check for support

    const replacementString = ".backup.png";

    /**
     * @param {(supported: boolean) => void} callback
     */
    const detectWebP = callback => {
      // Base64-encoded 1x1 pixel WebP image
      const webpData = "UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";

      // If createImageBitmap is supported, try that first
      if (typeof createImageBitmap === "function") {
        // Create a blob from the base64 string
        const blob = new Blob(
          [Uint8Array.from(atob(webpData), c => c.charCodeAt(0))],
          { type: "image/webp" }
        );

        createImageBitmap(blob)
          .then(() => callback(true))
          .catch(() => callback(false));
      } else {
        // Fallback: inline <img> test
        // Safari 14.1 and older do not support createImageBitmap
        const img = new Image();
        img.onload = () => callback(img.height === 1);
        img.onerror = () => callback(false);
        img.src = `data:image/webp;base64,${webpData}`;
      }
    };

    detectWebP(supported => {
      if (!supported) {
        webpImages.forEach(img => {
          img.src = img.src.replace(/\.webp$/i, replacementString);
        });
        console.log("POLYFILL: Using PNG instead of WEBP");
      }
    });
  }
});
