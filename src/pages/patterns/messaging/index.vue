<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Messaging</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Messaging</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto tempore
        omnis esse quasi assumenda quae voluptatem, dolores perspiciatis
        facilis. Iste cupiditate similique quis nam amet officiis? Accusantium
        ducimus vel sit!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Alert'"
            :link="'/patterns/messaging/alert'"
            :accessibility="true"
            :version="'1.0.x'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Toast'"
            :link="'/patterns/messaging/toast'"
            :accessibility="true"
            :version="'1.0.x'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Banner'"
            :link="'/patterns/messaging/banner'"
            :accessibility="true"
            :version="'1.0.x'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Modal'"
            :link="'/patterns/messaging/modal'"
            :accessibility="true"
            :version="'1.0.x'"
            >aksdfjaasdf aka lightbox</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

export default {
  name: "DocsPatternsLayouts",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {};
  },
};
</script>
