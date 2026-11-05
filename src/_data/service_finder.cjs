//@ts-check

const {
  loadServiceFinderData
} = require("../airTable/load_service_finder_data.cjs");

module.exports = async function () {
  const { default: helpers } =
    await import("../airTable/service_finder_helpers.mjs");
  return { ...loadServiceFinderData(), helpers };
};
