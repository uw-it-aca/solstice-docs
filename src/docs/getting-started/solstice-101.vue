<template>
  <Layout>
    <template #content>
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

      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Principles are the foundation of the system. They form the basis of a
        good product and help the team with decision making. They are here to
        guide you and your team when working with the myriad parts of the system
        and help you do better and more informed decisions.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Example:
        <a href="https://designsystem.digital.gov/design-principles/"
          >https://designsystem.digital.gov/design-principles/</a
        >
      </p>

      <h2>Design is how it works</h2>
      <h2>Reduce concepts to increase confidence</h2>
      <h2>Design with real data</h2>
      <h2>Design systems, not pages</h2>
      <h2>Involve code early</h2>
      <h2>Fast is better than slow</h2>
      <h2>Let content determine breakpoints</h2>
      <h2>Strive for universality</h2>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsPrinciples",
  components: { Layout },
  data() {
    return {
      appName: "Solstice",
      pageTitle: "Solstice 101",
    };
  },
  mounted: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
