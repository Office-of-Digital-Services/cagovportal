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

  const callback = () => {
    const count = result_list.querySelectorAll(
      'agency-row:not([style*="display: none"])'
    ).length;
    result_count.innerText = count.toString();
  };

  search.addEventListener("input", () => setTimeout(callback));

  customElements.define(
    "agency-row",
    class extends HTMLElement {
      connectedCallback() {
        /** @type {string} */
        const words = /** @type {string} */ (this.attributes["keywords"].value)
          .trim()
          .toLowerCase();

        const checkme = (/** @type {Event} */ event) => {
          const value = /** @type {HTMLInputElement} */ (event.target).value
            //.trim() not trimming on purpose
            .toLowerCase();

          const bShow = !value || words.includes(value);

          this.style.display = bShow ? "" : "none";
          this.ariaHidden = (!bShow).toString();
        };

        search.addEventListener("input", checkme);
      }
    }
  );

  setTimeout(callback);
});
