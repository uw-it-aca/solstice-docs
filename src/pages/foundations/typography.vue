<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/foundations">Foundations</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      The right combination of font families, text alignment, and text styling
      creates a readable and clear hierarchy of content.
    </template>

    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#font-families"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Font Families</a
              >
            </li>
            <li>
              <a
                href="#usability-accessibility-principles"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usability &amp; Accessibility Principles</a
              >
            </li>
            <li>
              <a
                href="#styling-decoration"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Styling &amp; Decoration</a
              >
            </li>
            <li>
              <a
                href="#alignment-spacing"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Alignment &amp; Spacing</a
              >
            </li>
            <li>
              <a
                href="#technical-implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Technical Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>

    <template #content>
      <h2 class="display-6 ff-encode-sans pt-3 pb-3" id="font-families">
        Font Families
      </h2>
      <p>
        The Solstice Design System uses the Encode Sans and Open Sans font
        families.
      </p>

      <p>
        <strong>Use only these provided font families.</strong> Both have good
        readability, are widely supported, and are in alignment with the
        University of Washington&apos;s
        <a
          href="https://www.washington.edu/brand/brand-elements/fonts/"
          target="_blank"
          >brand guides</a
        >
        .
      </p>

      <p>
        Please visit
        <a href="/elements/heading" target="_blank">Headings</a>
        and
        <a href="/elements/paragraph" target="_blank">Paragraph</a>

        pages for more details and code snippets.
      </p>

      <h3 class="fw-medium ff-encode-sans pt-3">Encode Sans</h3>
      <p>Encodes Sans is <strong>only used for larger headings.</strong></p>
      <div class="border rounded-3 p-3 col-6">
        <p class="display-5 fw-bold ff-encode-sans pt-2">Solstice h1</p>
        <p class="display-6 ff-encode-sans">Solstice h2</p>
        <p class="fs-3 fw-medium ff-encode-san">Sosltice h3</p>
      </div>

      <h3 class="fw-medium ff-encode-sans pt-5">Open Sans</h3>
      <p>
        Open Sans is used for
        <strong>body text, smaller headings, and most UI components</strong>
        (e.g. alert messaging, form labels, buttons).
      </p>
      <div class="border rounded-3 p-3 col-6">
        <p class="fs-4 ff-open-sans pt-2">Solstice h4</p>
        <p class="fw-bold fs-5 ff-open-sans">Solstice h5</p>
        <p class="fw-bold fs-4 ff-open-sans pb-4">Solstice h6</p>
        <p>Solstice body text</p>
        <p><small>Solstice small body text</small></p>
        <p class="fs-5">Solstice large body text</p>
      </div>

      <br />
      <hr />

      <h2
        class="display-6 ff-encode-sans pt-4 pb-3"
        id="usability-accessibility-principles"
      >
        Usability & Accessibility Principles
      </h2>
      <ul>
        <li class="pb-3">
          <strong>Maintain consistency across pages.</strong> Use the same
          fonts, sizes, and spacing for similar elements (e.g., headings, body
          text, buttons) across all pages to create a unified experience.
        </li>
        <li class="pb-3">
          <strong>Avoid overriding the default font styles.</strong>
          Default styles for each HTML element and Bootstrap component are
          established in the Solstice and Bootstrap stylesheets, you should.
        </li>
        <li>
          <strong>Large text will likely be an HTML heading.</strong> If you
          emphasize something using large text, a heading tag should be used to
          call out the information to screen readers.
        </li>
      </ul>

      <br />
      <hr />

      <h2 class="display-6 ff-encode-sans pt-4 pb-3" id="styling-decoration">
        Styling & Decoration
      </h2>
      <p>
        See the comprehensive
        <a href="/foundations/color" target="_blank">Color</a> page for more
        guidance.
      </p>
      <h3 class="fw-medium ff-encode-sans pt-3">Color</h3>
      <ul>
        <li class="pb-3">
          <strong>Colors are defined in the Solstice style sheet.</strong> You
          shouldn&apos;t need to change the color of text, as it is defined in
          the Solstice style sheet and is an inherited property of HTML elements
          and/or Solstice and Bootstrap themes.
        </li>
        <li class="pb-3">
          <strong>Text color and value pairings are accessible.</strong> All
          color choices in the Solstice Design System adhere to the
          <a
            href="https://www.washington.edu/accesstech/checklist/contrast/"
            target="_blank"
            >accessibility requirements of UW</a
          >, further outlined in
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
            target="_blank"
            >WCAG Contrast guide</a
          >, and are dark mode compatible.
        </li>
        <li>
          <strong>Keep text greyscale.</strong> We strongly recommend not using
          branding colors (beige, purples, accent palette) for headings or page
          titles. Branding colors in headings add unnecessary visual complexity
          to a page and can be misinterpreted as having a semantic meaning.
        </li>
      </ul>

      <h3 class="fw-medium ff-encode-sans pt-3">Decoration</h3>
      <ul>
        <li class="pb-3">
          <strong
            >Bold and italic styles draw attention, and can also communicate
            semantic meaning.</strong
          >
          Italicizing words or strings, however, can decrease readability. Both
          should be used sparingly so as to not diminish their effectiveness.
        </li>
        <li class="pb-3">
          <strong>Underlining text can conflict with link styling.</strong>
          Avoid underlining text as it may falsely indicate that text is
          interactive.
        </li>
        <li class="pb-3">
          <strong>Strikethrough affects readability.</strong>
          Avoid using the strikethrough style on text. If you need to indicate
          that there has been a change to content, try do so in another way.
        </li>
        <li class="pb-3">
          <strong
            >Instead of outlining text, use bold or italic styles.
          </strong>
          Text should never be outlined. While outlining text may seem like a
          way to make text bolder, the characters and character spacing
          don&apos;t account for the outline; this results in bloated and hard
          to read text. Instead, utilize font weights or styles like bold and
          italic to create emphasis.
        </li>
        <li class="pb-3">
          <strong>Text should always remain static.</strong>
          Motion graphics should never be applied to text. The only situations
          where text “moves” are when scaling/rearranging due to responsive
          design or if a user activates an optional action.
        </li>
      </ul>
      <UsageBlock variant="do"
        ><template #text
          >It&apos;s best to use &lt;strong> and &lt;em> to ensure the semantic
          meaning is being conveyed. In the very rare case where you only want a
          stylistic change and don&apos;t need to convey semantic meaning,
          &lt;b> &lt;i> can be used.</template
        ></UsageBlock
      >

      <h3 class="fw-medium ff-encode-sans">Case</h3>
      <ul>
        <li>
          Use sentence case in most situations and
          <span class="text-uppercase">AVOID</span> all caps. Headings may use
          title case, especially an &lt;H1>/Page title. Review
          <a href="/foundations/labels" target="_blank">Labels</a> for more
          details.
        </li>
      </ul>

      <br />
      <hr />
      <h2 class="display-6 ff-encode-sans pt-4 pb-3" id="alignment-spacing">
        Alignment & Spacing
      </h2>
      <h3 class="fw-medium ff-encode-sans">Text alignment</h3>
      <ul>
        <li class="pb-3">
          <strong
            >Left-align text within content headings and paragraphs.
          </strong>
          This supports the “F” shaped scanning pattern that most western
          readers use. Deviating from left alignment slows readers down.
        </li>
        <li>
          <strong>Text should never be set to “justify”.</strong>
          Justifying (aligned to both the left and right margins) text results
          in inconsistent spacing between words and affects readability.
        </li>
      </ul>

      <h3 class="fw-medium ff-encode-sans pt-3">Text layout</h3>
      <ul>
        <li>
          <strong
            >Text lines should ideally be limited to 45-85 characters.</strong
          >
          Review the
          <a href="/foundations/layout" target="_blank">Layout</a> page for more
          details.
        </li>
      </ul>

      <h3 class="fw-medium ff-encode-sans pt-3">Truncation</h3>
      <ul>
        <li>
          <strong>Avoid truncation, in any text elements.</strong> Review
          <a href="/foundations/labels" target="_blank">Labels</a> for more
          details.
        </li>
      </ul>

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
