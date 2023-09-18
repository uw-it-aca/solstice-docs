<template>
  <Layout>
    <template #content>
      <h1>Link</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum fugiat
        beatae odit cum nam sint saepe a? Sit nobis saepe fugiat molestias
        quisquam! Facilis rerum, dolorem quas praesentium aliquam corrupti.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Link</h2>

    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsLinkIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
