//@ts-check

window.addEventListener("DOMContentLoaded", () => {
  //Replace the header of the map link
  const replaceHeader = "https://maps.google.com/?q=";

  //Convert map links to device maps
  /** @type {NodeListOf<HTMLAnchorElement>} */ (
    document.querySelectorAll(`a.maps-link`)
  ).forEach(link => {
    if (/iPhone|iPad|iPod|Mac/i.test(navigator.userAgent)) {
      link.href = link.href.replace(
        replaceHeader,
        "https://maps.apple.com/?q="
      );
    } else if (/Android/.test(navigator.userAgent)) {
      link.href = link.href.replace(replaceHeader, "geo:0,0?q=");
    }
  });
});
