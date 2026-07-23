<style>
  {%- include "./results.html.css" -%}



  [data-service-id] {
    display: none;
  }

  {%- for subtopic in dataset.subtopics %}
    {% for sepService in subtopic.sepServices %}
    {% set className = "show-service-" + sepService.ServiceId %}
    .{{ className }} [data-service-id~="{{ sepService.ServiceId }}"] {
      display: unset;
    }
    {% set allClasses = allClasses + " " + className %}
    {% endfor %}
  {%- endfor %}

  {%- for subtopic in dataset.subtopics %}
    {% set className = "hide-subtopic-" + subtopic.subtopicId %}
    {% set subtopicClasses = subtopicClasses + " " + className %}
    .{{ className }} [data-subtopic-id="{{ subtopic.subtopicId }}"] {
      display: none;
    }
  {%- endfor %}
</style>
<script>
  {%- include "./results.html.js" -%}
</script>
