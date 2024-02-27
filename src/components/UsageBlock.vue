<template>
  <div
    v-if="variant == 'do'"
    class="border-3 border-start border-success-subtle ps-3 d-flex mb-3"
  >
    <div class="fw-bold fs-5">
      <i class="bi bi-check-circle-fill text-success me-3"></i>
    </div>
    <div class="w-100">
      <div class="d-flex flex-column flex-md-row">
        <div class="w-100">
          <div class="fw-bold fs-5 mb-2">Do</div>
          <p>
            <template v-if="$slots['text']">
              <slot name="text"></slot>
            </template>
            <template v-else>
              <slot></slot>
            </template>
          </p>
        </div>
        <div v-if="$slots['preview']" class="w-100">
          <slot name="preview"></slot>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="variant == 'dont'"
    class="border-3 border-start border-danger-subtle ps-3 d-flex mb-3"
  >
    <div class="fw-bold fs-5">
      <i class="bi bi-x-circle-fill text-danger me-3"></i>
    </div>
    <div class="w-100">
      <div class="d-flex flex-column flex-md-row">
        <div class="w-100">
          <div class="fw-bold fs-5 mb-2">Don&rsquo;t</div>
          <p>
            <template v-if="$slots['text']">
              <slot name="text"></slot>
            </template>
            <template v-else>
              <slot></slot>
            </template>
          </p>
        </div>
        <div v-if="$slots['preview']" class="w-100">
          <slot name="preview"></slot>
        </div>
      </div>
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
