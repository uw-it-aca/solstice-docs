<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/getting-started/">Getting Started</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
        voluptate sint alias consectetur commodi dignissimos, minus ratione quos
        a enim blanditiis hic perferendis ullam quod non, molestiae aut illo?
        Aut!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
        accusantium nobis dicta saepe necessitatibus eos eius quas quod quo
        blanditiis, eum dolor totam nesciunt harum beatae recusandae! Harum, id
        fugiat.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsComponentLifecycle",
  components: { Layout },
  data() {
    return {
      pageTitle: "Component Lifecycle",
    };
  },
};
</script>
