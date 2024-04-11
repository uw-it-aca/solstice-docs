<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb></template>
    <template #lead>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
      accusamus vel doloremque odio ut sapiente quasi facilis veniam natus eius
      expedita rem aspernatur itaque aperiam nemo quo sit, placeat quisquam?
    </template>
    <template #toc>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
      possimus nemo nam autem quis reiciendis obcaecati facilis doloremque esse
      nostrum, exercitationem ipsam ex voluptates eius ratione neque ipsum odio
      molestias?
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita in
        nesciunt, officiis odio provident tempore. Saepe, nostrum, quibusdam
        reiciendis architecto sapiente distinctio omnis facere vitae laborum qui
        porro, laudantium necessitatibus?
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsDevelopersIndex",
  components: { Layout },
  data() {
    return {
      pageTitle: "Getting Started",
    };
  },
};
</script>
