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

      <div v-if="$slots.head" class="row">
        <div class="col-9">
          <slot name="head" />
        </div>
      </div>

      <div id="blah" class="row">
        <div :class="[mq.xlMinus || !$slots['subnav'] ? 'col' : 'col-9']">
          <div
            v-if="$slots['subnav'] && mq.xlMinus"
            class="border border-warning mb-5"
          >
            <slot name="subnav" />
          </div>
          <slot name="content" />

          <div v-if="$slots.author" class="py-1 small text-end">
            <div class="text-muted">
              Last modified by <slot name="author" />
            </div>
          </div>
        </div>
        <div v-if="$slots['subnav'] && !mq.xlMinus" class="col-3">
          <div class="border border-danger sticky-top">
            <slot name="subnav"></slot>
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
import { ScrollSpy } from "bootstrap";

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

    // implement scrollspy by attaching to 'scrollbody' id produced by component
    const scrollSpy = new ScrollSpy(document.getElementById("scrollbody"), {
      target: "#TableOfContents",
    });
  },
};
</script>

<style>
.menu-item .active {
  background-color: lime;
}
</style>
