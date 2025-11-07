<template>
  <div class="position-relative">
    <span class="visually-hidden">Example:</span>
  </div>
  <div class="border rounded mb-3">
    <div v-if="$slots['preview']">
      <div class="preview p-4 m-2">
        <slot name="preview"></slot>
      </div>
    </div>
  </div>
  <template v-if="$slots['description']">
    <div class="mb-1 fst-italic small text-body-secondary">
      <slot name="description"></slot>
    </div>
  </template>
</template>

<script>
  import Prism from "prismjs";
  import "prismjs/components/prism-javascript";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-markup-templating";
  import "prismjs/components/prism-scss";
  import "prismjs/themes/prism.css";

  export default {
    mounted() {
      Prism.highlightAll();
    },
  };
</script>

<style lang="css">
  /* global styleguide */

  .codeblock pre {
    background: transparent !important;
    margin: 0 !important;
    color: inherit !important;
  }

  .codeblock code {
    color: inherit !important;
    text-shadow: none !important;
  }

  /* reset container padding for render display */
  .preview .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  /* reset vh-100 to something more manageable for display */
  .preview .vh-100 {
    min-height: 30vh !important;
    max-height: 40vh !important;
  }
</style>
