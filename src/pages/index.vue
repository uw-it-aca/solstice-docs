<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead fw-bold">Build faster. Design better. Stay consistent.</p>
      <p class="lead" style="max-width: 85ch">
        Solstice is the single source of truth for Data & Applications (D&A). We
        provide a curated ecosystem of content guidelines, design foundations,
        and production-ready web components. By unifying our design language,
        Solstice empowers teams to build cohesive, accessible, and
        high-performance digital experiences from the ground up.
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
        <div class="col d-flex flex-column">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">Solstice 101</SHeading>
            <p class="flex-fill">
              Learn about our mission, our versioning strategy, and how Solstice
              accelerates the D&A workflow.
            </p>
            <div class="text-end">
              <BLink to="/getting-started/solstice-101"
                >Learn about our design system</BLink
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
            <SHeading level="3" class="mb-3">Design Principles</SHeading>
            <p class="flex-fill">
              Explore the core philosophies that guide our aesthetic and
              functional decision-making.
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
            <SHeading level="3" class="mb-3">Developer Guide</SHeading>
            <p class="flex-fill">
              Jump into the technical specs to install our component library and
              start building.
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
            design websites and applications using Solstice Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">Content</SHeading>
            <p class="flex-fill">
              <strong>Speak the same language.</strong> Learn how to use tone,
              grammar, and microcopy to guide users through complex data
              workflows.
            </p>

            <div class="text-end">
              <BLink href="/content/">Review content guidelines</BLink>
            </div>
          </BCard>
        </div>
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">Foundations</SHeading>
            <p class="flex-fill">
              <strong>The DNA of Solstice.</strong> Standardize your layout with
              our core systems for color, typography, spacing, and elevation.
            </p>
            <div class="text-end">
              <BLink href="/foundations/">Review design foundations</BLink>
            </div>
          </BCard>
        </div>
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">Components</SHeading>
            <p class="flex-fill">
              <strong>Assemble with ease.</strong> Access a library of
              accessible, production-ready UI elements designed to work together
              seamlessly.
            </p>
            <div class="text-end">
              <BLink href="/components/">Browse component library</BLink>
            </div>
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
