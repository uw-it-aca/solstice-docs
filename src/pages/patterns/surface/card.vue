<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/patterns">Patterns</BBreadcrumbItem>
        <BBreadcrumbItem to="/patterns/surface">Surface</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Cards visually group or highlight items related to a single subject or workflow.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#usage"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >When to use</a
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
                href="#types"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Types</a
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
                href="#practices"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Best Practices</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="usage">When to use</h2>
      <p>Cards are versatile containers that are sometimes necessary. However, first consider if the content you are working with can be separated by better spacing, or a horizontal rule.</p>
      <p class="fw-bold">Use a card for:</p>
      <ul>
        <li>visually grouping items or drawing users’ attention to them when a heading, spacing or horizontal rule is not sufficient</li>
        <li>grouping information that pertains to a workflow or task</li>
        <li>presenting details, summarizing key points, offering actionable insights</li>
        <li>reinforcing application concepts/objects or metaphors (e.g. Registration Cart, Move Request, Schedule)</li>
        <li>displaying a data set</li>
        <li>designating a dynamic (active) content area that will change based on controls outside or inside the card</li>
      </ul>
      <p class="fw-bold">
        Tiles vs. Cards
      </p>
      <p>Tiles and cards are similar, but the main differences are:</p>
      <ul>
        <li>tiles are <em>actionable</em> elements (selectable or clickable), while cards can <em>contain actionable</em> elements, but are not themselves selectable or clickable</li>
        <li>tiles only are used in <em>sets</em>, and while cards can be used <em>one at a time, or in sets</em></li>
        <li>tiles are generally much smaller than cards</li>
      </ul>
      <p>If you need smaller repeatable containers that can act as selectors (checkbox, radio), <a href="../tiles">tiles</a> are best.</p>

      <h2 id="anatomy" class="display-6 ff-encodesans pt-3 pb-3">Anatomy</h2>
      <figure class="d-flex flex-column">
        <img
          src="/images/input-field-anatomy.png"
          alt=""
          class="img-fluid border rounded col-md-11"
        />
        <figcaption class="align-self-start">
          <p class="text-muted fst-italic my-2">Card anatomy</p>
        </figcaption>
      </figure>
      <ul>
        <li>
          <span class="fw-bold">Heading</span> – an optional heading conveys the main subject or purpose of the card and is positioned at the top of the card
        </li>
        <li>
          <span class="fw-bold">Subheading</span> – an optional subheading to offer additional context or details
        </li>
        <li>
          <span class="fw-bold">Card content</span> – common content includes: lists, tables, graphs, images, links, text, and UI elements like buttons and badges
        </li>
        <li>
          <span class="fw-bold">Internal separators</span> – inset horizontal pinstripe that separates chunks of content
        </li>
        <li>
          <span class="fw-bold">Expandable section</span> – area at the bottom of a card that can reveal related content
          Rounded corners
        </li>
        <li>
          <span class="fw-bold">Rounded corners</span>
        </li>
        <li>
          <span class="fw-bold">Outline</span>
        </li>
        <li>
          <span class="fw-bold">Drop shadow</span>
        </li>
      </ul>

      <h2 id="types" class="display-6 ff-encodesans pt-3 pb-3">Types</h2>
      <p>Solstice supports a hierarchy of three card types.</p>
      <PreviewBlock>
        <template #preview>
          <div class="grid">
            <div class="g-col-4">
              <div class="card shadow rounded-3 border-0 p-2 h-100">
                <div class="text-center card-body">
                  <strong>Elevated</strong>
                </div>
                <ul>
                  <li>Highlight user data</li>
                  <li>Contain data sets</li>
                  <li>Design objects</li>
                </ul>
              </div>
            </div>
            <div class="g-col-4">
              <div class="card rounded-3 border-0 bg-body-secondary p-2 h-100">
                <div class="text-center card-body">
                  <strong>Filled</strong>
                </div>
                <ul>
                  <li>Chunk content</li>
                  <li>Create a callout/aside</li>
                </ul>
              </div>
            </div>
            <div class="g-col-4">
              <div class="card rounded-3 border p-2 h-100">
                <div class="card-body text-center">
                  <strong>Outline</strong>
                </div>
                <ul>
                  <li>Highlight content closely related to current workflow or context
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </PreviewBlock>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Elevated</h3>
      <p>Elevated cards are <strong>best for grabbing a users attention</strong> by bringing content to the forefront. They are the most visually prominent card type. </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard class="shadow-sm rounded-3 g-start-5 g-col-4" style="min-height: 9em;">  </BCard>
            </div>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card shadow-sm rounded-3">
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="shadow-sm rounded-3">
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <strong
                >Do only use a white background.</strong
              >
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <strong>Do use in the main content area of a page only.</strong>  Due to the intended prominence of elevated cards, they should appear in the main content area of a page, where users are more likely to be looking.
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use more than one on each page.</strong
                >
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description
              ><p><strong>Don’t use a border.</strong></p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Filled</h3>
      <p>
        Filled cards are typically <strong>used for separating information from the main content (an aside) or starting a new workflow.</strong> They are the second most visually prominent card type.      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard class="bg-body-tertiary rounded-3 g-col-4 g-start-5 border-0" style="min-height: 9em;">
              </BCard>
            </div>
            </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card border-0 bg-body-tertiary rounded-3">
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="bg-body-tertiary rounded-3" border-variant="0">
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h4>Card Colors</h4>
<ul>
  <li><strong>Cards should only use neutral or brand colors.</strong></li>
  <li><strong>Use brand colors with caution to avoid creating a false hierarchy</strong> in cases when a brand colored card appears amongst neutral colored or outlined cards.</li>
    <li><strong>Prioritize use of beige over purple</strong> – purple should still be used sparingly.</li>
      <li><strong>Ensure proper contrast</strong> – if card is set on a non-white background, use a darker color or higher opacity for the card fill.</li>
