//@ts-check
window.addEventListener("load", () => {
  // using all the "t" query params to set css classes for subtopics on the BODY
  const urlParams = new URLSearchParams(window.location.search);
  const subtopicParams = urlParams.getAll("t");
  const removeServiceParams = urlParams.getAll("r");
  const parentElement = document.getElementById("service-finder-results");

  if (!parentElement) return;

  subtopicParams.forEach(subtopic => {
    // grab the section element from the DOM and use it to determine which services are visible
    const sectionElement = document.getElementById(`subtopic-${subtopic}`);

    if (sectionElement) {
      const serviceIds =
        sectionElement.dataset.serviceId?.trim().split(" ") || [];
      serviceIds.forEach(serviceId => {
        parentElement.classList.add(`show-service-${serviceId}`);
      });
    }
  });

  removeServiceParams.forEach(serviceId => {
    parentElement.classList.remove(`show-service-${serviceId}`);
  });
});

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

  const parentElement = document.getElementById("service-finder-results");
  parentElement?.classList.remove(`show-service-${serviceId}`);
}
