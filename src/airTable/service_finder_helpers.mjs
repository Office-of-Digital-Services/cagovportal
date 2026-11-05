//@ts-check

/**
 * @typedef {object} ServiceFinderService
 * @property {number} ServiceId
 * @property {number[]} [SubtopicIds]
 * @property {string} [ShortDescription]
 */

/**
 * @typedef {object} ServiceFinderData
 * @property {ServiceFinderSubtopic[]} [subtopics]
 * @property {ServiceFinderService[]} [services]
 */

/**
 * @typedef {object} SepService
 * @property {number} ServiceId
 * @property {string} ShortDescription
 */

/**
 * @typedef {object} StateEntity
 * @property {SepService[]} services
 */

/**
 * @typedef {object} ServiceFinderSubtopic
 * @property {number} SubtopicId
 * @property {number} TopicId
 * @property {SepService[]} [sepServices]
 */

/**
 * @typedef {object} ResultsItem
 * @property {number} TopicId
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
      subtopic => subtopic.TopicId === item.TopicId
    );

    item.subtopics?.forEach(subtopic => {
      subtopic.sepServices = serviceFinderData.services
        ?.filter(service => service.SubtopicIds?.includes(subtopic.SubtopicId))
        .map(service => {
          const sepService = stateEntity.services.find(
            s => s.ServiceId === service.ServiceId
          );

          if (sepService)
            sepService.ShortDescription = service.ShortDescription ?? "";

          return sepService;
        })
        .filter(x => !!x);
    });

    return item;
  }
};
