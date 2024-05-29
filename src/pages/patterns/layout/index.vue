<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/patterns/">Patterns</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>

    <template #lead>
      The layout is a critical foundation of our design system. It provides the
      structure for our visual components and overall user interface.
    </template>

    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Topbar'"
            :link="'/patterns/layout/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
            >Topbar is takes heavy influence from MyUW's currently layout. It
            has a header-based design meant to focus the user on the contents
            below.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Sidebar'"
            :link="'/patterns/layout/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
            >Sidebar is a side navigtion based layout intended to support
            different menu navigation structures. The content is can be fixed or
            fluid.
          </DescriptionBlock>
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
  name: "DocsLayout",
  components: {
    Layout,
    DescriptionBlock,
  },
  data() {
    return {
      pageTitle: "Layout",
    };
  },
};
</script>
