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
      <ul class="list-inline">
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

      <h3 class="fw-bold">Colors</h3>

      <h4>Historic Colors</h4>

      <ul class="list-inline">
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

      <h4>Bootstrap Colors</h4>
      <p>
        The Bootstrap
        <a href="https://getbootstrap.com/docs/5.3/customize/color/#all-colors"
          >original base colors</a
        >
        can be found in their documentation.
      </p>

      <h4>Solstice Colors &amp; Swatches</h4>
      <div class="grid" style="--bs-columns: 6">
        <div>
          <div class="p-3 mb-2 position-relative bg-purple2-500 text-white">
            <strong class="d-block">$purple2</strong>
            #4b2e83
          </div>
          <div class="p-3 bg-purple2-100 text-black">$purple2-100</div>
          <div class="p-3 bg-purple2-200 text-black">$purple2-200</div>
          <div class="p-3 bg-purple2-300 text-black">$purple2-300</div>
          <div class="p-3 bg-purple2-400 text-white">$purple2-400</div>
          <div class="p-3 bg-purple2-500 text-white">$purple2-500</div>
          <div class="p-3 bg-purple2-600 text-white">$purple2-600</div>
          <div class="p-3 bg-purple2-700 text-white">$purple2-700</div>
          <div class="p-3 bg-purple2-800 text-white">$purple2-800</div>
          <div class="p-3 bg-purple2-900 text-white">$purple2-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-red2-500 text-white">
            <strong class="d-block">$red2</strong>
            #cb444a
          </div>
          <div class="p-3 bg-red2-100 text-black">$red2-100</div>
          <div class="p-3 bg-red2-200 text-black">$red2-200</div>
          <div class="p-3 bg-red2-300 text-black">$red2-300</div>
          <div class="p-3 bg-red2-400 text-black">$red2-400</div>
          <div class="p-3 bg-red2-500 text-white">$red2-500</div>
          <div class="p-3 bg-red2-600 text-white">$red2-600</div>
          <div class="p-3 bg-red2-700 text-white">$red2-700</div>
          <div class="p-3 bg-red2-800 text-white">$red2-800</div>
          <div class="p-3 bg-red2-900 text-white">$red2-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
            <strong class="d-block">$blue2</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-blue2-100 text-black">$blue2-100</div>
          <div class="p-3 bg-blue2-200 text-black">$blue2-200</div>
          <div class="p-3 bg-blue2-300 text-black">$blue2-300</div>
          <div class="p-3 bg-blue2-400 text-black">$blue2-400</div>
          <div class="p-3 bg-blue2-500 text-white">$blue2-500</div>
          <div class="p-3 bg-blue2-600 text-white">$blue2-600</div>
          <div class="p-3 bg-blue2-700 text-white">$blue2-700</div>
          <div class="p-3 bg-blue2-800 text-white">$blue2-800</div>
          <div class="p-3 bg-blue2-900 text-white">$blue2-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-beige-500 text-black">
            <strong class="d-block">$beige</strong>
            #ab9765
          </div>
          <div class="p-3 bg-beige-100 text-black">$beige-100</div>
          <div class="p-3 bg-beige-200 text-black">$beige-200</div>
          <div class="p-3 bg-beige-300 text-black">$beige-300</div>
          <div class="p-3 bg-beige-400 text-black">$beige-400</div>
          <div class="p-3 bg-beige-500 text-black">$beige-500</div>
          <div class="p-3 bg-beige-600 text-black">$beige-600</div>
          <div class="p-3 bg-beige-700 text-white">$beige-700</div>
          <div class="p-3 bg-beige-800 text-white">$beige-800</div>
          <div class="p-3 bg-beige-900 text-white">$beige-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-gold-500 text-black">
            <strong class="d-block">$gold</strong>
            #ffbc24
          </div>
          <div class="p-3 bg-gold-100 text-black">$gold-100</div>
          <div class="p-3 bg-gold-200 text-black">$gold-200</div>
          <div class="p-3 bg-gold-300 text-black">$gold-300</div>
          <div class="p-3 bg-gold-400 text-black">$gold-400</div>
          <div class="p-3 bg-gold-500 text-black">$gold-500</div>
          <div class="p-3 bg-gold-600 text-black">$gold-600</div>
          <div class="p-3 bg-gold-700 text-black">$gold-700</div>
          <div class="p-3 bg-gold-800 text-white">$gold-800</div>
          <div class="p-3 bg-gold-900 text-white">$gold-900</div>
        </div>
      </div>

      <h3 class="mt-5 fw-bold">Base Color Palette</h3>
      <p>
        The base color palette serves as the foundational set of colors that
        form the core visual identity of the design system.
      </p>

      <h4 class="fw-bold">Brand Accent</h4>
      <p>
        Use for communicating the UW brand, and can be used in highlighting in
        elements but should be used sparingly. The brand color is typically not
        used for actionable elements.
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="text-bg-brand rounded p-2"
            style="width: 120px; height: 60px"
          >
            brand
          </div>
          <small>#4b2e83</small>
        </li>
      </ul>

      <h4 class="fw-bold">Action</h4>
      <p>
        Action colors are used to pull focus to and communicate which are
        actionable UI elements. They should reserved for things like buttons,
        links, calls-to-action, collapse controls, tabs, etc.
      </p>
      <ul class="list-inline">
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
      <h4 class="fw-bold">Semantic</h4>
      <p>
        Semantic colors denote standard states of value (e.g. information,
        warning, or critical) or workflow (e.g. draft, completed, suspended,
        canceled). Each color has the same basic meaning in all contexts, and
        either helps users contextualize messaging or the workflow status of an
        object.
      </p>
      <ul class="list-inline">
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
          <small>#0dcaf0</small>
        </li>
      </ul>

      <h4 class="fw-bold">Decorative</h4>
      <p>
        [WIP] Decorative colors are used primarily for objects or data
        visualizations
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-purple2-200 rounded p-2"
            style="width: 120px; height: 60px"
          >
            tbd
          </div>
          <small>#b7abcd</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-red2-200 rounded p-2"
            style="width: 120px; height: 60px"
          >
            tbd
          </div>
          <small>#eab4bt</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-beige-200 rounded p-2"
            style="width: 120px; height: 60px"
          >
            tbd
          </div>
          <small>#ddd5c1</small>
        </li>
      </ul>

      <h4 class="fw-bold">Surface</h4>
      <p>
        [WIP] Surface colors are most likely used as the background for content
        containers.
      </p>

      <h5>Constant</h5>
      <p>These backgrounds do not change based on color mode.</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-transparent rounded p-2"
            style="width: 120px; height: 60px"
          >
            transparent
          </div>
          <small>inherits</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-white text-dark rounded p-2"
            style="width: 120px; height: 60px"
          >
            white
          </div>
          <small>#ffffff</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-dark text-light rounded p-2"
            style="width: 120px; height: 60px"
          >
            dark
          </div>
          <small>#212529</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-black text-light rounded p-2"
            style="width: 120px; height: 60px"
          >
            black
          </div>
          <small>#000000</small>
        </li>
      </ul>
      <h5>Color Mode supported</h5>
      <p>
        These colors change based on the color mode. (-subtle theme colors).
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div class="bg-body rounded p-2" style="width: 120px; height: 60px">
            body
          </div>
          <small>#ffffff / #212529</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-body-tertiary rounded p-2"
            style="width: 120px; height: 60px"
          >
            body-tertiary
          </div>
          <small>#f8f9fa / #2b3035</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-light-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            light-subtle
          </div>
          <small>#fcfcfd / #dee2e6</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-dark-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            dark-subtle
          </div>
          <small>#ced4da / #1a1d20</small>
        </li>
      </ul>
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
