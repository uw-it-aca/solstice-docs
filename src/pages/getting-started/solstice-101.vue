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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quo
        vitae cumque ad quia ut. Consectetur fugiat velit officia at sequi fugit
        minima quidem quibusdam eligendi accusamus? Asperiores, doloribus amet.
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
        Example:
        <a href="https://polaris.shopify.com/getting-started/polaris-101"
          >https://polaris.shopify.com/getting-started/polaris-101</a
        >
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        quis magnam molestiae voluptate quos ipsa. Sapiente nisi odio saepe
        doloribus. Excepturi illo ipsum voluptas et sequi nobis in tenetur id.
      </p>
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
  name: "DocsSolstice101",
  components: { Layout },
  data() {
    return {
      pageTitle: "Solstice 101",
    };
  },
};
</script>
