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
      Tiles allow users to easily make selections, or navigate somewhere new.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#usage"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usage</a
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
      <h2 class="display-6 ff-encodesans pt-3 pb-2" id="usage">When to use</h2>
      <p>
        At their core, tiles are actionable list items (link, checkbox, radio)
        each displayed in their own container, where the entire container is an
        actionable target. Tiles are typically small UI elements that are
        presented as a set – uniform in size and appearance, and aligned in a
        grid and in close proximity to each other.
      </p>
      <p class="fw-bold">Use a card for:</p>
      <ul>
        <li>giving actionable list items more visual prominence</li>
        <li>creating easy targets for clicking or selecting</li>
        <li>supporting easy scanning and interaction</li>
        <li>
          creating dashboards, content libraries, and other interfaces requiring
          a structured presentation of sets of information
        </li>
      </ul>
      <p class="fw-bold">Tiles vs. Cards</p>
      <p>Tiles and cards are similar, but the main differences are:</p>
      <ul>
        <li>
          Tiles <em>are actionable</em> elements (selectable or clickable),
          while cards can <em>contain actionable</em> elements, but are not
          themselves selectable or clickable.
        </li>
        <li>
          Tiles are only used <em>in sets</em>, and while cards can be used
          <em>one at a time, or in sets</em>.
        </li>
        <li>Tiles are generally much smaller than cards.</li>
        <li>
          Tiles can be inside of cards, but cards shouldn’t be inside of tiles.
        </li>
      </ul>
      <p>
        If you need larger containers that can can hold a wide variety of
        information, <a href="src/pages/patterns/surface/card.vue">cards</a> are
        best.
      </p>

      <h2 id="anatomy" class="display-6 ff-encodesans pt-5 pb-3">Anatomy</h2>
      <figure class="d-flex flex-column">
        <!-- <img
          src="/images/w-logo-purple.png"
          alt=""
          class="img-fluid border rounded col-md-11"
        /> -->
        <figcaption class="align-self-start">
          <p class="text-muted fst-italic my-2">Tile anatomy</p>
        </figcaption>
      </figure>
      <ul>
        <li>
          <span class="fw-bold">Label (optional)</span> – an optional label
          conveys the main subject or purpose of the card and is positioned at
          the top of the card.
        </li>
        <li>
          <span class="fw-bold">Paragraph</span>
        </li>
        <li>
          <span class="fw-bold">UI control (optional)</span> – checkbox or radio
          button
        </li>
        <li>
          <span class="fw-bold">Icon (optional)</span>
        </li>
        <li>
          <span class="fw-bold">Image (optional)</span>
        </li>
        <li>
          <span class="fw-bold">Badge (optional)</span>
        </li>
        <li>
          <span class="fw-bold">Rounded corners</span>
        </li>
        <li>
          <span class="fw-bold">Outline</span>
        </li>
      </ul>

      <h2 id="types" class="display-6 ff-encodesans pt-3 pb-3">Types</h2>
      <p>
        Solstice supports two types of tiles: action tiles (i.e. button on
        link), and selection tiles (i.e. checkbox or radio).
      </p>
      <PreviewBlock>
        <template #preview>
          <div class="grid">
            <div class="g-col-6">
              <div class="card rounded-3 border-0 bg-body-secondary p-2 h-100">
                <div class="text-center card-body">
                  <strong>Filled</strong>
                </div>
              </div>
            </div>
            <div class="g-col-6">
              <div class="card rounded-3 border p-2 h-100">
                <div class="card-body text-center">
                  <strong>Outline</strong>
                </div>
              </div>
            </div>
          </div>
        </template>
      </PreviewBlock>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Action</h3>
      <p>Action tiles allow users to take actions or navigate.</p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard
                class="bg-body-tertiary rounded-3 g-col-4 g-start-5 border-0"
                style="min-height: 9em"
              >
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
        <p class="fw-bold">Description and use</p>
        <ul>
          <li>
            They always have a background color, but never an outline or drop
            shadow.
          </li>
          <li>Always neutral color, never brand or decorative colors.</li>
        </ul>
      </div>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Selection</h3>
      <p>
        Selection tiles allow users to make a selection of one or many items in
        a list.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard class="card rounded-3 border p-2" style="min-height: 9em">
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
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <div class="grid">
              <BCard class="card rounded-3 border p-2" style="min-height: 9em">
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
      <p class="fw-bold">Description and use</p>
      <ul>
        <li>
          They always have a border, but never a background or drop shadow.
        </li>
      </ul>
      <p class="fw-bold">When to use a control</p>
      <ul>
        <li>
          Placing a selection control inside a tile helps to set clear
          behavioral expectations for users. This isn’t always required,
          however. If the content and context clearly indicates what’s needed
          from a user (single or multiple selection) then the control can be
          left out of the tile.
        </li>
        <li>
          The control may be left off when the content clarifies that the choice
          is single or multiple. e.g. “choose a time” (single select) “Choose a
          course” (single select) or “Choose your options, select up to 4.”
          (multi select).
        </li>
      </ul>
      <p>
        Refer to checkbox (need to link) and radio button (need to link) pages
        for additional use and accessibility guidelines.
      </p>
      <h2 id="states" class="display-6 ff-encodesans pt-5 pb-2">States</h2>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pb-2">Action</h3>
      <p class="fw-bold">Preloading</p>
      <p class="fw-bold">Enabled</p>
      <p class="fw-bold">Hover</p>
      <p class="fw-bold">Pressed</p>
      <p class="fw-bold"><em>Selected (N/A)</em></p>
      <p class="fw-bold">Disabled</p>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pb-2">Selection</h3>
      <p class="fw-bold">Preloading</p>
      <p class="fw-bold">Enabled</p>
      <p class="fw-bold">Hover</p>
      <p class="fw-bold">Pressed</p>
      <p class="fw-bold">Selected</p>
      <p class="fw-bold">Disabled</p>

      <h2 id="states" class="display-6 ff-encodesans pt-5 pb-2">
        Best Practices
      </h2>

      <UsageBlock variant="do">
        <template #row>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >Do use an icon that is strongly associated with the tile
                  label or content.</strong
                >
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong
                  >The tile paragraph should be concise</strong
                  > - no more than one or
                  two short sentences. If further explanation is needed,
                  consider using alternate UI elements (e.g. paragraph and
                  button, card and a button, paragraph and radio
                  group).
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
          <UsageBlockRow variant="do">
            <template #description>
              <p>
                <strong>Do use 2 or more at a time.</strong>
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #row>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Tiles should not contain a menu control or be
                  expandable.</strong
                >
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong
                  >Don’t use an icon in place of a tile label unless the icon is
                  <em
                    >clearly understood and is an established convention.</em
                  ></strong
                >
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
          <UsageBlockRow variant="dont">
            <template #description>
              <p>
                <strong>Don’t use internal separators or headers</strong> -
                tiles shouldn’t need it since they have very little content.
              </p>
            </template>
            <template #preview> </template>
          </UsageBlockRow>
        </template>
      </UsageBlock>
    </template>

    <div class="mb-5"></div>
    <template #author>Cayla Snooke</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { BBreadcrumb, BBreadcrumbItem, BCard } from "bootstrap-vue-next";

export default {
  name: "DocsPatternsSurfaceTile",
  components: {
    Layout,
    CodeBlock,
    BCard,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  data() {
    return {
      pageTitle: "Tile",
    };
  },
};
</script>
