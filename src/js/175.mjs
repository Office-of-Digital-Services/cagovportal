window.addEventListener("load", () => {
  let prevScrollpos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 200) {
      if (prevScrollpos > currentScrollPos) {
        navbar.classList.add("sticky");
        navbar.classList.remove("hidden");
      } else {
        navbar.classList.add("hidden");
        navbar.classList.remove("sticky");
      }
    } else {
      navbar.classList.remove("hidden");
      navbar.classList.remove("sticky");
    }
    prevScrollpos = currentScrollPos;
  };
  console.log("test");
});
