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
      }
    }
  );
});
