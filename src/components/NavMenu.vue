<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Getting Started" slug="getting-started" icon="bi-flag">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/getting-started/solstice-101"
            >
              Solstice 101
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/getting-started/design-principles"
            >
              Design Principles
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/getting-started/developer-guide"
            >
              Developer Guide
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>
    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Content" slug="content" icon="bi-body-text">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/voice-tone"
            >
              Voice &amp; Tone
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/grammar-mechanics"
            >
              Grammar &amp; Mechanics
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/language-inclusivity"
            >
              Language &amp; Inclusivity
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/terminology"
            >
              Terminology
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/labels"
            >
              Labels
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/content/writing-errors"
            >
              Writing for Errors
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>
    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Foundations" slug="foundations" icon="bi-layers">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/foundations/color"
            >
              Color
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/foundations/typography"
            >
              Typography
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/foundations/layout"
            >
              Layout
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/solstice/foundations/icons"
            >
              Icons
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>
    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Components" slug="components" icon="bi-box">
        <ul class="nav flex-column mt-1">
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Actions" slug="actions">
              <ul class="nav flex-column small mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/actions/button"
                  >
                    Button
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/actions/link"
                  >
                    Link
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Text" slug="text">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/text/heading"
                    style="padding-left: 50px"
                  >
                    Heading
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/text/paragraph"
                    style="padding-left: 50px"
                  >
                    Paragraph
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Forms" slug="forms">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/input"
                    style="padding-left: 50px"
                  >
                    Input
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/select"
                    style="padding-left: 50px"
                  >
                    Textarea
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/select"
                    style="padding-left: 50px"
                  >
                    Select
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover p text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/select"
                    style="padding-left: 50px"
                  >
                    Submit
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/fieldset"
                    style="padding-left: 50px"
                  >
                    Fieldset
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/radio"
                    style="padding-left: 50px"
                  >
                    Radio
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/checkbox"
                    style="padding-left: 50px"
                  >
                    Checkbox
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/range"
                    style="padding-left: 50px"
                  >
                    Range
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/forms/validation"
                    style="padding-left: 50px"
                  >
                    Validation
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Surfaces" slug="surfaces">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/surfaces/card"
                    style="padding-left: 50px"
                  >
                    Card
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/surfaces/tile"
                    style="padding-left: 50px"
                  >
                    Tile
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Layouts" slug="layouts">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/layouts/topbar"
                    style="padding-left: 50px"
                  >
                    Topbar
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/layouts/sidebar"
                    style="padding-left: 50px"
                  >
                    Sidebar
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Navigation" slug="navigation">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/navigation/tabs"
                    style="padding-left: 50px"
                  >
                    Tabs
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/navigation/menu"
                    style="padding-left: 50px"
                  >
                    Menu
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Messaging & Status" slug="messaging">
              <ul class="nav small flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/messaging/alert"
                    style="padding-left: 50px"
                  >
                    Alert
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/messaging/toast"
                    style="padding-left: 50px"
                  >
                    Toast
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/messaging/banner"
                    style="padding-left: 50px"
                  >
                    Banner
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/messaging/badge"
                    style="padding-left: 50px"
                  >
                    Badge
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Disclosures" slug="disclosures">
              <ul class="small nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/disclosures/collapse"
                    style="padding-left: 50px"
                  >
                    Collapse
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/disclosures/accordian"
                    style="padding-left: 50px"
                  >
                    Accordian
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/disclosures/modal"
                    style="padding-left: 50px"
                  >
                    Modal
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/disclosures/offcanvas"
                    style="padding-left: 50px"
                  >
                    Offcanvas
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Search & Filter" slug="search">
              <ul class="small nav flex-column mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/search/filter"
                    style="padding-left: 50px"
                  >
                    Filter
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/search/input"
                    style="padding-left: 50px"
                  >
                    Input
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/search/modal"
                    style="padding-left: 50px"
                  >
                    Modal
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Utilities" slug="utilities">
              <ul class="nav flex-column small mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/utilities/profile"
                    style="padding-left: 50px"
                  >
                    Profile
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/utilities/user"
                    style="padding-left: 50px"
                  >
                    User
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/utilities/color-mode"
                    style="padding-left: 50px"
                  >
                    Color Mode
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/utilities/chatbot"
                    style="padding-left: 50px"
                  >
                    Chatbot
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
          <li class="nav-item mb-1">
            <NavCollapseSub menu="Data Display" slug="data">
              <ul class="nav flex-column small mt-1">
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/data/table"
                    style="padding-left: 50px"
                  >
                    Table
                  </BLink>
                </li>
                <li class="nav-item mb-1">
                  <BLink
                    class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover text-white"
                    exact-active-class="bg-white bg-opacity-10 text-opacity-100"
                    to="/solstice/components/data/chart"
                    style="padding-left: 50px"
                  >
                    Chart
                  </BLink>
                </li>
              </ul>
            </NavCollapseSub>
          </li>
        </ul>
      </NavCollapse>
    </li>
  </ul>
</template>

<script>
  // import { getDevEnv } from "@/utils/global";
  import { BLink } from "bootstrap-vue-next";
  import NavCollapse from "@/components/NavCollapse.vue";
  import NavCollapseSub from "@/components/NavCollapseSub.vue";

  export default {
    components: {
      BLink,
      NavCollapse,
      NavCollapseSub,
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
