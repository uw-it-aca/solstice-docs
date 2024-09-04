<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/patterns">Patterns</BBreadcrumbItem>
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
            :name="'Collapse'"
            :link="'/patterns/disclosure/collapse'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Accordian'"
            :link="'/patterns/disclosure/accordian'"
            :accessibility="true"
            :version="'1.0.x'"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Modal'"
            :link="'/patterns/disclosure/modal'"
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
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

export default {
  name: "DocsPatternsDisclosure" /* TODO: replace 'PatternName' */,
  inject: ["mq"],
  components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
  data() {
    return {
      pageTitle: "Disclosure" /* TODO: Set a page title */,
    };
  },
};
</script>
