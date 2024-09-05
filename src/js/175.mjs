/* HEADER */

//@ts-check

/* sticky header / hiding official header on scroll */
window.addEventListener("load", () => {
  const doc = document.documentElement;

  let prevScroll = window.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const headerAlert = document.querySelector("header .alert");
  const header = document.querySelector(".utility-header");
  const mainheader = document.querySelector("header");
  if (!header || !mainheader) return;

  window.addEventListener("scroll", () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      // Toggle Header
      if (direction === 2 && curScroll > 40) {
        const hiddenheight =
          header.clientHeight + (headerAlert?.clientHeight || 0);

        mainheader.style.top = `-${hiddenheight}px`;
        prevDirection = direction;
      } else if (direction === 1 && curScroll < 40) {
        // mainheader.classList.remove('scrolled');
        // header.classList.remove('is-hidden');
        // header.removeAttribute("style");
        mainheader.style.removeProperty("top");
        prevDirection = direction;
      }
    }

    prevScroll = curScroll;
  });
});

// retain scroll position

document.addEventListener("DOMContentLoaded", () => {
  // Add an event listener for the scroll event
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
});

// PANES

document.addEventListener("DOMContentLoaded", pane);
window.addEventListener("resize", pane);

function pane() {
  document.querySelectorAll(".even .group-left").forEach(element => {
    if (element instanceof HTMLElement) {
      if (window.innerWidth < 768) {
        let EvenLeftHeight = element.offsetHeight;
        element.style.height = `${EvenLeftHeight}px`;
        element.style.top = `${EvenLeftHeight}px`;
      } else {
        element.style.top = "0";
      }
    }
  });

  document.querySelectorAll(".even .group-right").forEach(element => {
    if (
      element instanceof HTMLElement &&
      element.previousElementSibling instanceof HTMLElement
    ) {
      if (window.innerWidth < 768) {
        let EvenRightHeight = element.previousElementSibling.offsetHeight;
        element.style.height = `${EvenRightHeight}px`;
        element.style.top = `${-EvenRightHeight}px`;
      } else {
        element.style.top = "0";
      }
    }
  });

  document.querySelectorAll(".pane-img").forEach(element => {
    if (
      element instanceof HTMLElement &&
      element.parentElement instanceof HTMLElement
    ) {
      let SetHeight = element.parentElement.offsetHeight;
      element.style.height = SetHeight + "px";
    }
  });
}
