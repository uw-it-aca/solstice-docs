<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Container</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Container</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Containers are Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia repellendus sint veritatis assumenda facilis repudiandae vero
        natus unde voluptatum blanditiis nihil soluta, velit quaerat, corporis
        eos reprehenderit, rerum error earum?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Card'"
            :link="'/patterns/container/card'"
            :accessibility="true"
            :version="'1.0.5'"
            >Cards have a raised profile and has shadow. Meant to visually
            display prominence over flat items.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Panel'"
            :link="'/patterns/container/panel'"
            :accessibility="true"
            :version="'1.1.0'"
            >Panels remain on the flat surface of the page. Bounding container
            can have background color applied to show slight prominence. Still
            not a card.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Disclosure'"
            :link="'/patterns/container/disclosure'"
            :accessibility="true"
            :version="'1.0.5'"
          ></DescriptionBlock>
        </li>
      </ul>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

export default {
  name: "DocsPatternsContainer",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {};
  },
};
</script>
