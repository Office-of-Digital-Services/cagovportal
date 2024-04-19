//@ts-check

const state_entity = require("./state_entity.cjs");

module.exports = (async () => {
  const data = await state_entity();

  return {
    agency: data.agencies.map(x => ({
      AgencyId: x.AgencyId,
      AgencyFullName: x.AgencyFullName,
      AgencyTags: x.AgencyTags,
      Description: x.Description,
      Keywords: x.Keywords
    })),
    service: data.services.map(x => ({
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
})();
