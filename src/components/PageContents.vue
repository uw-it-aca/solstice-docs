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

    mounted() {
      // check if scrollspy is needed - only for xlplus media query
      if (!this.mq.xlMinus) {
        // implement scrollspy by attaching to 'scrollbody' id produced by component
        new ScrollSpy(document.getElementById("scrollbody"), {
          target: "#TableOfContents",
        });
      }
    },
    methods: {},
  };
</script>

<style lang="css">
  .sol-toc {
    max-width: 312px;
  }

  .sol-toc li {
    margin-bottom: 0.25rem;
  }

  .sol-toc .active {
    --bs-bg-opacity: 1;
    /* stylelint-disable-next-line color-function-notation */
    background-color: rgb(
      var(--bs-tertiary-bg-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }
</style>
