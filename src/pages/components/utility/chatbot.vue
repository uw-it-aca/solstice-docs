<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb
      ><nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/utility/">Utility</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #lead>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
      consequuntur tempore amet consectetur minus autem corporis nostrum sit
      sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
      voluptas debitis!
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>

      <p>
        <BButton @click="toggleOffcanvas('first')">Show Purple Chatbot</BButton>
      </p>

      <p>
        <BButton @click="toggleOffcanvas('second')"
          >Show Solstice Chatbot</BButton
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
      pageTitle: "Chatbot",

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
