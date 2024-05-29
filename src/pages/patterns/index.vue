<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      Patterns are the re-usable user interface components. Patterns utilize
      combinations of elements and building blocks of the visual user interface
      design.
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Layout'"
            :link="'/patterns/layout'"
            class="bg-light"
            >The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Navigation'"
            :link="'/patterns/navigation'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Surface'"
            :link="'/patterns/surface'"
            class="bg-light"
            >aka content containers</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Disclosure'"
            :link="'/patterns/disclosure'"
            class="bg-light"
            >Interface changes (or progressively disclosed) based on a user
            action.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Messaging'"
            :link="'/patterns/messaging'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Utility'"
            :link="'/patterns/utility'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

export default {
  name: "DocsPatternsIndex",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {
      pageTitle: "Patterns",
    };
  },
  methods: {},
};
</script>
