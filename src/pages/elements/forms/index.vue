<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/elements/">Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #lead>
      This is a pattern page... Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aliquid maiores quo consequatur, minima minus suscipit
      doloribus quos dicta excepturi porro obcaecati, dignissimos rerum
      consectetur ea dolores vero sint. Porro, quaerat.
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat
        consequuntur doloremque, similique culpa unde ad dolores pariatur
        voluptatibus. Repudiandae tenetur distinctio esse illum repellat
        cupiditate dolore exercitationem incidunt ut?
      </p>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Component'"
            :link="'/patterns/xxx/xxx'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Component'"
            :link="'/patterns/xxx/xxx'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
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
  name: "DocsElementsFormsIndex" /* TODO: replace 'PatternName' */,
  inject: ["mq"],
  components: { Layout, DescriptionBlock },
  data() {
    return {
      pageTitle: "Forms" /* TODO: Set a page title */,
    };
  },
};
</script>
