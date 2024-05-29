<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/content/">Content</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        consequuntur tempore amet consectetur minus autem corporis nostrum sit
        sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
        voluptas debitis!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsPatternsMessaging",
  components: { Layout },
  data() {
    return {
      pageTitle: "Grammar & Mechanics",
    };
  },
};
</script>
