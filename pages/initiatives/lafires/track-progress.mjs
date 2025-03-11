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
      /**
       * @typedef {Object} Metric
       * @property {string} METRIC_NAME
       * @property {number} METRIC_VALUE
       * @property {string} LAST_UPDATED
       */

      /**
       * @param {string} metricName
       * @returns {number | null}
       */

      /* get metrics value function */
      const getMetricValue = metricName => {
        /** @type {Metric[]} */
        const metrics = data;
        const metric = metrics.find(m => m.METRIC_NAME === metricName);
        return metric ? metric.METRIC_VALUE : null;
      };

      /**
       * @param {string} metricName
       * @returns {string | null}
       */

      /* get last updated date function */
      const getLastUpdated = metricName => {
        /** @type {Metric[]} */
        const metrics = data;
        const metric = metrics.find(m => m.METRIC_NAME === metricName);
        if (metric) {
          const lastUpdated = new Date(metric.LAST_UPDATED);
          const pstDate = new Date(
            lastUpdated.toLocaleString("en-US", {
              timeZone: "America/Los_Angeles"
            })
          );
          const hours = pstDate.getHours();
          const minutes = pstDate.getMinutes();
          const ampm = hours >= 12 ? "PM" : "AM";
          const formattedHours = hours % 12 || 12;
          const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          return `${pstDate.getMonth() + 1}/${pstDate.getDate()}/${pstDate.getFullYear()} at ${formattedHours}:${formattedMinutes} ${ampm}`;
        }
        return null;
      };

      /* People helped: At disaster recovery centers */
      const people_helped_drc_Element =
        document.getElementById("people_helped_drc");

      if (people_helped_drc_Element) {
        const people_helped_drc_Value = getMetricValue("people_helped_drc");
        people_helped_drc_Element.textContent =
          people_helped_drc_Value !== null
            ? people_helped_drc_Value.toLocaleString()
            : "N/A";
      }

      /* People helped: At disaster recovery centers date */
      const get_people_helped_drc_date = getLastUpdated("people_helped_drc");
      const people_helped_drc_date_Element = document.getElementById(
        "people_helped_drc_date"
      );
      if (people_helped_drc_date_Element) {
        people_helped_drc_date_Element.textContent = `Data as of ${get_people_helped_drc_date}`;
      }

      /* People helped: By FEMA assistance */
      const people_helped_fema_individuals_Element = document.getElementById(
        "people_helped_fema_individuals"
      );

      if (people_helped_fema_individuals_Element) {
        const people_helped_fema_individuals_Value = getMetricValue(
          "people_helped_fema_individuals"
        );
        people_helped_fema_individuals_Element.textContent =
          people_helped_fema_individuals_Value !== null
            ? people_helped_fema_individuals_Value.toLocaleString()
            : "N/A";
      }

      /* FEMA funds */
      const people_helped_fema_funds_Element = document.getElementById(
        "people_helped_fema_funds"
      );

      if (people_helped_fema_funds_Element) {
        const people_helped_fema_funds_Value = getMetricValue(
          "people_helped_fema_funds"
        );
        people_helped_fema_funds_Element.textContent =
          people_helped_fema_funds_Value !== null
            ? people_helped_fema_funds_Value.toLocaleString()
            : "N/A";
      }

      /* People helped: By FEMA assistance date */
      const get_people_helped_fema_individuals_date = getLastUpdated(
        "people_helped_fema_individuals"
      );
      const people_helped_fema_individuals_date_Element =
        document.getElementById("people_helped_fema_individuals_date");
      if (people_helped_fema_individuals_date_Element) {
        people_helped_fema_individuals_date_Element.textContent = `Data as of ${get_people_helped_fema_individuals_date}`;
      }

      /* Schools reopened: total resumed */
      const schools_resumed_inperson_Element = document.getElementById(
        "schools_resumed_inperson"
      );

      if (schools_resumed_inperson_Element) {
        const schools_resumed_inperson_Value = getMetricValue(
          "schools_resumed_inperson"
        );
        schools_resumed_inperson_Element.textContent =
          schools_resumed_inperson_Value !== null
            ? schools_resumed_inperson_Value.toLocaleString()
            : "N/A";
      }

      /* Schools reopened: resumed in-person */
      const schools_resumed_Element =
        document.getElementById("schools_resumed");

      if (schools_resumed_Element) {
        const schools_resumed_Value = getMetricValue("schools_resumed");
        schools_resumed_Element.textContent =
          schools_resumed_Value !== null
            ? schools_resumed_Value.toLocaleString()
            : "N/A";
      }

      /* Schools reopened: resumed virtual */
      const schools_resumed_virtual_Element = document.getElementById(
        "schools_resumed_virtual"
      );

      if (schools_resumed_virtual_Element) {
        const schools_resumed_virtual_Value = getMetricValue(
          "schools_resumed_virtual"
        );
        schools_resumed_virtual_Element.textContent =
          schools_resumed_virtual_Value !== null
            ? schools_resumed_virtual_Value.toLocaleString()
            : "N/A";
      }

      /* Schools reopened: resumed date */
      const get_schools_resumed_date = getLastUpdated("schools_resumed");
      const schools_resumed_date_Element = document.getElementById(
        "schools_resumed_date"
      );
      if (schools_resumed_date_Element) {
        schools_resumed_date_Element.textContent = `Data as of ${get_schools_resumed_date}`;
      }

      /* Structural debris removal "Right of Entry" forms submitted */
      const cleanup_phase2_roe_submitted_Element = document.getElementById(
        "cleanup_phase2_roe_submitted"
      );

      if (cleanup_phase2_roe_submitted_Element) {
        const cleanupPhase2RoeSubmitted_Value = getMetricValue(
          "cleanup_phase2_roe_submitted"
        );
        cleanup_phase2_roe_submitted_Element.textContent =
          cleanupPhase2RoeSubmitted_Value !== null
            ? cleanupPhase2RoeSubmitted_Value.toLocaleString()
            : "N/A";
      }

      /* Structural debris removal "Right of Entry" forms date */
      const get_cleanup_phase2_roe_submitted_date = getLastUpdated(
        "cleanup_phase2_roe_submitted"
      );
      const cleanup_phase2_roe_submitted_date_Element = document.getElementById(
        "cleanup_phase2_roe_submitted_date"
      );
      if (cleanup_phase2_roe_submitted_date_Element) {
        cleanup_phase2_roe_submitted_date_Element.textContent = `Data as of ${get_cleanup_phase2_roe_submitted_date}`;
      }

      /* Structural debris removal Opt-in */
      const cleanup_phase2_optin_Element = document.getElementById(
        "cleanup_phase2_optin"
      );

      if (cleanup_phase2_optin_Element) {
        const cleanup_phase2_optin_Value = getMetricValue(
          "cleanup_phase2_optin"
        );
        cleanup_phase2_optin_Element.textContent =
          cleanup_phase2_optin_Value !== null
            ? cleanup_phase2_optin_Value.toLocaleString()
            : "N/A";
      }

      /* Structural debris removal Opt-outs */
      const cleanup_phase2_optout_Element = document.getElementById(
        "cleanup_phase2_optout"
      );

      if (cleanup_phase2_optout_Element) {
        const cleanup_phase2_optout_Value = getMetricValue(
          "cleanup_phase2_optout"
        );
        cleanup_phase2_optout_Element.textContent =
          cleanup_phase2_optout_Value !== null
            ? cleanup_phase2_optout_Value.toLocaleString()
            : "N/A";
      }

      /* Phase 1 : Hazardous household waste cleanup */
      const cleanup_phase1_parcels_Element = document.getElementById(
        "cleanup_phase1_parcels"
      );

      if (cleanup_phase1_parcels_Element) {
        const cleanup_phase1_parcels_Value = getMetricValue(
          "cleanup_phase1_parcels"
        );
        cleanup_phase1_parcels_Element.textContent =
          cleanup_phase1_parcels_Value !== null
            ? cleanup_phase1_parcels_Value.toLocaleString()
            : "N/A";
      }

      /* Phase 1 : Hazardous household waste cleanup DATE */
      const get_cleanup_phase1_parcels_date = getLastUpdated(
        "cleanup_phase1_parcels"
      );
      const cleanup_phase1_parcels_date_Element = document.getElementById(
        "cleanup_phase1_parcels_date"
      );
      if (cleanup_phase1_parcels_date_Element) {
        cleanup_phase1_parcels_date_Element.textContent = `Data as of ${get_cleanup_phase1_parcels_date}`;
      }

      /* Phase 2 : parcels have been accepted for Phase 2 debris removal */
      const phase2_roes_accepted_Element = document.getElementById(
        "phase2_roes_accepted"
      );

      if (phase2_roes_accepted_Element) {
        const phase2_roes_accepted_Value = getMetricValue(
          "phase2_roes_accepted"
        );
        phase2_roes_accepted_Element.textContent =
          phase2_roes_accepted_Value !== null
            ? phase2_roes_accepted_Value.toLocaleString()
            : "N/A";
      }

      /* Phase 2 : parcels completed */
      const phase2_parcels_completed_Element = document.getElementById(
        "phase2_parcels_completed"
      );

      if (phase2_parcels_completed_Element) {
        const phase2_parcels_completed_Value = getMetricValue(
          "phase2_parcels_completed"
        );
        phase2_parcels_completed_Element.textContent =
          phase2_parcels_completed_Value !== null
            ? phase2_parcels_completed_Value.toLocaleString()
            : "N/A";
      }

      /* CHART percentage */
      const parselsTotal = 13579;
      const phase2_parcels_completed_Value = getMetricValue(
        "phase2_parcels_completed"
      );
      const phase2_parcels_completed_Percentage =
        parselsTotal && phase2_parcels_completed_Value !== null
          ? (phase2_parcels_completed_Value / parselsTotal) * 100
          : 0;

      const phase2_parcels_incomplete_Percentage =
        parselsTotal && phase2_parcels_completed_Value !== null
          ? ((parselsTotal - phase2_parcels_completed_Value) / parselsTotal) *
            100
          : 0;

      const phase2_parcels_completed_PERCENT_Element = document.getElementById(
        "phase2_parcels_completed_PERCENT"
      );
      if (phase2_parcels_completed_PERCENT_Element) {
        phase2_parcels_completed_PERCENT_Element.style.width = `${phase2_parcels_completed_Percentage}%`;
      }

      const phase2_parcels_incomplete_PERCENT_Element = document.getElementById(
        "phase2_parcels_incomplete_PERCENT"
      );
      if (phase2_parcels_incomplete_PERCENT_Element) {
        phase2_parcels_incomplete_PERCENT_Element.style.width = `${phase2_parcels_incomplete_Percentage}%`;
      }

      const phase2_parcels_completed_PERCENT_label_Element =
        document.getElementById("phase2_parcels_completed_PERCENT_label");
      if (phase2_parcels_completed_PERCENT_label_Element) {
        phase2_parcels_completed_PERCENT_label_Element.textContent = `${phase2_parcels_completed_Percentage.toFixed(1)}%`;
      }

      /* Phase 2 : parcels completed DATE */
      const get_phase2_parcels_completed_date = getLastUpdated(
        "phase2_parcels_completed"
      );
      const phase2_parcels_completed_date_Element = document.getElementById(
        "phase2_parcels_completed_date"
      );
      if (phase2_parcels_completed_date_Element) {
        phase2_parcels_completed_date_Element.textContent = `Data as of ${get_phase2_parcels_completed_date}`;
      }

      /* Water */
      const water_safe_to_drink_Element = document.getElementById(
        "water_safe_to_drink"
      );

      let water_safe_to_drink_Value = 0;
      if (water_safe_to_drink_Element) {
        water_safe_to_drink_Value = getMetricValue("water_safe_to_drink") || 0;
        water_safe_to_drink_Element.textContent =
          water_safe_to_drink_Value !== null
            ? water_safe_to_drink_Value.toLocaleString()
            : "N/A";
      }

      const water_restoration_Element =
        document.getElementById("water_restoration");

      let water_restoration_Value = 0;
      if (water_restoration_Element) {
        water_restoration_Value = getMetricValue("water_restoration") || 0;
        water_restoration_Element.textContent =
          water_restoration_Value !== null
            ? water_restoration_Value.toLocaleString()
            : "N/A";
      }

      /* Calculate water sum and percentages */
      const totalWaterValue =
        (water_safe_to_drink_Value || 0) + (water_restoration_Value || 0);
      const water_safe_to_drink_Percentage = totalWaterValue
        ? (water_safe_to_drink_Value / totalWaterValue) * 100
        : 0;

      const water_safe_to_drink_PERCENT_Element = document.getElementById(
        "water_safe_to_drink_PERCENT"
      );
      if (water_safe_to_drink_PERCENT_Element) {
        water_safe_to_drink_PERCENT_Element.style.width = `${water_safe_to_drink_Percentage}%`;
      }
      const water_restoration_Percentage = totalWaterValue
        ? (water_restoration_Value / totalWaterValue) * 100
        : 0;

      const water_restoration_PERCENT_Element = document.getElementById(
        "water_restoration_PERCENT"
      );
      if (water_restoration_PERCENT_Element) {
        water_restoration_PERCENT_Element.style.width = `${water_restoration_Percentage}%`;
      }

      /* Display water percentages */
      const water_safe_to_drink_percentage_Element = document.getElementById(
        "water_safe_to_drink_percentage"
      );
      if (water_safe_to_drink_percentage_Element) {
        water_safe_to_drink_percentage_Element.textContent = `${water_safe_to_drink_Percentage.toFixed(2)}%`;
      }

      const water_restoration_percentage_Element = document.getElementById(
        "water_restoration_percentage"
      );
      if (water_restoration_percentage_Element) {
        water_restoration_percentage_Element.textContent = `${water_restoration_Percentage.toFixed(2)}%`;
      }

      /* Water DATE */
      const get_water_safe_to_drink_date = getLastUpdated(
        "water_safe_to_drink"
      );
      const water_safe_to_drink_date_Element = document.getElementById(
        "water_safe_to_drink_date"
      );
      if (water_safe_to_drink_date_Element) {
        water_safe_to_drink_date_Element.textContent = `Data as of ${get_water_safe_to_drink_date}`;
      }

      /* AIR */

      /* Air Mobile surveys complete */
      const air_mobile_survey_complete_Element = document.getElementById(
        "air_mobile_survey_complete"
      );

      if (air_mobile_survey_complete_Element) {
        const air_mobile_survey_complete_Value = getMetricValue(
          "air_mobile_survey_complete"
        );
        air_mobile_survey_complete_Element.textContent =
          air_mobile_survey_complete_Value !== null
            ? air_mobile_survey_complete_Value.toLocaleString()
            : "N/A";
      }

      /* Air Stationary */
      const air_stationary_planned_Element = document.getElementById(
        "air_stationary_planned"
      );

      if (air_stationary_planned_Element) {
        const air_stationary_planned_Value = getMetricValue(
          "air_stationary_planned"
        );
        air_stationary_planned_Element.textContent =
          air_stationary_planned_Value !== null
            ? air_stationary_planned_Value.toLocaleString()
            : "N/A";
      }

      /* Air deployed */
      const air_stationary_deployed_Element = document.getElementById(
        "air_stationary_deployed"
      );

      if (air_stationary_deployed_Element) {
        const air_stationary_deployed_Value = getMetricValue(
          "air_stationary_deployed"
        );
        air_stationary_deployed_Element.textContent =
          air_stationary_deployed_Value !== null
            ? air_stationary_deployed_Value.toLocaleString()
            : "N/A";
      }

      /* Air survey planned */
      const air_mobile_survey_planned_Element = document.getElementById(
        "air_mobile_survey_planned"
      );

      if (air_mobile_survey_planned_Element) {
        const air_mobile_survey_planned_Value = getMetricValue(
          "air_mobile_survey_planned"
        );
        air_mobile_survey_planned_Element.textContent =
          air_mobile_survey_planned_Value !== null
            ? air_mobile_survey_planned_Value.toLocaleString()
            : "N/A";
      }

      /* Air chart */
      /* Calculate air percentages */
      const totalAirValue =
        (getMetricValue("air_mobile_survey_complete") || 0) +
        (getMetricValue("air_stationary_deployed") || 0) +
        (getMetricValue("air_stationary_planned") || 0);

      const air_mobile_survey_complete_Percentage = totalAirValue
        ? ((getMetricValue("air_mobile_survey_complete") || 0) /
            totalAirValue) *
          100
        : 0;

      const air_stationary_deployed_Percentage = totalAirValue
        ? ((getMetricValue("air_stationary_deployed") || 0) / totalAirValue) *
          100
        : 0;

      const air_stationary_planned_Percentage = totalAirValue
        ? ((getMetricValue("air_stationary_planned") || 0) / totalAirValue) *
          100
        : 0;

      /* Display air percentages in the chart elements */
      const air_mobile_survey_complete_PERCENT_Element =
        document.getElementById("air_mobile_survey_complete_PERCENT");
      if (air_mobile_survey_complete_PERCENT_Element) {
        air_mobile_survey_complete_PERCENT_Element.style.width = `${air_mobile_survey_complete_Percentage}%`;
      }

      const air_stationary_deployed_PERCENT_Element = document.getElementById(
        "air_stationary_deployed_PERCENT"
      );
      if (air_stationary_deployed_PERCENT_Element) {
        air_stationary_deployed_PERCENT_Element.style.width = `${air_stationary_deployed_Percentage}%`;
      }

      const air_stationary_planned_PERCENT_Element = document.getElementById(
        "air_stationary_planned_PERCENT"
      );
      if (air_stationary_planned_PERCENT_Element) {
        air_stationary_planned_PERCENT_Element.style.width = `${air_stationary_planned_Percentage}%`;
      }

      /* Air DATE */
      const get_air_mobile_survey_complete_date = getLastUpdated(
        "air_mobile_survey_complete"
      );
      const air_mobile_survey_complete_date_Element = document.getElementById(
        "air_mobile_survey_complete_date"
      );
      if (air_mobile_survey_complete_date_Element) {
        air_mobile_survey_complete_date_Element.textContent = `Data as of ${get_air_mobile_survey_complete_date}`;
      }
    })
    .catch(error => console.error("Error fetching the JSON:", error));
});
