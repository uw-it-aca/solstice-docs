<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/components/surface">Surface</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Panels are Cards is a container of content... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ea nemo nobis, eligendi sit ipsa mollitia
        necessitatibus possimus, veniam sapiente deleniti quo. Nemo error quos,
        eius facilis rem amet deserunt est!
      </p>
    </template>
    <template #toc>
    <PageContents>
      <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
      <PageContentsItem anchor="#variants">Variants</PageContentsItem>
      <PageContentsItem anchor="#options">Options</PageContentsItem>
      <PageContentsItem anchor="#usage">Usage</PageContentsItem>
      <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
      <PageContentsItem anchor="#implement">Implementation</PageContentsItem>
    </PageContents>
    </template>
    <template #content>
      <CodeBlock>
        <template #preview>
          <BCard
            class="text-bg-light-beige rounded-3"
            border-variant="0"
            style="max-width: 600px"
          >
            <h2 class="card-title">heading</h2>
            asdfjadlskj
          </BCard>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import { BBreadcrumb, BBreadcrumbItem, BCard } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsPanel",
    components: {
      Layout,
      CodeBlock,
      BCard,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Panel",
      };
    },
  };
</script>
