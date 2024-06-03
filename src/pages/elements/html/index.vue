<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">UI Elements</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
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
            :name="'Link'"
            :link="'/elements/html/link'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Button'"
            :link="'/elements/html/button'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Heading'"
            :link="'/elements/html/heading'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Paragraph'"
            :link="'/elements/html/paragraph'"
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
  name: "DocsElementsBase" /* TODO: replace 'PatternName' */,
  inject: ["mq"],
  components: { Layout, DescriptionBlock },
  data() {
    return {
      pageTitle: "HTML" /* TODO: Set a page title */,
    };
  },
};
</script>
