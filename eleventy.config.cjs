//@ts-check
const defaultConfig = require("@11ty/eleventy/src/defaultConfig");
const { minify } = require("terser");
const { parse } = require("csv-parse/sync");
const MarkdownIt = require("markdown-it");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const { DateTime } = require("luxon");
const fs = require("node:fs");
const path = require("node:path");
let translationsModule = { translations: require("./src/_data/i18n.cjs") }; // Change to an object that holds the translations
const chalk = require("chalk");

// canonical domain
const domain = "https://www.ca.gov";
const metatitlepostfix = " | CA.gov";

// use console.log to reporet complete list of process.env variables
const is_development = process.env.MY_ENVIRONMENT ? process.env.MY_ENVIRONMENT === "development" : false;

module.exports = function (
  /** @type {import("@11ty/eleventy").UserConfig} **/ eleventyConfig
) {
  // Copy `src/css/` to `_site/css`, `src/images/` to `_site/images`
  // Copy all static files that should appear in the website root
  // Copy state tempate code files from NPM
  eleventyConfig.addPassthroughCopy({
    "src/images": "images",
    "src/docs": "docs",
    "src/root": "/"
  });

  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./src/_data/");
  eleventyConfig.addWatchTarget("./src/css/");

  // Add watch target specifically for i18n file and clear require cache when it changes
  eleventyConfig.addWatchTarget("./src/_data/i18n.cjs");
  eleventyConfig.on("beforeWatch", changedFiles => { // support changing i18n.cjs during development without quitting the server
    if (changedFiles.some(file => file.endsWith("i18n.cjs"))) {
      delete require.cache[require.resolve("./src/_data/i18n.cjs")];
      translationsModule.translations = require("./src/_data/i18n.cjs");
    }
  });

  eleventyConfig.addGlobalData("is_development", is_development);

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
     * @param {"includes" | "not" | "match" | "startswith"} [operator]
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
            return itemval
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase());
          case "match":
            // Expects value to be an array
            // set topicsToDisplay = topics | pluck("name",item.AgencyTags.split("|"),"match")
            return /** @type {string[]} */ (value)
              .map(x => x.toLowerCase())
              .includes(itemval.toLowerCase());
          case "not":
            return itemval !== value;
          case "startswith":
            return itemval
              .toString()
              .toLowerCase()
              .startsWith(value.toString().toLowerCase());
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
     */ (arr, prop) => [...arr].sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
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

  // Custom filter to format date as MM/DD/YYYY
  eleventyConfig.addFilter("formatDate", dateString => {
    return DateTime.fromISO(dateString).toFormat("MM/dd/yyyy");
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

  // Get a hex representation of the current date.
  // Used for cache busting on files that need to be updated on each deploy
  eleventyConfig.addShortcode("DateHex", () => {
    // Define the reference date, to keep the number small
    const referenceDate = new Date("2024-11-01");

    // Use the current date or a provided date
    const currentDate = new Date();

    // Calculate the difference in days
    const diffTime = Math.abs(currentDate.getTime() - referenceDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Convert the number of days to a hex string
    const hexDays = diffDays.toString(16).padStart(4, "0");

    return hexDays;
  });

  // Used to get the first day of the month, usefull for montly sitemaps
  // Usage
  // {% set globallastmode -%}{%- firstDayOfMonth -%}{%- endset %}
  eleventyConfig.addShortcode(
    "firstDayOfMonth",
    () => `${new Date().toISOString().substring(0, 8)}01`
  );

  // After build hook to create an XML sitemap for PDF files
  eleventyConfig.on("afterBuild", () => {
    const pdfDirs = [
      path.join(__dirname, "_site", "images"),
      path.join(__dirname, "_site", "docs")
    ];
    const outputFilePath = path.join(__dirname, "_site", "sitemaps/pdf.xml");

    let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemapContent +=
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pdfDirs.forEach(dir => {
      fs.readdir(dir, (err, files) => {
        if (err) throw err;

        const pdfFiles = files.filter(file => path.extname(file) === ".pdf");
        pdfFiles.forEach(file => {
          const urlPath = path.join(
            dir.replace(path.join(__dirname, "_site"), ""),
            file
          );
          sitemapContent += `  <url>\n    <loc>${domain}${encodeURI(urlPath)}</loc>\n    <changefreq>never</changefreq>\n  </url>\n`;
        });

        // Write the sitemap content to the file
        fs.writeFileSync(outputFilePath, `${sitemapContent}</urlset>`);
      });
    });
  });

  eleventyConfig.addDataExtension("csv", (/** @type {string} */ contents) =>
    parse(contents, {
      columns: header => header.map(col => col.replace(/\W+/g, "_")),
      skip_empty_lines: true,
      cast: value =>
        ["true", "false"].includes(value) ? value === "true" : value //Boolean value parsing
    })
  );

  eleventyConfig.addFilter('localizedPath', (pathString, locale) => {
    // not /lafires in path, just return pathString
    if (!pathString.includes('/lafires')) {
      return pathString;
    }

    // Remove /en prefix if present
    if (pathString.startsWith('/lafires/en')) {
      pathString = pathString.replace('/en/', '/');
    }

    // Construct localized path
    let currentPath = pathString.replace('/lafires/', `/lafires/${locale}/`);

    // Add trailing slash if needed
    if (!currentPath.endsWith('/') && !currentPath.includes('#')) {
      currentPath += '/';
    }

    // Clean up special paths
    currentPath = currentPath
    .replace('/en/', '/')
    // .replace('/homepage/', '/')
    ;

    return currentPath;
  });

  eleventyConfig.addFilter("langPathActive", (page, lang, locale) => {
    if (lang === locale) {
      return false;
    }
    return true;
  });

  eleventyConfig.addFilter("pagePath", (page, langPath) => {
    // console.log(chalk.green(`[pagePath] Testing *${page.filePathStem}* page: ${page.url} langPath: ${langPath}`));
    let currentPath = `${page.filePathStem}/index.html`; // Relative to base dir, localized path, with folder + /index.html.

    // remove /lafires/ from currentPath
    currentPath = currentPath.replace('/lafires/', '/');  
    // remove /initiatives/ from currentPath
    currentPath = currentPath.replace('/initiatives/', '/');  

    let languages = ["/en/","/es/","/fr/","/ko/","/tl/","/vi/","/zh-hans/","/zh-hant/","/hy/"]; // Localized folder paths, '/es/', '/vi', etc.
    
    languages.map(language => {
      currentPath = currentPath.replace(language, "/"); // Remove existing localized paths to get root.
    });

    // Remove /home/ path slug from filePathStem variable
    if (currentPath.startsWith('/')) {
      currentPath = currentPath.slice(1);
    }
    currentPath = `${langPath}${currentPath}`;
    // Return a path with no localization and index.html
    // currentPath = currentPath.replace('/homepage/', '/');
    currentPath = currentPath.replace('/en/', '/');
    currentPath = currentPath.replace('/index/index', '/index');
    // console.log(chalk.green(`  [pagePath]  output *${currentPath}*`));
    return currentPath;
  });

  eleventyConfig.addFilter('i18n', function(key, localeOverride) {
    const locale = localeOverride || this.ctx.locale || this.ctx.lang;
    const contentGroup = translationsModule.translations[key];

    if (is_development && key === 'i18y_test_phrase') {
      // console.log(chalk.green(`[i18n] Testing *${key}* in locale *${locale}*  page.locale *${page.locale}*`));
      // console.log(chalk.green(`[i18n] Testing *${key}* permalink *${page.permalink}*`));
      // console.log(chalk.green(`[i18n] Testing *${key}* ctx *${this.ctx.permalink}*`));
    }

    // Check if the requested content key exists.
    if (!contentGroup) {
      console.log(chalk.yellow(`[i18n] Could not find content group for *${key}* in translations table.`));
      return "";
    }

    // Get content in desired language.
    const idealContentString = contentGroup[locale];

    // English fallback if needed.
    if (!idealContentString) {
      //console.log(chalk.yellow(`[i18n] Could not find locale= *${locale}* content for *${key}* in translations table. Falling back to English.`));
      return contentGroup.en;
    }

    return idealContentString;
  });

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
