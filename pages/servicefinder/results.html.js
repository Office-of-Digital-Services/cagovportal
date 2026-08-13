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
