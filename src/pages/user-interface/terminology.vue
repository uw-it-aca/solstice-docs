<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse a
        neque non voluptas blanditiis saepe, tempora laudantium necessitatibus
        cum hic nobis libero delectus ullam alias facilis est provident. Quae.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">SubHeading</SHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odio libero fugiat impedit perferendis! Accusamus porro ex
            accusantium voluptates cupiditate maiores vero, commodi aliquam
            eaque quaerat quasi libero placeat eum!
          </p>
        </div>
      </div>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      BCard,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Terminology",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: override layout pageTitle prop
      document.title = this.appName;

      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
