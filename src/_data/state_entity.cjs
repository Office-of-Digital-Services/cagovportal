//@ts-check

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const cleanup = (/** @type {string} */ s) =>
    s.replace(
      /Assistance and social\W\Wprograms/g,
      "Assistance and social programs"
    );

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
    if (obj && typeof obj === "object") {
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object") {
          trimObjectProperties(obj[key]);
        } else if (typeof obj[key] === "string") {
          obj[key] = obj[key].trim();
        }
      });
    }
  };

  const urls = [
    "https://api.stateentityprofile.ca.gov/api/Agencies/Get?page=0&pageSize=0&lang=en",
    "https://api.stateentityprofile.ca.gov/api/Services/Get?page=0&pageSize=0&lang=en",
    "https://api.stateentityprofile.ca.gov/GetFaqsByServiceIds?lang=en"
  ];

  const returns = await Promise.all(
    urls.map(u =>
      EleventyFetch(u, {
        fetchOptions: {
          method: "POST"
        },
        verbose: true,
        duration: "1d", // save for 1 day
        type: "json" // we’ll parse JSON for you
      })
    )
  );

  const results = {
    agencies: /** @type {*[]} */ (returns[0].Data),
    services: /** @type {*[]} */ (returns[1].Data),
    qa: /** @type {*[]} */ (returns[2])
  };

  results.qa.sort((a, b) => a.Id - b.Id);

  results.agencies.forEach(item => {
    trimObjectProperties(item);

    item["AgencyFullName"] = `${item["FriendlyName"]} (${item["Acronym"]})`;

    item["Updated"] = myDateFormat(item["Updated"]);

    //Fix annoying typos
    item["AgencyTags"] = cleanup(item["AgencyTags"]);

    const socialLinks = [];
    if (item.Facebook) {
      socialLinks.push(`https://www.facebook.com/${item.Facebook}`);
    }
    if (item.TwitterAccount) {
      socialLinks.push(`https://www.twitter.com/${item.TwitterAccount}`);
    }
    if (item.YouTube) {
      socialLinks.push(`https://www.youtube.com/${item.YouTube}`);
    }

    item["structuredData"] = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      name: item.AgencyFullName,
      description: item.Description,
      url: item.WebsiteURL,
      logo: item.LogoUrl
        ? `https://stateentityprofile.ca.gov/Uploads/${encodeURIComponent(item.LogoUrl)}`
        : undefined,

      areaServed: {
        "@type": "State",
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

    const provider = results.agencies.find(
      x => x.AgencyId === item.AgencyId
    )?.structuredData;

    item["structuredData"] = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      name: item.ServiceName,
      description: item.Description,
      serviceType: item.ServiceType,
      url: item.ServiceUrl,
      jurisdiction: {
        "@type": "AdministrativeArea",
        name: "State of California"
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
    if (QaResult.length) {
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
            dateCreated: x.DateTimeStamp
          }
        })),
        provider
      };
    }
  });

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
