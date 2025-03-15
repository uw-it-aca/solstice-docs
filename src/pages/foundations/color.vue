<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/foundations">Foundations</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      When used appropriately, color can help guide users towards successful
      completion of their tasks and workflows. Color use on a page or in an
      interface can communicate and reinforce meaning, create moments of visual
      emphasis, and overall aid can in someone’s understanding of a page’s
      structure and hierarchy. In addition, color is used to communicate the UW
      brand.
      <br />
      <br />
      The Solstice design system includes several palettes of colors, each with
      their specific intended use. The color palettes in the design system are:
      brand accent, neutrals, semantic, and decorative colors.
    </template>
    <template #content>
      <h2 class="display-6 ff-encode-sans pt-3 pb-3">General Principles</h2>

      <ol>
        <li>Use color sparingly and intentionally</li>
        <li>
          Use color to communicate meaning, to clarify the information
          hierarchy, and for visual emphasis
        </li>
        <li>Don’t rely on color alone</li>
      </ol>

      <h2 class="display-6 ff-encode-sans pt-3 pb-3">Color Palettes</h2>
      <h3>Brand Accent</h3>

      <p>
        Use for communicating the UW brand. While UW has an expanded brand
        accent color palette, we recommend limiting the usage of brand colors to
        Spirit Purple to maintain a sleek visual design.
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="text-bg-brand rounded p-2"
            style="width: 120px; height: 60px"
          >
            brand
          </div>
          <small>#4b2e83</small>
        </li>
      </ul>
      <p class="fw-bold">Do:</p>
      <ul>
        <li>only use the base color (no variants)</li>
        <li>primarily use for boilerplate elements</li>
        <li>use sparingly</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use for actionable elements</li>
        <li>use borders for these colors</li>
        <li>
          use a beige/gold, a secondary brand color, as this may be
          misinterpreted as having semantic meaning
        </li>
      </ul>

      <h3 class="fw-bold">Neutrals</h3>
      <p>
        Neutral colors are the default colors used for most surfaces
        (backgrounds), shadows, and text. They don’t typically have a meaning
        associated with them, though they can imply things like disabled states.
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div class="bg-body rounded p-2" style="width: 120px; height: 60px">
            body
          </div>
          <small>#ffffff / #212529</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-body-tertiary rounded p-2"
            style="width: 120px; height: 60px"
          >
            body-tertiary
          </div>
          <small>#f8f9fa / #2b3035</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-body-secondary rounded p-2 text-nowrap"
            style="width: 140px; height: 60px"
          >
            body-secondary
          </div>
          <small>#e9ecef / #343a40</small>
        </li>
      </ul>

      <p>These backgrounds do not change based on color mode.</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-transparent rounded p-2"
            style="width: 120px; height: 60px"
          >
            transparent
          </div>
          <small>inherits</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-white text-dark rounded p-2"
            style="width: 120px; height: 60px"
          >
            white
          </div>
          <small>#ffffff</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-light text-dark rounded p-2"
            style="width: 120px; height: 60px"
          >
            light
          </div>
          <small>#f8f9fa</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-dark text-light rounded p-2"
            style="width: 120px; height: 60px"
          >
            dark
          </div>
          <small>#212529</small>
        </li>
        <li class="list-inline-item">
          <div
            class="bg-black text-light rounded p-2"
            style="width: 120px; height: 60px"
          >
            black
          </div>
          <small>#000000</small>
        </li>
      </ul>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>use for text, surfaces, borders, and dividers</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use for actionable elements</li>
        <li>use for boilerplate backgrounds</li>
      </ul>

      <h3 class="fw-bold">Semantic</h3>
      <p>
        Semantic colors are used to denote which are actionable elements,
        messaging type (i.e. informational, warning, or critical), an object’s
        workflow state (e.g. draft, completed, suspended, canceled), and general
        system status (e.g. which elements have been recently updated or
        created). Therefore, each color in the semantic color palette has a
        distinct meaning but should have consistent use in all contexts.
      </p>

      <p class="fw-bold mb-0">Subtle and Emphasis Color Groups</p>
      <p>
        For some semantic colors, there are two different color groups: subtle
        and emphasis. Subtle is the default color group. By default use the
        subtle color group for most UI elements in most cases. However, when it
        is important to create a moment of visual emphasis, the emphasis color
        group can be used.
      </p>

      <h4>Action</h4>
      <p>
        Action colors are used to pull focus to and communicate which are
        actionable UI elements. They should be reserved for things like buttons,
        links, calls-to-action, collapse controls, tabs, etc.
        <span class="fst-italic"
          >Note: Because Bootstrap by default provides action element colors for
          various states – e.g. onclick, onhover, selected – these are not
          defined here.</span
        >
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-primary-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            primary-subtle
          </div>
          <small>#fcfcfd / #dee2e6</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-primary rounded p-2"
            style="width: 120px; height: 60px"
          >
            primary
          </div>
          <small> #2f68cb</small>
        </li>
      </ul>

      <h4>Success</h4>
      <p>
        Success is used to confirm that an action has been completed
        successfully. Success can also be used to convey confirmation messages
        or statuses that are positive and that do not require any immediate
        action from the user.
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-success-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            success-subtle
          </div>
          <small>#d1e7dd / #051b11</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-success rounded p-2"
            style="width: 120px; height: 60px"
          >
            success
          </div>
          <small> #198754</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-white rounded p-2"
            style="width: 120px; height: 60px; background: #0a3622;"
          >
            success-emphasis
          </div>
          <small> #0a3622</small>
        </li>
      </ul>

      <CodeBlock>
        <template #preview>
          <span class="badge rounded-pill bg-success-subtle border border-success-subtle text-success-emphasis me-1">Success</span>
          <span class="badge rounded-pill text-bg-success">Success</span>

          <div class="alert alert-success small mt-3" role="alert">
            A simple success alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h4>Danger (Crictical)</h4>
      <p>
        Critical is used as the color of highest importance which implies that
        an item needs immediate attention, or that an action is impossible,
        blocked, or has resulted in an error.
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-danger-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            danger-subtle
          </div>
          <small>#f8d7da / #2c0b0e</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-danger rounded p-2"
            style="width: 120px; height: 60px"
          >
            danger
          </div>
          <small> #cb444a</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-white rounded p-2"
            style="width: 120px; height: 60px; background: #58151c;"
          >
            danger-emphasis
          </div>
          <small> #58151c</small>
        </li>
      </ul>
      <CodeBlock>
        <template #preview>
          <span class="badge rounded-pill bg-danger-subtle border border-danger-subtle text-danger-emphasis me-1">Danger</span>
          <span class="badge rounded-pill text-bg-danger">Danger</span>

          <div class="alert alert-danger small mt-3" role="alert">
            A simple danger alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h4>Warning</h4>
      <p>
        Warning colors are used to communicate future consequences of an action
        or statuses that are in-progress, pending, or require user intervention,
        but do not prevent a task from being completed.
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-warning-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            warning-subtle
          </div>
          <small>#ced4da / #1a1d20</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-warning rounded p-2"
            style="width: 120px; height: 60px"
          >
            warning
          </div>
          <small> #4c7286</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-white rounded p-2"
            style="width: 120px; height: 60px; background: #664d03;"
          >
            warning-emphasis
          </div>
          <small> #58151c</small>
        </li>
      </ul>

      <CodeBlock>
        <template #preview>
          <span class="badge rounded-pill bg-warning-subtle border border-warning-subtle text-warning-emphasis me-1">Warning</span>
          <span class="badge rounded-pill text-bg-warning">Warning</span>

          <div class="alert alert-warning small mt-3" role="alert">
            A simple warning alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h4>Info</h4>
      <p>
        Info colors are used to highlight non-critical information that help the
        user better understand the current context, or provide benefit, like
        tips or incentives.
      </p>

      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="bg-info-subtle rounded p-2"
            style="width: 120px; height: 60px"
          >
            info-subtle
          </div>
          <small>#ced4da / #1a1d20</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-bg-info rounded p-2"
            style="width: 120px; height: 60px"
          >
            info
          </div>
          <small>#0dcaf0</small>
        </li>
        <li class="list-inline-item">
          <div
            class="text-white rounded p-2"
            style="width: 120px; height: 60px; background: #055160;"
          >
            info-emphasis
          </div>
          <small> #055160</small>
        </li>
      </ul>

      <CodeBlock>
        <template #preview>
          <span class="badge rounded-pill bg-info-subtle border border-info-subtle text-info-emphasis me-1">Info</span>
          <span class="badge rounded-pill text-bg-info">Info</span>

          <div class="alert alert-info small mt-3" role="alert">
            A simple info alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h4>Academic Terms (Quarters)</h4>
      <p>
        Academic terms are differentiated using distinct colors for each term.
        Sub-terms (e.g. Summer A and B terms) should use the color associated
        with the parent term. Note that while there is some proximity to other
        semantic colors, academic term colors should only be used in context,
        and ideally in conjunction with the quarter labels so as to clearly
        indicate their meaning.
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="rounded p-2"
            style="width: 120px; height: 60px; background: #ffc8b7"
          >
            autumn
          </div>
          <small>#ffc8b7</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2"
            style="width: 120px; height: 60px; background: #fcf990"
          >
            summer
          </div>
          <small>#fcf990</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2"
            style="width: 120px; height: 60px; background: #cdf"
          >
            winter
          </div>
          <small>#ccddff</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2"
            style="width: 120px; height: 60px; background: #cfc"
          >
            spring
          </div>
          <small>#ccffcc</small>
        </li>
      </ul>

      <h3 class="fw-bold">Workflow States</h3>
      <p>
        For objects in a workflow, colors may be used to better communicate the
        state of an object (e.g. object colors, or badges attached to objects).
        The following color assignments offer guidance for typical workflow
        states:
      </p>

      <h4>Draft State (Gray / Neutral)</h4>
      <p>
        Item that is not in use or ready for review or initial state after
        creating the item.
      </p>
      <p>
        Examples:
        <span class="fst-italic"
          >Draft, In Progress, Not Started, Unscheduled</span
        >
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h4>Ready State (Cyan / Info)</h4>
      <p>Item(s) created/drafted and awaiting further input or review.</p>
      <p>
        Examples:
        <span class="fst-italic"
          >Approved, Planned, Pending, Open, Final Edits</span
        >
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h4>Suspended State [Actionable] (Orange / Warning)</h4>
      <p>Item on hold, not in use but may be used in the future.</p>
      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h4>Suspended State [Not Actionable] (Gray / Neutral)</h4>
      <p>Item on hold, not in use but may be used in the future.</p>
      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h4>Completed State (Green / Success)</h4>
      <p>Finished item now in use. No further changes expected.</p>
      <p>
        Examples:
        <span class="fst-italic"
          >Offered, Official, Completed, Scheduled, Active, Generated,
          Published</span
        >
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h4>Canceled State (Red / Critical)</h4>
      <p>Blocked or discarded item.</p>
      <p>
        Examples:
        <span class="fst-italic">Canceled, Error, Closed</span>
      </p>

      <CodeBlock>
        <template #preview> hello world </template>
      </CodeBlock>

      <h3 class="fw-bold">Decorative Color Palette</h3>
      <p>
        When it is not necessary to communicate semantics, decorative colors can
        be used to differentiate objects in an interface – they are primarily
        used for data visualizations or objects like courses, schedule blocks,
        etc.
      </p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #ac4bb9"
          >
            tbd
          </div>
          <small>#ac4bb9 / #bd6fc7</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #008099"
          >
            tbd
          </div>
          <small>#008099 / #3399ad</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #bd4e05"
          >
            tbd
          </div>
          <small>#bd4e05 / #ca7137</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #787a00"
          >
            tbd
          </div>
          <small>#787a00 / #939533</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #c84674"
          >
            tbd
          </div>
          <small>#c84674 / #d36b90</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #735696"
          >
            tbd
          </div>
          <small>#735696 / #8f78ab</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #a06b22"
          >
            tbd
          </div>
          <small>#a06b22 / #b3894e</small>
        </li>
        <li class="list-inline-item">
          <div
            class="rounded p-2 text-white"
            style="width: 120px; height: 60px; background: #374dc2"
          >
            tbd
          </div>
          <small>#374dc2 / #5f71ce</small>
        </li>
      </ul>
      <p class="fw-bold">Do:</p>
      <ul>
        <li>
          use only the base color (no variants), when possible (exception:
          heatmap visualizations)
        </li>
        <li>
          use only black or white text overlaid on a decorative color, depending
          on which provides the most contrast
        </li>
        <li>
          use in the order listed to maximize the visual distinctions between
          objects or data sets
        </li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use borders for decorative colors</li>
      </ul>

      <p class="fw-bold mb-0">Color Usage in Data Visualizations</p>
      <p>
        <span class="fw-bold fst-italic">Single Data Series:</span> Use when
        there is a single data series. For example, a bar chart, column chart,
        or a single line chart.
      </p>
      <ul>
        <li>
          Note: To highlight one piece of data from a data set, use a
          combination of one decorative color and one color from the neutral
          palette. Use the decorative color for the data you want to highlight.
        </li>
      </ul>

      <p>
        <span class="fw-bold fst-italic"
          >Multiple (Categorical) Data Sets:</span
        >
        Use multiple decorative colors when you need to differentiate two or
        more unrelated data categories from each other.
      </p>

      <p>
        Ranked or Density Data Sets: These type of data sets use steps within a
        single hue, and color lightness to indicate a range from low to high.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

export default {
  name: "DocsColor",
  components: { Layout, BBreadcrumb, BBreadcrumbItem },
  data() {
    return {
      pageTitle: "Color",
    };
  },
};
</script>
