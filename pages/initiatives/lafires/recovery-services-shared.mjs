//@ts-check
// Save checkbox state to local storage
document.addEventListener("DOMContentLoaded", () => {
  const storageId = "recovery-services-finder-checkboxStates";
  const checkboxes = /** @type {HTMLInputElement[]} */ ([
    ...document.querySelectorAll('input[type="checkbox"]')
  ]);

  function getCheckboxStates() {
    return /** @type {string[]} */ (
      JSON.parse(sessionStorage?.getItem(storageId) || "[]") || []
    );
  }

  function saveCheckboxState() {
    const existingStates = getCheckboxStates();
    const uncheckedIds = checkboxes
      .filter(chk => !chk.checked)
      .map(chk => chk.id);
    const checkedIds = checkboxes.filter(chk => chk.checked).map(chk => chk.id);

    // Remove uncheckedIds from existingStates
    uncheckedIds.forEach(id => {
      const index = existingStates.indexOf(id);
      if (index !== -1) {
        existingStates.splice(index, 1);
      }
    });

    // Add any missing checkedIds to existingStates
    checkedIds.forEach(id => {
      if (!existingStates.includes(id)) {
        existingStates.push(id);
      }
    });

    sessionStorage?.setItem(storageId, JSON.stringify(existingStates));
  }

  function applyCheckboxStates() {
    const checkedIds = getCheckboxStates();

    checkboxes.forEach(checkbox => {
      const checked = checkedIds.includes(checkbox.id);

      if (checkbox.checked !== checked) {
        checkbox.checked = checked;
      }
    });
  }

  applyCheckboxStates();
  console.log("here 2");
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      saveCheckboxState();
    });
  });
});
