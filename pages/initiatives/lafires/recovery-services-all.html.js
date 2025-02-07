//@ts-check
const clearVarsButton = document.querySelector(".clearVars");
if (clearVarsButton) {
  clearVarsButton.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/lafires/recovery-services-finder/";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const data = /** @type {string[]} */ (window["getCheckboxStates"]());
  console.log("yo", data);
});
