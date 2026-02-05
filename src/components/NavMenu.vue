<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Getting Started" slug="getting-started" icon="bi-flag">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/solstice-101"
            >
              Solstice 101
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/design-principles"
            >
              Design Principles
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/getting-started/developer-guide"
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
              to="/content/voice-tone"
            >
              Voice &amp; Tone
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/grammar-mechanics"
            >
              Grammar &amp; Mechanics
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/language-inclusivity"
            >
              Language &amp; Inclusivity
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/terminology"
            >
              Terminology
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/labels"
            >
              Labels
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/content/writing-errors"
            >
              Writing for Errors
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>
    <li class="nav-item">
      <NavCollapse menu="Foundations" slug="foundations" icon="bi-layers-fill">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/color"
            >
              Color
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/typography"
            >
              Typography
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/layout"
            >
              Layout
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/foundations/icons"
            >
              Icons
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li aria-hidden="true" class="nav-item my-2">
      <span class="nav-link disabled text-gray d-block internal-link p-0"
        ><hr class="bg-gray m-0" />
        <span class="visually-hidden">Components</span></span
      >
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Action" slug="action" icon="bi-hand-index">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/action/button"
            >
              Button
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/action/link"
            >
              Link
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Text" slug="text" icon="bi-type">
        <ul class="nav small flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/text/heading"
            >
              Heading
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/text/paragraph"
            >
              Paragraph
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Form" slug="form" icon="bi-input-cursor-text">
        <ul class="nav small flex-column mt-1">
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
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Surface" slug="surface" icon="bi-card-heading">
        <ul class="nav small flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/surface/card"
            >
              Card
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/surface/panel"
            >
              Panel
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/surface/tile"
            >
              Tile
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Layout" slug="layout" icon="bi-layout-sidebar">
        <ul class="nav small flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/layout/topbar"
            >
              Topbar
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/layout/sidebar"
            >
              Sidebar
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse
        menu="Navigation"
        slug="navigation"
        icon="bi-sign-turn-right-fill"
      >
        <ul class="nav small flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/navigation/tabs"
            >
              Tabs
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/navigation/menu"
            >
              Menu
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse
        menu="Messaging"
        slug="messaging"
        icon="bi-exclamation-triangle-fill"
      >
        <ul class="nav small flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/messaging/alert"
            >
              Alert
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/messaging/toast"
            >
              Toast
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/messaging/banner"
            >
              Banner
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/messaging/badge"
            >
              Badge
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse
        menu="Disclosure"
        slug="disclosure"
        icon="bi-arrows-collapse"
      >
        <ul class="small nav flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/disclosure/collapse"
            >
              Collapse
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/disclosure/accordian"
            >
              Accordian
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/disclosure/modal"
            >
              Modal
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/disclosure/offcanvas"
            >
              Offcanvas
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Search" slug="search" icon="bi-search">
        <ul class="small nav flex-column mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/search/filter"
            >
              Filter
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/search/input"
            >
              Input
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/search/modal"
            >
              Modal
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative mb-1">
      <NavCollapse menu="Utility" slug="utility" icon="bi-tools">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/utility/profile"
            >
              Profile
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/utility/color-mode"
            >
              Color Mode
            </BLink>
          </li>
          <li class="nav-item">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/utility/chatbot"
            >
              Chatbot
            </BLink>
          </li>
        </ul>
      </NavCollapse>
    </li>

    <li class="nav-item position-relative">
      <NavCollapse menu="Data" slug="data" icon="bi-bar-chart-fill">
        <ul class="nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/data/table"
            >
              Table
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/data/chart"
            >
              Chart
            </BLink>
          </li>
          <li class="nav-item mb-1">
            <BLink
              class="nav-link rounded-3 text-opacity-75 fw-lighter bg-white-hover bg-opacity-10-hover ps-5 text-white"
              exact-active-class="bg-white bg-opacity-10 text-opacity-100"
              to="/components/data/plot"
            >
              Plot
            </BLink>
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

  export default {
    components: {
      BLink,
      NavCollapse,
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
