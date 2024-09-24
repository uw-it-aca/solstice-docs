<template>
  <div
    class="bg-body-tertiary d-flex flex-column flex-fill p-4 rounded-3 border-0 mb-4 position-relative"
  >
    <h2>{{ name }}</h2>
    <div class="flex-fill" style="height: 100px">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed
        voluptas eligendi corporis.
      </slot>
    </div>
    <div class="text-end">
      <BLink v-if="link" :to="link">View {{ name }}</BLink>
      <span v-else class="text-muted">Coming soon!</span>
    </div>
    <div class="position-absolute top-0 end-0 m-2">
      <span v-if="accessibility" class="badge bg-beige me-1 text-dark"
        >a11y</span
      >
      <span v-if="version" class="badge bg-purple">
        {{ version }}
      </span>
    </div>
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue-next";

export default {
  components: {
    BLink,
  },
  props: {
    name: {
      type: String,
      default: "Comp name",
      required: true,
    },
    version: {
      type: String,
    },
    link: {
      type: String,
    },
    accessibility: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>
