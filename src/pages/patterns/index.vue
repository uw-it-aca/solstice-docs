<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <h1 class="fw-bold">Patterns</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Patterns are the re-usable UI components that fall on the more complex
        side of the spectrum. Patterns utilize both elements and design tokens
        and are the design and building blocks of the visual design.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
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
            :name="'Container'"
            :link="'/patterns/container'"
            class="bg-light"
            >aka surfaces?</DescriptionBlock
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
