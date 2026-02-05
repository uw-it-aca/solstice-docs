<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item position-relative mb-1">
      <BLink
        id="gettingStartedHeading"
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-white-hover bg-opacity-10-hover"
        exact-active-class="bg-white bg-opacity-10"
        to="/getting-started/"
        data-bs-toggle="collapse"
        data-bs-target="#gettingStartedCollapse"
        :aria-expanded="$route.path.includes('/getting-started') ? true : false"
        aria-controls="gettingStartedCollapse"
      >
        <span
          ><i class="bi bi-flag text-opacity-50 me-3 text-white"></i>Getting
          Started</span
        >
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </BLink>
      <div
        id="gettingStartedCollapse"
        class="collapse"
        :class="$route.path.includes('/getting-started') ? 'show' : ''"
        aria-labelledby="gettingStartedHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/solstice-101"
            >
              Solstice 101
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/design-principles"
            >
              Design Principles
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/developer-guide"
            >
              Developer Guide
            </BLink>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item position-relative mb-1">
      <BLink
        id="contentHeading"
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-white-hover bg-opacity-10-hover"
        exact-active-class="bg-white bg-opacity-10"
        to="/content/"
        data-bs-toggle="collapse"
        data-bs-target="#contentCollapse"
        :aria-expanded="$route.path.includes('/content') ? true : false"
        aria-controls="contentCollapse"
      >
        <span
          ><i
            class="bi bi-body-text me-3 text-white"
            style="--bs-text-opacity: 0.5"
          ></i
          >Content</span
        >
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </BLink>
      <div
        id="contentCollapse"
        class="collapse"
        :class="$route.path.includes('/content') ? 'show' : ''"
        aria-labelledby="contentHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/voice-tone"
            >
              Voice &amp; Tone
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/grammar-mechanics"
            >
              Grammar &amp; Mechanics
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/language-inclusivity"
            >
              Language &amp; Inclusivity
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/terminology"
            >
              Terminology
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/labels"
            >
              Labels
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/writing-errors"
            >
              Writing for Errors
            </BLink>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1">
      <BLink
        id="foundationsHeading"
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-white-hover bg-opacity-10-hover"
        exact-active-class="bg-white bg-opacity-10"
        to="/foundations/"
        data-bs-toggle="collapse"
        data-bs-target="#foundationsCollapse"
        :aria-expanded="$route.path.includes('/foundations') ? true : false"
        aria-controls="foundationsCollapse"
      >
        <span
          ><i
            class="bi bi-layers-fill me-3 text-white"
            style="--bs-text-opacity: 0.5"
          ></i
          >Foundations</span
        >
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </BLink>
      <div
        id="foundationsCollapse"
        class="collapse"
        :class="$route.path.includes('/foundations') ? 'show' : ''"
        aria-labelledby="foundationsHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/color"
            >
              Color
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/typography"
            >
              Typography
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/layout"
            >
              Layout
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/icons"
            >
              Icons
            </BLink>
          </li>
        </ul>
      </div>
    </li>

    <li aria-hidden="true" class="d-none nav-item mt-2 mb-3">
      <a href="#" class="nav-link disabled text-gray d-block internal-link p-0">
        <hr class="bg-gray m-0"
      /></a>
    </li>

    <li class="nav-item mb-1">
      <BLink
        id="componentsHeading"
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-white-hover bg-opacity-10-hover"
        exact-active-class="bg-white bg-opacity-10"
        to="/components/"
        data-bs-toggle="collapse"
        data-bs-target="#componentsCollapse"
        :aria-expanded="$route.path.includes('/components') ? true : false"
        aria-controls="componentsCollapse"
      >
        <span
          ><i
            class="bi bi-box me-3 text-white"
            style="--bs-text-opacity: 0.5"
          ></i
          >Components</span
        >
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </BLink>
      <div
        id="componentsCollapse"
        class="collapse"
        :class="$route.path.includes('/components') ? 'show' : ''"
        aria-labelledby="componentsHeading"
      >
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <NavComponentCollapse name="Action" url="/components/action">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/action/button"
                  >
                    Button
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/action/link"
                  >
                    Link
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Text" url="/components/text">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/text/heading"
                  >
                    Heading
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/text/paragraph"
                  >
                    Paragraph
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Form" url="/components/form">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/label"
                  >
                    Label
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/input"
                  >
                    Input
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/select"
                  >
                    Textarea
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/select"
                  >
                    Select
                  </BLink>
                </li>

                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/select"
                  >
                    Button
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/fieldset"
                  >
                    Fieldset
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/radio"
                  >
                    Radio
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/checkbox"
                  >
                    Checkbox
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/range"
                  >
                    Range
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    style="--bs-text-opacity: 0.5"
                    exact-active-class="bg-white bg-opacity-10"
                    to="/components/form/validation"
                  >
                    Validation
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Surface" url="/components/surface">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/surface/card"
                  >
                    Card
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/surface/panel"
                  >
                    Panel
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/surface/tile"
                  >
                    Tile
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Layout" url="/components/layout">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/layout/topbar"
                  >
                    Topbar
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/layout/sidebar"
                  >
                    Sidebar
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse
              name="Navigation"
              url="/components/navigation"
            >
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/navigation/tabs"
                  >
                    Tabs
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/navigation/menu"
                  >
                    Menu
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Messaging" url="/components/messaging">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/messaging/alert"
                  >
                    Alert
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/messaging/toast"
                  >
                    Toast
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/messaging/banner"
                  >
                    Banner
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/messaging/badge"
                  >
                    Badge
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse
              name="Disclosure"
              url="/components/disclosure"
            >
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/disclosure/collapse"
                  >
                    Collapse
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/disclosure/accordian"
                  >
                    Accordian
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/disclosure/modal"
                  >
                    Modal
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/disclosure/offcanvas"
                  >
                    Offcanvas
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Search" url="/components/search">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/search/filter"
                  >
                    Filter
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/search/input"
                  >
                    Input
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/search/modal"
                  >
                    Modal
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Utility" url="/components/utility">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/utility/profile"
                  >
                    Profile
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/utility/color-mode"
                  >
                    Color Mode
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/utility/chatbot"
                  >
                    Chatbot
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>

          <li class="nav-item mb-1">
            <NavComponentCollapse name="Data" url="/components/data">
              <ul class="nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/data/table"
                  >
                    Table
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/data/chart"
                  >
                    Chart
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-50 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/components/data/plot"
                  >
                    Plot
                  </BLink>
                </li>
              </ul>
            </NavComponentCollapse>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
  // import { getDevEnv } from "@/utils/global";
  import { BLink } from "bootstrap-vue-next";
  import NavComponentCollapse from "@/components/NavComponentCollapse.vue";

  export default {
    components: {
      BLink,
      NavComponentCollapse,
    },
    data() {
      return {};
    },
    mounted() {
      // console.log(import.meta.env.DEV);
      // console.log(import.meta.env.PROD);
      // sets to 'false' when in PRODUCTION
      // this.isDev = getDevEnv();
    },
  };
</script>

<style lang="css" scoped>
  .chevron .bi-chevron-down {
    display: inline-block;
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
    font-weight: bolder;
  }

  .chevron[aria-expanded="true"] .bi-chevron-down {
    transform: rotate(-180deg); /* transform: scaleY(-1); */
  }

  .bi-chevron-down::after {
    font-weight: bolder !important;
  }
</style>
