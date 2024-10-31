//@ts-check

function supportsWebP(callback) {
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 1);
  };
  webP.src =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
}

function replaceWebPWithPNG() {
  const images = /** @type {NodeListOf<HTMLImageElement>} */ (
    document.querySelectorAll('img[src$=".webp"]')
  );
  images.forEach(img => {
    img.src = img.src.replace(/\.webp$/i, ".png");
  });
  console.log("POLYFILL: Using PNG instead of WEBP");
}

window.addEventListener("DOMContentLoaded", () => {
  // Feature detection for CSS nesting
  if (!CSS.supports("selector(&)")) {
    // CSS Nesting not supported.  Load alternative CSS file
    const link = /** @type {HTMLLinkElement} */ (
      document.getElementById("main-stylesheet")
    );
    link.href = link.href.replace("min", "flat");
    console.log("POLYFILL: Using FLAT CSS instead of Nested");
  }

  supportsWebP(function (supported) {
    if (!supported) {
      replaceWebPWithPNG();
    }
  });

  // Polyfill for WEBP
  if (!CSS.supports("selector(&)")) {
    // CSS Nesting not supported.  Load alternative CSS file
    const link = /** @type {HTMLLinkElement} */ (
      document.getElementById("main-stylesheet")
    );
    link.href = link.href.replace("min", "flat");
  }
});
