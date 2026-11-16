//@ts-check

const { loadServiceFinderData } = require("../airTable/load_data.cjs");

module.exports = async function () {
  const { default: helpers } =
    await import("../airTable/service_finder_helpers.mjs");
  return { ...loadServiceFinderData(), helpers };
};
