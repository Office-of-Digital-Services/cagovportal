//@ts-check
import EleventyFetch from "@11ty/eleventy-fetch";
import xml2js from "xml2js";

export default async function () {
  const response = await EleventyFetch(
    "https://www.gov.ca.gov/category/content-types/public-safety/feed/",
    {
      duration: "4h",
      type: "text"
    }
  );

  return {
    getImmigrantsStories: await xml2js.parseStringPromise(response)
  };
}
