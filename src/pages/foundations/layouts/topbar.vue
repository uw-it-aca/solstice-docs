<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/foundations/">Foundations</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/foundations/layouts/">Layouts</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">The topbar layout is ****.</p>
      <hr class="w-50 d-inline-block" />
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
                class="px-2 py-1 text-muted text-decoration-none rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="anatomy" class="mb-3">Page Anatomy</h2>
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
      <!--<div class="row">
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
      </div>-->

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

      <h2 id="accessibility" class="fw-bold">Accessibility</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>
      <p>Other accessibility info...</p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2 id="implementation" class="fw-bold">Implementation</h2>

      <h3>Markup</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis minus
        tenetur cumque facere doloremque possimus quidem est repudiandae nam, a
        quaerat amet. Inventore ut eligendi id. Suscipit ab facilis earum?
      </p>
      <CodeBlock>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar :app-name="'App Name'" :app-root-url="'/'">&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Props</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="w-25">Prop</th>
            <th scope="col">Required</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>:app-name</code></th>
            <td>true</td>
            <td>String</td>
            <td>appName</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:app-root-url</code></th>
            <td>true</td>
            <td>String</td>
            <td>#</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Slots</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="w-25">Slot</th>
            <th scope="col">Required</th>
            <th scope="col">Fallback</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>#profile</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#bar</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#navigation</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#main</code></th>
            <td>true</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#aside</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#footer</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>
      <hr class="mb-5 w-25 d-inline-block" />

      <h2 class="fw-bold">Preview</h2>
      <h3>Basic structure</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar :app-name="'TopBar'" :is-preview="true" class="border">
            <template #profile>profile here...</template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer>footer here...</template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar :app-name="'TopBar'">
  &lt;template #profile>
    profile here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;/template>
  &lt;template #footer>
    footer here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>With Navigation</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar
            :app-name="'TopBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border"
          >
            <template #profile> profile here... </template>
            <template #navigation>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">nav here...</div>
                </div>
              </div>
            </template>
            <template #aside>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">aside here...</div>
                </div>
              </div>
            </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar>
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #aside>
    aside here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>With Banner Bar</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar :app-name="'TopBar'" :is-preview="true" class="border">
            <template #profile> profile here... </template>
            <template #bar>
              <div class="row">
                <div class="col">
                  <div class="bg-gray p-2 text-center">bar here...</div>
                </div>
              </div>
            </template>
            <template #navigation>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">nav here...</div>
                </div>
              </div>
            </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar>
  &lt;template #bar>
    bar here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";

export default {
  name: "DocsTopbar",
  components: {
    Layout,
    CodeBlock,
  },
  data() {
    return {
      pageTitle: "Topbar",
    };
  },
};
</script>
