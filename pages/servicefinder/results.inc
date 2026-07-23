<style>
  [data-subtopic-id] {
    display: none;
  }

  {%- for subtopic in dataset.subtopics %}
    .subtopic-{{ subtopic.subtopicId }} [data-subtopic-id="{{ subtopic.subtopicId }}"] {
      display: unset;
    }
  {%- endfor %}
</style>
