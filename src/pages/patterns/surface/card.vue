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

      <h2 id="anatomy">Anatomy</h2>
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

      <h2 id="types">Types</h2>
      <p>Solstice supports a hierarchy of three card types.</p>
      <PreviewBlock>
        <template #preview>
          <div>
            <!-- three card code here -->
          </div>
        </template>
      </PreviewBlock>

      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">Elevated</h3>
      <p>Elevated cards are <strong>best for grabbing a users attention</strong> by bringing content to the forefront. They are the most visually prominent card type. </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="shadow-sm rounded-3 col-md-6"> body </BCard>
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

      <h3>Borderless (Panel)</h3>
      <p>
        More details about <BLink to="/patterns/surface/panel">Panel</BLink> can
        be reviewed in the corresponding documentation.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="bg-body-tertiary rounded-3" border-variant="0">
              body
            </BCard>
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

      <h2 id="options">Options</h2>
      <h3>Header</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="shadow-sm rounded-3" header-bg-variant="transparent">
              <template #header> header </template>
              body
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

      <h3>Footer</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="shadow-sm rounded-3" header-bg-variant="transparent">
              body
              <template #footer> footer </template>
            </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card">
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
<code>&lt;BCard header-bg-variant="transparent">
  asdfasdfasdf
  &lt;template #footer>
    footer
  &lt;/template>
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="usage">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implementation">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2>Body</h2>
      <CodeBlock>
        <template #preview>
          <BCard style="max-width: 600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Header</h2>
      <CodeBlock>
        <template #preview>
          <BCard
            class="shadow-sm rounded-3"
            header-bg-variant="transparent"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Header</h6>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Header Action</h2>
      <CodeBlock>
        <template #preview>
          <BCard
            class="shadow-sm rounded-3"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <BButton variant="primary" size="sm">Action</BButton>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>
      <p>this is a card w/ html as heading action</p>

      <CodeBlock>
        <template #preview>
          <BCard
            class="shadow-sm rounded-3"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <div class="input-group w-50">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Search all students..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  id="button-addon2"
                  class="btn btn-sm btn-primary"
                  type="button"
                >
                  Search
                </button>
              </div>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Heading Tabs</h2>
      <p>asdkfjalskdj</p>
      <CodeBlock>
        <template #preview>
          <BCard
            class="shadow-sm rounded-3"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <axdd-tabs-list
                :tabs-id="'example'"
                :variant="'pills'"
                class="small"
              >
                <template #items>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'first'"
                    :active-tab="true"
                    :variant="'pills'"
                  >
                    First
                  </axdd-tabs-item>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'second'"
                    :variant="'pills'"
                  >
                    Second
                  </axdd-tabs-item>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'third'"
                    :variant="'pills'"
                  >
                    Third
                  </axdd-tabs-item>
                </template>
              </axdd-tabs-list>
            </template>
            <axdd-tabs-display :tabs-id="'example'">
              <template #panels>
                <axdd-tabs-panel :panel-id="'first'" :active-panel="true">
                  first ...
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'second'">
                  second ...
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'third'">
                  third ...
                </axdd-tabs-panel>
              </template>
            </axdd-tabs-display>
          </BCard>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
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
