//@ts-check

//Custom JS for this website goes here

window.addEventListener("DOMContentLoaded", () => {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  console.log(ca_gov_client_filter_data);
  console.log("yo3");

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

        const count = countid ? document.getElementById(countid) : undefined;

        const checkme = () => {
          const value = inputBox.value
            .replace(/\W/g, " ")
            //.trim() not trimming on purpose
            .toLowerCase();

          const LIs = /** @type {HTMLElement[]} */ ([...ul.children]);

          let nCount = 0;

          [...LIs].forEach(li => {
            const bShow =
              !value ||
              (li.dataset.keywords || "")
                .replace(/\W/g, " ")
                .toLowerCase()
                .includes(value);

            li.style.display = bShow ? "" : "none";
            li.ariaHidden = (!bShow).toString();
            if (bShow) nCount++;
          });

          if (count) count.innerHTML = nCount.toLocaleString();
        };

        inputBox.addEventListener("input", checkme);
        checkme();
      }
    }
  );
});
