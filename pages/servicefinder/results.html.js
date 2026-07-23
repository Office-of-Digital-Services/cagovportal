//@ts-check
window.addEventListener("load", () => {
  // using all the "t" query params to set css classes for subtopics on the BODY
  const urlParams = new URLSearchParams(window.location.search);
  const subtopicParams = urlParams.getAll("t");
  const removeServiceParams = urlParams.getAll("r");
  const parentElement = document.getElementById("service-finder-results");

  subtopicParams.forEach(subtopic => {
    parentElement?.classList.remove(`hide-subtopic-${subtopic}`);
  });

  removeServiceParams.forEach(serviceId => {
    parentElement?.classList.remove(`show-service-${serviceId}`);
  });
});
