//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        const inputid = this.dataset.inputid;

        if (!inputid) {
          throw new Error("Missing data-inputid");
        }

        const inputBox = /** @type {HTMLInputElement} */ (
          document.getElementById(inputid)
        );

        if (!inputBox) {
          throw new Error(`can't find searchbox with id ${inputid}`);
        }

        const q = new URLSearchParams(window.location.search).get("q");

        if (q) inputBox.value = q;

        const countquery = this.dataset.countquery;

        const countElements = document.querySelectorAll(countquery);

        const keyProperty = this.dataset.filterkey;

        const sessionStorageKey = this.dataset.filterstoragekey;

        const datasetstring = sessionStorage[sessionStorageKey];

        if (!datasetstring) {
          throw new Error(`can't find ${sessionStorageKey} in sessionStorage`);
        }

        /** @type {*[]} */
        const dataset = JSON.parse(datasetstring);

        const elementRows = /** @type {NodeListOf<HTMLElement>} */ (
          this.querySelectorAll("[data-key]")
        );

        if (!elementRows.length) {
          throw new Error(`can't find any elements with "data-key"`);
        }

        const checkme = () => {
          const value = inputBox.value
            .replace(/\W/g, " ")
            //.trim() not trimming on purpose
            .toLowerCase();

          let nCount = 0;

          elementRows.forEach(rowElement => {
            const key = rowElement.dataset.key;

            if (!key) {
              throw new Error(`no data-key specified`);
            }

            const datarow = dataset.find(x => x[keyProperty] == key);

            if (!datarow) {
              throw new Error(`key not found in list - ${keyProperty}:${key}`);
            }

            const alldata = Object.values(datarow).join(" ");

            const bShow =
              !value ||
              (alldata || "").replace(/\W/g, " ").toLowerCase().includes(value);

            rowElement.style.display = bShow ? null : "none";
            rowElement.ariaHidden = bShow ? null : "true";
            if (bShow) nCount++;
          });

          countElements.forEach(x => {
            x.innerHTML = nCount.toLocaleString();
          });
        };

        inputBox.addEventListener("input", checkme);
        checkme();
      }
    }
  );
});
