<template>
  <STopbarNeo :app-name="appName" :app-root-url="'/'" :page-title="pageTitle">
    <template #navigation>
      <!-- MARL: proper BNav implementation  -->
      <BNav class="flex-column flex-md-row gap-md-5">
        <BNavItem href="/process-guides" active link-class="text-white px-0">UX Process Guides</BNavItem>
        <BNavItem href="/ui-patterns" link-class="text-white px-0">User Interface Guides</BNavItem>
        <BNavItem href="/info-design" link-class="text-white px-0">Information Design</BNavItem>
        <BNavItemDropdown text="General Information" toggle-class="text-white px-0">
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Another action</BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem href="#">Request a consultation</BDropdownItem>
        </BNavItemDropdown>
      </BNav>
    </template>
    <template #main>
      <div class="row">
        <div :class="[mq.xlMinus || !$slots['toc'] ? 'col' : 'col-9']">
          <div v-if="$slots['toc'] && mq.xlMinus" class="mb-5">
            <slot name="toc" />
          </div>

          <div v-if="$slots.breadcrumb" class="row my-5">
            <div class="col">
              <slot name="breadcrumb" />
            </div>
          </div>

          <div v-if="$slots.lead">
            <h1 class="display-5 ff-encode-sans fw-semibold my-5">
              {{ pageTitle }}
            </h1>
            <slot name="lead">
              <p class="lead" style="max-width: 85ch">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                maiores quo consequatur, minima minus suscipit doloribus quos
                dicta excepturi porro obcaecati, dignissimos rerum consectetur
                ea dolores vero sint. Porro, quaerat.
              </p>
            </slot>
            <hr class="my-5 w-50" />
          </div>

          <slot name="content" />

          <div v-if="$slots.author" class="small py-1">
            <div class="text-muted">
              Last updated by: <slot name="author" />
            </div>
          </div>
        </div>
        <div v-if="$slots['toc'] && !mq.xlMinus" class="col-3">
          <div class="sticky-top" style="margin-top: 11rem">
            <slot name="toc"></slot>
          </div>
        </div>
      </div>
    </template>
    <template #footer></template>
  </STopbarNeo>
</template>

<script>
  import {
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
  } from "bootstrap-vue-next";
  import { SColorMode, STopbarNeo, SHeading, SUser } from "solstice-vue";
  import NavMenu from "@/components/NavMenu.vue";

  export default {
    name: "App",
    components: {
      NavMenu,
      SColorMode,
      STopbarNeo,
      SHeading,
      SUser,
      BNav,
      BNavItem,
      BNavItemDropdown,
      BDropdownItem,
      BDropdownDivider,
    },
    inject: ["mq"],
    props: {
      pageTitle: {
        type: String,
        default: "Not specified",
        required: false,
      },
    },
    data() {
      return {
        // automatically set year
        currentYear: new Date().getFullYear(),
        lastModified: null,
      };
    },
    mounted: function () {
      // MARK: constructs page title in the following format "Page Title - AppName"
      // as a default layout prop
      document.title = `${this.pageTitle} - ${this.appName}`;
      //this.lastModified = new Date(document.lastModified).toLocaleString();
    },
  };
</script>
