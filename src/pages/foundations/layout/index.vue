<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
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
    </template>

    <template #lead>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
      magnam a asperiores perspiciatis voluptatem culpa, unde minus itaque,
      repellat adipisci quia cum ipsum fugit, nam illo! Vitae culpa deleniti
      reiciendis!
    </template>

    <template #content>
      <p class="col-md-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum
        delectus tempora totam corrupti maxime, quam repellendus a. A similique
        laborum numquam illo corrupti inventore sunt in quaerat quibusdam
        accusantium.
      </p>

      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Topbar'"
            :link="'/foundations/layout/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Sidebar'"
            :link="'/foundations/layout/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></DescriptionBlock>
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
