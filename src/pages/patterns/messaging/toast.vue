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
    <template #lead>
      Toasts give timely feedback about non-critical information that does not
      require further action. In Solstice, Toasts are primarily used to
      communicate success and confirmation messages with minimal disruption, and
      they dismiss automatically. For intentionally disruptive messages
      communicating critical information, use an <a href="alert">Alert</a>.
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
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#placement"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Placement</a
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
      <h2 id="variants">Variants</h2>
      <h3>Success</h3>
      <p>
        Toasts with the <code>success</code> variant confirm that simple user
        actions have completed as intended, and do not require additional
        attention. This variant carries the semantic color green.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Message here</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-toast variant="success">
  Added to plan
&lt;/sol-toast>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Neutral</h3>
      <p>
        Toasts with the <code>neutral</code> variant can be used in rare cases
        to convey timely, non-critical feedback that does not make sense as a
        <code>success</code>. Rather than a semantic color, this variant appears
        in gray.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <p>Internet disconnect</p>
          </template>
          <template #markup>
            <pre class="language-html">
<code>&lt;sol-toast variant="success">
  Internet disconnect
&lt;/sol-toast>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="anatomy">Anatomy</h2>
      <h3>Sizing</h3>
      <p>
        Toasts occupy a fixed width. By default, their height accommodates one
        line of text; Toasts can expand to fit additional lines, but text length
        should be kept to one line when possible. Since Toasts sit above page
        content, their size neither affects nor is affected by other elements in
        the markup.
      </p>
      <h3>Color</h3>
      <p>
        Alerts always carry a semantic meaning with a corresponding color:
        <code>critical</code> (red), <code>warning</code> (yellow), or
        <code>info</code> (blue). Refer to the Solstice
        <a href="color">Semantic Color Palette</a>
        for appropriate values.
      </p>
      <h3>Dark Mode Support</h3>
      <p>
        Toasts must maintain proper contrast in order to be readable in both
        light and dark modes. By default, the component will update to
        appropriate colors within the semantic color palette.
      </p>
      <p>
        Below are the primitive color values (100-900) for each of the elements
        within an Toast. The <code>success</code> colors are shown as an
        example, but the primitive values apply to each of the semantic colors.
      </p>
      <h3>Icon</h3>
      <p>
        Toasts with the <code>success</code> variant contain a corresponding
        semantic icon. This icon always appears to the left of the text. Since
        they have no semantic meaning, toasts with the
        <code>neutral</code> variant do not contain an icon.
      </p>
      <h3>Dismiss Button</h3>
      <p>
        While toasts will disappear after a specified time automatically by
        default, they also contain a button to dismiss them manually. This
        button (an 'x' icon) always appears to the right of the text.
      </p>
      <h3>Shadow</h3>
      <p>
        Toasts sit above page content, so they use a shadow to communicate
        elevation. By default, Toasts use the default shadow from
        <a href="https://getbootstrap.com/docs/5.3/utilities/shadows/"
          >Bootstrap's</a
        >
        <code>box-shadow</code> utility classes.
      </p>
      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <p>
        Place Toasts centered across the bottom of the window or viewport, with
        adequate padding (at least 16px/1rem) above the bottom.
      </p>
      <p>
        On mobile, place Toasts centered across the bottom of the page viewport,
        above any browser UI.
      </p>
      <p>
        On any given platform (and with as much cross-platform consistency as
        possible), Toasts should appear in the same place every time so that
        users know where to expect them.
      </p>
      <UsageBlock
        ><template #text
          >Always display Toasts in the same place, centered at the bottom of
          the windowc.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img
              class="img-fluid"
              src="/src/assets/images/toast-asset-placement-do.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't put Toasts in different places throughout the page, where users
          might not expect them or where they might be more likely to block
          important content.</template
        ><template #preview
          ><div class="border rounded-3 p-3 bg-body-tertiary">
            <img
              class="img-fluid"
              src="/src/assets/images/toast-asset-placement-dont.png"
            /></div></template
      ></UsageBlock>
      <h3>Autohide</h3>
      <p>
        By default, the <code>autohide</code> property is true, and Toasts will
        disappear automatically after 5 seconds. For most simple messages, this
        should be sufficient. In special cases, <code>autohide</code> can be
        turned off or the <code>delay</code> can be extended. Do not show a
        Toast with a <code>delay</code> of less than 5 seconds, as there is a
        greater chance of it being missed.
      </p>
      <h3>Stacking</h3>
      <p>
        By default, multiple Toasts stack on top of each other, with the most
        recent message on top. When a Toast disappears, others move down to
        occupy the space closest to the bottom of the screen.
      </p>
      <img src="">
      <h2 id="states">States</h2>
      <p>
        When visible, Toasts only exist in one state. By default, the dismiss
        button (an x icon) should have a functional hover state.
      </p>

      <h2 id="practices">Best Practices</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implementation">Technical Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
  inject: ["mq"],
  components: { Layout, CodeBlock, UsageBlock, PageContents },
  data() {
    return {
      pageTitle: "Toast",
    };
  },
};
</script>
