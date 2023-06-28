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
      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        The Solstice Design System uses Encode Sans Regular as a primary
        typeface and Open Sans as a secondary typeface. These two typefaces were
        chosen for their readability and alignment with the University of
        Washington's brand.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

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
          <div class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans</div>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;body class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Encode Sans Condensed</h3>
      <p>Encode Sans Condensed is the heading font-family used by UW</p>

      <CodeBlock>
        <template #preview>
          <div class="axdd-font-encode-sans">
            Lorem ipsum dolor... Encode Sans Condensed
          </div>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;body class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
    <template #modified>May 3, 2023</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  name: "DocsTypography",
  components: { Layout, CodeBlock },
  data() {
    return {
      pageTitle: "Typography",
    };
  },
};
</script>
