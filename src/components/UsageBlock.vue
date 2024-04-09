<template>
  <div v-if="variant == 'do'" class="d-flex flex-column flex-md-row mb-5">
    <div class="w-100 border-3 border-start border-success-subtle px-3 mb-3">
      <div class="">
        <div class="fw-bold fs-5 mb-2">
          <i class="bi bi-check-circle-fill text-success me-3"></i>Do
        </div>
        <div>
          <template v-if="$slots['text']">
            <slot name="text"></slot>
          </template>
          <template v-else>
            <slot></slot>
          </template>
        </div>
      </div>
    </div>
    <div v-if="$slots['preview']" class="w-100">
      <slot name="preview"></slot>
    </div>
  </div>
  <div v-if="variant == 'dont'" class="d-flex flex-column flex-md-row mb-5">
    <div class="w-100 border-3 border-start border-danger-subtle px-3 mb-3">
      <div class="">
        <div class="fw-bold fs-5 mb-2">
          <i class="bi bi-x-circle-fill text-danger me-3"></i>Don&rsquo;t
        </div>
        <div>
          <template v-if="$slots['text']">
            <slot name="text"></slot>
          </template>
          <template v-else>
            <slot></slot>
          </template>
        </div>
      </div>
    </div>
    <div v-if="$slots['preview']" class="w-100">
      <slot name="preview"></slot>
    </div>
  </div>
</template>

<script>
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
