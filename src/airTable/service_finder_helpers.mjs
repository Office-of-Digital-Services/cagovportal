//@ts-check

/**
 * @typedef {object} ServiceFinderService
 * @property {number} serviceID
 * @property {number[]} [subtopicIds]
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
 * @property {number} subtopicId
 * @property {number} topicId
 * @property {SepService[]} [sepServices]
 */

/**
 * @typedef {object} ResultsItem
 * @property {number} topicId
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
      subtopic => subtopic.topicId === item.topicId
    );

    item.subtopics?.forEach(subtopic => {
      subtopic.sepServices = serviceFinderData.services
        ?.filter(service => service.subtopicIds?.includes(subtopic.subtopicId))
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
