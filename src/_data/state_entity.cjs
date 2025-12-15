//@ts-check
const fs = require("node:fs");
const EleventyFetch = require("@11ty/eleventy-fetch");
const sepImagePath = "/images/sep/";
const sharp = require("sharp");

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const localImagesBasePath = "./src/images/sep/";

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
          // @ts-ignore
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

  console.time("Fetching entity data");
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
  console.timeEnd("Fetching entity data");

  const results = {
    agencies: /** @type {*[]} */ (returns[0].Data),
    services: /** @type {*[]} */ (returns[1].Data),
    qa: /** @type {*[]} */ (returns[2])
  };

  // Now download and process images

  // Good quality WebP for web
  /** @type {sharp.WebpOptions} */
  const webpoptions = {
    quality: 50, // 0 (lowest) to 100 (highest)
    effort: 6, // 0 (fastest) to 6 (slowest)
    alphaQuality: 50, // 0 (lowest) to 100 (highest),
    lossless: false,
    nearLossless: false,
    smartSubsample: false,
    force: true
  };

  /** @type {sharp.ResizeOptions} */
  const serviceResizeOptions = {
    // center and crop to square
    width: 300,
    height: 300,
    withoutEnlargement: true // Don't add pixels to small images
  };

  /** @type {sharp.ResizeOptions} */
  const agencyResizeOptions = {
    // unlimited height, max width 270
    width: 270,
    withoutEnlargement: true // Don't add pixels to small images
  };

  let processedCount = 0;

  const fetchAndProcessImage = async (
    /** @type {string} */ file,
    /** @type {sharp.ResizeOptions} */ resizeOptions
  ) => {
    const outputPath = `${localImagesBasePath}/${file}`.replace(
      /\.(png|jpg|jpeg|gif)$/i,
      ".webp"
    );
    try {
      // skip if file already exists
      if (fs.existsSync(outputPath)) {
        return;
      }

      processedCount++;

      const res = await fetch(remoteImagesBaseUrl + file);
      if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
      console.log(`Processing image: ${file}`);
      const buffer = await res.arrayBuffer();
      return await sharp(Buffer.from(buffer))
        .webp(webpoptions)
        .resize(resizeOptions)
        .toFile(outputPath);
    } catch (err) {
      console.error(`Error processing image`, err);
    }
  };

  const processImages = async () => {
    /** @type {Promise<any>[]} */
    const threadingTasks = [];

    results.agencies.forEach(agency => {
      if (agency.LogoUrl) {
        threadingTasks.push(
          fetchAndProcessImage(agency.LogoUrl, agencyResizeOptions)
        );
      }
    });

    results.services.forEach(service => {
      if (service.ImageUrl) {
        threadingTasks.push(
          fetchAndProcessImage(service.ImageUrl, serviceResizeOptions)
        );
      }
    });

    await Promise.all(threadingTasks);
    if (processedCount !== 0) {
      console.log(`Processed ${processedCount} images.`);
    }
  };

  console.time("Image Processing");
  await processImages();
  console.timeEnd("Image Processing");

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

    if (item.LogoUrl) {
      item["LogoExt"] = item.LogoUrl.match(/\.(\w+)$/i)[1];
      const webpImageName = item.LogoUrl.replace(
        /\.(png|jpg|jpeg|gif)$/i,
        ".webp"
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
        ? `https://www.ca.gov/images/sep/${encodeURIComponent(item["LogoPath"])}`
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

    if (item.ImageUrl) {
      item["ImageExt"] = item.ImageUrl.match(/\.(\w+)$/i)[1];
      const webpImageName = item.ImageUrl.replace(
        /\.(png|jpg|jpeg|gif)$/i,
        ".webp"
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
