<style>
  {%- include "./results.html.css" -%}

  {%- for subtopic in dataset.subtopics %}
    .subtopic-{{ subtopic.subtopicId }} [data-subtopic-id="{{ subtopic.subtopicId }}"] {
      display: unset;
    }
  {%- endfor %}
</style>
<script>
  {%- include "./results.html.js" -%}
</script>
