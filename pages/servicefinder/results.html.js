//@ts-check
window.addEventListener("load", () => {
  updateServices();
});

function updateServices() {
  // using all the "t" query params to set css classes for subtopics on the BODY
  const urlParams = new URLSearchParams(window.location.search);
  const subtopicParams = urlParams.getAll("t");
  const removeServiceParams = urlParams.getAll("r");

  /** @type {NodeListOf<HTMLElement>} */
  const topicElements = document.querySelectorAll("[data-subtopic-id]");
  topicElements.forEach(topicElement => {
    const subtopicId = Number(topicElement.dataset.subtopicId);

    if (subtopicParams.includes(subtopicId.toString())) {
      let AtLeastOneServiceVisible = false;

      /** @type {NodeListOf<HTMLElement>} */
      const serviceElements =
        topicElement.querySelectorAll("[data-service-id]");

      serviceElements.forEach(serviceElement => {
        const serviceId = serviceElement.dataset.serviceId;

        if (serviceId && removeServiceParams.includes(serviceId))
          // remove this service from the list of services to show
          serviceElement.style.display = "none";
        else AtLeastOneServiceVisible = true;
      });

      // show this subtopic
      topicElement.style.display = AtLeastOneServiceVisible ? "block" : "none";
    }
  });
}

/**
 *
 * @param {string} serviceId
 */
// eslint-disable-next-line no-unused-vars
function removeService(serviceId) {
  // add the serviceId to the "r" query param without reloading the page
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.append("r", serviceId);
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  window.history.replaceState(null, "", newUrl);

  updateServices();
}

document.addEventListener("DOMContentLoaded", () => {
  // Begin share plan functionality
  const sharePlanModal = document.getElementById("share-plan");
  const copyBtn = document.getElementById("share-plan-copy");
  const copiedBtn = document.getElementById("share-plan-copied");
  const mailBtn = /** @type {HTMLAnchorElement} */ (
    document.getElementById("share-plan-mailto")
  );
  const shareBtn = /** @type {HTMLAnchorElement} */ (
    document.getElementById("share-plan-device")
  );
  const urlInput = /** @type {HTMLInputElement | null} */ (
    document.getElementById("url-copy")
  );

  if (!(sharePlanModal && copyBtn && copiedBtn && urlInput)) {
    console.error("Share plan elements not found.");
    return;
  }

  const shareData = {
    title: mailBtn.dataset.mailSubject || document.title,
    text: mailBtn.dataset.mailBody || "",
    url: ""
  };

  shareBtn.onclick = e => {
    e.preventDefault();
    navigator.share(shareData).catch(() => {});
  };

  // Bootstrap Modal Show Event
  // Set the URL input value to the current page URL when the modal is shown
  sharePlanModal.addEventListener("show.bs.modal", () => {
    urlInput.value = window.location.href;
    shareData.url = urlInput.value;
    mailBtn.href = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text)}%0A%0A${encodeURIComponent(shareData.url)}`;
  });

  const copyButtonClick = () => {
    urlInput.select();
    navigator.clipboard
      .writeText(urlInput.value)
      .then(() => {
        // Show the copied button and hide the copy button
        copiedBtn.style.display = "flex";
        copiedBtn.focus();
        copyBtn.style.display = "none";
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };
  copyBtn.addEventListener("click", copyButtonClick);
  copiedBtn.addEventListener("click", copyButtonClick);

  // End share plan functionality
});
