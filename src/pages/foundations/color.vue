<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/foundations/" class="link-primary">Foundations</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>

      <h2>{{ pageTitle }}</h2>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        consequuntur tempore amet consectetur minus autem corporis nostrum sit
        sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
        voluptas debitis!
      </p>

      <p>
        <a
          href="https://getbootstrap.com/docs/5.1/customize/color/"
          class="link-primary"
          target="_blank"
          >https://getbootstrap.com/docs/5.1/customize/color/</a
        >
      </p>

      <p>
        Color is automatically applied to the following utilities and
        components.
      </p>
      <ul>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/background/"
            class="link-primary"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/background/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/borders/#border-color"
            class="link-primary"
            target="_blank"
          >
            https://getbootstrap.com/docs/5.1/utilities/borders/#border-color</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/colors/"
            class="link-primary"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/colors/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/components/alerts/"
            class="link-primary"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/components/alerts/</a
          >
        </li>
      </ul>

      <p>Example: bg-xxxxx and text-xxxxx</p>

      <h3>Historic Colors</h3>
      <CodeBlock>
        <template #preview>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
              <div
                class="text-bg-dark-purple rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >dark-purple<br />
                #452a78</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-purple rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >purple<br />
                #4d307f</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-dark-beige rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >dark-beige<br />
                #85754d</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-mid-beige rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >mid-beige<br />
                #ab9765</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-beige rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >beige<br />
                #e8e3d3</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-light-beige rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >light-beige<br />
                #faf8f4</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-gold rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >gold<br />
                #ffbc24</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-teal rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >teal<br />
                #4c7286</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-light-gray rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >light-gray<br />
                #e8e8e8</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-gray rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >gray<br />
                #e9ecef</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-dark bg-opacity-10 rounded p-2"
                style="width: 120px; height: 60px"
              >
                hello
              </div>
              <small
                >bg-opacity-10<br />
                90% black</small
              >
            </li>
          </ul>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code class="html rounded">&lt;div class="bg-dark-purple"&gt;
&lt;div class="bg-purple"&gt;
&lt;div class="bg-dark-beige"&gt;
...</code></pre>
        </template>
      </CodeBlock>

      <h3>Updated Theme</h3>

      <h4>Branding</h4>
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <div
            class="text-bg-brand rounded p-2"
            style="width: 120px; height: 60px"
          >
            brand
          </div>
          <small> #2f68cb</small>
        </li>
      </ul>

      <h4>Call to Action</h4>
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <div
            class="text-bg-primary rounded p-2"
            style="width: 120px; height: 60px"
          >
            primary
          </div>
          <small> #2f68cb</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-action rounded p-2"
            style="width: 120px; height: 60px"
          >
            action
          </div>
          <small> #2f68cb</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-secondary rounded p-2"
            style="width: 120px; height: 60px"
          >
            secondary
          </div>
          <small> #6c757d</small>
        </li>
      </ul>
      <h4>Semantic</h4>
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <div
            class="text-bg-success rounded p-2"
            style="width: 120px; height: 60px"
          >
            success
          </div>
          <small> #198754</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-danger rounded p-2"
            style="width: 120px; height: 60px"
          >
            danger
          </div>
          <small> #cb444a</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-critical rounded p-2"
            style="width: 120px; height: 60px"
          >
            critical
          </div>
          <small> #cb444a</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-warning rounded p-2"
            style="width: 120px; height: 60px"
          >
            warning
          </div>
          <small> #4c7286</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-info rounded p-2"
            style="width: 120px; height: 60px"
          >
            info
          </div>
          <small> #0dcaf0</small>
        </li>
      </ul>
      <h4>Surfaces</h4>
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <div
            class="text-bg-light rounded p-2"
            style="width: 120px; height: 60px"
          >
            light
          </div>
          <small> #f8f9fa</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-dark rounded p-2"
            style="width: 120px; height: 60px"
          >
            dark
          </div>
          <small> #212529</small>
        </li>
      </ul>

      <h4>Swatches</h4>
      <div class="d-flex w-50">
        <div style="width: 150px" class="col mb-3">
          <div class="p-3 mb-2 position-relative bg-purple2-500 text-white">
            <strong class="d-block">$purple2</strong>
            #4b2e83
          </div>
          <div class="p-3 bg-purple2-100">$purple2-100</div>
          <div class="p-3 bg-purple2-200">$purple2-200</div>
          <div class="p-3 bg-purple2-300">$purple2-300</div>
          <div class="p-3 bg-purple2-400 text-light">$purple2-400</div>
          <div class="p-3 bg-purple2-500 text-white">$purple2-500</div>
          <div class="p-3 bg-purple2-600 text-white">$purple2-600</div>
          <div class="p-3 bg-purple2-700 text-white">$purple2-700</div>
          <div class="p-3 bg-purple2-800 text-white">$purple2-800</div>
          <div class="p-3 bg-purple2-900 text-white">$purple2-900</div>
        </div>

        <div style="width: 150px" class="col mb-3">
          <div class="p-3 mb-2 position-relative bg-red2-500 text-white">
            <strong class="d-block">$red2</strong>
            #cb444a
          </div>
          <div class="p-3 bg-red2-100">$red2-100</div>
          <div class="p-3 bg-red2-200">$red2-200</div>
          <div class="p-3 bg-red2-300">$red2-300</div>
          <div class="p-3 bg-red2-400 text-light">$red2-400</div>
          <div class="p-3 bg-red2-500 text-white">$red2-500</div>
          <div class="p-3 bg-red2-600 text-white">$red2-600</div>
          <div class="p-3 bg-red2-700 text-white">$red2-700</div>
          <div class="p-3 bg-red2-800 text-white">$red2-800</div>
          <div class="p-3 bg-red2-900 text-white">$red2-900</div>
        </div>

        <div style="width: 150px" class="col mb-3">
          <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
            <strong class="d-block">$blue2</strong>
            #2F68CB
          </div>
          <div class="p-3 bg-blue2-100">$blue2-100</div>
          <div class="p-3 bg-blue2-200">$blue2-200</div>
          <div class="p-3 bg-blue2-300">$blue2-300</div>
          <div class="p-3 bg-blue2-400 text-light">$blue2-400</div>
          <div class="p-3 bg-blue2-500 text-white">$blue2-500</div>
          <div class="p-3 bg-blue2-600 text-white">$blue2-600</div>
          <div class="p-3 bg-blue2-700 text-white">$blue2-700</div>
          <div class="p-3 bg-blue2-800 text-white">$blue2-800</div>
          <div class="p-3 bg-blue2-900 text-white">$blue2-900</div>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";

export default {
  name: "DocsColor",
  components: { Layout, CodeBlock },
  data() {
    return {
      pageTitle: "Color",
    };
  },
};
</script>
