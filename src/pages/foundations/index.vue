<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      Foundations are Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Autem dicta error temporibus inventore sapiente debitis, non minima
      excepturi quasi, cumque explicabo, esse illo impedit. Veniam velit quia
      consectetur nisi cumque?
    </template>

    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Color'"
            :link="'/foundations/color'"
            class="bg-light"
            >The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Typography'"
            :link="'/foundations/typography'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Layout'"
            :link="'/foundations/layout'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

export default {
  name: "DocsFoundationsIndex",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {
      pageTitle: "Foundations",
    };
  },
};
</script>
