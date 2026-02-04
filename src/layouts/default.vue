<template>
  <SSidebar :app-name="appName" :app-root-url="'/'" :page-title="pageTitle">
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <div
        class="bg-opacity-10 rounded-3 small d-flex justify-content-between align-items-center mt-2 bg-white p-3"
      >
        <div class="text-light">
          Version
          <br />
          <a
            href="https://github.com/uw-it-aca/solstice-theme/releases"
            target="_blank"
            class="link-light link-opacity-75 link-opacity-100-hover link-underline-opacity-75 link-underline-opacity-100-hover"
            >solstice-theme: 1.0.7</a
          >
          <br />
          <a
            href="https://github.com/uw-it-aca/solstice-vue/releases"
            target="_blank"
            class="link-light link-opacity-75 link-opacity-100-hover link-underline-opacity-75 link-underline-opacity-100-hover"
            >solstice-vue: 1.1.5</a
          >
        </div>
        <div class="text-light">
          <SColorMode color-class="text-white" />
        </div>
      </div>
    </template>
    <template #main>
      <div v-if="$slots.breadcrumb" class="row">
        <div class="col">
          <slot name="breadcrumb" />
        </div>
      </div>

      <div v-if="$slots.lead">
        <h1 class="fw-bold ff-encode-sans">{{ pageTitle }}</h1>
        <p class="lead text-body-secondary" style="max-width: 85ch;">
          <slot name="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            maiores quo consequatur, minima minus suscipit doloribus quos dicta
            excepturi porro obcaecati, dignissimos rerum consectetur ea dolores
            vero sint. Porro, quaerat.
          </slot>
        </p>
        <hr class="d-inline-block w-50" />
      </div>

      <div class="row">
        <div :class="[mq.xlMinus || !$slots['toc'] ? 'col' : 'col-9']">
          <div v-if="$slots['toc'] && mq.xlMinus" class="mb-5">
            <slot name="toc" />
          </div>
          <slot name="content" />

          <div v-if="$slots.author" class="small py-1">
            <div class="text-muted">
              Last updated by: <slot name="author" />
            </div>
          </div>
        </div>
        <div v-if="$slots['toc'] && !mq.xlMinus" class="col-3">
          <div class="sticky-top">
            <slot name="toc"></slot>
          </div>
        </div>
      </div>
    </template>
    <template #footer></template>
  </SSidebar>
</template>

<script>
  import { SColorMode, SSidebar } from "solstice-vue";
  import NavMenu from "@/components/NavMenu.vue";

  export default {
    name: "App",
    components: {
      NavMenu,
      SColorMode,
      SSidebar,
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
