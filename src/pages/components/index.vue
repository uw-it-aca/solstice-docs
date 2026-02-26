<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Components are the re-usable user interface pieces. Components utilize
        combinations of elements and building blocks of the visual user
        interface design.
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock name="Action" link="/components/action"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Text" link="/components/text"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Form" link="/components/form"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Surface" link="/components/surface"
            >aka content containers</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Layout" link="/components/layout"
            >The boilerplate is a critical layout foundation of our design
            system. It provides the structure for our visual components and
            overall user interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Navigation" link="/components/navigation"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Messaging" link="/components/messaging"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Disclosure" link="/components/disclosure"
            >Interface changes (or progressively disclosed) based on a user
            action.</DescriptionBlock
          >
        </li>

        <li class="col-4">
          <DescriptionBlock name="Search" link="/components/search"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Utility" link="/components/utility"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Data" link="/components/data"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import DescriptionBlock from "@/components/DescriptionBlock.vue";

  export default {
    name: "DocsPatternsIndex",
    components: {
      Layout,
      DescriptionBlock,
    },
    data() {
      return {
        pageTitle: "Components",
      };
    },
    methods: {},
  };
</script>
