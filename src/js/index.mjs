//@ts-check

//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        console.log("connected");

        const ul = this.querySelector("ul");
        if (!ul) {
          throw new Error("missing first level UL");
        }

        const inputquery = this.dataset.inputquery;
        if (!inputquery) {
          throw new Error(`missing query -> ${inputquery}`);
        }

        const inputBoxList = document.querySelectorAll(inputquery);

        if (!inputBoxList || inputBoxList.length > 1) {
          throw new Error(`bad query -> ${inputquery}`);
        }

        const inputBox = /** @type {HTMLInputElement} */ (inputBoxList[0]);

        const checkme = () => {
          console.log("chec");
          const value = inputBox.value
            //.trim() not trimming on purpose
            .toLowerCase();

          const LIs = ul.getElementsByTagName("li");

          [...LIs].forEach(li => {
            const bShow = !value || li.innerText.includes(value);

            li.style.display = bShow ? "" : "none";
            li.ariaHidden = (!bShow).toString();
          });
        };

        inputBox.addEventListener("input", checkme);
      }
    }
  );
});
