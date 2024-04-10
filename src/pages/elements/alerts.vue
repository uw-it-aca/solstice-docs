<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/elements/">Elements</a>
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
        Alerts are semantic messages that intentionally disrupt a user's
        workflow to notify them about issues that require action or provide
        information relevant to a particular task or page section. For quick,
        non-critical messages that disappear on their own, use a
        <a href="/elements/toasts">Toast</a>.
      </p>
      <hr class="w-50 d-inline-block" />
    </template>

    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#variants"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Variants</a
              >
            </li>
            <li>
              <a
                href="#options"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Options</a
              >
            </li>
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#placement"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Placement</a
              >
            </li>
            <li>
              <a
                href="#states"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >States</a
              >
            </li>
            <li>
              <a
                href="#practices"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Best Practices</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
            <li>
              <a
                href="#changlog"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Changelog</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>

    <template #content>
      <h2 id="variants">Variants</h2>
      <h3>Critial</h3>
      <h3>Warning</h3>
      <h3>Info</h3>
      <h2 id="options">Options</h2>
      <h3>Call to Action</h3>
      <h3>Dismiss button</h3>
      <h2 id="anatomy">Anatomy</h2>
      <h3>Size</h3>
      <h3>Text</h3>
      <h3>Color</h3>
      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <h3>Stacking</h3>
      <h2 id="states">States</h2>
      <h2 id="practice">Best Practices</h2>
      <h3>Use Alerts for important, temporary messages</h3>
      <h3>Help the user resolve issues with a call to action</h3>
      <h3>Be concise and link to additional information</h3>
      <h3>Assistive technology & keyboard functionality</h3>
      <h2 id="implementation">Implementation</h2>
      <h2 id="changelog">Changelog</h2>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsElementsIndex",
  inject: ["mq"],
  components: { Layout, CodeBlock, UsageBlock, PageContents },
  data() {
    return {
      pageTitle: "Alerts",
    };
  },
};
</script>
