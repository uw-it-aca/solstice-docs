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
      <a href="/elements/toasts">Toast</a>.
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
            <li>
              <a
                href="#changlog"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Changelog</a
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
      <h3>Size</h3>
      <h3>Text</h3>
      <h3>Color</h3>
      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <h3>Stacking</h3>
      <h2 id="states">States</h2>
      <h2 id="practice">Best Practices</h2>
      <h3>Use Alerts for important, temporary messages</h3>
      <h3>Help the user resolve issues with a call to action</h3>
      <h3>Be concise and link to additional information</h3>
      <h3>Assistive technology & keyboard functionality</h3>
      <h2 id="implementation">Implementation</h2>
      <h2 id="changelog">Changelog</h2>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
// import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsElementsAlert" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: { Layout, CodeBlock, /*  UsageBlock, */ PageContents },
  data() {
    return {
      pageTitle: "Alert",
    };
  },
};
</script>
