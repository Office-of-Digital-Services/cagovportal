//@ts-check
window.addEventListener("load", () => {
  // using all the "t" query params to set css classes for subtopics on the BODY
  const urlParams = new URLSearchParams(window.location.search);
  const subtopicParams = urlParams.getAll("t");
  subtopicParams.forEach(subtopic => {
    document.body.classList.add(`subtopic-${subtopic}`);
  });
});
