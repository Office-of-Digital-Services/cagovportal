export default {
  // for results.html
  getResultsDataset(item, serviceFinderData, stateEntity) {
    item.subtopics = serviceFinderData.subtopics.filter(subtopic =>
      subtopic.topic.includes(item.id)
    );

    item.subtopics.forEach(subtopic => {
      // if (false && subtopic.services?.length > 0)
      //   subtopic.sepServices = subtopic.services.map(serviceDataId => {
      //     /** @type {number} */
      //     const serviceId = serviceFinderData.services.find(
      //       service => service.id === serviceDataId
      //     ).serviceId;

      //     const sepService = stateEntity.services.find(
      //       service => service.ServiceId === serviceId
      //     );

      //     return sepService;
      //   });

      subtopic.sepServices = serviceFinderData.services
        .filter(service => service.subtopics?.includes(subtopic.id))
        .map(service => {
          const serviceId = service.serviceId;

          const sepService = stateEntity.services.find(
            s => s.ServiceId === serviceId
          );

          return sepService;
        });
    });

    return item;
  }
};
