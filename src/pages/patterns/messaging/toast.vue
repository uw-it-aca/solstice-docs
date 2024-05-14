<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/patterns/">Patterns</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/patterns/messaging/">Messaging</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #lead>
      Toasts give timely feedback about non-critical information that does not
      require further action. In Solstice, Toasts are primarily used to
      communicate success and confirmation messages with minimal disruption, and
      they dismiss automatically. For intentionally disruptive messages
      communicating critical information, use an <a href="alert">Alert</a>.
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
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#placement"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Placement</a
              >
            </li>
            <li>
              <a
                href="#states"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >States</a
              >
            </li>
            <li>
              <a
                href="#practices"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Best Practices</a
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
      <h2 id="variants">Variants</h2>
      <h3>Success</h3>
      <p>
        Toasts with the <code>success</code> variant confirm that simple user
        actions have completed as intended, and do not require additional
        attention. This variant carries the semantic color green.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Message here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-toast variant="success">
  Added to plan
&lt;/sol-toast>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Neutral</h3>
      <p>
        Toasts with the <code>neutral</code> variant can be used in rare cases
        to convey timely, non-critical feedback that does not make sense as a
        <code>success</code>. Rather than a semantic color, this variant appears
        in gray.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Internet disconnect</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-toast variant="success">
  Internet disconnect
&lt;/sol-toast>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="anatomy">Anatomy</h2>
      <h3>Sizing</h3>
      <p>
        Toasts occupy a fixed width. By default, their height accommodates one
        line of text; Toasts can expand to fit additional lines, but text length
        should be kept to one line when possible. Since Toasts sit above page
        content, their size neither affects nor is affected by other elements in
        the markup.
      </p>
      <h3>Color</h3>
      <p>
        Alerts always carry a semantic meaning with a corresponding color:
        <code>critical</code> (red), <code>warning</code> (yellow), or
        <code>info</code> (blue). Refer to the Solstice
        <a href="color">Semantic Color Palette</a>
        for appropriate values.
      </p>
      <h3>Dark Mode Support</h3>
      <p>
        Alerts must maintain proper contrast in order to be readable in both
        light and dark modes. By default, the component will update to
        appropriate colors within the semantic color palette.
      </p>
      <p>
        Below are the primitive color values (100-900) for each of the elements
        within an Alert. The <code>success</code> colors are shown as an
        example, but the primitive values apply to each of the semantic colors.
      </p>
      <h2 id="placement">Placement</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>

      <h2 id="states">States</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="practices">Best Practices</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implementation">Technical Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: { Layout, CodeBlock, UsageBlock, PageContents },
  data() {
    return {
      pageTitle: "Toast",
    };
  },
};
</script>
