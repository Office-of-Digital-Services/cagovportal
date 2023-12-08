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
          const target = /** @type {HTMLInputElement} */ (event.target);
          const value = target.value.trim().toLowerCase();

          if (!value || this.words.includes(value)) {
            this.style.display = "";
          } else {
            this.style.display = "none";
          }
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
