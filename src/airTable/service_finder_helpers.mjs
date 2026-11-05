//@ts-check

/**
 * @typedef {object} ServiceFinderService
 * @property {number} serviceID
 * @property {number[]} [subtopicIDs]
 * @property {string} [shortDescription]
 */

/**
 * @typedef {object} ServiceFinderData
 * @property {ServiceFinderSubtopic[]} [subtopics]
 * @property {ServiceFinderService[]} [services]
 */

/**
 * @typedef {object} SepService
 * @property {number} ServiceId
 * @property {string} shortDescription
 */

/**
 * @typedef {object} StateEntity
 * @property {SepService[]} services
 */

/**
 * @typedef {object} ServiceFinderSubtopic
 * @property {number} subtopicID
 * @property {number} topicID
 * @property {SepService[]} [sepServices]
 */

/**
 * @typedef {object} ResultsItem
 * @property {number} topicID
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
    item.subtopics = serviceFinderData.subtopics?.filter(
      subtopic => subtopic.topicID === item.topicID
    );

    item.subtopics?.forEach(subtopic => {
      subtopic.sepServices = serviceFinderData.services
        ?.filter(service => service.subtopicIDs?.includes(subtopic.subtopicID))
        .map(service => {
          const serviceID = service.serviceID;

          const sepService = stateEntity.services.find(
            s => s.ServiceId === serviceID
          );

          if (sepService)
            sepService.shortDescription = service.shortDescription ?? "";

          return sepService;
        })
        .filter(x => !!x);
    });

    return item;
  }
};
