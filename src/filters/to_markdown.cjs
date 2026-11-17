//@ts-check
const TurndownService = require("turndown");

/**
 * @param {string} html
 * @param {string} baseUrl Canonical HTML URL used to resolve relative links.
 * @returns {string}
 */
module.exports = function toMarkdown(html, baseUrl) {
  const converter = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-"
  });
  converter.remove(["script", "style"]);

  converter.addRule("absoluteLinks", {
    filter: "a",
    replacement(content, node) {
      const href = node.getAttribute("href");
      if (!href) return content;
      const url = new URL(href, baseUrl).href;
      return `[${content}](<${url}>)`;
    }
  });
  converter.addRule("absoluteImages", {
    filter: "img",
    replacement(content, node) {
      const src = node.getAttribute("src");
      if (!src) return "";
      const url = new URL(src, baseUrl).href;
      const alt = converter.escape(node.getAttribute("alt") || "");
      return `![${alt}](<${url}>)`;
    }
  });

  return `${converter.turndown(html)}\n`;
};
