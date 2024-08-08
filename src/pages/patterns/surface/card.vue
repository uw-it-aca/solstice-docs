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
      Cards is a container of content... Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ea nemo nobis, eligendi sit ipsa mollitia necessitatibus
      possimus, veniam sapiente deleniti quo. Nemo error quos, eius facilis rem
      amet deserunt est!
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
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
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>

    <template #content>
      <h2 id="anatomy">Anatomy</h2>
      <p>
        Card, card header, card body, card footer. Cards are raised off the
        surface and must be bordered and contain drop shadow.
      </p>

      <h2 id="variants">Variants</h2>
      <h3>Default</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="shadow-sm rounded-3"> body </BCard>
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
          <axdd-card style="max-width: 600px">
            <template #body
              >Lorem ipsum dolor sit amet consectetur adipisicing elit</template
            >
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-card>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card } from "solstice-vue";

export default {
  components: {
    "axdd-card": Card,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
            </template>
            <template #body>card body</template>
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading } from "solstice-vue";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading Action</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading-action>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
              <axdd-card-action>
                <a
                  href="#"
                  class="btn btn-dark-beige btn-sm"
                  @click.prevent="greet"
                  >Card heading action</a
                >
              </axdd-card-action>
            </template>
            <template #body>card body</template>
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-card>
  &lt;template #heading-action>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
    &lt;axdd-card-action>
      &lt;a href="#" @click.prevent="greet">Card heading action&lt;/a>
    &lt;/axdd-card-action>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading, CardAction } from "solstice-vue";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
    "axdd-card-action": CardAction,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <p>this is a card w/ html as heading action</p>

      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading-action>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
              <axdd-card-action>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Search all students..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-sm btn-dark-beige"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </axdd-card-action>
            </template>
            <template #body>card body</template>
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-card>
  &lt;template #heading-action>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
    &lt;axdd-card-action>
      &lt;div class="input-group">... html markup&lt;/div>
    &lt;/axdd-card-action>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading, CardAction } from "solstice-vue";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
    "axdd-card-action": CardAction,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading Tabs</h2>
      <p>asdkfjalskdj</p>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading-action>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
              <axdd-card-action>
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
                      Firstsss
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
              </axdd-card-action>
            </template>
            <template #body>
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
            </template>
          </axdd-card>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { BBreadcrumb, BBreadcrumbItem, BCard } from "bootstrap-vue-next";

export default {
  name: "DocsPatternsCard",
  components: {
    Layout,
    CodeBlock,
    BBreadcrumb,
    BBreadcrumbItem,
    BCard,
  },
  data() {
    return {
      pageTitle: "Card",
    };
  },
};
</script>
