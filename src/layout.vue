<template>
  <sol-sidebar :app-name="appName" :app-root-url="'/'" :page-title="pageTitle">
    <template #profile>
      <div class="text-light">Latest: v.1.1.0</div>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <ReleaseNotes />
    </template>
    <template #main>
      <slot name="content" />
      <div v-if="$slots['author']" class="py-1 small text-end">
        <div class="text-muted">
          Last modified <slot name="modified" /> by <slot name="author" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="d-flex justify-content-between">
        <div class="font-weight-light py-3 small">
          <ul class="list-inline m-0">
            <ul class="list-inline m-0">
              <li class="list-inline-item">
                <a
                  href="http://www.washington.edu/online/privacy/"
                  class="link-primary"
                  >Privacy</a
                >
              </li>
              <li class="list-inline-item">
                <a
                  href="http://www.washington.edu/online/terms/"
                  class="link-primary"
                  >Terms</a
                >
              </li>
            </ul>
          </ul>
          <div>Copyright &copy; {{ currentYear }} University of Washington</div>
        </div>
        <div><axdd-color-mode></axdd-color-mode></div>
      </div>
    </template>
  </sol-sidebar>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import ReleaseNotes from "./components/ReleaseNotes.vue";

export default {
  name: "App",
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
    return {};
  },
  mounted: function () {
    // MARK: constructs page title in the following format "Page Title - AppName"
    // as a default layout prop
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
