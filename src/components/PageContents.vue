<template>
  <div class="pt-3">
    <h2 class="fs-6 my-3">On this page</h2>
    <ul id="TableOfContents" class="list-unstyled m-0">
      <slot></slot>
    </ul>
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
