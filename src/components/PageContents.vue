<template>
  <div class="sol-toc">
    <h2 class="fs-6 ms-2">On this page</h2>
    <slot></slot>
  </div>
</template>

<script>
import { ScrollSpy } from "bootstrap";

export default {
  name: "PageContents",
  inject: ["mq"],
  data() {
    return {};
  },
  methods: {},
  mounted: function () {
    // check if scrollspy is needed - only for xlplus media query
    if (!this.mq.xlMinus) {
      // implement scrollspy by attaching to 'scrollbody' id produced by component
      new ScrollSpy(document.getElementById("scrollbody"), {
        target: "#TableOfContents",
      });
    }
  },
};
</script>

<style lang="scss">
.sol-toc {
  max-width: 312px;

  li {
    margin-bottom: 0.25rem;
  }

  .active {
    --bs-bg-opacity: 1;
    /* stylelint-disable-next-line color-function-notation */
    background-color: rgba(
      var(--bs-tertiary-bg-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }
}
</style>
