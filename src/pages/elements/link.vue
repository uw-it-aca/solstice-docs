<template>
  <Layout>
    <template #content>
      <h1>Link</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Links help users navigate to other web pages or sections within a page.
        They may be used within paragraphs, on their own, or within groups or
        collections of other links. They may also perform simple actions like
        initiate file downloads or email messages. For most actions, use the
        button component rather than a link (follow best practices depending on
        the specific use case).
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Variants</h2>

      <div class="row">
        <div class="col">
          <h3 class="h5">Default</h3>
          <p>
            Default links are those found within sentences or paragraphs,
            surrounded by unlinked text. Body links are always styled with an
            underline and appear in blue by default, with light and dark
            variations. This helps differentiate them from surrounding text and
            makes it clear that users can interact with them. Body links should
            not be used on their own (i.e., outside of sentences and
            paragraphs); for this purpose, see Quiet links.
          </p>

          <p><sol-link href="https://www.google.com">google.com</sol-link></p>
        </div>
        <div class="col">
          <h3 class="h5">Quiet</h3>
          <p>
            Quiet links are standalone links (i.e., not contained within a
            sentence or paragraph) that most often appear in a group with other
            links, such as in lists of “quick links,” sidebars, footers, or
            similar navigation elements. Quiet links may be grouped together
            horizontally or vertically. They are styled without an underline
            (making them “quiet”) and appear in blue by default, with light and
            dark variations.
          </p>

          <p>
            <sol-link href="https://www.google.com" variant="quiet"
              >google.com</sol-link
            >
          </p>
        </div>
        <div class="col">
          <h3 class="h5">Icon</h3>
          <p>
            By default, Quiet links appear only as text. However, there may be
            some cases where the inclusion of an icon enhances the user
            experience by making it easier for users to understand the purpose
            or destination of the link. For example, a small envelope icon next
            to a link might indicate an email contact, a download icon could
            represent a file download link, or an external link icon might
            signify that clicking the link will take you to an external website.
            Icons should be used sparingly and only when it provides true value
            to the interface.
          </p>
          <p>
            When an icon is used with a link that is part of a collection of
            links, the links should all match each other in terms of the
            inclusion of an icon; either all of the links should have
            accompanying icons, or none of them should.
          </p>
          <p>Icons should not be used with Body links or Logos as links.</p>
          <p>
            <sol-link
              href="http://www.google.com"
              variant="icon"
              icon="bi-android2"
              >aksdfjaslkdfj</sol-link
            >
          </p>
        </div>
      </div>

      <h2>Anatomy</h2>
      <h3>Color</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea saepe at
        corporis unde sunt sapiente molestiae accusamus. Eligendi, quo!
        Recusandae maiores, eligendi eaque nobis sapiente voluptate expedita
        necessitatibus. Voluptatum, quaerat!
      </p>

      <h2>Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad obcaecati
        beatae doloremque facere, ducimus hic a consequatur explicabo
        consectetur possimus dolorem quo amet iure repudiandae dicta
        necessitatibus officia cumque ipsum.
      </p>

      <h2>Subheading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        facere, neque aliquam qui non dolore provident delectus nemo sapiente
        alias sint similique nulla illo tenetur quaerat saepe. Optio, soluta
        iure?
      </p>

      <div class="row">
        <div class="col">
          <div>
            <div><span class="badge text-bg-success">Do</span></div>
            <div>example/screenshot</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos minus aliquam nam expedita omnis labore inventore
              tempora cumque eligendi quasi? Aliquid temporibus inventore id
              itaque tempore earum provident quos assumenda.
            </p>
          </div>
        </div>
        <div class="col">
          <div>
            <div><span class="badge text-bg-danger">Don't</span></div>
            <div>example/screenshot</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              placeat a rerum modi tempore eaque pariatur consectetur,
              temporibus neque dolores! Natus ab unde aliquid ipsa! Iste ullam
              laudantium aliquid labore?
            </p>
          </div>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsLinkIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
