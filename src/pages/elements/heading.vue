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
   <!--          <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li> -->
            <li>
              <a
                href="#type-system"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Variants</a
              >
            </li>

            <!-- <li>
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
            </li> -->
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <!--
      <h2 id="anatomy">Anatomy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>
        -->
      <h2 id="type-system" class="display-6 ff-encode-sans pt-4 pb-3">
        Type system
      </h2>
      <p>
        The heading styles specified below create a cohesive heading system that
        is visually distinct and hierarchically clear.

        <br />
        <br />

        <strong>Note:</strong> This type system works well for content heavy
        sites, such as this documentation site for the Solstice Design System.
        Different styles may be necessary in a web application.
      </p>
      <h3 class="fw-medium ff-encode-sans pt-4">H1</h3>
      <p>
        Use an H1 for page titles. The H1 will most likely be the largest font
        on the page.
      </p>

      <CodeBlock>
        <template #preview>
          <h1 class="display-5 fw-bold ff-encode-sans">Sample text</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="display-5 fw-bold ff-encode-sans">Text&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <UsageBlock variant="dont"
        ><template #text
          >An H1 should not be used for an application name or logo in a header
          &ndash; instead that content should be either inside an &lt;a> or
          &lt;p> tag, and all within a &lt;header> section.</template
        ></UsageBlock
      >

      <h3 class="fw-medium ff-encode-sans">H2</h3>
      <p>Use an H2 to designate a page section.</p>
      <CodeBlock>
        <template #preview>
          <h2 class="display-6 ff-encode-sans">Sample text</h2>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h2 class="display-6 ff-encode-sans">Text&lt;/h2>
</code></pre>
        </template>
      </CodeBlock>
      <br />

      <h3 class="fw-medium ff-encode-sans">H3</h3>
      <p>Use an H3 to designate a subsection.</p>
      <CodeBlock>
        <template #preview>
          <h3 class="fw-medium ff-encode-sans">Sample text</h3>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h3 class="fw-medium ff-encode-sans">Text&lt;/h3>
</code></pre>
        </template>
      </CodeBlock>
      <br />

      <h3 class="fw-medium ff-encode-sans">H4</h3>
      <p>Use an H4 to designate a subsection of an H3.</p>
      <CodeBlock>
        <template #preview>
          <h4 class="fw-medium ff-open-sans">Sample text</h4>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h4 class="fw-medium ff-open-sans">Text&lt;/h4>
</code></pre>
        </template>
      </CodeBlock>
      <br />

      <h3 class="fw-medium ff-encode-sans">H5 &amp; H6</h3>
      <p>
        Use an H5 and H6 to designate sub sections of their respective parent.
      </p>

      <CodeBlock>
        <template #preview>
          <h5 class="fw-bold ff-open-sans">Sample text</h5>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h5 class="fw-bold ff-open-sans">Text&lt;/h5>
</code></pre>
        </template>
      </CodeBlock>

      <CodeBlock>
        <template #preview>
          <h6 class="fw-bold ff-open-sans">Sample text</h6>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h6 class="fw-bold ff-open-sans">Text&lt;/h6>
</code></pre>
        </template>
      </CodeBlock>
      <br />

      <h2 class="display-6 ff-encode-sans pt-4 pb-3" id="headings">Headings</h2>
      <p>
        Headings are used to provide structure and clarity to page content
        through hierarchy. Like outlines or table of contents, they summarize
        content, communicate levels of importance, and define relationships
        between content.
      </p>
      <h3 class="fw-medium ff-encode-sans">Best practices</h3>
      <ul class="pb-4">
        <li>
          Heading text should be directly related to the content it is
          containing. See Labels page for more guidance.
        </li>
        <li>
          The &lt;H1> tag is typically reserved for the page title or main
          heading, while &lt;H2> and &lt;H3> tags break up sections and
          subsections.
        </li>
        <li>
          Use &lt;H2> through &lt;H6> tags to define peer and parent-child
          relationships in the content.
        </li>
        <li>Avoid having only one subsection heading within a section.</li>
        <li>Use only the headings styles defined in the type system below.</li>
      </ul>

      <UsageBlock variant="dont"
        ><template #text
          >Don't mix heading styles or semantic tags</template
        ></UsageBlock
      >
      <UsageBlock variant="do"
        ><template #text
          >Do have more than one subsection under a heading?</template
        ></UsageBlock
      >

<!--       <h2 id="usage">Usage</h2>
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
      </p> -->
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
  name: "DocsElementsButton" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: {
    Layout,
    /* CodeBlock, UsageBlock, */ PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  data() {
    return {
      pageTitle: "Heading",
    };
  },
};
</script>
