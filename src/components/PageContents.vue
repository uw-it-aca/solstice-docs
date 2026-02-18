<template>
  <div class="pt-3">
    <SHeading level="2" system="app">On this page</SHeading>
    <ul id="TableOfContents" class="list-unstyled m-0">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  import { ScrollSpy } from "bootstrap";
  import { SHeading } from "solstice-vue";

  export default {
    name: "PageContents",
    inject: ["mq"],
    components: {
      SHeading,
    },
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
