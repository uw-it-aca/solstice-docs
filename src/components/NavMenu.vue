<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/getting-started/"
        id="flush-heading2"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse2"
        :aria-expanded="$route.path.includes('/getting-started') ? true : false"
        aria-controls="flush-collapse2"
      >
        <span>Getting Started</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse2"
        class="collapse"
        :class="$route.path.includes('/getting-started') ? 'show' : ''"
        aria-labelledby="flush-heading2"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/getting-started/solstice-101"
              >Solstice 101</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/getting-started/component-lifecycle"
              >Component Lifecyle</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
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
        id="flush-heading3"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse3"
        :aria-expanded="$route.path.includes('/content') ? true : false"
        aria-controls="flush-collapse3"
      >
        <span>Content Guidelines</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse3"
        class="collapse"
        :class="$route.path.includes('/content') ? 'show' : ''"
        aria-labelledby="flush-heading3"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/voice-tone"
              >Voice &amp; Tone</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/grammar-mechanics"
              >Grammar &amp; Mechanics</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/language-inclusivity"
              >Language &amp; Inclusivity</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/content/terminology"
              >Terminology</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
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
        id="flush-heading4"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse4"
        :aria-expanded="$route.path.includes('/foundations') ? true : false"
        aria-controls="flush-collapse4"
      >
        <span>Foundations</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse4"
        class="collapse"
        :class="$route.path.includes('/foundations') ? 'show' : ''"
        aria-labelledby="flush-heading4"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/color"
              >Color</router-link
            >
          </li>
          <li v-if="isDev" class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/typography"
              >Typography</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/foundations/layout/"
              >Layout</router-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/elements/"
        id="flush-heading5"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse5"
        :aria-expanded="$route.path.includes('/elements') ? true : false"
        aria-controls="flush-collapse5"
      >
        <span>Elements</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse5"
        class="collapse"
        :class="$route.path.includes('/elements') ? 'show' : ''"
        aria-labelledby="flush-heading5"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/elements/link"
              >Link</router-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-black-hover bg-opacity-10-hover"
        exact-active-class="bg-black bg-opacity-10"
        to="/patterns/"
        id="flush-heading10"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse10"
        :aria-expanded="$route.path.includes('/patterns/') ? true : false"
        aria-controls="flush-collapse10"
      >
        <span>Patterns</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse10"
        class="collapse"
        :class="$route.path.includes('/patterns/') ? 'show' : ''"
        aria-labelledby="flush-heading10"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light fw-light fs-7 chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/navigation/"
              id="flush-heading6"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse6"
              :aria-expanded="
                $route.path.includes('/patterns/navigation/') ? true : false
              "
              aria-controls="flush-collapse6"
            >
              <span>Navigation</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="flush-collapse6"
              class="collapse"
              :class="
                $route.path.includes('/patterns/navigation/') ? 'show' : ''
              "
              aria-labelledby="flush-heading6"
            >
              <ul class="nav flex-column small fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/navigation/tabs"
                    >Tabs</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/navigation/menu"
                    >Menu</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light fw-light fs-7 chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/container/"
              id="flush-heading7"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse7"
              :aria-expanded="
                $route.path.includes('/patterns/container/') ? true : false
              "
              aria-controls="flush-collapse7"
            >
              <span>Container</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="flush-collapse7"
              class="collapse"
              :class="
                $route.path.includes('/patterns/container/') ? 'show' : ''
              "
              aria-labelledby="flush-heading7"
            >
              <ul class="nav flex-column small fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/container/card"
                    >Card</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/container/panel"
                    >Panel</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/container/disclosure"
                    >Disclosure</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light fw-light fs-7 chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/messaging/"
              id="flush-heading8"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse8"
              :aria-expanded="
                $route.path.includes('/patterns/messaging/') ? true : false
              "
              aria-controls="flush-collapse8"
            >
              <span>Messaging</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="flush-collapse8"
              class="collapse"
              :class="
                $route.path.includes('/patterns/messaging/') ? 'show' : ''
              "
              aria-labelledby="flush-heading7"
            >
              <ul class="nav flex-column small fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/alert"
                    >Alert</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/toast"
                    >Toast</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/banner"
                    >Banner</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/messaging/modal"
                    >Modal</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mb-1">
            <router-link
              class="ps-4 d-flex justify-content-between nav-link rounded-3 text-light fw-light fs-7 chevron bg-black-hover bg-opacity-10-hover"
              exact-active-class="bg-black bg-opacity-10"
              to="/patterns/utility/"
              id="flush-heading9"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse9"
              :aria-expanded="
                $route.path.includes('/patterns/utility/') ? true : false
              "
              aria-controls="flush-collapse9"
            >
              <span>Utility</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <div
              id="flush-collapse9"
              class="collapse"
              :class="$route.path.includes('/patterns/utility/') ? 'show' : ''"
              aria-labelledby="flush-heading7"
            >
              <ul class="nav flex-column small fw-light mt-1">
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
                    exact-active-class="bg-black bg-opacity-10"
                    to="/patterns/utility/profile"
                    >Profile</router-link
                  >
                </li>
                <li v-if="isDev" class="nav-item mb-1">
                  <router-link
                    class="ps-5 nav-link rounded-3 text-light fs-8 fw-lighter bg-black-hover bg-opacity-10-hover"
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
