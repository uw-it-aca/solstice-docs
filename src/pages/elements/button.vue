<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">UI Elements</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #lead>
      A button is an interactive element that users can click or tap to trigger
      a specific action or command within an application. It represents an
      action, such as submitting a form, opening a menu, or navigating to
      another screen. Buttons provide an intuitive way for users to perform
      tasks efficiently.
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

      <h2 id="variants">Variants</h2>
      <h3>Primary</h3>
      <p>
        Use the <code>primary</code> variant for buttons that complete actions
        (i.e., “submit”) and that are core to the page experience. In general,
        limit the number of primary buttons on the page to 1-3.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton variant="primary">Submit</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-primary" type="button">Button&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="primary">Button&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Secondary</h3>
      <p>
        Use the <code>secondary</code> variant for buttons that change modes
        (i.e., edit), or for buttons that supplement core actions in button
        groups (i.e., “cancel”)
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton variant="secondary" class="text-primary">Edit</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-secondary text-primary" type="button">Button&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="secondary" class="text-primary">Button&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Outline</h3>
      <p>
        Use the <code>outline-primary</code> variant for buttons that change
        modes (i.e., edit), or for buttons that supplement core actions in
        button groups (i.e., “cancel”)
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton variant="outline-primary">Edit</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-outline-primary" type="button">Button&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="outline-primary">Button&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Link Button</h3>
      <p>
        Use the <code>link</code> variant for buttons with less prominence than
        secondary buttons. Link buttons look like links but are considered
        buttons. Link buttons could be used in more complex set of related
        actions, such as a navigation menu. Link buttons have no fill (below)
        and look like a link.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton
              variant="link"
              class="bg-secondary-hover link-primary link-underline link-underline-opacity-0"
              >Link</BButton
            >
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-link bg-secondary-hover link-primary link-underline link-underline-opacity-0" type="button">Button&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="link" class="bg-secondary-hover link-primary link-underline link-underline-opacity-0">Button&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="options">Options</h2>
      <h3>Sizing</h3>
      <p>
        The medium (or default) size of buttons should be used in most cases.
        Small buttons can be used in layouts where space is constricted, such us
        popups, and in some cases alerts. Larger buttons can be used on
        prominent tasks, such ast Call to Actions and where the page layout
        provides generous space to accomodate the larger size.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton variant="primary" size="sm" class="me-2"
              >Small button</BButton
            >
            <BButton variant="primary" class="me-2">Medium button</BButton>
            <BButton variant="primary" size="lg" class="me-2"
              >Large button</BButton
            >
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-primary btn-sm" type="button">Button&lt;/button>
&lt;button class="btn btn-primary" type="button">Button&lt;/button>
&lt;button class="btn btn-primary btn-lg" type="button">Button&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="primary" size="sm">Small button&lt;/BButton>
&lt;BButton variant="primary">Small button&lt;/BButton>
&lt;BButton variant="primary" size="lg">Small button&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Icons</h3>
      <p>
        By default, not all buttons need an icon, but in some cases including an
        icon may add context or make a button more identifiable (like a
        magnifying glass icon in a search button). Typically, the icon should be
        a leading visual before the text. In some cases, buttons may need a
        trailing visual (like a dropdown arrow). If buttons are part of a group,
        icons should be aligned (all buttons have an icon or none of them have
        an icon).
      </p>
      <div class="mb-3">
        <CodeBlock>
          <template #preview>
            <BButton variant="primary" class="me-2"
              ><i class="bi bi-emoji-smile-fill me-2"></i>Hello</BButton
            >
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-primary" type="button">
  &lt;i class="bi bi-trash3 me-2">&lt;/i>Hello
&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="primary">
  &lt;i class="bi bi-trash3 me-2">&lt;/i>Hello
&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>
        For icon-only buttons -- for example a hamburger or a meatball menu, or
        page forward/backward buttons -- they must be labelled correctly in
        markup for assistive technologies, and they should have a tooltip in the
        UI with a text label.
      </p>

      <div class="mb-3">
        <CodeBlock>
          <template #preview>
            <BButton variant="primary" size="sm" class="me-2" title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="secondary"
              size="sm"
              class="text-primary me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="outline-primary"
              size="sm"
              class="me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="link"
              size="sm"
              class="bg-secondary-hover link-primary link-underline link-underline-opacity-0 me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-secondary btn-sm text-primary" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-outline-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-link btn-sm bg-secondary-hover link-primary link-underline link-underline-opacity-0" type="button" title="Delete">...&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="secondary" size="sm" class="text-primary" title="Delete">...&lt;/BButton>
