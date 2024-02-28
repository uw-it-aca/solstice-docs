<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
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
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
        voluptate sint alias consectetur commodi dignissimos, minus ratione quos
        a enim blanditiis hic perferendis ullam quod non, molestiae aut illo?
        Aut!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />
    </template>
    <template #subnav>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
      possimus nemo nam autem quis reiciendis obcaecati facilis doloremque esse
      nostrum, exercitationem ipsam ex voluptates eius ratione neque ipsum odio
      molestias?
    </template>
    <template #content>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
        accusantium nobis dicta saepe necessitatibus eos eius quas quod quo
        blanditiis, eum dolor totam nesciunt harum beatae recusandae! Harum, id
        fugiat.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
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
