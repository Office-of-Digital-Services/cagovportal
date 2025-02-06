//@ts-check
// Save checkbox state to local storage
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const redirectButton = document.getElementById("redirect");

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

  updateButtonState();

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      updateButtonState();
    });
  });
});
