<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      Solstice is a resource for documenting design best practices. It provides
      a set of curated content guidelines, UI elements, and UX design patterns
      that work as the foundation for application design and development at Data
      &amp; Applications (D&amp;A).
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Getting Started</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using Solstice.
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
            <BLink to="/getting-started/solstice-101"
              >Learn about our design system</BLink
            >
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <BCard
            class="bg-body-tertiary rounded-3"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <h3 class="card-title">Design with Solstice</h3>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <BLink to="/getting-started/design-with-solstice"
                >View Design with Solstice</BLink
              >
            </div>
          </BCard>
        </div>
        <div v-if="isDev" class="col d-flex flex-column">
          <BCard
            class="bg-body-tertiary rounded-3"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <h3 class="card-title">Installation &amp; Setup</h3>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <BLink to="/getting-started/installation-setup"
                >View Installation &amp; Setup</BLink
              >
            </div>
          </BCard>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Guides</h2>
          <p>
            Check out these documentation guides to help you understand how to
            design applications using Solstice Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <h3>Content</h3>
          <p class="flex-fill">
            Learn how to use language and text to design a more thoughtful user
            experience.
          </p>

          <p>
            <sol-link href="/content/">Review content guidelines</sol-link>
          </p>
        </div>
        <div class="col d-flex flex-column">
          <h3>Foundations</h3>
          <p class="flex-fill">
            Design foundations are used to ensure visual consistency across the
            application.
          </p>
          <p>
            <sol-link href="/foundations/">Browse foundations</sol-link>
          </p>
        </div>
        <div class="col d-flex flex-column">
          <h3>UI Elements</h3>
          <p class="flex-fill">
            UI elements are reusable components that can stand alone or form
            part of multiple UX patterns.
          </p>
          <p><sol-link href="/elements/">Browse UI elements</sol-link></p>
        </div>
        <div class="col d-flex flex-column">
          <h3>UX Patterns</h3>
          <p class="flex-fill">
            UX patterns are groups of UI elements used by designers to solve
            usability issues.
          </p>
          <p><sol-link href="/patterns/">Browse UX patterns</sol-link></p>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import { getDevEnv } from "@/utils/global";
import Layout from "@/layout.vue";
import { BCard, BLink } from "bootstrap-vue-next";

export default {
  name: "DocsIndex",
  components: {
    Layout,
    BCard,
    BLink,
  },
  data() {
    return {
      pageTitle: "Solstice Design System",
      isDev: true,
    };
  },
  methods: {},
  mounted: function () {
    // MARK: override layout pageTitle prop
    document.title = this.appName;

    // MARK: set the dev environment for feature flagging
    this.isDev = getDevEnv();
  },
};
</script>
