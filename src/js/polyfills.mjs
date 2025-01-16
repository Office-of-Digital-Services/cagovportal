//@ts-check
window.addEventListener("DOMContentLoaded", () => {
  // POLYFILL for CSS nesting
  if (!CSS.supports("selector(&)")) {
    // Load the PostCSS library from jsdelivr
    import("https://cdn.jsdelivr.net/npm/postcss@8.5.1/+esm")
      .then(postcss => {
        import("https://cdn.jsdelivr.net/npm/postcss-nested@7.0.2/+esm")
          .then(postcssNested => {
            // Fetch the CSS file
            const linkElement = document.getElementById("main-stylesheet");
            if (linkElement) {
              fetch(linkElement.href)
                .then(response => response.text())
                .then(nestedCss => {
                  // Convert nested CSS to flat CSS using PostCSS
                  postcss
                    .default([postcssNested.default])
                    .process(nestedCss, { from: undefined })
                    .then(result => {
                      // Create a new style element with the flat CSS
                      const style = document.createElement("style");
                      style.textContent = result.css;
                      // Replace the link element with the new style element
                      linkElement.parentNode.replaceChild(style, linkElement);
                    })
                    .catch(error => {
                      console.error("Failed to process the CSS file:", error);
                    });
                })
                .catch(error => {
                  console.error("Failed to fetch the CSS file:", error);
                });
            } else {
              console.error(
                'CSS link element with ID "main-stylesheet" not found.'
              );
            }
          })
          .catch(error => {
            console.error("Failed to load the postcss-nested library:", error);
          });
      })
      .catch(error => {
        console.error("Failed to load the PostCSS library:", error);
      });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  //POLYFILL for WEBP to PNG
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    if (webP.height !== 1) {
      // Replace WEBP with PNG

      /** @type {NodeListOf<HTMLImageElement>} */ (
        document.querySelectorAll('img[src$=".webp" i]')
      ).forEach(img => {
        img.src = img.src.replace(/\.webp$/i, ".png");
      });
      console.log("POLYFILL: Using PNG instead of WEBP");
    }
  };
  webP.src =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
});
