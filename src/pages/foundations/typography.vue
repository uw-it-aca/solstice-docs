<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/foundations">Foundations</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
      dolores repudiandae natus dolorem recusandae! Incidunt consequatur tenetur
      ad totam, placeat ipsa explicabo, eaque id blanditiis libero culpa veniam
      aliquam!
    </template>
    <template #content>
      <p class="text-danger">
        All following content is still TBD
        <br />
        <a
          href="https://www.washington.edu/brand/graphic-elements/font-download/"
          target="_blank"
          >https://www.washington.edu/brand/graphic-elements/font-download/</a
        >
      </p>

      <h3>Open Sans</h3>
      <p>
        Open Sans is the default font-family used by UW. It is typically set at
        the page body level.
      </p>
      <CodeBlock>
        <template #preview>
          <div class="ff-open-sans">Lorem ipsum dolor... Open Sans</div>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;body class="ff-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Encode Sans Condensed</h3>
      <p>Encode Sans Condensed is the heading font-family used by UW</p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-encode-sans">
            Heading... Encode Sans Condensed
          </h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-encode-sans">Heading... Encode Sans Condensed&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

export default {
  name: "DocsFoundationsTypography",
  components: { Layout, CodeBlock, BBreadcrumb, BBreadcrumbItem },
  data() {
    return {
      pageTitle: "Typography",
    };
  },
};
</script>
