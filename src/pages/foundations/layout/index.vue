<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/foundations/">Foundations</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>

    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum
        delectus tempora totam corrupti maxime, quam repellendus a. A similique
        laborum numquam illo corrupti inventore sunt in quaerat quibusdam
        accusantium.
      </p>
      <hr class="w-50 d-inline-block" />
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#header"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Header</a
              >
            </li>
            <li>
              <a
                href="#nav"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Nav</a
              >
            </li>
            <li>
              <a
                href="#main"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Main</a
              >
            </li>
            <li>
              <a
                href="#aside"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Aside</a
              >
            </li>
            <li>
              <a
                href="#footer"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Footer</a
              >
            </li>
            <li>
              <a
                href="#section"
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Section</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2>Foundations of a Layout</h2>
      <h3>What is Layout?</h3>
      <p>
        A “layout” refers to the arrangement and organization of content and
        elements on a web page. Layouts determine how information is presented
        and ultimately how users interact with the content on a web page.
      </p>
      <h3>Page Anatomy + Semantic Landmarks</h3>
      <p>
        Semantic landmarks are specific HTML elements that convey meaning about
        the structure and purpose of content within a web page. They are
        essential in creating accessible web pages. Correctly structured and
        named semantic landmarks make it easier for users who both do and do not
        utilize assistive technologies to navigate and understand the content.
        While there are more than the 5 semantic (landmark/elements) listed
        below, these are the top ones to be aware of. For more information on
        other semantic landmarks/elements and accessibility, visit W3 Schools
        HTML Semantic Elements. and ARIA Landmark Regions.
      </p>
      <div class="col-4">
        <img src="/src/assets/images/Layout-tablet.png" />
        <img src="/src/assets/images/Layout-mobile.png" />
      </div>
      <div class="col-4">
        <img src="/src/assets/images/Layout-desktop.png" />
      </div>

      <h3 id="header">Header</h3>
      <p>
        Headers contain introductory content and commonly include logos,
        navigation, search fields, and profile elements. More than one header
        element can exist in an app but there will likely only be one global
        header. Resource:
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
          >Mozilla - The Header Element</a
        >
      </p>

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Topbar'"
            :link="'/foundations/layout/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Sidebar'"
            :link="'/foundations/layout/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";
import CompDescription from "@/components/CompDescription.vue";

export default {
  name: "DocsLayout",
  components: {
    Layout,
    CompDescription,
    CodeBlock,
    UsageBlock,
    PageContents,
  },
  data() {
    return {
      pageTitle: "Layout & Grid",
    };
  },
};
</script>
