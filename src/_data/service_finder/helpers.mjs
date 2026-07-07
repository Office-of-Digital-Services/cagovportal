export default {
  // for results.html
  getResultsDataset(item, serviceFinderData, stateEntity) {
    item.subtopics = serviceFinderData.subtopics.filter(subtopic =>
      subtopic.topic.includes(item.id)
    );

    item.subtopics.forEach(subtopic => {
      if (subtopic.services?.length > 0)
        subtopic.sepServices = subtopic.services.map(serviceDataId => {
          /** @type {number} */
          const serviceId = serviceFinderData.services.find(
            service => service.id === serviceDataId
          ).serviceId;

          const sepService = stateEntity.services.find(
            service => service.ServiceId === serviceId
          );

          return sepService;
        });
    });

    return item;
  }
};
