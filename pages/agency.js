//@ts-check

window.addEventListener("DOMContentLoaded", () => {
  customElements.define(
    "agency-row",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.createElement("template");
        template.innerHTML = "<slot></slot><br />";
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    }
  );
});
