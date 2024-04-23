//@ts-check

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const cleanup = (/** @type {string} */ s) =>
    s.replace(
      /Assistance and social\W\Wprograms/g,
      "Assistance and social programs"
    );

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

  results.agencies.forEach(x => {
    x["AgencyFullName"] = `${x["FriendlyName"]} (${x["Acronym"]})`;

    //Fix annoying typos
    x["AgencyTags"] = cleanup(x["AgencyTags"]);

    const socialLinks = [];
    if (x.Facebook) {
      socialLinks.push(`https://www.facebook.com/${x.Facebook}`);
    }
    if (x.TwitterAccount) {
      socialLinks.push(`https://www.twitter.com/${x.TwitterAccount}`);
    }
    if (x.YouTube) {
      socialLinks.push(`https://www.youtube.com/${x.YouTube}`);
    }

    x["structuredData"] = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      name: x.AgencyFullName,
      description: x.Description,
      url: x.WebsiteURL,
      logo: `https://stateentityprofile.ca.gov/Uploads/${x.LogoUrl}`,

      areaServed: {
        "@type": "State",
        name: "California"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: x.ContactPhone,
        url: x.ContactURL,
        email: x.ContactEmail
      },
      sameAs: socialLinks
    };
  });

  results.services.forEach(item => {
    //Fix annoying typos
    item["AgencyTags"] = cleanup(item["AgencyTags"]);

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

    if (QaResult) {
      item.QA = QaResult;
      item["structuredData_FAQPage"] = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
