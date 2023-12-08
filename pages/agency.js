//@ts-check

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "agency-row",
    class extends HTMLElement {
      constructor() {
        super();
        let template = this.querySelector("template");

        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        /** @type {string} */
        this.words = /** @type {string} */ (this.attributes["keywords"].value)
          .trim()
          .toLowerCase();

        this.checkme = (/** @type {Event} */ event) => {
          const value = /** @type {HTMLInputElement} */ (event.target).value
            .trim()
            .toLowerCase();

          this.style.display =
            !value || this.words.includes(value) ? "" : "none";
        };
      }

      connectedCallback() {
        const search = /** @type {HTMLInputElement} */ (
          document.querySelector("#agency_search")
        );

        search.addEventListener("input", this.checkme);
      }
    }
  );
});
