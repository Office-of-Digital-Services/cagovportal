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
