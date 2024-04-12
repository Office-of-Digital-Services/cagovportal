//@ts-check

//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        const ul = this.querySelector("ul");
        if (!ul) {
          throw new Error("missing first level UL");
        }

        const inputBox = /** @type {HTMLInputElement} */ (
          document.getElementById(this.dataset.inputid)
        );

        if (!inputBox) {
          throw new Error("Missing data-inputid");
        }

        inputBox.value = new URLSearchParams(window.location.search).get("q");

        const count = document.getElementById(this.dataset.countid);

        const checkme = () => {
          const value = inputBox.value
            //.trim() not trimming on purpose
            .toLowerCase();

          const LIs = ul.getElementsByTagName("li");

          let nCount = 0;

          [...LIs].forEach(li => {
            const bShow =
              !value ||
              li.dataset.keywords
                .replace(/\W/g, " ")
                .toLowerCase()
                .includes(value);

            li.style.display = bShow ? "" : "none";
            li.ariaHidden = (!bShow).toString();
            if (bShow) nCount++;
          });

          if (count) count.innerHTML = nCount.toLocaleString();
        };

        inputBox.addEventListener("input", checkme);
        checkme();
      }
    }
  );
});
