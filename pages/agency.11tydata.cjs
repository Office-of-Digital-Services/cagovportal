//Returns a smaller json just for the agency search

const state_entity_agencies = require("../src/_data/state_entity_agencies.cjs");

module.exports = async () => {
  const agencies = (await state_entity_agencies()).Results;

  /**
   * @param {{}} rowData
   * @param {string[]} fields
   */
  const copyRow = (rowData, ...fields) => {
    const newRow = {};
    fields.forEach(s => {
      if (rowData[s]) newRow[s] = rowData[s];
    });

    return newRow;
  };

  const searchData = agencies.map(a =>
    copyRow(
      a,
      "AgencyName",
      "FriendlyName",
      "Acronym",
      "AgencyTags",
      "Keywords"
    )
  );

  return { searchData };
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
