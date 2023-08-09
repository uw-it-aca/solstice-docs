<template>
  <Layout>
    <template #content>
      <h1 class="fw-bold">{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Solstice Design is a resource for building and documenting UI components
        using Bootstrap and Vue/React Javascript frameworks. It provides a set
        of organized guidelines, patterns and best practices that work as the
        foundation for application design and development at AXDD.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

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
            <router-link to="/getting-started/solstice-101"
              >Learn about our design system</router-link
            >
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <axdd-panel class="text-bg-light-beige flex-fill">
            <h3 class="card-title">Component Lifecycle</h3>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <router-link to="/getting-started/component-lifecycle"
                >View Component Lifecycle</router-link
              >
            </div>
          </axdd-panel>
        </div>
        <div class="col d-flex flex-column">
          <axdd-panel class="text-bg-purple flex-fill">
            <h3 class="card-title">Installation &amp; Setup</h3>
            <p>
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <router-link to="/getting-started/installation-setup"
                >View Installation &amp; Setup</router-link
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
            <router-link to="/content/">Read content guidelines</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Foundations</h3>
          <p>
            Use design foundations to ensure consistency across the application.
          </p>
          <p>
            <router-link to="/foundations/">Browse foundations</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Elements</h3>
          <p>
            Use elements as building blocks as you design and develop new
            products and features.
          </p>
          <p><router-link to="/elements/">Browse elements</router-link></p>
        </div>
        <div class="col">
          <h3>Patterns</h3>
          <p>Patterns consist of design tokens, elements, and patterns.</p>
          <p><router-link to="/patterns/">Browse patterns</router-link></p>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>{{ lastModified }}</template>
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
      lastModified: null,
    };
  },
  methods: {
    updateLastModified() {
      this.lastModified = new Date().toLocaleString();
    },
  },
  // MARK: override layout pageTitle prop
  mounted: function () {
    document.title = this.appName;
    this.lastModified = new Date(document.lastModified).toLocaleString();
  },
};
</script>
