//@ts-check

(function () {
  const checkboxStateStorageId = "recovery-services-finder-checkboxStates";
  function getCheckboxStates() {
    try {
      const storedData = sessionStorage?.getItem(checkboxStateStorageId);
      if (!storedData) return []; // If no data is found, return an empty array

      const parsedData = JSON.parse(storedData);
      if (!Array.isArray(parsedData)) throw new Error(); // Ensure it's an array

      return parsedData;
    } catch (e) {
      console.warn("Invalid checkbox state found, resetting storage.");
      sessionStorage?.setItem(checkboxStateStorageId, JSON.stringify([])); // Reset if corrupted
      return [];
    }
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

      let newStates = [
        ...checkboxes.filter(chk => chk.checked).map(chk => chk.id),
        ...getCheckboxStates().filter(id => !pageCheckIds.includes(id))
      ].sort();

      if (!Array.isArray(newStates)) {
        console.warn("Unexpected non-array state detected, resetting.");
        newStates = [];
      }

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
