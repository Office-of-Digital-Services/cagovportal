//@ts-check

/*
Custom HTML Element Attributes for Filtering Results

When working with our custom HTML element for filtering search results, it's essential to understand the purpose and usage of each attribute. These attributes enhance accessibility, SEO, and user experience. Let's dive into the details:

1. **`data-search-input-id`**
   - Description: Represents the ID of the single textbox where users can enter search text.
   - Purpose: Allows users to input search queries.
   - Example Usage: `<cagovhome-filterlist data-search-input-id="searchbox">...</cagovhome-filterlist>`

2. **`data-result-count-query`**
   - Description: Specifies the CSS selector for elements that will display the current search result count.
   - Purpose: Dynamically updates the result count based on user input.
   - Example Usage: `<cagovhome-filterlist data-result-count-query="#searchcount">...</cagovhome-filterlist>`

3. **`data-filter-storage-key`**
   - Description: Holds the "sessionStorage" key where JSON data for filtering is stored.
   - Purpose: Retains filter settings across sessions.
   - Example Usage: `<cagovhome-filterlist data-filter-storage-key="service">...</cagovhome-filterlist>`

4. **`data-row-filter-key`**
   - Description: Specifies the single column key value in the data that identifies rows to be filtered.
   - Purpose: Determines which rows match the filter criteria.
   - Example Usage: `<p data-row-filter-key="ServiceId">...</p>`

5. **`data-filter-trigger-selector`**
   - Description: Represents the CSS selector for checkboxes, radio buttons, and other controls triggering further filtering.
   - Purpose: Captures user interactions that affect filtering.
   - Example Usage: `<cagovhome-filterlist data-filter-trigger-selector='input[name="topic"]'>...</cagovhome-filterlist>`

6. **`data-row-key`**
   - Description: Used within each "row" to match the value of `data-row-filter-key`.
   - Purpose: Determines whether a row should be displayed based on the filter criteria.
   - Example Usage: `<p data-row-key="1">...</p>`
 */

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "cagovhome-filterlist",
    class extends HTMLElement {
      connectedCallback() {
        const inputid = this.dataset.searchInputId;

        const inputBox = inputid
          ? /** @type {HTMLInputElement} */ (document.getElementById(inputid))
          : undefined;

        if (inputid && !inputBox) {
          throw new Error(`can't find searchbox with id ${inputid}`);
        }

        // default the search box to the "q" querystring
        if (inputBox) {
          const q = new URLSearchParams(window.location.search).get("q");
          if (q) inputBox.value = q;
        }

        const resultCountQuery = this.dataset.resultCountQuery;
        const countElements = /** @type {HTMLElement[]} */ (
          resultCountQuery
            ? [...document.querySelectorAll(resultCountQuery)]
            : []
        );

        const keyProperty = this.dataset.rowFilterKey;
        if (!keyProperty) throw new Error("missing data-row-filter-key");

        const windowVarName = this.dataset.filterStorageKey;
        if (!windowVarName) throw new Error("missing data-filter-storage-key");

        /** @type {*[]} */
        const storageData = window[windowVarName];

        if (!storageData) {
          throw new Error(`can't find ${windowVarName} in window object`);
        }

        const elementRows = /** @type {HTMLElement[]} */ ([
          ...this.querySelectorAll("[data-row-key]")
        ]);

        if (!elementRows.length) {
          throw new Error(`can't find any elements with "data-row-key"`);
        }

        const filterTriggerSelector = this.dataset.filterTriggerSelector;
        const triggerElements = /** @type {HTMLInputElement[]} */ (
          filterTriggerSelector
            ? [...document.querySelectorAll(filterTriggerSelector)]
            : []
        );

        if (filterTriggerSelector && !triggerElements.length) {
          throw new Error(
            `No elements found with data-filter-trigger-selector (${filterTriggerSelector})`
          );
        }

        triggerElements.forEach(x => {
          if (x.tagName !== "INPUT")
            throw new Error(
              "Only INPUT elements are allowed in data-filter-trigger-selector"
            );

          if (!storageData.some(d => d[x.name]))
            throw new Error(
              `Trigger Element ${x.id} has a NAME (${x.name}) that is not in the data`
            );
        });

        const keyValues = [...new Set(elementRows.map(x => x.dataset.rowKey))];

        const checkme = () => {
          const value = inputBox?.value
            .replace(/\W/g, " ")
            //.trim() not trimming on purpose
            .toLowerCase();

          const checkedTriggers = triggerElements.filter(x => x.checked);

          //filter the data for the keys that match the search value
          const keyMatches =
            !checkedTriggers.length && !value // Show everything if nothing is filter by
              ? keyValues
              : keyValues.filter(key => {
                  // grab a row from the dataset that matches the key
                  const datarow = storageData.find(x => x[keyProperty] == key);

                  if (datarow) {
                    // join all the dataset values for this row together for general search
                    const alldata = Object.values(datarow).join(" ");

                    const textBoxMatches = //true if nothing typed or it matches data
                      !value ||
                      (alldata || "")
                        .replace(/\W/g, " ")
                        .toLowerCase()
                        .includes(value);

                    const filterTriggersMatch = //true if nothing checked or ANY checks match data
                      !checkedTriggers.length ||
                      checkedTriggers.some(x =>
                        datarow[x.name].includes(x.value)
                      );

                    return textBoxMatches && filterTriggersMatch; //Textbox and checks need to match up
                  } else {
                    console.error(
                      `data-row-key not found in data storage - ${keyProperty}:${key}`
                    );
                    return false;
                  }
                });

          // Apply test to count displays
          countElements.forEach(x => {
            x.innerHTML = x.innerHTML.replace(
              /(?:\d+[\d,.]*\d)|\d/, //Number may have commas or decimals (inside only), or just a single digit
              keyMatches.length.toLocaleString()
            ); //replace the first number found with the count
          });

          // Show/hide rows that match the key matches
          elementRows.forEach(rowElement => {
            const bShow = keyMatches.includes(rowElement.dataset.rowKey);

            rowElement.style.display = bShow ? "" : "none";
            rowElement.ariaHidden = bShow ? null : "true";
            rowElement.hidden = !bShow;
          });
        };
        if (inputBox) inputBox.addEventListener("input", checkme);

        //connect the triggers
        triggerElements.forEach(x => x.addEventListener("change", checkme));

        //add reset button support if forms are present
        const triggerForms = new Set(triggerElements.map(x => x.form));

        triggerForms.forEach(x => {
          x?.addEventListener("reset", () => setTimeout(checkme));
        });

        checkme();
      }
    }
  );

  const location = window.location;
  if (location.hash) {
    // Trigger a hashchange to ensure hash scrolling works
    setTimeout(() => {
      const currentHash = location.hash;
      location.hash += "_"; // Remove the hash temporarily
      location.hash = currentHash; // Reapply the hash
    }, 500);
  }
});

/* -----------------------------------------
   MULTYSELECT -- multyselect
----------------------------------------- */

//@ts-check
(() => {
  const multiSelect = document.querySelector(".dropdown-menu");
  if (multiSelect) {
    multiSelect.addEventListener("click", event => {
      event.stopPropagation();
    });
  }
})();
