<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/patterns/">Patterns</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/patterns/messaging/">Messaging</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #lead>
      Alerts are semantic messages that intentionally disrupt a user's workflow
      to notify them about issues that require action or provide information
      relevant to a particular task or page section. For quick, non-critical
      messages that disappear on their own, use a
      <a href="toast">Toast</a>.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
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
                href="#anatomy"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#placement"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Placement</a
              >
            </li>
            <li>
              <a
                href="#states"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >States</a
              >
            </li>
            <li>
              <a
                href="#practices"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Best Practices</a
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
      <h2 id="variants">Variants</h2>
      <h3>Critical</h3>
      <p>
        Alerts with the <code>critical</code> variant are of the highest
        importance, and communicate that an item needs immediate attention, that
        a process is blocked, or that there has been an error. Whenever
        possible, <code>critical</code> Alerts should include a call to action
        to help the user resolve the issue.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Critical alert example goes here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-alert variant="critical" has-cta="true" cta-url="[url]"
  cta-label="View statement">You have a balance that is past due.
&lt;/sol-alert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Warning</h3>
      <p>
        Alerts with the <code>warning</code> variant communicate items or
        statuses that may have future consequences and require attention, but
        are not currently causing an error or blocking a process. Whenever
        possible, <code>warning</code>
        Alerts should include a call to action to help the user learn more about
        the issue.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Warning alert example goes here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-alert variant="warning" has-cta="true" cta-url="[url]"
  cta-label="Go to ">Class meeting times overlap. Adjust your schedule to avoid conflicts.
&lt;/sol-alert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Info</h3>
      <p>
        Alerts with the <code>info</code> variant communicate useful (but
        non-critical) information to help the user better understand the current
        context, such as announcements about upcoming processes.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Info alert example goes here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-alert variant="info" is-dismissable="true">
  Registration opens at 6:00AM.
&lt;/sol-alert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h2 id="options">Options</h2>
      <h3>Call to Action</h3>
      <p>
        Whenever possible, Alerts should provide direct access to relevant
        actions needed to resolve them. Do this by adding a call to action with
        <code>has-cta="true"</code>, and specifying a URL with
        <code>cta-url</code> and a label with <code>cta-label</code>. The CTA
        should provide a link to an appropriate page where the issue can be
        resolved. Alerts may only have one call to action including one relevant
        link.
      </p>
      <p>
        In general, <code>critical</code> and <code>warning</code> Alerts should
        include calls to action whenever possible.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Call to action alert here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-alert variant="warning" has-cta="true" cta-url="[url]" cta-
  label="Call to action"> This Alert requires further action.
&lt;/sol-alert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Dismiss button</h3>
      <p>
        By default, Alerts are not dismissible from the page. They will remain
        in the interface until the issue is resolved or is no longer relevant.
        For Alerts with non-critical information, particularly info Alerts such
        as announcements, dismissibility may be enabled. When
        <code>is-dismissible="true"</code>, an 'x' icon will allow users to
        remove it from the page.
      </p>
      <p>
        In general, <code>critical</code> and <code>warning</code> Alerts should
        not be dismissible.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Dismissable alert goes here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-alert variant="info" is-dismissible="true">This Alert is dismissible
