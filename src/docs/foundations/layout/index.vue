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

      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        quasi perspiciatis nostrum quidem ipsam. Dolorum placeat facilis
        officiis iure sint natus necessitatibus cum sequi provident similique
        amet quisquam, repellat enim?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p class="col-md-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum
        delectus tempora totam corrupti maxime, quam repellendus a. A similique
        laborum numquam illo corrupti inventore sunt in quaerat quibusdam
        accusantium.
      </p>

      <p class="col-md-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum
        delectus tempora totam corrupti maxime, quam repellendus a. A similique
        laborum numquam illo corrupti inventore sunt in quaerat quibusdam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Asperiores fuga eum velit quae sint obcaecati labore, excepturi nulla
        voluptatem deleniti, repellendus rem aliquid molestias nihil sit
        debitis, soluta itaque officia?
      </p>

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Topbar'"
            :link="'/foundations/layout/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Sidebar'"
            :link="'/foundations/layout/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CompDescription from "../../../components/CompDescription.vue";

export default {
  name: "DocsPatternsLayouts",
  components: {
    Layout,
    CompDescription,
  },
  data() {
    return {
      pageTitle: "Layout",
    };
  },
};
</script>
