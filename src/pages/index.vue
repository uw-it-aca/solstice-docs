<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Solstice is a resource for documenting design best practices. It
        provides a set of curated content guidelines, UI elements, and UX design
        patterns that work as the foundation for application design and
        development at Data &amp; Applications (D&amp;A).
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Getting Started</SHeading>
          <p>
            Check out these guides to help you understand how to design
            applications using Solstice.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <SHeading level="3">Goals</SHeading>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
            <li>Automated testing</li>
          </ul>
        </div>
        <div class="col">
          <SHeading level="3">Solstice 101</SHeading>
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
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" system="app">Design Principles</SHeading>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <BLink to="/getting-started/design-principles"
                >View Design Principles</BLink
              >
            </div>
          </BCard>
        </div>
        <div class="col d-flex flex-column">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" system="app">Developer Guide</SHeading>
            <p class="flex-fill">
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <div class="text-end">
              <BLink to="/getting-started/developer-guide"
                >View Developer Guide</BLink
              >
            </div>
          </BCard>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Guides</SHeading>
          <p>
            Check out these documentation guides to help you understand how to
            design applications using Solstice Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <BCard body-class="p-4">
            <SHeading level="3" system="app">Content</SHeading>
            <p class="flex-fill">
              Learn how to use language and text to design a more thoughtful
              user experience.
            </p>

            <p>
              <BLink href="/content/">Review content guidelines</BLink>
            </p>
          </BCard>
        </div>
        <div class="col d-flex flex-column">
          <BCard body-class="p-4">
            <SHeading level="3" system="app">Foundations</SHeading>
            <p class="flex-fill">
              Design foundations are used to ensure visual consistency across
              the application.
            </p>
            <p>
              <BLink href="/foundations/">Browse foundations</BLink>
            </p>
          </BCard>
        </div>
        <div class="col d-flex flex-column">
          <BCard body-class="p-4">
            <SHeading level="3" system="app">Components</SHeading>
            <p class="flex-fill">
              UI elements are reusable components that can stand alone or form
              part of multiple UX patterns.
            </p>
            <p><BLink href="/components/">Browse components</BLink></p>
          </BCard>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      BCard,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Solstice Design System",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: override layout pageTitle prop
      document.title = this.appName;

      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