</ul>

<UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <strong
                >Do use either several or one at a time.</strong
              >
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>


<UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use an outline or drop shadow.
                  </strong
                >
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Outlined</h3>
      <p>Outlined cards are good <strong>for highlighting content, while keeping it closely related to the surrounding context or associated workflow.</strong> They are the least visually prominent card type.</p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard class="border-dark-subtle rounded-3  g-start-5 g-col-4" style="min-height: 8em;"></BCard>
            </div>
            </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card border-dark-subtle rounded-3">
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="shadow-sm rounded-3">
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <strong
                >Do use either several or one at a time.</strong
              >
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>


<UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use a background color or drop shadow.
                  </strong
                >
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h2 id="options" class="display-6 ff-encodesans pt-3 pb-3">Options</h2>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Expandable</h3>
      <p>An expandable area at the bottom of a card can be used to hide related content, allowing highlighting of a smaller set of information on the card by default. </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="shadow-sm rounded-3" header-bg-variant="transparent">
              body
              <template #footer> (not yet) expandable footer </template>
            </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card shadow-sm rounded-3">
  &lt;div class="bg-transparent card-header">
    header
  &lt;/div>
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="shadow-sm rounded-3" header-bg-variant="transparent">
  &lt;template #header>
    header
  &lt;/template>
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t place critical actions (e.g. a primary button) inside an expandable area.

                  </strong
                >
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>


      <h2 id="practices" class="display-6 ff-encodesans pt-3 pb-3">Best Practices</h2>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Consider whether a card is necessary</h3>
      <p>
        Before adding a card to your design, first consider whether a header, spacing, or an <code>HR</code> might provide the necessary structure or separation for your content.</p>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">How to use cards on a page</h3>
      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use a card if it is the only object on a page,
                </strong> if so, the content shouldn’t be in a card.
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t have a page that is only comprised of cards
                </strong> (e.g where all the content is in cards, like MyUW).
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t display each item of a list on a separate card
                </strong> (e.g. search results). Instead use either a <code>&lt;ul></code> or <code>&lt;ol></code> list, table, accordion, or use <code>HR</code> btwn options
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Content & structure</h3>
      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do keep card content limited to one topic or workflow.
                </strong>  Cards should be short, and easy to visually parse and digest.
              </p>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do consider whether a card needs a heading, or if a heading should precede the card.
                </strong> Consider whether it is best – for easier visual scanning and content grouping – to have a heading inside or outside a card; if a card is visually complex, it may be best to place a heading outside the card.
              </p>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do nest cards to provide more structure,
                </strong>
                i.e. separate a graph from the rest of the card content. Limit to one level of nesting.
              </p>
              <p>For best usability and accessibility, only nest:
                <ul>
<li>filled cards inside outline or elevated card types, or </li>
<li>an outline card inside an elevated card</li>
</ul>
</p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do make sets of cards consistent in style and content type.
                </strong>  Also, use a grid to align card sets.
              </p>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>
      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use full-width horizontal rules, except for indicating an expandable section at the bottom of a card.
                </strong>
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Disclosed content should not radically change the card size
                </strong> (i.e. a card should not double in size due to disclosed content).
              </p>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t overload a card with too many different UI elements
                </strong> – if there is a lot of visual complexity that will create visual distraction and negate the visual emphasis that a card intends to provide.
              </p>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t nest an elevated card type within any other card.
                </strong>
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Sizing</h3>
      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do make cards at least 2 columns wide.
                </strong>
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do allow outlined or filled cards to span all 12 columns.
                </strong>
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do use grid columns inside wide cards to separate content
                </strong>
                into logical and more readable chunks. Otherwise, line lengths can get too long and readability may suffer.
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t make elevated cards wider than 9 columns
                </strong> – they are intended to highlight a few items or actions, and should not be very tall or very wide.
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <h2 id="accessibility" class="display-6 ff-encodesans pt-3 pb-3">Accessibility</h2>
      <p>
        Cards are for sighted users’ benefit and ultimately don’t make a difference to non-sighted users’ experience. All content needs to be correctly semantically structured regardless of the visual design.
      </p>
      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do use a semantic html heading
                </strong> when there is a heading, for accessible best practice.
              </p>
            </template>
            <template #preview>
            </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>


    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import {
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BCard,
} from "bootstrap-vue-next";

export default {
  name: "DocsPatternsCard",
  components: {
    Layout,
    CodeBlock,
    BBreadcrumb,
    BBreadcrumbItem,
    BCard,
    BButton,
  },
  data() {
    return {
      pageTitle: "Card",
    };
  },
};
</script>
