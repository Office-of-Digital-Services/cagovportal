//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        console.log(this.dataset);
        const inputid = this.dataset.searchInputId;
        if (!inputid) {
          throw new Error("Missing data-search-input-id");
        }

        const inputBox = /** @type {HTMLInputElement} */ (
          document.getElementById(inputid)
        );
        if (!inputBox) {
          throw new Error(`can't find searchbox with id ${inputid}`);
        }

        // default the search box to the "q" querystring
        const q = new URLSearchParams(window.location.search).get("q");
        if (q) inputBox.value = q;

        const countElements = document.querySelectorAll(
          this.dataset.resultCountQuery
        );

        const keyProperty = this.dataset.rowFilterKey;

        const sessionStorageKey = this.dataset.filterStorageKey;

        const datasetstring = sessionStorage[sessionStorageKey];

        if (!datasetstring) {
          throw new Error(`can't find ${sessionStorageKey} in sessionStorage`);
        }

        /** @type {*[]} */
        const dataset = JSON.parse(datasetstring);

        const elementRows = [
          .../** @type {NodeListOf<HTMLElement>} */ (
            this.querySelectorAll("[data-row-key]")
          )
        ];

        if (!elementRows.length) {
          throw new Error(`can't find any elements with "data-row-key"`);
        }

        const keyValues = [...new Set(elementRows.map(x => x.dataset.rowKey))];

        const checkme = () => {
          const value = inputBox.value
            .replace(/\W/g, " ")
            //.trim() not trimming on purpose
            .toLowerCase();

          //filter the data for the keys that match the search value
          const keyMatches = keyValues.filter(key => {
            // grab a row from the dataset that matches the key
            const datarow = dataset.find(x => x[keyProperty] == key);

            if (!datarow) {
              throw new Error(
                `key not found in data storage - ${keyProperty}:${key}`
              );
            }

            // join all the dataset values for this row together for general search
            const alldata = Object.values(datarow).join(" ");

            return (
              !value ||
              (alldata || "").replace(/\W/g, " ").toLowerCase().includes(value)
            );
          });

          // Apply test to count displays
          countElements.forEach(x => {
            x.innerHTML = keyMatches.length.toLocaleString();
          });

          // Show/hide rows that match the key matches
          elementRows.forEach(rowElement => {
            const bShow = keyMatches.includes(rowElement.dataset.rowKey);

            rowElement.style.display = bShow ? null : "none";
            rowElement.ariaHidden = bShow ? null : "true";
          });
        };

        inputBox.addEventListener("input", checkme);
        checkme();
      }
    }
  );
});
