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
          <div class="ff-open-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet praesentium itaque voluptatum cupiditate repellat ipsa! Quae nam magnam quos veniam iusto cupiditate, mollitia ut ex aliquam quidem. Necessitatibus, consectetur ab.</div>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;body class="ff-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>


      <h3>Encode Sans</h3>
      <p>Encode Sans is the heading font-family used by UW</p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-encode-sans">
            Heading... Encode Sans
          </h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-encode-sans">Heading... Encode Sans&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Roboto</h3>
      <p>Encode Sans is the heading font-family used by UW</p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-encode-sans">
            Heading... Roboto
          </h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-roboto">Heading... Roboto&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Roboto Slab</h3>
      <p>Roboto Slab is...</p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-roboto-slab">
            Heading... Roboto Slab
          </h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-roboto-slab">Heading... Roboto Slab&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Rozha One</h3>
      <p>
        Rozha One is...
      </p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-rozha-one">
            Heading... Rozha One
          </h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-rozha-one">Heading... Rozha One&lt;/h1>
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
