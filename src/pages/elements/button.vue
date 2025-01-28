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
      Buttons trigger a specific action or command, such as submitting a form,
      opening a menu, or canceling a task or flow.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#when"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >When to use</a
              >
            </li>
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
      <h2 id="when">When to use</h2>
      <p><strong>Use buttons for:</strong></p>
      <ul>
        <li>
          submitting user input or saving user&rsquo;s changes (e.g. submit a
          form)
        </li>
        <li>
          starting or beginning a primary task or workflow (e.g. start
          application, add course to academic plan)
        </li>
        <li>
          triggering a new UI element to appear on the page (e.g. disclose
          content, launch a modal, add a row to a table, add a question to a
          survey)
        </li>
        <li>
          adding an element to a list or process (e.g. add worktag, add step in
          a workflow, add question to a survey)
        </li>
        <li>closing a lightbox</li>
      </ul>

      <p><strong>When to use a link instead</strong></p>
      <p>
        Links navigate you to a new place or new content. Use a semantic html
        link instead of a button if the action results in a new URL, or a user
        is taken to a new browser tab. The distinction is important to screen
        reader users to know what's going to happen next. However, you may
        choose to style a link as a button - see
        <span class="fst-italic">Buttons that aren&rsquo;t really buttons</span>
        below.
      </p>

      <h2 id="anatomy">Anatomy</h2>
      <ul>
        <li>Label</li>
        <li>Leading visual icon (icon)</li>
        <li>Trailing action icon (optional)</li>
      </ul>

      <h2 id="variants">Variants</h2>
      <h3>Primary</h3>
      <p>
        Primary buttons are
        <strong>for the most likely/common action on a page or lightbox</strong>
        (for the main user flow), or for when there is an action that is clearly
        more important than the other actions and you need to draw attention to
        it.
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

      <UsageBlock>
        <template #text
          >Use only one primary button on each page or lightbox, whenever
          possible.
        </template>
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text
          >Use multiple primary buttons on a page or within a lightbox. Giving
          people too many prominent buttons increases their cognitive load,
          requiring them to spend more time considering options before making a
          choice.</template
        >
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="primary" class="me-2">Cancel</BButton>
            <BButton variant="primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >

      <h3>Secondary</h3>
      <p>
        Secondary buttons are for actions that are not the most likely/common or
        important actions available. They can also be used
        <strong>when there are a few possible actions on a page</strong> that
        supports multiple peer workflows or tasks (e.g. single-page apps or
        dashboards).
      </p>

      <ul>
        <li>For medium emphasis</li>
        <li>For non-primary actions on a page or modal</li>
        <li>For a set of buttons where a primary button may be present</li>
        <li>
          For when there are a few possible actions on a page supporting
          multiple workflows or tasks
        </li>
      </ul>

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

      <UsageBlock>
        <template #text
          >Use a Secondary button on it’s own, or pair with a Primary button.
        </template>
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="secondary" class="text-primary me-2"
              >Cancel</BButton
            >
            <BButton variant="primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text
          >Use a Secondary button alongside an Outline button.</template
        >
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="secondary" class="text-primary me-2"
              >Cancel</BButton
            >
            <BButton variant="outline-primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >

      <h3>Outline</h3>
      <p>
        Outline buttons are also for actions that are not the most likely/common
        or important actions available but using secondary filled buttons would
        create too much visual weight. They are best to use when there are many
        repeating or possible actions on a page.
      </p>
      <ul>
        <li>For medium or low emphasis</li>
        <li>
          For when there are many repeating or possible actions on a page
          supporting multiple workflows or tasks, and using secondary buttons
          would create too much visual weight
        </li>
        <li>
          For giving a user the opportunity to escape a flow or change their
          mind (e.g. Exit, Start Over)
        </li>
      </ul>
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

      <UsageBlock>
        <template #text
          >Use a Outline button on it’s own, or pair with a Primary
          button.</template
        >
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="outline-primary">Edit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text
          >Use a Outline button alongside an Secondary button.
        </template>
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="secondary" class="text-primary me-2"
              >Cancel</BButton
            >
            <BButton variant="outline-primary">Edit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock>
        <template #text
          >Use either Outline OR Secondary buttons alongside a single Primary
          button.</template
        >
        <template #preview>
          <div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="outline-primary" class="me-2">Cancel</BButton>
            <BButton variant="primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text
          >Use both Outline and Secondary buttons alongside a Primary button, as
          this may be unnecessarily confusing for users.</template
        >
        <template #preview>
          <div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton variant="outline-primary" class="me-2">Edit</BButton>
            <BButton variant="secondary" class="text-primary me-2"
              >Cancel</BButton
            >
            <BButton variant="primary">Submit</BButton>
          </div>
        </template></UsageBlock
      >

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
