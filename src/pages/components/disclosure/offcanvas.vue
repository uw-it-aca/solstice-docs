<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/components/disclosure"
          >Disclosure</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
        dolores repudiandae natus dolorem recusandae! Incidunt consequatur
        tenetur ad totam, placeat ipsa explicabo, eaque id blanditiis libero
        culpa veniam aliquam!
      </p>
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#variants"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Variants</a
              >
            </li>
            <li>
              <a
                href="#options"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Options</a
              >
            </li>
            <li>
              <a
                href="#usage"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>

      <p>
        <BButton @click="toggleOffcanvas('first')"
          >Show Purple Chatbot OffCanvas</BButton
        >
      </p>

      <p>
        <BButton @click="toggleOffcanvas('second')"
          >Show Feedback Form OffCanvas</BButton
        >
      </p>

      <BOffcanvas v-model="offcanvasStates.first" placement="end">
        <slot name="header"><h2>Purple Chatbot</h2></slot>
        <iframe
          src="https://nebulaone-pilot.uw.edu/chat/41d6588d-541a-4e33-89d7-d290ff873be7/true?silentLogin=true&showModelName=true&showDisclaimer=false"
          frameborder="0"
          title="Char's UX Agent"
          loading="lazy"
          style="
            aspect-ratio: 2 / 6;
            display: block;
            max-height: 100vh;
            width: 100%;
            border-radius: 8px;
          "
        >
        </iframe>
      </BOffcanvas>

      <BOffcanvas v-model="offcanvasStates.second" placement="end">
        <slot name="header"><h2>Feedback Form</h2></slot>
        <iframe
          width="640px"
          height="480px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0lR1xshOYiRLm33c8S43MgBUNkVOSUg0RkNBMFAwSkZaMkNJMDlYTURHUS4u&embed=true"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width: 100%; max-height: 100vh"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
        >
        </iframe>
      </BOffcanvas>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/layouts/default.vue";
import { BButton, BOffcanvas } from "bootstrap-vue-next";

export default {
  name: "DocsPatternsUtilityChatbot",
  components: { Layout, BButton, BOffcanvas },
  data() {
    return {
      pageTitle: "Offcanvas",

      offcanvasStates: {
        first: false,
        second: false,
      },
    };
  },
  methods: {
    click(place = "start") {
      this.placement = place;
      this.show = !this.show;
    },

    toggleOffcanvas(key) {
      this.offcanvasStates[key] = !this.offcanvasStates[key];
    },
  },
};
</script>
