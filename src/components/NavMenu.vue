<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/getting-started/"
        id="gettingStartedHeading"
        data-bs-toggle="collapse"
        data-bs-target="#gettingStartedCollapse"
        :aria-expanded="$route.path.includes('/getting-started') ? true : false"
        aria-controls="gettingStartedCollapse"
      >
        <span>Getting Started</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="gettingStartedCollapse"
        class="collapse"
        :class="$route.path.includes('/getting-started') ? 'show' : ''"
        aria-labelledby="gettingStartedHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/getting-started/solstice-101"
              >Solstice 101</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/getting-started/design-with-solstice"
              >Design with Solstice</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/getting-started/installation-setup"
              >Installation &amp; Setup</router-link
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/content/"
        id="contentHeading"
        data-bs-toggle="collapse"
        data-bs-target="#contentCollapse"
        :aria-expanded="$route.path.includes('/content') ? true : false"
        aria-controls="contentCollapse"
      >
        <span>Content</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="contentCollapse"
        class="collapse"
        :class="$route.path.includes('/content') ? 'show' : ''"
        aria-labelledby="contentHeading"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/voice-tone"
              >Voice &amp; Tone</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/grammar-mechanics"
              >Grammar &amp; Mechanics</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/language-inclusivity"
              >Language &amp; Inclusivity</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/terminology"
              >Terminology</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/labels"
              >Labels</router-link
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/foundations/"
        id="foundationsHeading"
        data-bs-toggle="collapse"
        data-bs-target="#foundationsCollapse"
        :aria-expanded="$route.path.includes('/foundations') ? true : false"
        aria-controls="foundationsCollapse"
      >
        <span>Foundations</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="foundationsCollapse"
        class="collapse"
        :class="$route.path.includes('/foundations') ? 'show' : ''"
        aria-labelledby="foundationsHeading"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/color"
              >Color</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/typography"
              >Typography</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/layout"
              >Layout</router-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li aria-hidden="true" class="d-none nav-item mt-2 mb-3">
      <a href="#" class="nav-link disabled text-gray d-block p-0 internal-link">
        <hr class="m-0 bg-gray"
      /></a>
    </li>

    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/elements/"
        id="elementsHeading"
        data-bs-toggle="collapse"
        data-bs-target="#elementsCollapse"
        :aria-expanded="$route.path.includes('/elements') ? true : false"
        aria-controls="elementsCollapse"
      >
        <span>UI Elements</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="elementsCollapse"
        class="collapse"
        :class="$route.path.includes('/elements') ? 'show' : ''"
        aria-labelledby="elementsHeading"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/elements/link"
              >Link</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
              style="--bs-text-opacity: 0.6"
              exact-active-class="bg-black bg-opacity-10"
              to="/elements/button"
              >Button</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/elements/form/"
              id="elementsFormHeading"
              data-bs-toggle="collapse"
              data-bs-target="#elementsFormCollapse"
              :aria-expanded="
                $route.path.includes('/elements/form/') ? true : false
              "
              aria-controls="elementsFormCollapse"
            >
              <span>Forms</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="elementsFormCollapse"
              class="collapse"
              :class="$route.path.includes('/elements/form/') ? 'show' : ''"
              aria-labelledby="elementsFormHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/input"
                    >Input</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/label"
                    >Label</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/select"
                    >Select</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/select"
                    >Textarea</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/select"
                    >Button</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/elements/form/select"
                    >Fieldset</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>

    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/patterns/"
        id="patternsHeading"
        data-bs-toggle="collapse"
        data-bs-target="#patternsCollapse"
        :aria-expanded="$route.path.includes('/patterns/') ? true : false"
        aria-controls="patternsCollapse"
      >
        <span>UX Patterns</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="patternsCollapse"
        class="collapse"
        :class="$route.path.includes('/patterns/') ? 'show' : ''"
        aria-labelledby="patternsHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/layout/"
              id="patternsLayoutHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsLayoutCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/layout/') ? true : false
              "
              aria-controls="patternsLayoutCollapse"
            >
              <span>Layout</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsLayoutCollapse"
              class="collapse"
              :class="$route.path.includes('/patterns/layout/') ? 'show' : ''"
              aria-labelledby="patternsLayoutHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/layout/topbar"
                    >Topbar</router-link
                  >
                </li>
                <li class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/layout/sidebar"
                    >Sidebar</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/navigation/"
              id="patternsNavigationHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsNavigationCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/navigation/') ? true : false
              "
              aria-controls="patternsNavigationCollapse"
            >
              <span>Navigation</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsNavigationCollapse"
              class="collapse"
              :class="
                $route.path.includes('/patterns/navigation/') ? 'show' : ''
              "
              aria-labelledby="patternsNavigationHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/navigation/tabs"
                    >Tabs</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/navigation/menu"
                    >Menu</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/surface/"
              id="patternsSurfaceHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsSurfaceCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/surface/') ? true : false
              "
              aria-controls="patternsSurfaceCollapse"
            >
              <span>Surface</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsSurfaceCollapse"
              class="collapse"
              :class="$route.path.includes('/patterns/surface/') ? 'show' : ''"
              aria-labelledby="patternsSurfaceHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/surface/card"
                    >Card</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/surface/panel"
                    >Panel</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/disclosure/"
              id="patternsDisclosureHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsDisclosureCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/disclosure/') ? true : false
              "
              aria-controls="patternsDisclosureCollapse"
            >
              <span>Disclosure</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsDisclosureCollapse"
              class="collapse"
              :class="
                $route.path.includes('/patterns/disclosure/') ? 'show' : ''
              "
              aria-labelledby="patternsDisclosureHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/disclosure/collapse"
                    >Collapse</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/disclosure/accordian"
                    >Accordian</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/disclosure/modal"
                    >Modal</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/messaging/"
              id="patternsMessagingHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsMessagingCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/messaging/') ? true : false
              "
              aria-controls="patternsMessagingCollapse"
            >
              <span>Messaging</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsMessagingCollapse"
              class="collapse"
              :class="
                $route.path.includes('/patterns/messaging/') ? 'show' : ''
              "
              aria-labelledby="patternsSurfaceHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/alert"
                    >Alert</router-link
                  >
                </li>
                <li class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/toast"
                    >Toast</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/banner"
                    >Banner</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/utility/"
              id="patternsUtilityHeading"
              data-bs-toggle="collapse"
              data-bs-target="#patternsUtilityCollapse"
              :aria-expanded="
                $route.path.includes('/patterns/utility/') ? true : false
              "
              aria-controls="patternsUtilityCollapse"
            >
              <span>Utility</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="patternsUtilityCollapse"
              class="collapse"
              :class="$route.path.includes('/patterns/utility/') ? 'show' : ''"
              aria-labelledby="patternsSurfaceHeading"
            >
              <ul class="nav flex-column fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/utility/profile"
                    >Profile</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-4 nav-link rounded-3 text-white fw-lighter bg-black-hover bg-opacity-10-hover"
                    style="--bs-text-opacity: 0.6"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/utility/color-mode"
                    >Color Mode</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { getDevEnv } from "@/utils/global";

export default {
  data() {
    return {
      isDev: true,
    };
  },
  mounted: function () {
    // console.log(import.meta.env.DEV);
    // console.log(import.meta.env.PROD);

    // sets to 'false' when in PRODUCTION
    this.isDev = getDevEnv();
  },
};
</script>

<style lang="scss" scoped>
.chevron i {
  display: inline-block;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
  font-weight: bolder;
}

.chevron[aria-expanded="true"] i {
  transform: rotate(90deg);
}

.bi-chevron-right::after {
  font-weight: bolder !important;
}
</style>
