//@ts-check

// The default front-matter used for every page

module.exports = {
  /** @param {globaldata} _data} */
  description: _data => _data.description || "default description",
  /** @param {globaldata} _data} */
  title: _data => _data.title || "default title",

  // uncomment to have a var to see all the available data
  everything: (/** @type {globaldata} */ _data) =>
    JSON.stringify(_data, null, 2)
};

/**
 * @typedef {Object} globaldata
 * @property {string} description
 * @property {string} title
 * @property {string} layout
 * @property {{}} eleventy
 * @property {{}} pkg
 * @property {{}} page
 * @property {{}} collections
 */
