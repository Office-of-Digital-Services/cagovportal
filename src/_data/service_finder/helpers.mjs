//@ts-check

export default {
  // for results.html
  /**
   *
   * @param {*} item
   * @param {*} serviceFinderData
   * @param {*} stateEntity
   * @returns
   */
  getResultsDataset(item, serviceFinderData, stateEntity) {
    item.classPrefix = "show-service-";

    /** @type {number[]} */
    const allServiceIds = [];

    item.subtopics = serviceFinderData.subtopics.filter(subtopic =>
      subtopic.topic.includes(item.id)
    );

    item.subtopics.forEach(subtopic => {
      subtopic.sepServices = serviceFinderData.services
        .filter(service => service.subtopics?.includes(subtopic.id))
        .map(service => {
          const serviceId = service.serviceId;

          const sepService = stateEntity.services.find(
            s => s.ServiceId === serviceId
          );

          return sepService;
        });

      const servicesIds = /** @type {number[]} */ (
        subtopic.sepServices.map(s => s.ServiceId)
      );

      allServiceIds.push(...servicesIds);

      subtopic.servicesIds = servicesIds;
      subtopic.serviceIdValues = ` ${servicesIds.join(" ")} `;
    });

    allServiceIds.sort((a, b) => a - b);
    item.allServiceIds = allServiceIds;
    item.classNames = allServiceIds.map(id => item.classPrefix + id).join(" ");

    return item;
  }
};
