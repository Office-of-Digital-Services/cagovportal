//@ts-check

/**
 * @typedef {object} ServiceFinderService
 * @property {number} serviceId
 * @property {string[]} [subtopics]
 */

/**
 * @typedef {object} ServiceFinderData
 * @property {ServiceFinderSubtopic[]} [subtopics]
 * @property {ServiceFinderService[]} [services]
 */

/**
 * @typedef {object} SepService
 * @property {number} ServiceId
 */

/**
 * @typedef {object} StateEntity
 * @property {SepService[]} services
 */

/**
 * @typedef {object} ServiceFinderSubtopic
 * @property {string} id
 * @property {string[]} topic
 * @property {SepService[]} [sepServices]
 * @property {number[]} servicesIds
 * @property {string} serviceIdValues
 */

/**
 * @typedef {object} ResultsItem
 * @property {string} id
 * @property {string} classPrefix
 * @property {ServiceFinderSubtopic[]} [subtopics]
 * @property {number[]} allServiceIds
 */

export default {
  // for results.html
  /**
   *
   * @param {ResultsItem} item
   * @param {ServiceFinderData} serviceFinderData
   * @param {StateEntity} stateEntity
   * @returns {ResultsItem}
   */
  getResultsDataset(item, serviceFinderData, stateEntity) {
    item.classPrefix = "show-service-";

    /** @type {number[]} */
    const allServiceIds = [];

    item.subtopics = serviceFinderData.subtopics?.filter(subtopic =>
      subtopic.topic.includes(item.id)
    );

    item.subtopics?.forEach(subtopic => {
      subtopic.sepServices = serviceFinderData.services
        ?.filter(service => service.subtopics?.includes(subtopic.id))
        .map(service => {
          const serviceId = service.serviceId;

          const sepService = stateEntity.services.find(
            s => s.ServiceId === serviceId
          );
          return sepService;
        })
        .filter(x => !!x);

      const servicesIds = /** @type {number[]} */ (
        subtopic.sepServices?.map(s => s.ServiceId)
      );

      allServiceIds.push(...servicesIds);

      subtopic.servicesIds = servicesIds;
      subtopic.serviceIdValues = ` ${servicesIds.join(" ")} `;
    });

    allServiceIds.sort((a, b) => a - b);
    item.allServiceIds = allServiceIds;

    return item;
  }
};
