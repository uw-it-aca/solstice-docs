<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/foundations">Foundations</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Font families and a type system, as well as best practices for creating
      readable and clear hierarchy of content
    </template>
    <template #content>
      <h2 class="display-6 ff-encodesans">Font families</h2>
      <p>
        The Solstice Design System uses the Encode Sans and Open Sans font
        families. Use only these provided font families – both have good
        readability, are widely supported, and are in alignment with the
        University of Washington’s brand guides.
      </p>

      <h3 class="fw-medium ff-encodesans">Encode Sans</h3>
      <p>Encodes Sans is only used for larger headings. [EXAMPLE TEXT]</p>

      <h3 class="fw-medium ff-encodesans">Open Sans</h3>
      <p>
        Open Sans is used for body text, smaller headings, and most UI
        components (e.g. messaging, form labels). [EXAMPLE TEXT]
      </p>

      <br />
      <hr />
      <h2 class="display-6 ff-encodesans">
        Usability & accessibility principles
      </h2>
      <h3 class="fw-medium ff-encodesans">Usability</h3>
      <ul>
        <li>
          Maintain Consistency Across Pages: Use the same fonts, sizes, and
          spacing for similar elements (e.g., headings, body text, buttons)
          across all pages to create a unified experience. Default styles for
          each HTML element and Bootstrap component are established in the
          Solstice and Bootstrap stylesheets, you should avoid overriding these
          default font styles.
        </li>
      </ul>
      <h3 class="fw-medium ff-encodesans">Accessibility</h3>
      <ul>
        <li>
          Ensure all headings on a page are semantically defined in code. Note
          that clear and semantic headings are also important for good search
          results (SEO).
        </li>
        <li>
          Ensure your heading hierarchy is clear and logical – don’t skip
          heading levels.
        </li>
        <li>
          If you emphasize something using large text, it should likely be a
          semantic HTML heading.
        </li>
      </ul>

      <br />
      <hr />

      <h2 class="display-6 ff-encodesans">Headings</h2>
      <p>
        Headings are used to provide structure and clarity to page content
        through hierarchy. Like outlines or table of contents, they summarize
        content, communicate levels of importance, and define relationships
        between content.
      </p>
      <h3 class="fw-medium ff-encodesans">Best practices</h3>
      <ul>
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
        ><template #text>Don't mix heading styles or semantic tags</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img /></div></template
      ></UsageBlock>
      <UsageBlock variant="do"
        ><template #text
          >Do have more than one subsection under a heading?</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img /></div></template
      ></UsageBlock>

      <br />
      <hr />

      <h2 class="display-6 ff-encodesans">Styling & decoration</h2>
      <h3 class="fw-medium ff-encodesans">Color</h3>
      <ul>
        <li>
          You shouldn’t need to change the color of text, as it is defined in
          the Solstice style sheet and is an inherited property of HTML elements
          and/or Solstice and Bootstrap themes.
        </li>
        <li>
          All color choices in the Solstice Design System adhere to the
          accessibility requirements of UW {link to the UW guide}, further
          outlined in the
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
            target="_blank"
            >WCAG Contrast</a
          >
          guide, and are dark mode compatible.
        </li>
        <li>
          We strongly recommend against using branding colors for headings or
          page titles. Branding colors in headings add unnecessary visual
          complexity to a page and can be misinterpreted as having a semantic
          meaning.
        </li>
        <li>
          See the comprehensive
          <a href="/foundations/color" target="_blank">Color</a> page for more
          guidance.
        </li>
      </ul>

      <br />
      <h3 class="fw-medium ff-encodesans">Decoration</h3>
      <ul>
        <li>
          <strong>Bold & italics</strong> – Bold and italic styles are used to
          draw attention and create emphasis. Italicizing words or strings,
          however, can decrease readability. Both should be used sparingly so as
          to not diminish their effectiveness.
        </li>
        <li>
          <strong>Underlining</strong> – Avoid underlining text as it can
          conflict with link styling and may falsely indicate that text is
          interactive.
        </li>
        <li>
          <strong>Strikethrough</strong> – Avoid using “strikethrough”. If you
          need to indicate that there has been a change to content, do so in
          another way.
        </li>
        <li>
          <strong>Outlining</strong> – Text should never be outlined. Use bold
          or italic styles to draw attention or create emphasis.
        </li>
        <li>
          <strong>Motion effects</strong> – Do not use motion effects on text.
          Text should always remain static, unless it is scaling/rearranging due
          to responsive design.
        </li>
      </ul>

      <br />

      <h3 class="fw-medium ff-encodesans">Case</h3>
      <ul>
        <li>
          Use sentence case in most situations and
          <span class="text-uppercase">AVOID ALL CAPS</span>.
          <a href="/foundations/labels" target="_blank"
            >Review Labels for more details</a
          >.
        </li>
      </ul>

      <br />
      <hr />
      <h2 class="display-6 ff-encodesans">Alignment & spacing</h2>
      <h3 class="fw-medium ff-encodesans">Text alignment</h3>
      <ul>
        <li>
          Left-align text within content headings and paragraphs. This supports
          the “F” shaped scanning pattern that most western readers use.
          Deviating from this slows readers down.
        </li>
        <li>
          Text should never be set to “justify” (aligned to both the left and
          right margins). This results in inconsistent spacing between words and
          affects readability.
        </li>
      </ul>

      <h3 class="fw-medium ff-encodesans">Text layout</h3>
      <ul>
        <li>
          Text lines should ideally be limited to 45-85 characters.
          <a href="/foundations/layout" target="_blank">Review Layout</a> page
          for specific line length recommendations.
        </li>
      </ul>

      <h3 class="fw-medium ff-encodesans">Truncation</h3>
      <ul>
        <li>
          Avoid truncation, in any text elements.
          <a href="/foundations/labels" target="_blank"
            >Review Labels for more details</a
          >.
        </li>
      </ul>

      <!-- Type system -->
      <br />
      <hr />
      <h2 class="display-6 ff-encodesans">Type system</h2>
      <p>
        The heading styles specified below create a cohesive heading system that
        is visually distinct and hierarchically clear.

        <br />
        <br />

        <strong>Note:</strong> This type system works well for content heavy
        sites, such as this documentation site for the Solstice Design System.
        Different styles may be necessary in a web application.
      </p>
      <h3 class="fw-medium ff-encodesans">H1</h3>
      <p>
        Use an H1 for page titles. The H1 will most likely be the largest font
        on the page.
      </p>

      <CodeBlock>
        <template #preview>
          <h1 class="display-5 fw-bold ff-encodesans">Sample text</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="display-5 fw-bold ff-encodesans">Text&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <UsageBlock variant="dont"
        ><template #text
          >An H1 should not be used for an application name or logo in a header
          – instead that content should be either inside an &lt;a> or &lt;p>
          tag, and all within a &lt;header> section.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img /></div></template
      ></UsageBlock>

      <h3 class="fw-medium ff-encodesans">H2</h3>
      <p>Use an H2 to designate a page section.</p>
      <CodeBlock>
        <template #preview>
          <h2 class="display-6 ff-encodesans">Sample text</h2>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h2 class="display-6 ff-encodesans">Text&lt;/h2>
