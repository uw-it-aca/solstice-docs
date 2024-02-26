<template>
  <Layout>
    <template #content>
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

      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Links navigate between or within web pages and initiate simple actions.
        They can be used in paragraphs, in groups, or on their own.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Variants</h2>

      <h3>Default</h3>
      <p class="col-md-9">
        Default links are within <strong>sentences or paragraphs</strong>,
        underlined, and blue with light and dark variations. They shouldn't
        stand alone; for that, use Quiet links. Apart from color and underline,
        links should match the surrounding text style.
      </p>

      <CodeBlock>
        <template #preview>
          Hello! Welcome to the
          <sol-link href="/">Soltice Design System</sol-link> documentation
          website. This is a paragraph example using the
          <sol-link href="/elements/link">link component</sol-link>.
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;a href="/">Soltice Design System&lt;/a>
</code></pre>
          <pre class="language-html">
<code>&lt;sol-link href="/">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Quiet</h3>
      <p class="col-md-9">
        Quiet links are <strong>standalone or in link groups</strong>, typically
        found in sidebars, footers, or "quick links" lists. They can be grouped
        horizontally or vertically, are not underlined, and are blue with light
        and dark variations.
      </p>
      <CodeBlock>
        <template #preview>
          <sol-link href="/" variant="quiet">Soltice Design System</sol-link>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Soltice Design System&lt;/a>
</code></pre>
          <pre class="language-html">
<code>&lt;sol-link href="/" variant="quiet">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Icon</h3>
      <p class="col-md-9">
        Icon links are similar to Quiet links but include a left icon. Use them
        only when an icon improves understanding of the link's purpose or
        destination (and not within sentences or paragraphs).
      </p>
      <CodeBlock>
        <template #preview>
          <sol-link href="/" variant="icon" icon="bi-cloud-download"
            >Download report</sol-link
          >
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  &lt;i class="bi bi-cloud-download me-1">&lt;/i>Download report
&lt;/a>
</code></pre>
          <pre class="language-html">
<code>&lt;sol-link href="/" variant="icon" icon="bi-cloud-download">Download report&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

      <h2>Anatomy</h2>
      <h3>Sizing</h3>
      <p>A link should inherit the size of its parent.</p>

      <h3>Color</h3>
      <p>
        All link variants are blue by default. Light and dark variants exist for
        use on colored backgrounds where the default blue does not meet the
        minimum contrast ratio of 4.5:1.
      </p>

      <p>
        <strong>Primary Blue (Default):</strong> For use with links on a
        white/off-white background. This color should be used in most cases.
      </p>
      <div>snippet</div>

      <p>
        <strong>Light variants:</strong> For use on dark, static backgrounds
        (such as purple).
      </p>
      <CodeBlock>
        <template #preview>
          <div class="p-3 bg-brand rounded">
            <sol-link href="/" variant="quiet" color="link-light"
              >Soltice Design System</sol-link
            >
          </div>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;sol-link href="/" variant="quiet" color="link-light">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

      <p>
        <strong>Dark variants:</strong> For use on light, static backgrounds
        (such as gold or light gray).
      </p>

      <h3>Dark Mode Support</h3>
      <p>
        Links must maintain proper contrast in order to be readable in both
        light and dark modes. If a link's background switches between modes, its
        color should too. If the background remains constant, the link color
        stays the same. In most cases, this means that primary blue links will
        change, while light and dark variants used on static colored backgrounds
        will not.
      </p>

      <h2>Usage</h2>
      <h3>Behavior</h3>
      <p>
        Links usually open in the same tab. If users hold the command/control
        key, links open in a new tab. Only set links to open in a new tab by
        default if they redirect users outside of the UW or interrupt the
        current workflow.
      </p>

      <h3>How to use links</h3>
      <p>Links can be used for:</p>
      <ul>
        <li>Navigating between websites, pages, or page sections.</li>
        <li>Downloading files like PDFs or software.</li>
        <li>Launching the default email client with preset details.</li>
        <li>Logging out of sites or apps.</li>
      </ul>

      <UsageBlock variant="do">hello world blah adsfasdf</UsageBlock>
      <UsageBlock variant="dont"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque
        maxime, possimus, officiis dolorum ratione vel doloribus aut obcaecati
        qui alias aliquid corporis quisquam distinctio at ipsum animi tenetur
        quos?</UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text>hello world blah asdfasdf</template>
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <UsageBlock variant="do">
        <template #text>hello world blah</template>
        <template #preview>
          <svg
            class=""
            width="100%"
            height="170"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Responsive image"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
        </template>
      </UsageBlock>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";

export default {
  name: "DocsElementsIndex",
  components: { Layout, CodeBlock, UsageBlock },
  data() {
    return {
      pageTitle: "Link",
    };
  },
};
</script>
