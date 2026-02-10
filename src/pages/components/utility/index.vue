<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Utility components... Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Iusto tempore omnis esse quasi assumenda quae
        voluptatem, dolores perspiciatis facilis. Iste cupiditate similique quis
        nam amet officiis? Accusantium ducimus vel sit!
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Profile"
            link="/components/utility/profile"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="User"
            link="/components/utility/user"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Color Mode"
            link="/components/utility/color-mode"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock name="Chatbot" link="/components/utility/chatbot"
            >Component documentation</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import DescriptionBlock from "@/components/DescriptionBlock.vue";

  export default {
    name: "DocsPatternsUtility",
    components: {
      Layout,
      DescriptionBlock,
    },
    data() {
      return {
        pageTitle: "Utility",
      };
    },
  };
</script>
