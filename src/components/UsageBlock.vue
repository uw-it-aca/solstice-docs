<template>
  <div
    v-if="variant == 'do'"
    class="d-flex flex-column-reverse flex-md-row mb-5 border-3 border-start border-success"
  >
    <div class="w-100 px-3">
      <div class="fw-bold fs-5 mb-2">
        <i class="bi bi-check-circle-fill text-success me-3"></i>Do
      </div>
      <template v-if="$slots['row']"
        ><ul v-if="$slots['row']">
          <slot name="row">test</slot></ul
      ></template>
      <div>
        <template v-if="$slots['text']">
          <slot name="text"></slot>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </div>
    </div>
    <div v-if="$slots['preview']" class="w-100 p-4">
      <slot name="preview"></slot>
    </div>
  </div>
  <div
    v-if="variant == 'dont'"
    class="d-flex flex-column-reverse flex-md-row mb-5 border-3 border-start border-danger"
  >
    <div class="w-100 px-3">
      <div class="fw-bold fs-5 mb-2">
        <i class="bi bi-x-circle-fill text-danger me-3"></i>Don&rsquo;t
      </div>

      <template v-if="$slots['row']"><slot name="row"></slot></template>
      <div>
        <template v-if="$slots['text']">
          <slot name="text"></slot>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </div>
    </div>
    <div v-if="$slots['preview']" class="w-100 p-4">
      <slot name="preview"></slot>
    </div>
  </div>
</template>

<script>
import PreviewBlock from "./PreviewBlock.vue";

export default {
  props: {
    variant: {
      type: String,
      default: "do",
      required: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>
