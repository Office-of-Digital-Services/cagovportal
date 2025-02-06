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
    const pageCheckIds = checkboxes.map(chk => chk.id);

    const newStates = [
      ...checkboxes.filter(chk => chk.checked).map(chk => chk.id),
      ...getCheckboxStates().filter(id => !pageCheckIds.includes(id))
    ].sort();

    sessionStorage?.setItem(storageId, JSON.stringify(newStates));
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

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      saveCheckboxState();
    });
  });
});
