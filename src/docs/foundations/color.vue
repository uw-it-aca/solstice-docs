<template>
  <Layout :page-title="pageTitle">
    <template #content>
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
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/background/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/borders/#border-color"
            target="_blank"
          >
            https://getbootstrap.com/docs/5.1/utilities/borders/#border-color</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/colors/"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/colors/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/components/alerts/"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/components/alerts/</a
          >
        </li>
      </ul>

      <p>Example: bg-xxxxx and text-xxxxx</p>

      <CodeBlock>
        <template #preview>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
              <div
                class="text-bg-dark-purple rounded p-2"
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
                style="width: 85px; height: 60px"
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
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  name: "DocsElementsIndex",
  components: { Layout, CodeBlock },
  data() {
    return {
      pageTitle: "Color",
    };
  },
};
</script>
