//@ts-check

document.addEventListener("DOMContentLoaded", () => {
  const clearVarsButton = document.querySelector(".clearVars");
  if (clearVarsButton) {
    clearVarsButton.addEventListener("click", event => {
      event.preventDefault();
      sessionStorage.clear();
      window.location.href = "/lafires/recovery-services-finder/";
    });
  }

  const checks = /** @type {string[]} */ (window["getCheckboxStates"]());

  const categories = ["business", "long", "short"];

  const classes = checks
    .filter(item => categories.some(cat => item.startsWith(`category_${cat}`)))
    .map(x => `.${x}`)
    .join(",");

  /** @type {HTMLElement[]} */ ([
    ...document.querySelectorAll(classes)
  ]).forEach(el => {
    el.classList.remove("d-none");
    el.ariaHidden = null;
    el.hidden = false;
  });
});
