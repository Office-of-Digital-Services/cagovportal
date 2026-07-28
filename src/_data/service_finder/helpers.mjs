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
    /** @type {number[]} */
    let allServiceIds = [];

    /** @type {string[]} */
    const classNames = [];

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

      classNames.push(...servicesIds.map(id => `show-service-${id}`));

      subtopic.servicesIds = servicesIds;
      subtopic.serviceIdValues = ` ${servicesIds.join(" ")} `;
    });

    allServiceIds = allServiceIds.sort((a, b) => a - b);
    classNames.push(
      ...allServiceIds.sort((a, b) => a - b).map(id => `show-service-${id}`)
    );

    item.allServiceIds = allServiceIds;
    item.classNames = classNames.join(" ");

    return item;
  }
};
