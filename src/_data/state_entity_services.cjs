//@ts-check

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url =
    "https://api.stateentityprofile.ca.gov/api/Services/Get?page=0&pageSize=0&lang=en";

  /* This returns a promise */
  return (
    await EleventyFetch(url, {
      fetchOptions: {
        method: "POST"
      },
      verbose: true,
      duration: "1d", // save for 1 day
      type: "json" // we’ll parse JSON for you
    })
  ).Data;
};

/*

{
  "ServiceId": 1152,
  "ServiceName": "Administrative Hearings",
  "ServiceType": "By Mail|In Person|Online Service",
  "AgencyTags": "Family|Government",
  "Description": "Hears administrative disputes through the General Jurisdiction Division, Special Education Division, and Public Works Contract Arbitration Program.",
  "RelatedSearchTerms": "Administrative Hearings",
  "LogoUrl": "logo-216-DGS.png",
  "ImageUrl": "service-1152-Administrative-Hearings.jpg",
  "ServiceUrl": "https://www.dgs.ca.gov/OAH/Services",
  "Featured": null,
  "ContactPhone": "916-263-0550",
  "ContactUrl": "https://www.dgs.ca.gov/OAH/Contact",
  "AgencyName": "General Services, Department of",
  "FriendlyName": "Department of General Services",
  "AgencyId": 216,
  "Acronym": "DGS",
  "Keywords": "administrative, hearings, disputes, special education, school, public works, contract, arbitration",
  "Landing": null,
  "ServiceNameTag": "Administrative Hearings"
},

*/
