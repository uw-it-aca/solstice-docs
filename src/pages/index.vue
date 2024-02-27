<template>
  <Layout>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="lead text-muted">
        Solstice Design is a resource for building and documenting UI components
        using Bootstrap and Vue/React Javascript frameworks. It provides a set
        of organized guidelines, patterns and best practices that work as the
        foundation for application design and development at D&amp;A. test asdfa
      </p>

      <hr class="w-50 d-inline-block" />
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Getting Started</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using Solstice Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h3>Goals</h3>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
            <li>Automated testing</li>
          </ul>
        </div>
        <div class="col">
          <h3>Solstice 101</h3>
          <p>
            Get to know our design thinking and how we put it into action across
            our design system.
          </p>

          <p>
            <sol-link href="/getting-started/solstice-101"
              >Learn about our design system</sol-link
            >
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <axdd-panel class="bg-body-tertiary flex-fill">
            <h3 class="card-title">Component Lifecycle</h3>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <sol-link href="/getting-started/component-lifecycle"
                >View Component Lifecycle</sol-link
              >
            </div>
          </axdd-panel>
        </div>
        <div class="col d-flex flex-column">
          <axdd-panel class="bg-body-tertiary flex-fill">
            <h3 class="card-title">Installation &amp; Setup</h3>
            <p>
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <sol-link href="/getting-started/installation-setup"
                >View Installation &amp; Setup</sol-link
              >
            </div>
          </axdd-panel>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Guides</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using Solstice Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h3>Content</h3>
          <p>
            Learn how to use language to design a more thoughtful product
            experience.
          </p>

          <p>
            <sol-link href="/content/">Read content guidelines</sol-link>
          </p>
        </div>
        <div class="col">
          <h3>Foundations</h3>
          <p>
            Use design foundations to ensure consistency across the application.
          </p>
          <p>
            <sol-link href="/foundations/">Browse foundations</sol-link>
          </p>
        </div>
        <div class="col">
          <h3>Elements</h3>
          <p>
            Use elements as building blocks as you design and develop new
            products and features.
          </p>
          <p><sol-link href="/elements/">Browse elements</sol-link></p>
        </div>
        <div class="col">
          <h3>Patterns</h3>
          <p>Patterns consist of design tokens, elements, and patterns.</p>
          <p><sol-link href="/patterns/">Browse patterns</sol-link></p>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsIndex",
  components: {
    Layout,
  },
  data() {
    return {
      pageTitle: "Solstice Design System",
    };
  },
  methods: {},
  // MARK: override layout pageTitle prop
  mounted: function () {
    document.title = this.appName;
  },
};
</script>
