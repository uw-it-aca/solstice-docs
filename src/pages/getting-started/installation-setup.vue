<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/getting-started/">Getting Started</a>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
        quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
        ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
        autem molestias?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul>
            <li class="menu-item">
              <a href="#scrollspyHeading1">Template Repository</a>
            </li>
            <li class="menu-item">
              <a href="#scrollspyHeading2">Manual Installation</a>
            </li>
            <li class="menu-item">
              <a href="#scrollspyHeading3">Code Style Guide</a>
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <div class="row">
        <div class="col">
          <h2 class="fw-bold">Setup</h2>
          <h3 id="scrollspyHeading1">
            Template Repository <i class="bi bi-star-fill text-gold"></i>
          </h3>
          <p>
            For any new AXDD applications, we recommend starting with the
            <a href="https://github.com/uw-it-aca/axdd-django-vue"
              >axdd-django-vue</a
            >
            template repository. Installation and the initial configuration is
            already done for you.
          </p>

          <h3 id="scrollspyHeading2">Manual Installation</h3>
          <p>
            If you wish to add Solstice Components to an existing Vue
            application, add the following dependency to your
            <code>package.json</code> and run <code>npm install</code>.
          </p>

          <div class="my-5">
            <CodeBlock>
              <template #script>
                <pre class="language-json rounded">
<code>"dependencies": {
  "solstice-vue": "git+https://github.com/uw-it-aca/solstice-vue.git#1.0.6",
}</code></pre>
              </template>
            </CodeBlock>
          </div>

          <p>
            From the <code>main.js</code> file, import the Solstice Components
            library and install it as plugin using <code>app.use()</code>. You
            must also import the required component library
            <code>style.css</code> as well as the application's main Bootstrap
            entry <code>styles.scss</code> file.
          </p>

          <div class="my-5">
            <CodeBlock>
              <template #script>
                <pre class="language-js rounded">
<code>import { createApp } from "vue";
import App from "./app.vue";
import SolsticeVue from "solstice-vue";

// bootstrap js + bootstrap-icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice-components styles + bootstrap customizations
import "solstice-vue/dist/style.css";
import "solstice-vue/dist/custom.scss";

// local app styles
import "@/path/to/css/styles.scss";

const app = createApp(App);
app.use(SolsticeVue);
</code></pre>
              </template>
            </CodeBlock>
          </div>

          <p>
            The component library can now be used globally within the
            application. Refer to the specific component resource for usage and
            implementation documentation.
          </p>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2 id="scrollspyHeading3">Code Style Guide</h2>
      <p>
        <a href="https://vuejs.org/style-guide/" target="_blank"
          >https://vuejs.org/style-guide/</a
        >
      </p>

      <h2>Priority Rule</h2>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-essential.html"
          target="_blank"
          >https://vuejs.org/style-guide/rules-essential.html</a
        >
      </p>
      <p>
        We currently use Priority A - Essential. This is the strictest and is
        enforced by ESLint.
      </p>
      <h2>Building components</h2>

      <h3>Filename Casing</h3>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing"
          target="_blank"
          >https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing</a
        >
      </p>
      <p>
        Filenames of Single-File Components should either be always PascalCase
        or always kebab-case.
      </p>

      <h3>Semantic HTML markup</h3>
      <h3>Utility-first CSS</h3>
      <p>
        Bootstrap and other CSS frameworks provide low-level utility classes
        that let you build completely custom designs without ever leaving your
        HTML.
      </p>

      <h2>Testing Components</h2>
      <p>
        <a
          href="https://vuejs.org/guide/scaling-up/testing.html#component-testing"
          target="_blank"
          >https://vuejs.org/guide/scaling-up/testing.html#component-testing</a
        >
      </p>

      <h2>AXDD Django Vue</h2>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsInstallationSetup",
  components: { Layout, CodeBlock, PageContents },
  data() {
    return {
      pageTitle: "Installation & Setup",
    };
  },
};
</script>
