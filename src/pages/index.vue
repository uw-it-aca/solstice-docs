<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Great user experiences (UX) aren't created by magic, but by a repeatable
        process of inquiry and critical thinking, and through deliberate
        investment.
      </p>
    </template>
    <template #content>

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
            <SHeading level="3" class="mb-3">UX Process Guides</SHeading>
            <p class="flex-fill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis odio voluptatum reiciendis optio laboriosam
              perferendis ipsam.
            </p>
            <div class="text-end">
              <BLink href="/process-guides/">Review process guides</BLink>
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
            <SHeading level="3" class="mb-3">User Interface Guides</SHeading>
            <p class="flex-fill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis odio voluptatum reiciendis optio laboriosam
              perferendis ipsam.
            </p>

            <div class="text-end">
              <BLink href="/user-interface/">Review user interface guides</BLink>
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
            <SHeading level="3" class="mb-3">Information Design</SHeading>
            <p class="flex-fill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis odio voluptatum reiciendis optio laboriosam
              perferendis ipsam.
            </p>
            <div class="text-end">
              <BLink href="/info-design/">Review information design</BLink>
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
        pageTitle: "UX Design Guides",
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
