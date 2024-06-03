<template>
  <div class="mb-3 border rounded codeblock">
    <div v-if="$slots['preview']">
      <div class="preview p-3 m-0 border-bottom">
        <slot name="preview"></slot>
      </div>
    </div>
    <div v-if="$slots['bootstrap']">
      <div
        class="d-flex justify-content-between small px-3 py-2 m-0 text-muted bg-body-tertiary border-bottom"
      >
        <div>BOOTSTRAP</div>
        <div>copy</div>
      </div>
      <div class="p-0 small m-0 bg-body-tertiary rounded-bottom">
        <slot name="bootstrap"></slot>
      </div>
    </div>
    <div v-if="$slots['vue']">
      <div
        class="d-flex justify-content-between small px-3 py-2 m-0 text-muted bg-body-tertiary border-top border-bottom"
      >
        <div>VUE</div>
        <div>copy</div>
      </div>
      <div class="p-0 small m-0 bg-body-tertiary rounded-bottom">
        <slot name="vue"></slot>
      </div>
    </div>

    <div v-if="$slots['script']">
      <div
        class="d-flex justify-content-between small px-3 py-2 m-0 text-muted bg-body-tertiary border-bottom"
      >
        <div>JAVASCRIPT</div>
        <div>copy</div>
      </div>
      <div class="p-0 small m-0 bg-body-tertiary rounded-bottom">
        <slot name="script"></slot>
      </div>
    </div>
  </div>
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

<style lang="scss">
// global styleguide

.codeblock {
  pre {
    background: transparent !important;
    margin: 0 !important;
    color: inherit !important;
  }

  code {
    color: inherit !important;
    text-shadow: none !important;
  }
}

.preview {
  // reset container padding for render display
  .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  // reset vh-100 to something more manageable for display
  .vh-100 {
    min-height: 30vh !important;
    max-height: 40vh !important;
  }
}
</style>
