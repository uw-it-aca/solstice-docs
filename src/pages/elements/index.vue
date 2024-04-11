<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      Elements are the smallest basic structures of an user interface. They
      cannot be broken down any further. Buttons, links, and inputs are good
      examples. Elements utilize decisions made on the design token level.
    </template>

    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Link'"
            :link="'/elements/link'"
            :accessibility="true"
            :version="'1.0.5'"
            >Cards have a raised profile and has shadow. Meant to visually
            display prominence over flat items.</DescriptionBlock
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
  name: "DocsElementsIndex",
  components: { Layout, DescriptionBlock },
  data() {
    return {
      pageTitle: "Elements",
    };
  },
};
</script>
