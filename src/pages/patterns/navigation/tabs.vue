<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/patterns">Patterns</BBreadcrumbItem>
        <BBreadcrumbItem to="/patterns/navigation">Navigation</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #lead>
      Tabs Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos
      provident praesentium ipsum sed aperiam aliquam quibusdam voluptatem
      corrupti, reprehenderit illum. Nobis quia incidunt non officia nihil id
      perferendis molestiae?
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
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/</a
        >
      </p>

      <h2>Standard (w/ variants)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem
        sunt, voluptas iure laborum est nesciunt perspiciatis corporis, ducimus
        perferendis nihil unde illum asperiores doloribus vitae velit quod,
        voluptate aperiam?
      </p>

      <CodeBlock>
        <template #preview>
          <STabsList
            :tabs-id="'example'"
            class="mb-4"
            :variant="'pills'"
            style="max-width: 600px"
          >
            <template #items>
              <STabsItem
                :tabs-id="'example'"
                :panel-id="'first'"
                :active-tab="true"
                :variant="'pills'"
                >First</STabsItem
              >
              <STabsItem
                :tabs-id="'example'"
                :panel-id="'second'"
                :variant="'pills'"
                >Second</STabsItem
              >
              <STabsItem
                :tabs-id="'example'"
                :panel-id="'third'"
                :variant="'pills'"
                >Third</STabsItem
              >
            </template>
          </STabsList>
          <STabsList :tabs-id="'example'" class="mb-4" style="max-width: 600px">
            <template #items>
              <STabsItem
                :tabs-id="'example'"
                :panel-id="'first'"
                :active-tab="true"
                >First</STabsItem
              >
              <STabsItem :tabs-id="'example'" :panel-id="'second'"
                >Second</STabsItem
              >
              <STabsItem :tabs-id="'example'" :panel-id="'third'"
                >Third</STabsItem
              >
            </template>
          </STabsList>
          <STabsDisplay :tabs-id="'example'" style="max-width: 600px">
            <template #panels>
              <STabsPanel :panel-id="'first'" :active-panel="true">
                <p>
                  <strong>first</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </STabsPanel>
              <STabsPanel :panel-id="'second'">
                <p>
                  <strong>second</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </STabsPanel>
              <STabsPanel :panel-id="'third'">
                <p>
                  <strong>third</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </STabsPanel>
            </template>
          </STabsDisplay>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;STabsList :tabs-id="'example'">
  &lt;template #items>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'first'" :active-tab="true">
      First
    &lt;/STabsItem>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'second'">
    Second
    &lt;/STabsItem>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'third'">
    Third
    &lt;/STabsItem>
  &lt;/template>
&lt;/STabsList>

&lt;STabsDisplay :tabs-id="'example'"
  &lt;template #panels>
    &lt;STabsPanel :panel-id="'first'" :active-panel="true">
      first ...
    &lt;/STabsPanel>
    &lt;STabsPanel :panel-id="'second'">
      second ...
    &lt;/STabsPanel>
    &lt;STabsPanel :panel-id="'third'">
      third ...
    &lt;/STabsPanel>
  &lt;/template>
&lt;/STabsDisplay></code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";
import { STabsDisplay, STabsPanel, STabsList, STabsItem } from "solstice-vue";

export default {
  name: "DocsPatternsTabs",
  components: {
    Layout,
    CodeBlock,
    BBreadcrumb,
    BBreadcrumbItem,
    STabsDisplay,
    STabsPanel,
    STabsList,
    STabsItem,
  },
  data() {
    return {
      pageTitle: "Tabs",
    };
  },
};
</script>
