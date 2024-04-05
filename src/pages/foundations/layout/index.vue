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
      <h2 class="mb-3">Foundations of a Layout</h2>
      <h3>What is Layout?</h3>
      <p>
        A “layout” refers to the arrangement and organization of content and
        elements on a web page. Layouts determine how information is presented
        and ultimately how users interact with the content on a web page.
      </p>
      <h3 class="mb-3">Page Anatomy + Semantic Landmarks</h3>
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
      <div class="row">
        <div class="col">
          <img
            src="/src/assets/images/Layout-tablet.png"
            class="rounded bg-white img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/src/assets/images/Layout-mobile.png"
            class="rounded bg-white img-fluid"
          />
        </div>
      </div>
      <div class="my-3 row">
        <div class="col">
          <img
            src="/src/assets/images/Layout-desktop.png"
            class="rounded bg-white img-fluid"
          />
        </div>
      </div>

      <h3 class="mb-3" id="header">Header</h3>
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
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;header> or &lt;div role="header">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

      <div class="my-5">
        <UsageBlock variant="dont">
          <template #text
            >Don't confuse a
            <code> &lt;header></code>
            tag with the <code>&lt;h1></code> or <code>&lt;h6></code> typography
            headings used to create text hierarchy. The term “page header” will
            typically refer to the <code>&lt;h1></code> used in the content
            section of the page.</template
          >
        </UsageBlock>
        <UsageBlock>
          <template #text
            >Do keep <code>&lt;header></code> tags on their own and outside of
            any other headers or footers.</template
          >
        </UsageBlock>
      </div>

      <h3 class="mb-3" id="nav">Navigation</h3>
      <p>
        A <code>&lt;nav></code> element will contain the major grouping of
        navigational links that take users to various sections or pages within
        the website. Examples of where a <code>&lt;nav></code> element would be
        used are: a global navigation menu, page level navigation, and
        breadcrumbs. Resource:
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
          >Mozilla - The Navigation Element</a
        >
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;nav> or &lt;div role="nav">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

      <div class="my-5">
        <UsageBlock variant="dont">
          <template #text
            >Refrain from placing all links of a document inside the
            <code>&lt;nav></code> element.
          </template>
        </UsageBlock>
        <UsageBlock>
          <template #text
            >Structure items within a <code>&lt;nav></code> as unordered lists
            (<code>&lt;ul></code>).</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <code>
                &lt;nav class="primary-nav"> &lt;ul> &lt;li> &lt;a
                href="/academics/">Academics&lt;/a>&lt;/li> &lt;li>&lt;a
                href="/resources/">Resources&lt;/a>&lt;/li> &lt;li>&lt;a
                href="/contact-us/">Contact Us&lt;/a>&lt;/li> &lt;/ul> &lt;/nav>
              </code>
            </div>
          </template>
        </UsageBlock>
      </div>

      <h3 class="mb-3" id="main">Main</h3>
      <p>
        The <code>&lt;main></code> tag signifies the space where the “main”
        textual, visual, and interactive content of a web page resides. The
        content displayed should be page specific and any global components such
        as a header or footer should not be in the
        <code>&lt;main></code> element. Resource:
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
          >Mozilla - The Main Element</a
        >
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;main> or &lt;div role="main">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Use additional semantic elements like <code>&lt;section></code> or
            <code>&lt;article></code> to further group content together within
            <code>&lt;main></code>.
          </template>
        </UsageBlock>
      </div>

      <h3 class="mb-3" id="aside">Aside</h3>
      <p>
        An <code>&lt;aside></code> is usually page specific and will contain
        content that is tangentially related to the content around it, such as a
        sidebar, related articles or a pull quote. Resource:
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
          >Mozilla - The Aside Element</a
        >
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;aside> or &lt;div role="aside">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

      <div class="my-5">
        <UsageBlock variant="dont">
          <template #text
            >If multiple asides are being used through the document, the content
            of the asides does not have to be the same in each one.
          </template>
        </UsageBlock>
        <UsageBlock>
          <template #text
            >Use asides on and as needed basis. Not every page needs to have an
            aside, and they may not be needed at all. The usage will depend on
            the content and users you are designing for.</template
          >
        </UsageBlock>
      </div>

      <h3 class="mb-3" id="footer">Footer</h3>
      <p>
        The <code>&lt;footer></code> tag represents the section at the base of a
        page that will often contain metadata, copyright information, and
        potentially top level links. Resource:
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
          >Mozilla - The Footer Element</a
        >
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;footer> or &lt;div role="footer">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

      <div class="my-5">
        <UsageBlock variant="dont">
          <template #text
            >Don't place a <code>&lt;footer></code> inside of another HTML
            element, including <code>&lt;main></code>.</template
          >
        </UsageBlock>
        <UsageBlock>
          <template #text
            >Footers within Solstice apps should be global and the contents
            should remain the same across all pages of a site/app.</template
          >
        </UsageBlock>
      </div>

      <h3 class="mb-3" id="section">Section</h3>
      <p>
        Sections reside within main? still need to figure this element out
        ********************* Resource:
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
          >Mozilla - The Section Element</a
        >
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #markup>
            <pre class="language-html">
  <code>&lt;section> or &lt;div role="section">
  </code>
</pre>
          </template>
        </CodeBlock>
      </div>

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
