<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">UI Elements</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>

    <template #lead>
      Links navigate between or within web pages and initiate simple actions.
      They can be used in paragraphs, in groups, or on their own.
    </template>

    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
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
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>

    <template #content>
      <h2 id="anatomy">Anatomy</h2>
      <h3>Sizing</h3>
      <p>A link should inherit the size of its parent.</p>

      <h3>Color</h3>
      <p>
        All link variants are blue by default. Light and dark variants exist for
        use on colored backgrounds where the default blue does not meet the
        minimum contrast ratio of 4.5:1.
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
      <table class="table my-5">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Light Mode (default)</th>
            <th scope="col">Dark Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>default</code></td>
            <td>asdfas</td>
            <td>afda</td>
          </tr>
          <tr>
            <td><code>light</code></td>
            <td>asdfasdf</td>
            <td>asdfasdf</td>
          </tr>
          <tr>
            <td><code>dark</code></td>
            <td>asdf</td>
            <td>asdfasdf</td>
          </tr>
        </tbody>
      </table>

      <h2 id="variants">Variants</h2>

      <h3>Default</h3>
      <p>
        Default links are within <strong>sentences or paragraphs</strong>,
        underlined, and blue with light and dark variations. They shouldn't
        stand alone; for that, use Quiet links. Apart from color and underline,
        links should match the surrounding text style.
      </p>
      <p>
        For use with links on a white/off-white background. This color should be
        used in most cases.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            Hello! Welcome to the
            <sol-link href="/">Soltice Design System</sol-link> documentation
            website. This is a paragraph example using the
            <sol-link href="/elements/link">link component</sol-link>. Goodbye!
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;a href="/">Soltice Design System&lt;/a>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BLink to="/">Soltice Design System&lt;/BLink></code></pre>
          </template>
          <template #blah>asaf</template>
        </CodeBlock>
      </div>

      <h3>Light</h3>
      <p>For use on dark, static backgrounds (such as purple).</p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="p-3 bg-brand rounded text-light">
              Hello! Welcome to the
              <sol-link
                href="/"
                color="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                >Soltice Design System</sol-link
              >
              documentation website. This is a paragraph example using the
              <sol-link
                href="/elements/link"
                color="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                >link component</sol-link
              >. Goodbye!
              <BLink
                :variant="'light'"
                class="link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >
                light link
              </BLink>
            </div>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;a href="/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/a>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BLink :variant="'light'" class="link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Dark</h3>
      <p>For use on light, static backgrounds (such as gold or light gray).</p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="p-3 bg-beige rounded text-dark">
              Hello! Welcome to the
              <sol-link
                href="/"
                color="link-dark link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                >Soltice Design System</sol-link
              >
              documentation website. This is a paragraph example using the
              <sol-link
                href="/elements/link"
                color="link-dark link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                >link component</sol-link
              >. Goodbye!

              <BLink
                :variant="'dark'"
                class="link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >
                dark link
              </BLink>
            </div>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;a href="/" class="link-dark link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/a>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BLink :variant="'dark'" class="link-dark link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="options">Options</h2>
      <h3>Quiet</h3>
      <p>
        Quiet links are <strong>standalone or in link groups</strong>, typically
        found in sidebars, footers, or "quick links" lists. They can be grouped
        horizontally or vertically, are not underlined, and are blue with light
        and dark variations.
      </p>

      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>
              Hello! Welcome to the Soltice Design System documentation website.
              This is a paragraph explaining how to use the quite link below:
            </p>
            <BLink
              to="/"
              class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
              >Soltice Design System</BLink
            >
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  Soltice Design System
&lt;/a>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BLink to="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Icon</h3>
      <p>
        Icon links are similar to Quiet links but include a left icon. Use them
        only when an icon improves understanding of the link's purpose or
        destination (and not within sentences or paragraphs).
      </p>

      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BLink
              to="/elements/link"
              class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <i class="bi bi-cloud-download me-1"></i>Download report
            </BLink>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  &lt;i class="bi bi-cloud-download me-1">&lt;/i>Download report
&lt;/a>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BLink to="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  &lt;i class="bi bi-cloud-download me-1">&lt;/i>Download report
&lt;/BLink>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="usage">Usage</h2>
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

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Use links to allow users to navigate between unique URLS or
            specific sections of a page.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni, doloremque quia molestiae accusantium maiores hic
              vero rem repudiandae fuga! Eveniet sit amet mollitia fugiat
              similique?
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use links for complex actions—use buttons
            instead.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
      </div>

      <h3>Where to use links</h3>
      <p>
        Links can be within body text, by themselves, or in groups such as
        headers, footers, or "quick links" sections.
      </p>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Use links in paragraphs, headers, footers, sidebars, in other
            groups of links, or alone.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use links in titles or headings.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
      </div>

      <h3>Maintain consistent styling to make links stand out</h3>
      <p>
        Use proper colors, underlines, and states to demarcate links as
        described in the Variants section. While links can have bold or italic
        styles based on context, don't replace standard color and underline
        styles. Avoid non-standard styles for links or using link styles on
        non-link text; it will make it harder for users to navigate.
      </p>

      <h2 id="accessibility">Accessibility</h2>

      <h3>Ensure proper contrast</h3>
      <p>
        Ensure default blue links have a 4.5:1 contrast ratio with the
        background, following the WCAG 2.1 AA standard. If the blue doesn't meet
        this standard on gold, purple, or certain gray backgrounds, use light or
        dark color variants.
      </p>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Use proper variants to ensure sufficient contrast against the
            background.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t mix variants or colors in a way that compromises
            readability.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
      </div>

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

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Link words or short phrases that make sense on their own.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>

        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t link generic terms like “click here” that don&rsquo;t
            make sense out of context.</template
          >
          <template #preview
            ><div class="border rounded-3 p-3 bg-body-tertiary">
              html or images can be inserted here. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quos, mollitia, debitis delectus
              beatae magni.
            </div></template
          >
        </UsageBlock>
      </div>

      <h3>Keyboard functionality</h3>
      <p>
        All links must be accessible via keyboard and other devices, as not
        everyone uses a mouse or touchscreen. Ensure links can be navigated and
        activated using the tab and enter keys in the correct order. Also,
        keyboard navigation should trigger the appropriate focused states for
        links.
      </p>

      <h2 id="implementation">Implementation</h2>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

import { BBreadcrumb, BBreadcrumbItem, BLink } from "bootstrap-vue-next";

export default {
  name: "DocsElementsIndex",
  inject: ["mq"],
  components: {
    Layout,
    CodeBlock,
    UsageBlock,
    PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
    BLink,
  },
  data() {
    return {
      pageTitle: "Link",
    };
  },
};
</script>
