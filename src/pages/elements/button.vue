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
                href="#accessibility"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
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
            <BButton variant="primary">Label</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-primary" type="button">Label&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="primary">Label&lt;/BButton>
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
            <BButton variant="secondary" class="text-primary">Label</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-secondary text-primary" type="button">Label&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="secondary" class="text-primary">Label&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock>
        <template #text
          >Use a Secondary button on it&rsquo;s own, or pair with a Primary
          button.
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
            <BButton variant="outline-primary">Label</BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-outline-primary" type="button">Label&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="outline-primary">Label&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock>
        <template #text
          >Use a Outline button on it&rsquo;s own, or pair with a Primary
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

      <h3>&ldquo;Quiet&rdquo; Button</h3>
      <p>
        &ldquo;Quiet&rdquo; buttons are semantic buttons that look like links
        but behave like buttons - they have a container that is the same
        size/shape as a button, but that is only visible when interacted with
        (on hover or on click). They are used
        <strong>for the lowest priority actions</strong>, especially when
        presenting multiple options.
      </p>
      <ul>
        <li>
          For low emphasis, reduced visual complexity, or space constraints
        </li>
        <li>
          For canceling a task or flow, especially when doing so closes a modal
        </li>
        <li>For semi-destructive actions (e.g. Resetting filter, Cancel)</li>
        <li>For repeating actions (e.g. in a table)</li>
        <li>Not appropriate for the final action of a flow</li>
      </ul>

      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BButton
              variant="link"
              class="bg-secondary-hover link-primary link-underline link-underline-opacity-0"
              >Label</BButton
            >
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-link bg-secondary-hover link-primary link-underline link-underline-opacity-0" type="button">Label&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="link" class="bg-secondary-hover link-primary link-underline link-underline-opacity-0">Label&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <UsageBlock>
        <template #text>Use &ldquo;Quiet&rdquo; Button as a Secondary button.</template>
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton
              variant="link"
              class="bg-secondary-hover link-primary link-underline link-underline-opacity-0 me-2"
              >Cancel</BButton
            >
            <BButton variant="primary">Submit</BButton>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text
          >Use &ldquo;Quiet&rdquo; Button with another Secondary button.</template
        >
        <template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary text-end">
            <BButton
              variant="link"
              class="bg-secondary-hover link-primary link-underline link-underline-opacity-0 me-2"
              >Cancel</BButton
            >
            <BButton variant="secondary" class="text-primary"
              >Submit</BButton
            >
          </div></template
        ></UsageBlock
      >

      <h3>Icon Buttons</h3>
      <p>
        An Icon button lets people take a common action that is associated with
        a familiar icon, usually where space is limited (e.g. Close, Delete,
        Edit, Bookmark, Star).
      </p>

      <p><strong>Variants</strong></p>
      <ul>
        <li>
          Icon buttons should typically be either Secondary, Outline, or “Quiet”
          Button variants.
        </li>
        <li>
          Use a Secondary or Outline styled Icon button when the component
          requires more visual separation from the background.
        </li>
        <li>
          Primary variant Icon buttons should be rare, because critical actions
          should typically use a button with a label for clarity.
        </li>
      </ul>

      <p><strong>Best practics</strong></p>
      <ul>
        <li>
          Use Icon buttons cautiously, as icons can be ripe for
          misinterpretation. Consider using text when a short label communicates
          more clearly than an icon.
        </li>
        <li>
          Tooltips should be used (and enabled by default in code). The value of
          the HTML title attribute should be used for the tooltip content.
          Don&rsquo;t rely on the tooltip to convey the meaning of an icon for
          important actions; use a labeled button instead.
        </li>
      </ul>

      <p><strong>Which icons to use</strong></p>
      <ul>
        <li>Refer to the Standard visual icon language.</li>
        <li>
          The example below shows how to utilize the icons native to Bootstrap.
        </li>
      </ul>

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
      </div>

      <h3>Buttons that aren&rsquo;t really buttons</h3>

      <p>
        There are rare cases when a semantic link should be styled like a
        button, for example <span>Sign In</span> or <span>Sign Out</span> are
        typically semantic links that navigate to the NetID log in page. For
        complete usage and implementation in these cases, see
        <BLink to="/elements/link#variants">&ldquo;Button&rdquo; Link</BLink>.
      </p>

      <p><strong>Example use cases</strong></p>
      <p>
        Here are some examples of button variants that can be used for an
        action. Note how context-dependent the choice is - the same action is
        represented in different variants depending on the context of use.
      </p>

      <p><strong>Edit</strong></p>
      <ul>
        <li>Secondary (one of few)</li>
        <li>Outline (one of many, or lower emphasis)</li>
      </ul>

      <p><strong>Change Email Address</strong></p>
      <ul>
        <li>Secondary (one of few)</li>
        <li>Outline (one of many)</li>
        <li>Text (one of many in tight space)</li>
      </ul>

      <p><strong>Delete</strong></p>
      <ul>
        <li>Secondary (one of few)</li>
        <li>Outline (one of many)</li>
        <li>Text (one of many in tight space)</li>
      </ul>

      <p><strong>Clear</strong> (semi-destructive)</p>
      <ul>
        <li>Outline (exiting or restarting flow)</li>
        <li>Text (for a clearing a filter)</li>
      </ul>

      <p><strong>Cancel</strong> (can be semi-destructive)</p>
      <ul>
        <li>Text button</li>
      </ul>

      <p><strong>Close</strong></p>
      <ul>
        <li>Primary (the main action, e.g. lightbox)</li>
        <li>Secondary (one of equal peers, next to a primary)</li>
        <li>Icon (small pop up)</li>
      </ul>

      <h2 id="options">Options</h2>
      <h3>Button Sizes</h3>
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
      <h3>Adding Icons</h3>
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

      <h2 id="accessibility">Accessibility</h2>

      <p>
        Use semantic code: only use buttons for button actions, and use links
        instead in all other cases.
      </p>

      <p>
        Make sure buttons have a clear and descriptive label. Labeling buttons
        properly lets users know what will happen when they activate the
        control, lessens errors, and increases confidence.
      </p>
      <ul>
        <li>
          If button label isn&rsquo;t descriptive enough or has no text and relies on
          an icon alone to convey its purpose, use the aria-label attribute.
        </li>
        <li>
          The aria-label attribute can be accessed by assistive technologies
          like screen readers. Typically, this label text replaces the visible
          text for people who use assistive technology.
        </li>
        <li>
          Make sure that the aria-label text includes any button text that is
          visible. Mismatches between visible and programmatic labeling can
          cause confusion, and might prevent voice recognition commands from
          working.
        </li>
      </ul>

      <p>
        Avoid disabling buttons, especially in forms. Disabled buttons don&rsquo;t
        explain why the button isn&rsquo;t actionable. They also aren&rsquo;t reachable in
        the tab order and don&rsquo;t receive hover, focus, or click events, making
        them entirely inaccessible to some people. Instead, keep the button
        enabled, and use validation and errors to explain what needs to be done
        to proceed.
      </p>
      <ul>
        <li>Never put tooltips on disabled buttons - tooltips can't be reached on all
      devices or by some assistive technologies, and they should never appear on
      elements that are disabled.</li>
      </ul>


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
import {
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BLink,
} from "bootstrap-vue-next";

export default {
  name: "DocsElementsButton" /* example: Docs--Folder--ComponentName */,
  components: {
    Layout,
    CodeBlock,
    PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
    BLink,
  },
  inject: ["mq"],
  data() {
    return {
      pageTitle: "Button",
    };
  },
};
</script>
