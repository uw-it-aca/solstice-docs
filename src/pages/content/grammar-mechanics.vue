<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/content">Content</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        consequuntur tempore amet consectetur minus autem corporis nostrum sit
        sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
        voluptas debitis!
      </p>
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#voice"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Grammar</a
              >
            </li>
            <li>
              <a
                href="#tone"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Mechanics</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 class="ff-encodesans pt-4 pb-3" id="voice">Grammar</h2>
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
  import Layout from "@/layouts/default.vue";

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
