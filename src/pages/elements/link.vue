<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/elements/">Elements</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>

      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Links navigate between or within web pages and initiate simple actions.
        They can be used in paragraphs, in groups, or on their own.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Variants</h2>
      <p class="col-md-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum
        dolorum facilis aspernatur iure neque aut numquam id? Tenetur velit
        pariatur cum esse cupiditate sit iure ullam aliquid, odit voluptas?
      </p>

      <h3>Default</h3>
      <p class="col-md-9">
        Default links are within <strong>sentences or paragraphs</strong>,
        underlined, and blue with light and dark variations. They shouldn't
        stand alone; for that, use Quiet links. Apart from color and underline,
        links should match the surrounding text style.
      </p>

      <h3>Quiet</h3>
      <p class="col-md-9">
        Quiet links are <strong>standalone or in link groups</strong>, typically
        found in sidebars, footers, or "quick links" lists. They can be grouped
        horizontally or vertically, are not underlined, and are blue with light
        and dark variations.
      </p>

      <h3>Icon</h3>
      <p class="col-md-9">
        Icon links are similar to Quiet links but include a left icon. Use them
        only when an icon improves understanding of the link's purpose or
        destination (and not within sentences or paragraphs).
      </p>

      <h2>Anatomy</h2>
      <h3>Sizing</h3>
      <p>A link should inherit the size of its parent.</p>

      <h3>Colors</h3>
      <p>
        All link variants are blue by default. Light and dark variants exist for
        use on colored backgrounds where the default blue does not meet the
        minimum contrast ratio of 4.5:1.
      </p>

      <p>
        <strong>Primary Blue (Default):</strong> For use with links on a
        white/off-white background. This color should be used in most cases.
      </p>
      <div>snippet</div>

      <p>
        <strong>Light variants:</strong> For use on dark, static backgrounds
        (such as purple).
      </p>
      <div>snippet</div>

      <p>
        <strong>Dark variants:</strong> For use on light, static backgrounds
        (such as gold or light gray).
      </p>

      <h3>Dark Mode Support</h3>
      <p>
        Links must maintain proper contrast in order to be readable in both
        light and dark modes. If a link's background switches between modes, its
        color should too. If the background remains constant, the link color
        stays the same. In most cases, this means that primary blue links will
        change, while light and dark variants used on static colored backgrounds
        will not.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsElementsIndex",
  components: { Layout },
  data() {
    return {
      pageTitle: "Link",
    };
  },
};
</script>
