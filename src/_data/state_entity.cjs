//@ts-check
const fs = require("node:fs");
const EleventyFetch = require("@11ty/eleventy-fetch");
const sepImagePath = "/images/sep/";
const sharp = require("sharp");

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const mainSiteBaseUrl = "https://www.ca.gov";
const localImagesBasePath = "./src/images/sep/";
const localImagesBasePathPassThru = "./_site/images/sep/";

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
    qa: /** @type {*[]} */ (returns[2]),
    state_entity_client_filter: /** @type {{agency: *[], service: *[]}} */ ({
      agency: [],
      service: []
    })
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

  const processImages = async () => {
    // get a count of images in localImagesBasePath
    const existingImages = fs.readdirSync(localImagesBasePath);

    const fetchAndProcessImage = async (
      /** @type {string} */ file,
      /** @type {sharp.ResizeOptions} */ resizeOptions
    ) => {
      const outputPath = `${localImagesBasePath}${file}`.replace(
        /\.(png|jpg|jpeg|gif)$/i,
        ".webp"
      );
      try {
        // skip if file already exists
        if (existingImages.includes(outputPath)) {
          return;
        }

        processedCount++;

        const res = await fetch(remoteImagesBaseUrl + file);
        if (!res.ok)
          throw new Error(`Failed to fetch image: ${res.statusText}`);
        console.warn(`Adding image: ${file}`);
        const buffer = await res.arrayBuffer();
        await sharp(Buffer.from(buffer))
          .webp(webpoptions)
          .resize(resizeOptions)
          .toFile(outputPath);

        // Copy to output _site too, since Eleventy already did the passthrough copy
        const secondOutputPath = outputPath.replace(
          localImagesBasePath,
          localImagesBasePathPassThru
        );
        fs.copyFileSync(outputPath, secondOutputPath);
      } catch (err) {
        console.error(`Error processing image`, err);
      }
    };

    // Ensure output folder exists
    fs.mkdirSync(localImagesBasePath, {
      recursive: true
    });

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
      console.warn(`Added ${processedCount} missing images.`);
    }

    // get a count of agency.LogoUrl and service.ImageUrl
    const totalImages =
      results.agencies.filter(a => a.LogoUrl).length +
      results.services.filter(s => s.ImageUrl).length;

    if (existingImages.length !== totalImages) {
      console.warn(
        `There are ${existingImages.length - totalImages} extra image(s). Delete the src/images/sep/ folder to reprocess all images if needed.`
      );
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
      if (!item.Facebook.startsWith("http")) {
        item.Facebook = `https://www.facebook.com/${socialLinkCleanup(item.Facebook)}`;
      }

      socialLinks.push(item.Facebook);
    }
    if (item.TwitterAccount) {
      if (!item.TwitterAccount.startsWith("http")) {
        item.TwitterAccount = `https://x.com/${socialLinkCleanup(item.TwitterAccount)}`;
      }

      socialLinks.push(item.TwitterAccount);
    }
    if (item.YouTube) {
      if (!item.YouTube.startsWith("http")) {
        if (item.YouTube.startsWith("playlist")) {
          item.YouTube = `https://www.youtube.com/${item.YouTube}`;
        } else if (item.YouTube.includes("channel")) {
          item.YouTube = `https://www.youtube.com/${item.YouTube.replace(/\.\.\//, "")}`;
        } else {
          item.YouTube = `https://www.youtube.com/${socialLinkCleanup(item.YouTube)}`;
        }
      }

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
