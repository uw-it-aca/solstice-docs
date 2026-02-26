<template>
  <li class="mb-1">
    <a :href="anchor"><slot></slot></a>
  </li>
</template>

<script>
  import PreviewBlock from "./PreviewBlock.vue";

  export default {
    props: {
      anchor: {
        type: String,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>
