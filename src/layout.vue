<template>
  <sol-sidebar :app-name="appName" :app-root-url="'/'" :page-title="pageTitle">
    <template #profile>
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-light">Latest: v.1.1.0</div>
        <div class="text-light"><sol-color-mode></sol-color-mode></div>
      </div>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <ReleaseNotes />
    </template>
    <template #main>
      <div v-if="$slots.breadcrumb" class="row">
        <div class="col">
          <slot name="breadcrumb" />
        </div>
      </div>

      <div v-if="$slots.lead" class="row">
        <div class="col-9">
          <h1 class="fw-bold">{{ pageTitle }}</h1>
          <p class="lead text-muted">
            <slot name="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quo consequatur, minima minus suscipit doloribus quos
              dicta excepturi porro obcaecati, dignissimos rerum consectetur ea
              dolores vero sint. Porro, quaerat.
            </slot>
          </p>
          <hr class="w-50 d-inline-block" />
        </div>
      </div>

      <div class="row">
        <div :class="[mq.xlMinus || !$slots['toc'] ? 'col' : 'col-9']">
          <div v-if="$slots['toc'] && mq.xlMinus" class="mb-5">
            <slot name="toc" />
          </div>
          <slot name="content" />

          <div v-if="$slots.author" class="py-1 small">
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
    <template #footer>
      <div class="d-flex justify-content-between">
        <div class="font-weight-light py-3 small">
          <ul class="list-inline m-0">
            <ul class="list-inline m-0">
              <li class="list-inline-item">
                <a href="http://www.washington.edu/online/privacy/">Privacy</a>
              </li>
              <li class="list-inline-item">
                <a href="http://www.washington.edu/online/terms/">Terms</a>
              </li>
            </ul>
          </ul>
          <div>Copyright &copy; {{ currentYear }} University of Washington</div>
        </div>
      </div>
    </template>
  </sol-sidebar>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import ReleaseNotes from "@/components/ReleaseNotes.vue";

export default {
  name: "App",
  inject: ["mq"],
  components: {
    NavMenu,
    ReleaseNotes,
  },
  props: {
    pageTitle: {
      type: String,
      default: "Not specified",
      required: false,
    },
  },
  data: function () {
    return {
      // automatically set year
      currentYear: new Date().getFullYear(),
      lastModified: null,
    };
  },
  mounted: function () {
    // MARK: constructs page title in the following format "Page Title - AppName"
    // as a default layout prop
    document.title = this.pageTitle + " - " + this.appName;
    //this.lastModified = new Date(document.lastModified).toLocaleString();
  },
};
</script>
