//@ts-check
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify } = require("terser");

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ eleventyConfig
) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy `src/css/` to `_site/css`, `src/images/` to `_site/images`
  // Copy all static files that should appear in the website root
  // Copy state tempate code files from NPM
  eleventyConfig.addPassthroughCopy({
    "src/images": "images",
    "src/css": "css",
    "src/root": "/",
    "node_modules/@cagovweb/state-template/dist": "state-template"
  });

  eleventyConfig.addWatchTarget("./src/js/");

  // {%- for tag in topics | pluck("featured", true) | sortBy("featureOrder") -%}
  eleventyConfig.addFilter(
    "pluck",
    /**
     * @param {[]} arr
     * @param {string} attr
     * @param {*} value
     */
    (arr, attr, value) => arr.filter(item => item[attr] === value)
  );

  eleventyConfig.addFilter(
    "pluckNOT",
    /**
     * @param {[]} arr
     * @param {string} attr
     * @param {*} value
     */
    (arr, attr, value) => arr.filter(item => item[attr] !== value)
  );

  eleventyConfig.addFilter(
    "pluckContains",
    /**
     * @param {[]} arr
     * @param {string} attr
     * @param {*} value
     */
    (arr, attr, value) =>
      arr.filter(item => /** @type {string} */ (item[attr]).includes(value))
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

  // so you can look at {% if ELEVENTY_ENV !== 'dev' %}
  eleventyConfig.addGlobalData("ELEVENTY_ENV", process.env.ELEVENTY_ENV);

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
