document.addEventListener("DOMContentLoaded", () => {
  const storageId = "plan-your-in-person-visit-checkboxStates";
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

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
        console.log("setting checkbox", checkbox.id, checked);
      }
    });
  }
  loadCheckboxState();

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", saveCheckboxState);
  });
});
