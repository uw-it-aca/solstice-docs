<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maiores
        quo consequatur, minima minus suscipit doloribus quos dicta excepturi
        porro obcaecati, dignissimos rerum consectetur ea dolores vero sint.
        Porro, quaerat.
      </p>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #content>
      <h2 id="heading1">Heading1 (h2)</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading2">Heading2 (h2)</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading3">Heading3 (h2)</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading4">Heading3 (h2)</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsTemplatesIndex" /* example: Docs_Folder_Index */,
  inject: ["mq"],
  components: { Layout },
  data() {
    return {
      pageTitle: "Page Title (h1)",
    };
  },
};
</script>
