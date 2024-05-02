const parseString = require("xml2js").parseString;
const EleventyFetch = require("@11ty/eleventy-fetch");

/**
 *
 */
async function getTopStories() {
  const url = `https://www.gov.ca.gov/feed/`;
  const response = await EleventyFetch(url, {
    duration: "1d",
    type: "text"
  });
  const articles = response;

  const articlesString =
    typeof articles === "string" ? articles : articles.toString();

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
}

module.exports = getTopStories;
