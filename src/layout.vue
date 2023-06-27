<template>
  <sol-sidebar
    :app-name="'Solstice'"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
  >
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
                <a href="http://www.washington.edu/online/privacy/">Privacy</a>
              </li>
              <li class="list-inline-item">
                <a href="http://www.washington.edu/online/terms/">Terms</a>
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
  data: function () {
    return {
      // minimum application setup overrides
      appName: "Solstice",
      pageTitle: "Home",
      appRootUrl: "/",
      signOutUrl: "/signout",
      userNetid: "myusername",
      userOfficial: "MYOFFICAL NAME",
      userPreferred: "Preferred Name",
      currentYear: new Date().getFullYear(),
    };
  },
  mounted: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
