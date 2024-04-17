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

    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum
        delectus tempora totam corrupti maxime, quam repellendus a. A similique
        laborum numquam illo corrupti inventore sunt in quaerat quibusdam
        accusantium.
      </p>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#foundations"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Foundations</a
              >
            </li>
            <li>
              <a
                href="#variants"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Variants</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="foundations" class="mb-3">Foundations of a Layout</h2>
      <h3>What is Layout?</h3>
      <p>
        A “layout” refers to the arrangement and organization of content and
        elements on a web page. Layouts determine how information is presented
        and ultimately how users interact with the content on a web page.
      </p>
      <h2 id="foundations" class="mb-3">Variants</h2>

      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Topbar'"
            :link="'/foundations/layouts/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Sidebar'"
            :link="'/foundations/layouts/sidebar'"
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
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

export default {
  name: "DocsLayout",
  components: {
    Layout,
    DescriptionBlock,
    /*CodeBlock,
    UsageBlock,*/
    PageContents,
  },
  data() {
    return {
      pageTitle: "Layouts",
    };
  },
};
</script>
