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
    <template #lead>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut nemo
      ipsam deleniti ab excepturi adipisci eveniet, impedit expedita rerum fuga
      nesciunt sapiente iusto blanditiis labore, voluptatum hic consectetur
      dolores.
    </template>
    <template #toc>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
      possimus nemo nam autem quis reiciendis obcaecati facilis doloremque esse
      nostrum, exercitationem ipsam ex voluptates eius ratione neque ipsum odio
      molestias?
    </template>
    <template #content>
      <h2>What is Solstice?</h2>
      <p>
        Solstice Design System is a resource for building and documenting UI
        components using Bootstrap and Javascript frameworks. It provides a set
        of organized guidelines, patterns and best practices that work as the
        foundation for application design and development at D&A.
      </p>
      <p>
        Example:
        <a href="https://polaris.shopify.com/getting-started/polaris-101"
          >https://polaris.shopify.com/getting-started/polaris-101</a
        >
      </p>

      <h2>Who is Solstice for?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas
        quasi ullam perferendis accusamus error, nostrum dolor voluptatum
        incidunt dolores molestiae quaerat necessitatibus deserunt fuga pariatur
        facilis magnam quo obcaecati.
      </p>

      <h2>What apps should use Solstice?</h2>
      <p>
        Any apps the require a consistent user-experience... Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quas odit dolorem velit
        consectetur porro amet laudantium beatae numquam reprehenderit nostrum.
        Quo nam quia placeat illo quae explicabo accusamus magni possimus.
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