</code></pre>
        </template>
      </CodeBlock>
<br>

      <h3 class="fw-medium ff-encodesans">H3</h3>
      <p>Use an H3 to designate a subsection.</p>
      <CodeBlock>
        <template #preview>
          <h3 class="fw-medium ff-encodesans">Sample text</h3>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h3 class="fw-medium ff-encodesans">Text&lt;/h3>
</code></pre>
        </template>
      </CodeBlock>
      <br>


      <h3 class="fw-medium ff-encodesans">H4</h3>
      <p>Use an H4 to designate a subsection of an H3.</p>
      <CodeBlock>
        <template #preview>
          <h4 class="fw-medium ff-opensans">Sample text</h4>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h4 class="fw-medium ff-opensans">Text&lt;/h4>
</code></pre>
        </template>
      </CodeBlock>
      <br>

        <!-- working below here -->
        <h3 class="fw-medium ff-encodesans">H5 & H6</h3>
        <p>Use an H5 and H6 to designate sub sections of their respective parent.</p>

        <CodeBlock>
        <template #preview>
          <h5 class="fw-bold ff-opensans">Sample text</h5>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h5 class="fw-bold ff-opensans">Text&lt;/h5>
</code></pre>
        </template>
      </CodeBlock>

      <CodeBlock>
        <template #preview>
          <h6 class="fw-bold ff-opensans">Sample text</h6>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h6 class="fw-bold ff-opensans">Text&lt;/h6>
</code></pre>
        </template>
      </CodeBlock>
      <br>



      <h3 class="fw-medium ff-encodesans">Body</h3>
      <h3 class="fw-medium ff-encodesans">Body small</h3>
      <h3 class="fw-medium ff-encodesans">Body large</h3>

      <br />
      <h2 class="display-6 ff-encodesans">two</h2>
      <h3 class="fw-medium ff-encodesans">three</h3>

      <!-- <CodeBlock>
        <template #preview>
          <h1 class="ff-encode-sans">Heading... Encode Sans</h1>
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
          <h1 class="ff-encode-sans">Heading... Roboto</h1>
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
          <h1 class="ff-roboto-slab">Heading... Roboto Slab</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-roboto-slab">Heading... Roboto Slab&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <h4>Rozha One</h4>
      <p>Rozha One is...</p>

      <CodeBlock>
        <template #preview>
          <h1 class="ff-rozha-one">Heading... Rozha One</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-rozha-one">Heading... Rozha One&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <h2>Sizing</h2>

      <p>
        You can size fonts down using the <code>.small</code> class or the
        <code>&lt;small></code> element tag. Recommendation is to start with
        <code>.fs-x</code> classes.
      </p>
      <CodeBlock>
        <template #preview>
          <h1 class="ff-encode-sans">Heading (default - 40px)</h1>
          <h1 class="ff-encode-sans">
            <small>Heading (element - 35px)</small>
          </h1>
          <h1 class="ff-encode-sans">
            <span class="small">Heading (class - 35px)</span>
          </h1>
          <h1 class="ff-encode-sans fs-2">Heading (fs-2 - 32px)</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="ff-encode-sans">
  Heading (default)
&lt;/h1>
&lt;h1 class="ff-encode-sans">
  &lt;small>Heading (element)&lt;/small>
&lt;/h1>
&lt;h1 class="ff-encode-sans">
  &lt;span class="small">Heading (class)&lt;/span>
&lt;/h1>
&lt;h1 class="ff-encode-sans fs-2">
  Heading (fs-2)
&lt;/h1>
</code></pre>
        </template>
      </CodeBlock> -->
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
