//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        const ul = /** @type {HTMLElement} */ (this.firstElementChild);
        if (!ul) {
          throw new Error("missing first level parent");
        }

        const inputid = this.dataset.inputid;

        if (!inputid) {
          throw new Error("Missing data-inputid");
        }

        const inputBox = /** @type {HTMLInputElement} */ (
          document.getElementById(inputid)
        );

        if (!inputBox) {
          throw new Error(`can't find${inputid}`);
        }

        const q = new URLSearchParams(window.location.search).get("q");

        if (q) inputBox.value = q;

        const countid = this.dataset.countid;

        const countElement = countid
          ? document.getElementById(countid)
          : undefined;

        const keyProperty = this.dataset.filterkey;

        const sessionStorageKey = this.dataset.filterstoragekey;

        const datasetstring = sessionStorage[sessionStorageKey];

        if (!datasetstring) {
          throw new Error(`can't find${sessionStorageKey} in sessionStorage`);
        }

        /** @type {*[]} */
        const dataset = JSON.parse(datasetstring);

        const checkme = () => {
          const value = inputBox.value
            .replace(/\W/g, " ")
            //.trim() not trimming on purpose
            .toLowerCase();

          const LIs = /** @type {HTMLElement[]} */ ([...ul.children]);

          let nCount = 0;

          [...LIs].forEach(li => {
            const key = li.dataset.key;

            const datarow = dataset.find(x => x[keyProperty] == key);

            const alldata = Object.values(datarow).join(" ");

            const bShow =
              !value ||
              (alldata || "").replace(/\W/g, " ").toLowerCase().includes(value);

            li.style.display = bShow ? "" : "none";
            li.ariaHidden = (!bShow).toString();
            if (bShow) nCount++;
          });

          if (countElement) countElement.innerHTML = nCount.toLocaleString();
        };

        inputBox.addEventListener("input", checkme);
        checkme();
      }
    }
  );
});
