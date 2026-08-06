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
 * @property {number} subtopicId
 * @property {string[]} topic
 * @property {SepService[]} [sepServices]
 */

/**
 * @typedef {object} ResultsItem
 * @property {string} id
 * @property {ServiceFinderSubtopic[]} [subtopics]
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
    });

    return item;
  }
};
