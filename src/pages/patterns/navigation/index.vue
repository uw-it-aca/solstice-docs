<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ pageTitle }}</li>
        </ol>
      </nav>
    </template>
    <template #lead>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
      consequuntur tempore amet consectetur minus autem corporis nostrum sit
      sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
      voluptas debitis!
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Tabs'"
            :link="'/patterns/navigation/tabs'"
            :accessibility="true"
            :version="'1.0.5'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Menu'"
            :link="'/patterns/navigation/menu'"
            :accessibility="true"
            :version="'1.0.7'"
          ></DescriptionBlock>
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
  name: "DocsPatternsNavigation",
  components: { Layout, DescriptionBlock },
  data() {
    return {
      pageTitle: "Navigation" /* TODO: Set a page title */,
    };
  },
};
</script>
