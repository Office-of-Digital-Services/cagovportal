//@ts-check
// Save checkbox state to local storage
document.addEventListener("DOMContentLoaded", () => {
  const storageId = "recovery-services-finder-checkboxStates";
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const redirectButton = document.getElementById("redirect");

  function saveCheckboxState() {
    const checkedIds = [...checkboxes]
      .filter(checkbox => checkbox.checked)
      .map(x => x.id);

    localStorage.setItem(storageId, JSON.stringify(checkedIds));
  }

  function loadCheckboxState() {
    /** @type {string[]} */
    const checkedIds = JSON.parse(localStorage.getItem(storageId)) || [];

    checkboxes.forEach(checkbox => {
      const checked = checkedIds.includes(checkbox.id);

      if (checkbox.checked !== checked) {
        checkbox.checked = checked;
      }
    });
  }

  function updateButtonState() {
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (anyChecked) {
      redirectButton.classList.remove("disabled");
      redirectButton.addEventListener("click", redirectToContent);
    } else {
      redirectButton.classList.add("disabled");
      redirectButton.removeEventListener("click", redirectToContent);
    }
  }

  function redirectToContent() {
    window.location.href = "/lafires/recovery-services/";
  }

  loadCheckboxState();
  updateButtonState();

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      saveCheckboxState();
      updateButtonState();
    });
  });
});
