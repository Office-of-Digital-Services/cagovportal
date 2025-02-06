//@ts-check
// Save checkbox state to local storage
document.addEventListener("DOMContentLoaded", () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const redirectButton = document.getElementById("redirect");

  function updateButtonState() {
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (anyChecked) {
      redirectButton.classList.remove("disabled");
      redirectButton.addEventListener("click", handleButtonClick);
    } else {
      redirectButton.classList.add("disabled");
      redirectButton.removeEventListener("click", handleButtonClick);
    }
  }

  function handleButtonClick(event) {
    event.preventDefault();
    redirectToContent();
  }

  function redirectToContent() {
    const individualCheckbox = document.getElementById("Individual");
    if (individualCheckbox.checked) {
      window.location.href = "/lafires/recovery-services-individual/";
    } else {
      window.location.href = "/lafires/recovery-services-business/";
    }
  }

  updateButtonState();

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      updateButtonState();
    });
  });
});
