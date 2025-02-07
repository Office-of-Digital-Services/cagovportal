//@ts-check

(function () {
  const checkboxStateStorageId = "recovery-services-finder-checkboxStates";
  function getCheckboxStates() {
    return /** @type {string[]} */ (
      JSON.parse(sessionStorage?.getItem(checkboxStateStorageId) || "[]") || []
    );
  }
  window["getCheckboxStates"] = getCheckboxStates;

  // Save checkbox state to local storage
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = /** @type {HTMLInputElement[]} */ ([
      ...document.querySelectorAll('input[type="checkbox"]')
    ]);

    function updateButtonState() {
      const redirectButton = document.getElementById("redirect");
      if (!redirectButton) return;
      const anyChecked = checkboxes.some(cb => cb.checked);
      if (anyChecked) {
        redirectButton.classList.remove("disabled");
      } else {
        redirectButton.classList.add("disabled");
      }
    }

    function saveCheckboxState() {
      const pageCheckIds = checkboxes.map(chk => chk.id);

      const newStates = [
        ...checkboxes.filter(chk => chk.checked).map(chk => chk.id),
        ...getCheckboxStates().filter(id => !pageCheckIds.includes(id))
      ].sort();

      sessionStorage?.setItem(
        checkboxStateStorageId,
        JSON.stringify(newStates)
      );
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
    updateButtonState();

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        saveCheckboxState();
        updateButtonState();
      });
    });
  });
})();
