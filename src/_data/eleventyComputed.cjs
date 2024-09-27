//@ts-check

// The default front-matter used for every page
module.exports = {
  description: (/** @type {globaldata} */ _data) =>
    _data.description || "default description",
  title: (/** @type {globaldata} */ _data) => _data.title || "default title"

  // uncomment to have a var to see all the available data
  //, everything: (/** @type {globaldata} */ _data) => JSON.stringify(_data, null, 2)
};

/**
 * @typedef {object} page
 * @property {string} date
 * @property {string} inputPath
 * @property {string} fileSlug
 * @property {string} filePathStem
 * @property {string} outputFileExtension
 * @property {string} templateSyntax
 * @property {string} url
 * @property {string} outputPath
 */

/**
 * @typedef {object} globaldata
 * @property {string} description
 * @property {string} title
 * @property {string} key
 * @property {string} parent
 * @property {string} layout
 * @property {{}} eleventy
 * @property {{}} pkg
 * @property {page} page
 * @property {{}} collections
 */
