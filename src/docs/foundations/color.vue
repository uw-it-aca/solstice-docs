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

      <h3>Deprecated Colors</h3>
      <CodeBlock>
        <template #preview>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
              <div
                class="text-bg-dark-purple rounded p-2"
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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
                style="width: 95px; height: 60px"
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

      <h3>Updated Theme Colors</h3>

      <h4>Call to Action</h4>
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <div
            class="text-bg-primary rounded p-2"
            style="width: 95px; height: 60px"
          >
            primary
          </div>
          <small> #2f68cb</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-secondary rounded p-2"
            style="width: 95px; height: 60px"
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
            style="width: 95px; height: 60px"
          >
            success
          </div>
          <small> #198754</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-danger rounded p-2"
            style="width: 95px; height: 60px"
          >
            danger
          </div>
          <small> #dc3545</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-warning rounded p-2"
            style="width: 95px; height: 60px"
          >
            warning
          </div>
          <small> #4c7286</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-info rounded p-2"
            style="width: 95px; height: 60px"
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
            style="width: 95px; height: 60px"
          >
            light
          </div>
          <small> #f8f9fa</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-dark rounded p-2"
            style="width: 95px; height: 60px"
          >
            dark
          </div>
          <small> #212529</small>
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";

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
