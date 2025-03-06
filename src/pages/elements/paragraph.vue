<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">UI Elements</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#type-system"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Type System</a
              >
       </li>
            <!--
            <li>
              <a
                href="#usage"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
             -->
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="type-system" class="display-6 ff-encode-sans pt-4 pb-3">Type System</h2>
      <h3 class="fw-medium ff-encode-sans">Body</h3>
      <p>
        This is the default font size for most text, and all content contained
        in a &lt;p> tag will automatically display this size.
      </p>

      <CodeBlock>
        <template #preview>
          <p>sample text</p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p>Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <br />
      <h3 class="fw-medium ff-encode-sans">Small body</h3>
      <p>
        For content that is less important than the default-sized content on a
        page, or if there are space constraints, use a small body style.
      </p>

      <CodeBlock>
        <template #preview>
          <p class="small">
            This line of text is meant to be treated as fine print.
          </p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p class="small">Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <br />
      <h3 class="fw-medium ff-encode-sans">Large body</h3>
      <p>
        Use this style for introductory paragraph, page descriptions, or content
        that needs more focus.
      </p>
      <CodeBlock>
        <template #preview>
          <p class="fs-5">Introductory comments about this page or section.</p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p class="fs-5">Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <UsageBlock variant="dont"
        ><template #text
          >Large body text should not appear below an H6 heading, as this would
          result in a heading that is smaller than the content.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <h6 class="fw-bold ff-open-sans">Heading 6 sample</h6>
            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.

</p>
          </div></template
        ></UsageBlock
      >
      <!-- <h2 id="usage" class="display-6 ff-encode-sans pt-4 pb-3">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility" class="display-6 ff-encode-sans pt-4 pb-3">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p> -->

    </template>
    <template #author>Cayla Snooke</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
// import CodeBlock from "@/components/CodeBlock.vue";
// import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

export default {
  name: "DocsElementsParagraph" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: {
    Layout,
    /* CodeBlock, UsageBlock, */ PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  data() {
    return {
      pageTitle: "Paragraph",
    };
  },
};
</script>
