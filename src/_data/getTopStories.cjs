//@ts-check
const parseString = require("xml2js").parseString;
const EleventyFetch = require("@11ty/eleventy-fetch");

/**
 *
 */
async function getTopStories() {
  const url = `https://www.gov.ca.gov/feed/`;

  try {
    const response = await EleventyFetch(url, {
      duration: "4h",
      type: "xml"
    });

    // parse XML
    let jsonObj;
    parseString(response.toString(), (err, result) => {
      if (err) {
        console.error("Error parsing XML:", err);
      } else {
        // Process the parsed result (stored in 'result')
        jsonObj = result;
      }
    });

    return jsonObj;
  } catch (e) {
    console.error("Error grabbing news feed", e);
    return null;
  }
}

module.exports = getTopStories;
