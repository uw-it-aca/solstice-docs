<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
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
    </template>
    <template #lead>
      Get to know our design thinking and how we put it into action across our
      design system.
    </template>
    <template #toc></template>
    <template #content>
      <h2>What is Solstice?</h2>
      <p>
        Solstice is a resource for documenting design best practices. It
        provides a set of curated content guidelines, UI elements, and UX design
        patterns that work as the foundation for application design and
        development at Data &amp; Applications (D&amp;A).
      </p>

      <h2>Who is Solstice for?</h2>
      <p>
        Solstice is designed and maintained by the Service Coordination (SC)
        Experience Design Team, to help provide users with a consistent
        experience across D&amp;A services.
      </p>

      <h2>What apps should use Solstice?</h2>
      <p>Web applications and websites within D&amp;A and the broader UW-IT</p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsSolstice101",
  components: { Layout },
  data() {
    return {
      pageTitle: "Solstice 101",
    };
  },
};
</script>
