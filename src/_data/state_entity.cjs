//@ts-check
const { loadSepData } = require("../airTable/load_data.cjs");
const sepImagePath = "/images/sep/";

const mainSiteBaseUrl = "https://www.ca.gov";

module.exports = async function () {
  const cleanup = (/** @type {string} */ s) =>
    s.replace(
      /Assistance and social\W\Wprograms/g,
      "Assistance and social programs"
    );

  const socialLinkCleanup = (/** @type {string} */ url) =>
    `${url.split("?")[0].replace(/^\//, "").replace(/\/$/, "").split("/").pop()}`;

  const myDateFormat = (/** @type {string | number | Date} */ dateString) =>
    new Date(dateString).toLocaleDateString("en-CA", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });

  /**
   * Recursively trims strings in the object
   * @param {{[x: string]: string | object}} obj
   */
  const trimObjectProperties = obj => {
    if (obj && typeof obj === "object")
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object")
          // @ts-ignore
          trimObjectProperties(obj[key]);
        else if (typeof obj[key] === "string") obj[key] = obj[key].trim();
      });
  };

  const snapshots = loadSepData();

  const results = {
    agencies: /** @type {*[]} */ (snapshots.agencies),
    services: /** @type {*[]} */ (snapshots.services),
    qa: /** @type {*[]} */ (snapshots.qa),
    state_entity_client_filter: /** @type {{agency: *[], service: *[]}} */ ({
      agency: [],
      service: []
    })
  };

  // Add a SortOrder value for each agency as it currently stands
  results.agencies.forEach((item, index) => {
    item.SortOrder = index + 1;
  });

  // Add an AgencySortOrder value for each service using the SortOrder from the Agency table
  results.services.forEach(service => {
    const agency = results.agencies.find(a => a.AgencyId === service.AgencyId);

    service.AgencySortOrder = agency.SortOrder;
  });

  //Apply AgencySortOrder and ServiceSortOrder to the qa table
  results.qa.forEach(qaItem => {
    const service = results.services.find(
      s => s.ServiceId === qaItem.AgencyServiceId
    );

    qaItem.AgencySortOrder = service.AgencySortOrder;
    qaItem.ServiceSortOrder = service.SortOrder;
  });

  results.services.sort(
    (a, b) => a.AgencySortOrder - b.AgencySortOrder || a.SortOrder - b.SortOrder
  );

  results.qa.sort(
    (a, b) =>
      a.AgencySortOrder - b.AgencySortOrder ||
      a.ServiceSortOrder - b.ServiceSortOrder ||
      a.SortOrder - b.SortOrder
  );

  results.agencies.forEach(item => {
    trimObjectProperties(item);

    item["AgencyFullName"] = `${item["FriendlyName"]} (${item["Acronym"]})`;

    item["Updated"] = myDateFormat(item["Updated"]);

    //Fix annoying typos
    item["AgencyTags"] = cleanup(item["AgencyTags"]);

    const socialLinks = [];
    if (item.Facebook) {
      if (!item.Facebook.startsWith("http"))
        item.Facebook = `https://www.facebook.com/${socialLinkCleanup(item.Facebook)}`;

      socialLinks.push(item.Facebook);
    }
    if (item.TwitterAccount) {
      if (!item.TwitterAccount.startsWith("http"))
        item.TwitterAccount = `https://x.com/${socialLinkCleanup(item.TwitterAccount)}`;

      socialLinks.push(item.TwitterAccount);
    }
    if (item.YouTube) {
      if (!item.YouTube.startsWith("http"))
        if (item.YouTube.startsWith("playlist"))
          item.YouTube = `https://www.youtube.com/${item.YouTube}`;
        else if (item.YouTube.includes("channel"))
          item.YouTube = `https://www.youtube.com/${item.YouTube.replace(/\.\.\//, "")}`;
        else
          item.YouTube = `https://www.youtube.com/${socialLinkCleanup(item.YouTube)}`;

      socialLinks.push(item.YouTube);
    }

    if (item.LogoUrl) {
      item["LogoExt"] = item.LogoUrl.match(/\.(\w+)$/i)[1];
      const webpImageName = encodeURI(
        item.LogoUrl.replace(/\.(png|jpg|jpeg|gif)$/i, ".webp")
      );

      item["LogoPath"] = `${sepImagePath}${webpImageName}`;
    }

    item["structuredData"] = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      name: item.AgencyFullName,
      description: item.Description,
      url: item.WebsiteURL,
      logo: item.LogoUrl
        ? {
            "@type": "ImageObject",
            contentUrl: `${mainSiteBaseUrl}${item["LogoPath"]}`,
            caption: `Official logo of ${item.AgencyFullName}`,
            representativeOfPage: true
          }
        : undefined,

      areaServed: {
        "@type": "AdministrativeArea",
        name: "California"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: item.ContactPhone,
        url: item.ContactURL,
        email: item.ContactEmail
      },
      sameAs: socialLinks
    };
  });

  results.services.forEach(item => {
    trimObjectProperties(item);

    //Fix annoying typos
    item["AgencyTags"] = cleanup(item["AgencyTags"]);

    item["Updated"] = myDateFormat(item["Updated"]);

    // Create a deep copy of the provider structuredData to avoid reference issues
    const provider = JSON.parse(
      JSON.stringify(
        results.agencies.find(x => x.AgencyId === item.AgencyId).structuredData
      )
    );
    delete provider["@context"];

    if (item.ImageUrl) {
      item["ImageExt"] = item.ImageUrl.match(/\.(\w+)$/i)[1];
      const webpImageName = encodeURI(
        item.ImageUrl.replace(/\.(png|jpg|jpeg|gif)$/i, ".webp")
      );

      item["ImagePath"] = `${sepImagePath}${webpImageName}`;
    }

    item["structuredData"] = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      name: item.ServiceName,
      description: item.Description,
      serviceType: item.ServiceType,
      url: item.ServiceUrl,
      image: item.ImageUrl
        ? {
            "@type": "ImageObject",
            contentUrl: `${mainSiteBaseUrl}${item["ImagePath"]}`,
            caption: `${item.ServiceName} service supporting image`,
            representativeOfPage: true
          }
        : undefined,
      jurisdiction: {
        "@type": "AdministrativeArea",
        name: "California"
      },
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: item.ContactPhone,
          contactType: "Service Contact"
        }
      },
      provider
    };

    const QaResult = results.qa.filter(
      x => x.AgencyServiceId === item.ServiceId
    );

    item.QA = QaResult;
    if (QaResult.length)
      item["structuredData_FAQPage"] = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: `FAQPage for "${item.ServiceName}"`,
        mainEntity: QaResult.map(x => ({
          "@type": "Question",
          name: x.Question,
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: x.Answer,
            dateCreated: x.DateTimeStamp,
            dateModified: x.Updated
          }
        })),
        provider
      };
  });

  //Filtered data for client side use
  results.state_entity_client_filter = {
    agency: results.agencies.map(x => ({
      AgencyId: x.AgencyId,
      AgencyFullName: x.AgencyFullName,
      AgencyTags: x.AgencyTags,
      Description: x.Description,
      Keywords: x.Keywords
    })),
    service: results.services.map(x => ({
      AgencyId: x.AgencyId,
      ServiceId: x.ServiceId,
      Description: x.Description,
      Keywords: x.Keywords,
      ServiceName: x.ServiceName,
      ServiceType: x.ServiceType,
      AgencyTags: x.AgencyTags,
      AgencyName: x.AgencyName,
      RelatedSearchTerms: x.RelatedSearchTerms
    }))
  };

  return results;
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
