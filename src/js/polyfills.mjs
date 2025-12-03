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

  //POLYFILL for WEBP to PNG
  function supportsWebP() {
    const canvas = document.createElement("canvas");
    if (canvas.getContext && canvas.getContext("2d")) {
      return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  }

  if (!supportsWebP()) {
    // Replace WEBP with PNG
    /** @type {NodeListOf<HTMLImageElement>} */
    (document.querySelectorAll('img[src*=".webp" i]')).forEach(img => {
      img.src = img.src.replace(/\.webp/i, ".backup.png");
    });
    console.log("POLYFILL: Using PNG instead of WEBP");
  }
});
