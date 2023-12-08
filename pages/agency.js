//@ts-check

window.addEventListener("DOMContentLoaded", () => {
  const search = /** @type {HTMLInputElement} */ (
    document.querySelector("#agency_search")
  );
  const result_count = /** @type {HTMLElement} */ (
    document.querySelector("#result_count")
  );

  const result_list = /** @type {HTMLUListElement} */ (
    document.querySelector("#result_list")
  );

  // Callback function to execute when mutations are observed
  /** @type {MutationCallback} */
  const callback = () => {
    const count = result_list.querySelectorAll(
      'agency-row:not([style*="display: none"])'
    ).length;
    console.log(count);
    result_count.innerText = count.toString();
  };

  // Create an observer instance linked to the callback function
  // Start observing the target node for configured mutations
  new MutationObserver(callback).observe(result_list, {
    subtree: true,
    attributeFilter: ["aria-hidden"]
  });

  customElements.define(
    "agency-row",
    class extends HTMLElement {
      constructor() {
        super();

        /** @type {string} */
        this.words = /** @type {string} */ (this.attributes["keywords"].value)
          .trim()
          .toLowerCase();

        this.checkme = (/** @type {Event} */ event) => {
          const value = /** @type {HTMLInputElement} */ (event.target).value
            //.trim() not trimming on purpose
            .toLowerCase();

          const bShow = !value || this.words.includes(value);

          this.style.display = bShow ? "" : "none";
          this.ariaHidden = (!bShow).toString();
        };
      }

      connectedCallback() {
        search.addEventListener("input", this.checkme);
      }
    }
  );
});
