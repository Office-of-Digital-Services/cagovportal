//@ts-check

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://api.stateentityprofile.ca.gov/api/Agencies/Query";

  /* This returns a promise */
  return EleventyFetch(url, {
    fetchOptions: {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        lang: "en",
        name: "",
        agencyTypeIds: [null],
        agencyTagIds: [null],
        page: "0",
        pageSize: 10,
        sortDirection: "Ascending"
      })
    },
    verbose: true,
    duration: "1d", // save for 1 day
    type: "json" // we’ll parse JSON for you
  });
};

/*
{
  "AgencyId": 16,
  "AgencyName": "Accountancy, California Board of",
  "FriendlyName": "California Board of Accountancy",
  "AgencyType": null,
  "ServiceCategory": null,
  "Description": "To protect consumers by ensuring only qualified licensees practice public accountancy in accordance with established professional standards. All consumers are well-informed and receive quality accounting services from licensees they can trust.",
  "Acronym": "CBA",
  "LogoUrl": "logo-16-CBA.png",
  "WebsiteURL": "https://www.dca.ca.gov/cba/index.shtml",
  "ContactPhone": "916-263-3680",
  "HearingImpairedPhone": null,
  "FaxNumber": null,
  "PhoneHours": null,
  "ContactURL": "https://www.dca.ca.gov/cba/about/contact.shtml",
  "ContactEmail": null,
  "LivechatLink": null,
  "TwitterAccount": null,
  "Facebook": null,
  "MobileApps": "&nbsp;",
  "YouTube": null,
  "NewsFeed": null,
  "GssSearchEngineID": null,
  "GaUA_ID": null,
  "ServiceNameTag": null,
  "AgencyTags": "Working|Doing Business|Government|Business",
  "Keywords": null
  }

*/
