<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/foundations/">Foundations</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>

      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quo
        vitae cumque ad quia ut. Consectetur fugiat velit officia at sequi fugit
        minima quidem quibusdam eligendi accusamus? Asperiores, doloribus amet.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea
        doloribus quae, aspernatur ex excepturi laboriosam expedita corrupti
        debitis cum culpa sequi. Quasi, dolores aperiam eveniet deleniti vero
        voluptas! Doloribus.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsDesignPrinciples",
  components: { Layout },
  data() {
    return {
      pageTitle: "Design Principles",
    };
  },
};
</script>