&lt;/sol-alert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h2 id="anatomy">Anatomy</h2>
      <h3>Sizing</h3>
      <p>
        Alerts should occupy the full width of their parent container, usually a
        section or module on a page.
      </p>
      <h3>Text</h3>
      <p>Alerts contain a message which should communicate the following:</p>
      <ul>
        <li>
          Why the Alert is there, or what issue exists that needs attention.
        </li>
        <li>
          If the Alert requires user action, how to resolve it (with a CTA if
          applicable; see below).
        </li>
      </ul>

      <h3>Color</h3>
      <p>
        Alerts always carry a semantic meaning with a corresponding color:
        <code>critical</code> (red), <code>warning</code> (yellow), or
        <code>info</code> (blue). Refer to the
        <a href="#">Solstice Semantic Color Palette</a>
        for appropriate values.
      </p>
      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <p>
        Alerts should appear in the section in which they are relevant, directly
        under the appropriate heading. In most cases, this will be directly
        under a section header (when the Alert applies to the whole section) or
        under a tab group (when the Alert applies only to the tab selected).
      </p>
      <UsageBlock
        ><template #text
          >Place Alerts at the top of the section in which it's relevant. If the
          Alert is only relevant to a particular subsection or tab, place it at
          the top of that subsection or tab.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img
              class="img-fluid"
              src="/src/assets/images/banner-position-1.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't place Alerts below other content in a section or subsection,
          where they might be more easily missed.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img
              class="img-fluid"
              src="/src/assets/images/banner-position-2.png"
            /></div></template
      ></UsageBlock>
      <h3>Stacking</h3>
      <p>
        In cases where there are multiple Alerts shown at the same time, they
        should stack vertically with the highest priority Alert on top (from top
        to bottom: <code>critical</code> Alerts, <code>warning</code> Alerts,
        <code>info</code> Alerts). In this situation, Alerts should remain at
        the top of the most relevant section and push other content down.
      </p>
      <h2 id="states">States</h2>
      <p>
        Alerts, when visible, only have one state. When an Alert has a call to
        action, the embedded outline button element should have a functional
        hover state.
      </p>
      <h2 id="practices">Best Practices</h2>
      <h3>Use Alerts for important, temporary messages</h3>
      <p>
        Alerts draw attention and disrupt the user's workflow. They are
        persistent (including across page loads), and will remain on the page
        until they are resolved or are not longer relevant. For Alerts that are
        dismissible, they will remain on the page until the user clicks the
        dismiss button.
      </p>
      <p>Use Alerts for messages like:</p>
      <ul>
        <li>Warnings and errors</li>
        <li>When further action is required from the user</li>
        <li>
          For timely, important information or announcements (make these
          dismissible)
        </li>
      </ul>
      <UsageBlock
        ><template #text>Use Alerts for temporary, timely messages.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use Alerts to call out permanent content on the page.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <h3>Help the user resolve issues with a call to action</h3>
      <p>
        Give enough detail to convey the message, and use a call to action to
        direct the user to a page where they can resolve the issue if possible
        (especially for <code>critical</code> and <code>warning</code> Alerts).
      </p>
      <UsageBlock
        ><template #text
          >Explain what caused the Alert and direct the user to the right place
          to resolve it.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use vague language or error codes that are not actionable to
          the user.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <h3>Be concise and link to additional information</h3>
      <p>
        Alerts should be no more than 1-3 sentences, but can expand to fit any
        amount of text. Give enough detail to convey the message, and use a call
        to action to direct the user to a page where they can learn more about
        the issue.
      </p>
      <UsageBlock
        ><template #text
          >Keep Alert message concise and link to a relevant page for more
          details.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use multiple, long sentences or mention multiple
          issues.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary"></div></template
      ></UsageBlock>
      <h3>Assistive technology & keyboard functionality</h3>
      <p>
        Alerts include the ARIA <code>role="alert"</code> by default, and should
        automatically be readable by screen readers and other assistive
        technologies. Ensure that the component works with these technologies as
        expected.
      </p>

      <p>
        Alerts with calls to action or dismiss buttons should be completely
        navigable by keyboard alone; the Alert itself will not receive focus,
        but the interactive children must. Check to make sure that any
        interactive elements are accessible via keyboard and that they behave as
        expected.
      </p>

      <p>
        When Alerts are dismissed or resolved, they disappear from the page
        structure (read <a href="#">Bootstrap's documentation</a> on this). The
        Alert component is configured to set focus to the top of the section in
        which the Alert was present. Check to make sure that after an Alert is
        dismissed, focus is set to a predictable location.
      </p>
      <h2 id="implementation">Technical Implementation</h2>
      <table class="table my-5">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Values</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="text-success">variant</code></td>
            <td>
              <code>critical</code> / <code>warning</code> / <code>info</code>
            </td>
            <td>
              <code>string</code><br />Indicates semantic function (applies
              color and icon)
            </td>
          </tr>
          <tr>
            <td><code class="text-success">is-dismissable</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Adds close icon button to dismiss
              element.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">has-cta</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Adds CTA link with button appearance.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">cta-url</code></td>
            <td></td>
            <td>
              <code>string</code><br />Destination URL for CTA [when
              <code>has-cta="true"].</code>
            </td>
          </tr>
          <tr>
            <td><code class="text-success">cta-label</code></td>
            <td></td>
            <td>
              <code>string</code><br />Label for for CTA [when
              <code>has-cta="true"].</code>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import PageContents from "@/components/PageContents.vue";
import UsageBlock from "@/components/UsageBlock.vue";

export default {
  name: "DocsElementsAlert" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: { Layout, CodeBlock, PageContents, UsageBlock },
  data() {
    return {
      pageTitle: "Alert",
    };
  },
};
</script>
