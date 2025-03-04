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

    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#font-families"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Font families</a
              >
            </li>
            <li>
              <a
                href="#usability-accessibility-principles"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usability &amp; accessibility principles</a
              >
            </li>
            <li>
              <a
                href="#headings"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Headings</a
              >
            </li>
            <li>
              <a
                href="#styling-decoration"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Styling &amp; decoration</a
              >
            </li>
            <li>
              <a
                href="#alignment-spacing"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Alignment &amp; spacing</a
              >
            </li>
            <li>
              <a
                href="#type-system"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Type system</a
              >
            </li>

            <li>
              <a
                href="#technical-implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Technical implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>

    <template #content>
      <h2 class="display-6 ff-encode-sans pt-3 pb-3" id="font-families">
        Font families
      </h2>
      <p>
        The Solstice Design System uses the Encode Sans and Open Sans font
        families. Use only these provided font families &ndash; both have good
        readability, are widely supported, and are in alignment with the
        University of Washington&apos;s brand guides.
      </p>

      <h3 class="fw-medium ff-encode-sans">Encode Sans</h3>
      <p>Encodes Sans is only used for larger headings.</p>
      <div class="border rounded-3 p-3 bg-body-tertiary col-6">
        <p class="fw-bold fs-4 ff-open-sans">Go dawgs!</p>
        <p class="fw-medium fs-4 ff-open-sans">Go dawgs!</p>
        <p class="fw-light fs-4 ff-open-sans">Go dawgs!</p>
      </div>

      <h3 class="fw-medium ff-encode-sans pt-4">Open Sans</h3>
      <p>
        Open Sans is used for body text, smaller headings, and most UI
        components (e.g. messaging, form labels).
      </p>
      <div class="border rounded-3 p-3 bg-body-tertiary col-6">
        <p class="fw-bold fs-4 ff-encode-sans">Go dawgs!</p>
        <p class="fw-medium fs-4 ff-encode-sans">Go dawgs!</p>
        <p class="fw-light fs-4 ff-encode-sans">Go dawgs!</p>
      </div>

      <br />
      <hr />
      <h2
        class="display-6 ff-encode-sans pt-4 pb-3"
        id="usability-accessibility-principles"
      >
        Usability & accessibility principles
      </h2>
      <h3 class="fw-medium ff-encode-sans">Usability</h3>
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
      <h3 class="fw-medium ff-encode-sans">Accessibility</h3>
      <ul>
        <li>
          Ensure all headings on a page are semantically defined in code. Note
          that clear and semantic headings are also important for good search
          results (SEO).
        </li>
        <li>
          Ensure your heading hierarchy is clear and logical &ndash; don&apos;t
          skip heading levels.
        </li>
        <li>
          If you emphasize something using large text, it should likely be a
          semantic HTML heading.
        </li>
      </ul>

      <br />
      <hr />

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

      <br />
      <hr />

      <h2 class="display-6 ff-encode-sans pt-4 pb-3" id="styling-decoration">
        Styling & decoration
      </h2>
      <h3 class="fw-medium ff-encode-sans">Color</h3>
      <ul>
        <li>
          You shouldn&apos;t need to change the color of text, as it is defined
          in the Solstice style sheet and is an inherited property of HTML
          elements and/or Solstice and Bootstrap themes.
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
      <h3 class="fw-medium ff-encode-sans">Decoration</h3>
      <ul>
        <li>
          <strong>Bold & italics</strong> &ndash; Bold and italic styles are
          used to draw attention and create emphasis. Italicizing words or
          strings, however, can decrease readability. Both should be used
          sparingly so as to not diminish their effectiveness.
        </li>
        <li>
          <strong>Underlining</strong> &ndash; Avoid underlining text as it can
          conflict with link styling and may falsely indicate that text is
          interactive.
        </li>
        <li>
          <strong>Strikethrough</strong> &ndash; Avoid using “strikethrough”. If
          you need to indicate that there has been a change to content, do so in
          another way.
        </li>
        <li>
          <strong>Outlining</strong> &ndash; Text should never be outlined. Use
          bold or italic styles to draw attention or create emphasis.
        </li>
        <li>
          <strong>Motion effects</strong> &ndash; Do not use motion effects on
          text. Text should always remain static, unless it is
          scaling/rearranging due to responsive design.
        </li>
      </ul>

      <br />

      <h3 class="fw-medium ff-encode-sans">Case</h3>
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
      <h2 class="display-6 ff-encode-sans pt-4 pb-3" id="alignment-spacing">
        Alignment & spacing
      </h2>
      <h3 class="fw-medium ff-encode-sans">Text alignment</h3>
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

      <h3 class="fw-medium ff-encode-sans">Text layout</h3>
      <ul>
        <li>
          Text lines should ideally be limited to 45-85 characters.
          <a href="/foundations/layout" target="_blank">Review Layout</a> page
          for specific line length recommendations.
        </li>
      </ul>

      <h3 class="fw-medium ff-encode-sans">Truncation</h3>
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


      <br />
      <hr />

      <h2
        class="display-6 ff-encode-sans pt-4 pb-3"
        id="technical-implementation"
      >
        Technical Implementation
      </h2>
      <p>
        Define text sizes in REM, this ensures fonts will scale or display the
        same in mobile and desktop formats.
      </p>
      <br />
      <hr />
    </template>

    <template #author>Cayla Snooke</template>
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
