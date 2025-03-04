<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">UI Elements</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
      dolores repudiandae natus dolorem recusandae! Incidunt consequatur tenetur
      ad totam, placeat ipsa explicabo, eaque id blanditiis libero culpa veniam
      aliquam!
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
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
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="anatomy">Anatomy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>
      <h2 id="variants">Variants</h2>
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
      <h3 class="fw-medium ff-encode-sans">Body small</h3>
      <p>
        For content that is less important than the default-sized content on a
        page, or if there are space constraints, use a Body small style.
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
      <h3 class="fw-medium ff-encode-sans">Body large</h3>
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
          >Body large should not appear below an H6 heading, as this would
          result in a heading that is smaller than the content.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <h6 class="fw-bold ff-open-sans">Heading 6 text</h6>
            <p class="large">Body large text</p>
          </div></template
        ></UsageBlock
      >

      <h2 id="options">Options</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam
        doloremque quaerat nulla enim, magni ut pariatur est dolorum ullam sint
        rerum odio hic perspiciatis, commodi adipisci, vero sapiente impedit?
      </p>
      <h2 id="usage">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implementation">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>
    </template>
    <template #author>Your Name</template>
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
