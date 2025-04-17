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
      creates readable and clearly structured content.
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
      <h2 id="font-families" class="display-6 ff-encode-sans pt-3 pb-3">
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
        >.
      </p>

      <p>
        Please visit
        <a href="/elements/heading" target="_blank">Heading</a>
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
        id="usability-accessibility-principles"
        class="display-6 ff-encode-sans pt-4 pb-3"
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
          established in the Solstice and Bootstrap stylesheets.
        </li>
        <li>
          <strong>Large text will likely be an HTML heading.</strong> If you
          emphasize something using large text, a heading tag should be used to
          call out the information to screen readers.
        </li>
      </ul>

      <br />
      <hr />

      <h2 id="styling-decoration" class="display-6 ff-encode-sans pt-4 pb-3">
        Styling & Decoration
      </h2>

      <h3 class="fw-medium ff-encode-sans pt-3">Color</h3>
      <ul>
        <li class="pb-3">
          <strong>Colors are defined in the Solstice style sheet.</strong> You
          shouldn&apos;t need to change the color of text, as it is defined in
          the Solstice style sheet and is an inherited property of HTML elements
          and/or Solstice and Bootstrap themes. Review the comprehensive
          <a href="/foundations/color" target="_blank">Color</a> page for more
          guidance.
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
          brand colors (beige, purples, accent palette) for any headings. Brand
          colors in headings adds unnecessary visual complexity to a page and
          can be misinterpreted as having a semantic meaning.
        </li>
      </ul>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col" style="width: 250px">Dark</th>
            <th scope="col" style="width: 250px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="rounded border"
                style="width: 30px; height: 30px; background: #fff"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
            <td><code>text-white</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px; background: #000"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#000000</span>
              <code class="d-inline-block text-muted">$black</code>
            </td>
            <td>--</td>
            <td><code>text-black</code></td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col" style="width: 250px">Dark</th>
            <th scope="col" style="width: 250px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #212529'
                    : 'background-color: #dee2e6'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#212529</span>
              <code class="d-inline-block text-muted">$gray-900</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e6</span>
              <code class="d-inline-block text-muted">$gray-300</code>
            </td>
            <td><code>text-body</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #212529bf'
                    : 'background-color: #dee2e6bf'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#212529bf</span>
              <code class="d-inline-block text-muted">$gray-900 (75%)</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e6bf</span>
              <code class="d-inline-block text-muted">$gray-300 (75%)</code>
            </td>
            <td><code>text-body-secondary</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #21252980'
                    : 'background-color: #dee2e680'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#21252980</span>
              <code class="d-inline-block text-muted">$gray-900 (50%)</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e680</span>
              <code class="d-inline-block text-muted">$gray-300 (50%)</code>
            </td>
            <td><code>text-body-tertiary</code></td>
          </tr>
        </tbody>
      </table>

      <h3 class="fw-medium ff-encode-sans pt-3">Decoration</h3>
      <ul>
        <li class="pb-3">
          <strong
            >Bold and italic styles draw attention, and can also communicate
            semantic meaning.</strong
          >
          Italicizing words or strings, however, can decrease readability. Both
          should be used sparingly so as to not diminish their effectiveness.
          It&apos;s best to use <code>&lt;strong></code> and
          <code>&lt;em></code> to ensure the semantic meaning is being conveyed.
          In the very rare case where you only want a stylistic change and
          don&apos;t need to convey semantic meaning,
          <code> &lt;b> &lt;i></code> can be used.
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

      <h3 class="fw-medium ff-encode-sans">Case</h3>
      <ul>
        <li>
          <strong
            >Use sentence case in most situations and
            <span class="text-uppercase">AVOID</span> all caps.</strong
          >
          Headings may use title case, especially an <code>&lt;H1></code>/Page
          title. Review <a href="/content/labels" target="_blank">Labels</a> for
          more details.
        </li>
      </ul>

      <br />
      <hr />
      <h2 id="alignment-spacing" class="display-6 ff-encode-sans pt-4 pb-3">
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
          <strong>Text should never be set to “justify”.</strong> Justifying
          (aligned to both the left and right margins) text results in
          inconsistent spacing between words and affects readability.
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
          <a href="/content/labels" target="_blank">Labels</a> for more details.
        </li>
      </ul>

      <br />
      <hr />

      <h2
        id="technical-implementation"
        class="display-6 ff-encode-sans pt-4 pb-3"
      >
        Technical Implementation
      </h2>
      <p>
        <strong>Define text sizes in REM.</strong> This ensures fonts will scale
        or display the same in mobile and desktop formats.
      </p>
      <br />
      <hr />
    </template>

    <template #author>Cayla Snooke</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

export default {
  name: "DocsFoundationsTypography",
  components: { Layout, BBreadcrumb, BBreadcrumbItem },
  data() {
    return {
      pageTitle: "Typography",
      colorMode: "light",
    };
  },
  updated() {
    this.colorMode = document.documentElement.getAttribute("data-bs-theme");
  },
};
</script>
