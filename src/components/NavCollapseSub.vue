<template>
  <BLink
    :id="slug + 'Heading'"
    class="d-flex justify-content-between nav-link rounded-3 chevron bg-white-hover bg-opacity-10-hover text-white"
    exact-active-class="bg-white bg-opacity-10"
    :to="'/' + slug"
    :aria-expanded="isExpanded"
    :aria-controls="slug + 'Collapse'"
  >
    <span class="small fw-medium" style="padding-left: 32px"
      ><i
        v-if="icon"
        class="bi text-opacity-50 me-3 text-white"
        :class="icon"
      ></i
      >{{ menu }}</span
    >
    <i class="bi bi-chevron-down" aria-hidden="true"></i>
  </BLink>
  <div
    :id="slug + 'Collapse'"
    class="collapse"
    :class="{ show: isExpanded }"
    :aria-labelledby="slug + 'Heading'"
  >
    <slot></slot>
  </div>
</template>

<script>
  import { BLink } from "bootstrap-vue-next";

  export default {
    name: "NavCollapse",
    components: {
      BLink,
    },
    props: {
      menu: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      isExpanded() {
        return this.$route.path.includes("/" + this.slug);
      },
    },
    methods: {},
  };
</script>

<style lang="css" scoped>
  .chevron .bi-chevron-down {
    display: inline-block;
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
    font-weight: bolder;
  }

  .chevron[aria-expanded="true"] .bi-chevron-down {
    transform: rotate(-180deg); /* transform: scaleY(-1); */
  }

  .bi-chevron-down::after {
    font-weight: bolder !important;
  }
</style>
