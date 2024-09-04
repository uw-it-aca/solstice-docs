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

      <SColorMode></SColorMode>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import { SColorMode } from "solstice-vue";

export default {
  name: "DocsPatternsMessaging",
  components: { Layout, SColorMode },
  data() {
    return {
      pageTitle: "Color Mode",
    };
  },
};
</script>
