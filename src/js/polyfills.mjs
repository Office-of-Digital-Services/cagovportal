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
  if (webpImages.length) {
    //POLYFILL for WEBP to PNG
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      if (webP.height !== 1) {
        // Replace WEBP with PNG

        webpImages.forEach(img => {
          img.src = img.src.replace(/\.webp$/i, ".backup.png");
        });
        console.log("POLYFILL: Using PNG instead of WEBP");
      }
    };
    webP.src =
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  }
});
