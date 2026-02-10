<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/components/utility"
          >Utility</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
        dolores repudiandae natus dolorem recusandae! Incidunt consequatur
        tenetur ad totam, placeat ipsa explicabo, eaque id blanditiis libero
        culpa veniam aliquam!
      </p>
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
      <h2>Standard</h2>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <SProfile :user-netid="'javerage'" :signout-url="'/signout/url'">
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <SProfile :user-netid="'javerage'" :user-override="'jbothell'">
              <button class="btn btn-link btn-sm text-danger m-0 p-0 border-0">
                clear action
              </button>
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h2>Flyout</h2>

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <SProfile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-official-name="'John C. Average'"
              :user-preferred-name="'John Average'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
              :signout-url="'/signout/url'"
            >
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <SProfile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-override="'jbothell'"
              :user-official-name="'John B. Bothell'"
              :user-preferred-name="'John Bothell'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
            >
              <button class="btn btn-link btn-sm text-danger m-0 p-0 border-0">
                clear action
              </button>
            </SProfile>
          </div>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
import Layout from "@/layouts/default.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { SProfile } from "solstice-vue";

export default {
  name: "DocsComponentsUtilityUser",
  components: {
    Layout,
    CodeBlock,
    SProfile,
  },
  data() {
    return {
      pageTitle: "User",
    };
  },
};
</script>
