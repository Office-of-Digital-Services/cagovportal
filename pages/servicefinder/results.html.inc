<style>
  {%- include "./results.html.css" -%}

  {%- for subtopic in dataset.subtopics %}
    .subtopic-{{ subtopic.subtopicId }} [data-subtopic-id="{{ subtopic.subtopicId }}"] {
      display: unset;
    }
  {%- endfor %}

  [data-service-id] {
    display: none;
  }

  {%- for subtopic in dataset.subtopics %}
    {% for sepService in subtopic.sepServices %}
    {% set className = "service-" + sepService.ServiceId %}
    .{{ className }} [data-service-id~="{{ sepService.ServiceId }}"] {
      display: unset;
    }
    {% set allClasses = allClasses + " " + className %}
    {% endfor %}
  {%- endfor %}
</style>
<script>
  {%- include "./results.html.js" -%}
</script>