&lt;BButton variant="outline-primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="link" size="sm" class="bg-secondary-hover link-primary link-underline link-underline-opacity-0"  title="Delete">...&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <template v-if="false">
        <!-- MARK: hide for now -->
        <p>Grayscale variants of Primary and Secondary.</p>
        <div class="mb-5">
          <CodeBlock>
            <template #preview>
              <BButton
                variant="gray-primary"
                size="sm"
                class="me-2"
                title="Delete"
                ><i class="bi bi-trash3"></i
              ></BButton>
              <BButton
                variant="gray-secondary"
                size="sm"
                class="text-gray-primary me-2"
                title="Delete"
                ><i class="bi bi-trash3"></i
              ></BButton>
              <BButton
                variant="outline-gray-primary"
                size="sm"
                class="me-2"
                title="Delete"
                ><i class="bi bi-trash3"></i
              ></BButton>
              <BButton
                variant="link"
                size="sm"
                class="link-gray-primary me-2"
                title="Delete"
                ><i class="bi bi-trash3"></i
              ></BButton>
            </template>
            <template #bootstrap>
              <pre class="language-html">
<code>&lt;button class="btn btn-gray-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-gray-secondary btn-sm text-gray-primary" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-outline-gray-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-link btn-sm link-gray-primary" type="button" title="Delete">...&lt;/button>
</code></pre>
            </template>
            <template #vue>
              <pre class="language-html">
<code>&lt;BButton variant="gray-primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="gray-secondary" size="sm" class="text-gray-primary" title="Delete">...&lt;/BButton>
&lt;BButton variant="outline-gray-primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="link" size="sm" class="link-gray-primary" title="Delete">...&lt;/BButton>
</code></pre>
            </template>
          </CodeBlock>
        </div>
      </template>

      <template v-if="false">
        <!-- MARK: hide for now -->
        <h2 id="button-groups">Button groups</h2>
        <p>
          Button groups help to create a more organized, intuitive, and
          user-friendly experience by grouping related actions, saving space,
          and improving the overall usability.
        </p>
        <div class="mb-5">
          <CodeBlock>
            <template #preview>
              <BButtonGroup>
                <BButton variant="primary">Button 1</BButton>
                <BButton variant="primary">Button 2</BButton>
                <BButton variant="primary">Button 3</BButton>
              </BButtonGroup>
            </template>
            <template #bootstrap>
              <pre class="language-html">
<code>&lt;div class="btn-group" role="group" aria-label="Basic example">
  &lt;button type="button" class="btn btn-primary">Button 1&lt;/button>
  &lt;button type="button" class="btn btn-primary">Button 2&lt;/button>
  &lt;button type="button" class="btn btn-primary">Button 3&lt;/button>
&lt;/div>
</code></pre>
            </template>
            <template #vue>
              <pre class="language-html">
<code>&lt;BButtonGroup>
  &lt;BButton variant="primary">Button 1&lt;/BButton>
  &lt;BButton variant="primary">Button 2&lt;/BButton>
  &lt;BButton variant="primary">Button 3&lt;/BButton>
&lt;/BButtonGroup>
</code></pre>
            </template>
          </CodeBlock>
        </div>
        <p>
          Button groups can be used for toggle buttons, radio buttons, or
          segmented controls where users can select one or multiple options. For
          example:
        </p>
        <ul>
          <li>
            Radio button groups allow users to select one option from many.
          </li>
          <li>Checkbox groups enable users to select multiple options.</li>
          <li>
            Toggle button groups make it clear that only one action can be
            active at a time.
          </li>
        </ul>
        <p>
          Button groups should give users instant visual feedback on their
          selections. For example, selected buttons may change color or style,
          indicating that they have been activated, making it clear what actions
          have been taken.
        </p>
      </template>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import PageContents from "@/components/PageContents.vue";
import { BBreadcrumb, BBreadcrumbItem, BButton } from "bootstrap-vue-next";

export default {
  name: "DocsElementsButton" /* example: Docs--Folder--ComponentName */,
  components: {
    Layout,
    CodeBlock,
    PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
  },
  inject: ["mq"],
  data() {
    return {
      pageTitle: "Button",
    };
  },
};
</script>
