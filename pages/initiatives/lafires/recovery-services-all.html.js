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

  const classes = /** @type {string[]} */ (window["getCheckboxStates"]())
    .filter(item => item.startsWith("category_"))
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
