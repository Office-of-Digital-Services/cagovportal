const parseString = require("xml2js").parseString;
const EleventyFetch = require("@11ty/eleventy-fetch");

/**
 *
 */
async function getTopStories() {
  const url = `https://www.gov.ca.gov/feed/`;

  try {
    const response = await EleventyFetch(url, {
      duration: "1d",
      type: "xml"
    });

    const articlesString = response.toString();

    // parse XML
    let jsonObj;
    parseString(articlesString, (err, result) => {
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
