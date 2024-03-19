//@ts-check
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify } = require("terser");
const fs = require("node:fs");

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

  eleventyConfig.addShortcode(
    "same_page_script",
    /**
     * @param {{ inputPath: string; }} page
     * @example
     * {% same_page_script page %}
     */
    async page => {
      const filepath = `${page.inputPath}.js`;
      //console.log(filepath);
      if (fs.existsSync(filepath)) {
        const minified = await minify(fs.readFileSync(filepath, "utf8"));

        return `<script>${minified.code}</script>\n`;
      }
    }
  );

  eleventyConfig.addFilter(
    "pluck",
    /**
     * @param {[]} arr
     * @param {string} attr
     * @param {*} value
     * @returns
     */
    (arr, attr, value) => arr.filter(item => item[attr] === value)
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