<template>
  <Layout :page-title="pageTitle">
    <template #head>
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

      <p class="lead text-muted">
        Links navigate between or within web pages and initiate simple actions.
        They can be used in paragraphs, in groups, or on their own.
      </p>

      <hr class="w-50 d-inline-block" />
    </template>

    <template #subnav>
      <PageContents>
        <h2>On this page</h2>
        <ul>
          <li>first</li>
          <li>lkasjdfldaksfj</li>
          <li>askjdflkasdjf</li>
          <li>lkasjdfldaksfj</li>
        </ul>
      </PageContents>
    </template>

    <template #content>
      <h2>Variants</h2>

      <h3>Default</h3>
      <p>
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
      <p>
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
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  Soltice Design System
&lt;/a>
</code></pre>
          <pre class="language-html">
<code>&lt;sol-link href="/" variant="quiet">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Icon</h3>
      <p>
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
      <CodeBlock>
        <template #preview>
          <sol-link href="/">Soltice Design System</sol-link>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;sol-link href="/">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

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
      <CodeBlock>
        <template #preview>
          <div class="p-3 bg-beige rounded">
            <sol-link href="/" variant="quiet" color="link-dark"
              >Soltice Design System</sol-link
            >
          </div>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;sol-link href="/" variant="quiet" color="link-dark">Soltice Design System&lt;/sol-link>
</code></pre>
        </template>
      </CodeBlock>

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

      <UsageBlock>
        <template #text
          >Use links to allow users to navigate between unique URLS or specific
          sections of a page.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t use links for complex actions—use buttons
          instead.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <h3>Where to use links</h3>
      <p>
        Links can be within body text, by themselves, or in groups such as
        headers, footers, or "quick links" sections.
      </p>

      <UsageBlock>
        <template #text
          >Use links in paragraphs, headers, footers, sidebars, in other groups
          of links, or alone.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #text>Don&rsquo;t use links in titles or headings.</template>
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <h3>Maintain consistent styling to make links stand out</h3>
      <p>
        Use proper colors, underlines, and states to demarcate links as
        described in the Variants section. While links can have bold or italic
        styles based on context, don't replace standard color and underline
        styles. Avoid non-standard styles for links or using link styles on
        non-link text; it will make it harder for users to navigate.
      </p>

      <h2>Accessibility</h2>

      <h3>Ensure proper contrast</h3>
      <p>
        Ensure default blue links have a 4.5:1 contrast ratio with the
        background, following the WCAG 2.1 AA standard. If the blue doesn't meet
        this standard on gold, purple, or certain gray backgrounds, use light or
        dark color variants.
      </p>

      <UsageBlock>
        <template #text
          >Use proper variants to ensure sufficient contrast against the
          background.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t mix variants or colors in a way that compromises
          readability.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <h3>Use clear text</h3>
      <ul>
        <li>
          <strong>Use specific, purposeful link text</strong> that doesn't rely
          on surrounding text; screen reader users should be able to understand
          links without extensive context or additional labeling.*
        </li>
        <li>
          <strong>Link the main part of the phrase;</strong> avoid linking vague
          terms like "click here” and “learn more."
        </li>
        <li>
          <strong
            >Maintain consistent text for duplicate destinations within a
            page</strong
          >
          and distinct text for each unique link.
        </li>
        <li>
          <strong>Avoid distracting styling</strong> such as using all caps or
          displaying full URLs in link text.
        </li>
      </ul>

      <p>
        *In cases where additional context is needed, use aria-label or
        aria-labelledby, ensuring they read naturally with surrounding text.
      </p>

      <UsageBlock>
        <template #text
          >Link words or short phrases that make sense on their own.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t link generic terms like “click here” that don&rsquo;t
          make sense out of context.</template
        >
        <template #preview>html or images can be inserted here</template>
      </UsageBlock>

      <h3>Keyboard functionality</h3>
      <p>
        All links must be accessible via keyboard and other devices, as not
        everyone uses a mouse or touchscreen. Ensure links can be navigated and
        activated using the tab and enter keys in the correct order. Also,
        keyboard navigation should trigger the appropriate focused states for
        links.
      </p>

      <h2>Implementation</h2>
      <h3>Properties</h3>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Required</th>
            <th scope="col">Options</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>variant</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>asdfas</td>
          </tr>
          <tr>
            <td>href</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>asdfas</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>asdfas</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>asdfas</td>
          </tr>
        </tbody>
      </table>
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
  name: "DocsElementsIndex",
  inject: ["mq"],
  components: { Layout, CodeBlock, UsageBlock, PageContents },
  data() {
    return {
      pageTitle: "Link",
    };
  },
};
</script>
