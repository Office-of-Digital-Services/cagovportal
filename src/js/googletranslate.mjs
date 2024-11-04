//@ts-check

// Google Translate support
window.addEventListener("DOMContentLoaded", () => {
  // // trigger a refresh after the translate link changes the page hash
  document
    .querySelectorAll(".settings-links > a:not(.translate)")
    .forEach(l =>
      l.addEventListener("click", () =>
        window.setTimeout(() => window.location.reload())
      )
    );

  // Function to get a cookie by name using modern JavaScript
  /**
   * @param {string} name
   */
  function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return cookies[name] || null;
  }

  const translateWidgetName = window.location.href.includes("/translate/")
    ? "google_translate_element"
    : undefined;

  // Check for the "googtrans" cookie or #googtrans URL fragment
  if (
    getCookie("googtrans") ||
    window.location.hash.includes("#googtrans") ||
    translateWidgetName
  ) {
    const options = {
      pageLanguage: "en"
      //includedLanguages: "en,es,ko,tl,vi,zh-TW"
    };

    window["googleTranslateElementInit"] = () => {
      new window["google"].translate.TranslateElement(
        options,
        translateWidgetName
      );
    };

    // Add translate script to page
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  }
});
