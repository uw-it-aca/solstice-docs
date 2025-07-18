<template>
  <div class="mb-3">
    <div class="position-relative">
      <span class="visually-hidden">Example:</span>
    </div>
    <template v-if="$slots['description']">
      <div class="mb-1 fst-italic small text-body-secondary">
        <slot name="description"></slot>
      </div>
    </template>
    <div class="border rounded codeblock">
      <div v-if="$slots['preview']">
        <div class="preview p-3 m-0 border-bottom">
          <slot name="preview"></slot>
        </div>
      </div>
      <div v-if="$slots['bootstrap']">
        <div
          class="p-0 small m-0 bg-body-tertiary rounded-bottom position-relative"
        >
          <div class="p-3">HTML</div>
          <slot name="bootstrap"></slot>
        </div>
      </div>
      <div v-if="$slots['vue']">
        <div
          class="p-0 small m-0 border-top bg-body-tertiary rounded-bottom position-relative"
        >
          <div class="p-3">VUE</div>
          <slot name="vue"></slot>
        </div>
      </div>

      <div v-if="$slots['script']">
        <div
          class="p-0 small m-0 border-top bg-body-tertiary rounded-bottom position-relative"
        >
          <div class="p-3">JS</div>
          <slot name="script"></slot>
        </div>
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
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

export default {
  mounted() {
    Prism.highlightAll();

    // style the copy button
    document.querySelectorAll(".copy-to-clipboard-button").forEach((item) => {
      item.classList.add("btn");
      item.classList.add("btn-sm");
      item.classList.add("btn-secondary");
      item.classList.add("fs-10");
    });
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

.toolbar {
  .toolbar-item button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
