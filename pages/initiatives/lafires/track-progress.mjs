//@ts-check
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://data.disasterrecovery.ca.gov/dashboard-data/ddrc-metrics.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const metricValue = data[0].METRIC_VALUE;
      const lastUpdated = new Date(data[0].LAST_UPDATED);
      const formattedDate = `${lastUpdated.getMonth() + 1}/${lastUpdated.getDate()}/${lastUpdated.getFullYear()}`;
      const metricValueElement = document.getElementById("metricValue");
      if (metricValueElement) {
        metricValueElement.textContent = metricValue.toLocaleString();
      }
      const lastUpdatedElement = document.getElementById("lastUpdated");
      if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `Last updated ${formattedDate}`;
      }
    })
    .catch(error => console.error("Error fetching the JSON:", error));
});
