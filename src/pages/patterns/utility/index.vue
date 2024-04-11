<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>

    <template #lead>
      Utility components... Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Iusto tempore omnis esse quasi assumenda quae voluptatem, dolores
      perspiciatis facilis. Iste cupiditate similique quis nam amet officiis?
      Accusantium ducimus vel sit!
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Profile'"
            :link="'/patterns/utility/profile'"
            :accessibility="true"
            :version="'1.0.x'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Color Mode'"
            :link="'/patterns/utility/color-mode'"
            :accessibility="true"
            :version="'1.0.x'"
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
  name: "DocsPatternsUtility",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {
      pageTitle: "Utility",
    };
  },
};
</script>
