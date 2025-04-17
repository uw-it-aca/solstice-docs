<template>
  <div
    v-if="variant == 'do'"
  >
    <div class="fw-bold fs-5 mb-2">
      Do
    </div>
    <div class="mb-5 border-3 border-start border-success w-100 ps-2 pe-2">

      <!-- layout that uses UsageBlockRow -->
      <template v-if="$slots['row']">
        <ul class="list-unstyled">
          <slot name="row"></slot>
        </ul>
      </template>

      <!-- legacy layout for pages that don't use UsageBlockRow -->
      <div v-else class="d-flex align-items-start">
        <i class="bi bi-check-circle-fill text-success ms-2 me-3"></i>
        <div class="d-flex flex-column flex-md-row w-100">
          <div v-if="$slots['text']" class="w-100 mb-3">
          <slot name="text"></slot>
          </div>
          <div v-if="$slots['preview']" class="w-100 ps-0 px-md-4">
            <slot name="preview"></slot>
          </div>
        </div>
      </div>
    </div>

</div>
  <div
    v-if="variant == 'dont'"
  >
    <div class="fw-bold fs-5 mb-2">
        Don&rsquo;t
      </div>
    <div class="mb-5 border-3 border-start border-danger w-100 ps-2 pe-2">

      <!-- layout that uses UsageBlockRow -->
      <template v-if="$slots['row']"
        >
          <ul class="list-unstyled d-flex flex-column">
            <slot name="row"></slot>
          </ul>
      </template>

      <!-- legacy layout for pages that don't use UsageBlockRow -->
      <div v-else class="d-flex align-items-start">
        <i class="bi bi-x-circle-fill text-danger ms-2 me-3"></i>
        <div class="d-flex flex-column flex-md-row w-100">
          <div v-if="$slots['text']" class="w-100 mb-3">
            <slot name="text"></slot>
          </div>
          <div v-if="$slots['preview']" class="w-100 ps-0 px-md-4">
            <slot name="preview"></slot>
          </div>
        </div>
      </div>
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
