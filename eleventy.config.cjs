//@ts-check
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const { minify } = require("terser");
const MarkdownIt = require("markdown-it");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");

// canonical domain
const domain = "https://www.ca.gov";
const metatitlepostfix = " | CA.gov";

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ eleventyConfig
) {
  // Copy `src/css/` to `_site/css`, `src/images/` to `_site/images`
  // Copy all static files that should appear in the website root
  // Copy state tempate code files from NPM
  eleventyConfig.addPassthroughCopy({
    "src/images": "images",
    "src/root": "/"
  });

  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addWatchTarget("./src/css/");

  // canonical shortcode
  // Usage <link href="{% canonical %}" rel="canonical" />
  eleventyConfig.addShortcode("canonical", function () {
    return domain + this.ctx.page.url;
  });

  // Usage <title>{% metatitle %}</title>
  eleventyConfig.addShortcode("metatitle", function () {
    return this.ctx.title + metatitlepostfix;
  });
  eleventyConfig.addShortcode("domain", () => domain);

  // {%- for tag in topics | pluck("featured", true) | sortBy("featureOrder") -%}
  eleventyConfig.addFilter(
    "pluck",
    /**
     * @param {*[]} arr
     * @param {string} attr
     * @param {*} value
     * @param {"includes" | "not"} [operator]
     * @example
     * {%- for tag in topics | pluck("featured", true) | sortBy("featureOrder") -%}
     * {%- for tag in pluck("ServiceId",item.ServiceId,"not") -%}
     * {% set node = breadcrumbs | pluck("key",breadcrumbparent) | first %}
     */
    (arr, attr, value, operator) =>
      arr.filter(item => {
        /** @type {string} */
        let itemval = item[attr];

        switch (operator?.toLowerCase()) {
          case "includes":
            return itemval.includes(value);
          case "not":
            return itemval !== value;
          case "startswith":
            return itemval.startsWith(value);
          default:
            return itemval === value;
        }
      })
  );

  // {%- for tag in topics | pluck("featured", true) | sortBy("featureOrder") -%}
  eleventyConfig.addFilter(
    "sortBy",
    /**
     * @param {[]} arr
     * @param {string} prop
     */ (arr, prop) => [...arr].sort((a, b) => (a[prop] > b[prop] ? 1 : -1))
  );

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    /**
     *
     * @param {string} code
     * @param {(arg0: null, arg1: string) => void} callback
     */
    async (code, callback) => {
      const minified = await minify(code);
      callback(null, minified.code || "");
    }
  );

  /**
   * @param {string} content
   */
  const minifyCSS = content =>
    content
      .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "")
      .replace(/ {2,}/g, " ")
      .replace(/ ([{:}]) /g, "$1")
      .replace(/([{:}]) /g, "$1")
      .replace(/([;,]) /g, "$1")
      .replace(/ !/g, "!");

  eleventyConfig.addNunjucksAsyncFilter(
    "cssmin",
    /**
     *
     * @param {string} code
     * @param {(arg0: null, arg1: string) => void} callback
     */

    async (code, callback) => {
      callback(null, minifyCSS(code));
    }
  );

  // For making a non-nested fallback
  eleventyConfig.addFilter("flattenCSS", async code => {
    const result = await postcss([postcssNested]).process(code, {
      from: undefined
    });
    return result.css;
  });

  // a special filter for converting md text to HTML
  eleventyConfig.addFilter("md", (/** @type {string} */ contents) => {
    const md = MarkdownIt({
      html: false,
      linkify: true,
      typographer: true,
      breaks: true
    });

    return md.render(contents);
  });

  // Custom filter to format dates
  eleventyConfig.addFilter(
    "customDate",
    /**
     * @param {string | number | Date} dateString
     */
    dateString =>
      new Date(dateString).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
  );

  //Start with default config, easier to configure 11ty later
  const config = defaultConfig(eleventyConfig);

  // allow nunjucks templating in .html files
  config.htmlTemplateEngine = "njk";
  config.markdownTemplateEngine = "njk";
  config.templateFormats = ["html", "njk", "11ty.js", "md"];

  config.dir = {
    // site content pages
    input: "pages",
    data: "../src/_data",
    // site structure pages (path is realtive to input directory)
    includes: "../src/_includes",
    layouts: "../src/_includes/layouts",
    // site final outpuut directory
    output: "_site"
  };

  return config;
};
