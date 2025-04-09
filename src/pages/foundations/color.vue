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
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#principles"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Guiding Principles</a
              >
            </li>
            <li>
              <a
                href="#palettes"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Color Palettes</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="principles" class="display-6 ff-encode-sans pt-3 pb-3">
        Guiding Principles
      </h2>

      <ol>
        <li class="mb-3">
          <strong>Use color sparingly and intentionally.</strong> Using too much
          color can be counter productive, making visual emphasis harder, and
          can create unnecessary cognitive burden on users.
        </li>
        <li class="mb-3">
          <strong
            >Use color to communicate meaning, to clarify the information
            hierarchy, and for visual emphasis.</strong
          >
          <ul class="mt-3">
            <li class="mb-3">
              <strong>Reinforce meaning</strong> — Whenever possible, leverage
              the defined semantic color palettes to reinforce the meaning of a
              message or an object’s status (e.g. blue indicates an action).
              Doing this minimizes a user’s cognitive load. In general, always
              be consistent in the use of a color – only associate a single
              color with an object or state.
            </li>
            <li class="mb-3">
              <strong>Clarify information hierarchy</strong> – Similarly, subtle
              shifts in color values (darkness/lightness) create depth and
              spatial associations that can communicate distinct zones or layers
              to a user, and therefore clarify an information hierarchy. In this
              design system, this is accomplished using different values of the
              neutrals palette for panels and surfaces.
            </li>
            <li>
              <strong>Visual emphasis</strong> – For semantic colors, there are
              emphasis and subtle color groupings, that can be used to create
              different degrees of visual emphasis in surfaces.
            </li>
          </ul>
        </li>
        <li class="mb-3">
          <strong>Don’t rely on color alone.</strong> Ensure accessibility by
          ensuring color alone isn’t used to communicate meaning, hierarchy, or
          emphasis. Supplement color usage with text, icons, sizing, graphic
          patterned backgrounds (e.g. information visualizations), and
          positioning of elements to communicate these to a user.
        </li>
        <li class="">
          <strong>Maintain sufficient color contrast.</strong> Ensure colors for
          body text has a sufficient contrast ratio to meet accessibility
          guideline WCAG 2.1 AA criteria 1.4.3 (for more information on this
          requirement, see UW’s Accessible Technology
          <BLink
            href="https://www.washington.edu/accesstech/checklist/contrast/"
            target="_blank"
            >color contrast</BLink
          >
          page). The color groupings in the design system have already been
          determined to meet this accessibility criteria.
        </li>
      </ol>

      <h2 id="palettes" class="display-6 ff-encode-sans pt-3 pb-3">
        Color Palettes
      </h2>

      <h3 class="fw-bold">Brand Accent</h3>

      <p>
        Use for communicating the UW brand. While UW has an expanded brand
        accent color palette, we recommend limiting the usage of brand colors to
        Spirit Purple to maintain a sleek visual design.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-brand rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#4b2e83</td>
            <td>--</td>
            <td>bg-brand</td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>only use the base color (no variants)</li>
        <li>
          primarily use for
          <BLink href="/patterns/boilerplate/">boilerplate</BLink> elements
        </li>
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

      <hr class="my-5" />

      <h3 class="fw-bold">Neutrals</h3>
      <p>
        Neutral colors are the default colors used for most
        <BLink href="/patterns/surface">surfaces</BLink>, shadows, and
        <BLink href="/foundations/typography">typography</BLink>. They don’t
        typically have a meaning associated with them, though they can imply
        things like disabled states.
      </p>

      <h4>Surface (backgrounds)</h4>
      <p>These colors change based on color mode.</p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-transparent border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>--</td>
            <td>--</td>
            <td>bg-transparent</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-body border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>#212529</td>
            <td>bg-body</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-body-tertiary border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#f8f9fa</td>
            <td>#2b3035</td>
            <td>bg-body-tertiary</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-body-secondary rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#e9ecef</td>
            <td>#343a40</td>
            <td>bg-body-secondary</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-dark-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ced4da</td>
            <td>#1a1d20</td>
            <td>bg-dark-subtle</td>
          </tr>
        </tbody>
      </table>

      <h4>Borders and Dividers (Horizontal rule)</h4>
      <p>These colors change based on color mode.</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #dee2e6'
                    : 'background-color: #495057'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#dee2e6</td>
            <td>#495057</td>
            <td>border</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #c8c8c9'
                    : 'background-color: #f7f8f9'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#c8c8c9</td>
            <td>#f7f8f9</td>
            <td>hr (element)</td>
          </tr>
        </tbody>
      </table>

      <h4>Text</h4>
      <p>Default text color changes based on color mode.</p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #212529'
                    : 'background-color: #dee2e6'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#212529</td>
            <td>#dee2e6</td>
            <td>text-body</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded border"
                style="width: 30px; height: 30px; background: #fff"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>--</td>
            <td>text-white</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px; background: #000"
              >
                &nbsp;
              </div>
            </td>
            <td>#000000</td>
            <td>--</td>
            <td>text-black</td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>use for text, surfaces, borders, and dividers</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use for actionable elements</li>
        <li>use for boilerplate backgrounds</li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Semantic (Bootstrap themes)</h3>
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

      <h4>Primary (Action)</h4>
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
      <p><span class="fw-bold">Emphasis</span> (default action)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-primary rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#2f68cb</td>
            <td>--</td>
            <td>.bg-primary</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-white border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>--</td>
            <td>.text-white</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subtle</span> (secondary action)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-primary-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#cfe2ff</td>
            <td>#031633</td>
            <td>.bg-primary-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #052c65'
                    : 'background-color: #6ea8fe'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#052c65</td>
            <td>#6ea8fe</td>
            <td>.text-primary-emphasis</td>
          </tr>
        </tbody>
      </table>

      <p>Related components: Buttons, Links</p>

      <CodeBlock>
        <template #preview>
          <p>
            <button type="button" class="btn btn-primary me-2">Primary</button>
            <button
              type="button"
              class="btn btn-link bg-primary-subtle text-primary-emphasis text-primary-hover link-underline link-underline-opacity-0"
            >
              Secondary
            </button>
          </p>
          <div>Hello world. This is a <a href="#">link</a> to something.</div>
        </template>
      </CodeBlock>

      <h4>Secondary (???)</h4>
      <p>Secondary is a neutral color used to convey an alternate state????</p>

      <p><span class="fw-bold">Emphasis</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-secondary rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#198754</td>
            <td>--</td>
            <td>.bg-secondary</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-white border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>--</td>
            <td>.text-white</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subtle</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-secondary-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#e2e3e5</td>
            <td>#161719</td>
            <td>.bg-secondary-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #2b2f32'
                    : 'background-color: #a7acb1'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#2b2f32</td>
            <td>#a7acb1</td>
            <td>.text-secondary-emphasis</td>
          </tr>
        </tbody>
      </table>
      <p>Related components: Badges</p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-secondary-subtle text-secondary-emphasis me-1"
            >Success</span
          >
          <span class="badge rounded-pill text-bg-secondary">Success</span>
        </template>
      </CodeBlock>

      <h4>Success</h4>
      <p>
        Success is used to confirm that an action has been completed
        successfully. Success can also be used to convey confirmation messages
        or statuses that are positive and that do not require any immediate
        action from the user.
      </p>

      <p><span class="fw-bold">Emphasis</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-success rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#198754</td>
            <td>--</td>
            <td>.bg-success</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-white border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>--</td>
            <td>.text-white</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subtle</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-success-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#d1e7dd</td>
            <td>#051b11</td>
            <td>.bg-success-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #a3cfbb'
                    : 'background-color: #0f5132'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#a3cfbb</td>
            <td>#0f5132</td>
            <td>.border-success-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #0a3622'
                    : 'background-color: #75b798'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#0a3622</td>
            <td>#75b798</td>
            <td>.text-success-emphasis</td>
          </tr>
        </tbody>
      </table>
      <p>Related components: Alerts, Badges</p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-success-subtle text-success-emphasis me-1"
            >Success</span
          >
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

      <p><span class="fw-bold">Emphasis</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-danger rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#cb444a</td>
            <td>--</td>
            <td>.bg-danger</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-white border rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ffffff</td>
            <td>--</td>
            <td>.text-white</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subtle</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-danger-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#f8d7da</td>
            <td>#2c0b0e</td>
            <td>.bg-danger-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #f1aeb5'
                    : 'background-color: #842029'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#f1aeb5</td>
            <td>#842029</td>
            <td>.border-danger-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #58151c'
                    : 'background-color: #ea8691'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#58151c</td>
            <td>#ea8691</td>
            <td>.text-danger-emphasis</td>
          </tr>
        </tbody>
      </table>
      <p>Related components: Buttons, Alerts, Badges</p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-danger-subtle text-danger-emphasis me-1"
            >Danger</span
          >
          <span class="badge rounded-pill text-bg-danger">Danger</span>

          <div class="alert alert-danger small mt-3" role="alert">
            A simple danger alert—check it out!
          </div>

          <button type="button" class="btn btn-danger">Delete</button>
        </template>
      </CodeBlock>

      <h4>Warning</h4>
      <p>
        Warning colors are used to communicate future consequences of an action
        or statuses that are in-progress, pending, or require user intervention,
        but do not prevent a task from being completed.
      </p>

      <p><span class="fw-bold">Emphasis</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-warning rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#cb444a</td>
            <td>--</td>
            <td>.bg-warning</td>
          </tr>
          <tr>
            <td>
              <div class="bg-black rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#000000</td>
            <td>--</td>
            <td>.text-black</td>
          </tr>
        </tbody>
      </table>
      <p><span class="fw-bold">Subtle</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-warning-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ced4da</td>
            <td>#1a1d20</td>
            <td>.bg-warning-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #ffe69c'
                    : 'background-color: #997404'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#ffe69c</td>
            <td>#997404</td>
            <td>.border-warning-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #664d03'
                    : 'background-color: #ffda6a'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#664d03</td>
            <td>#ffda6a</td>
            <td>.text-warning-emphasis</td>
          </tr>
        </tbody>
      </table>
      <p>Related components: Alerts, Badges</p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-warning-subtle text-warning-emphasis me-1"
            >Warning</span
          >
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

      <p><span class="fw-bold">Emphasis</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-info rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#cb444a</td>
            <td>--</td>
            <td>.bg-info</td>
          </tr>
          <tr>
            <td>
              <div class="bg-black rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#000000</td>
            <td>--</td>
            <td>.text-black</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subtle</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-info-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#CFF4FF</td>
            <td>#032830</td>
            <td>.bg-info-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #9eeaf9'
                    : 'background-color: #087990'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#9eeaf9</td>
            <td>#087990</td>
            <td>.border-info-subtle</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #055160'
                    : 'background-color: #6edff6'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#055160</td>
            <td>#6edff6</td>
            <td>.text-info-emphasis</td>
          </tr>
        </tbody>
      </table>
      <p>Related components: Alerts, Badges</p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-info-subtle text-info-emphasis me-1"
            >Info</span
          >
          <span class="badge rounded-pill text-bg-info">Info</span>

          <div class="alert alert-info small mt-3" role="alert">
            A simple info alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <hr class="my-5">

      <h3 class="fw-bold">Academic Terms (Quarters)</h3>
      <p>
        Academic terms are differentiated using distinct colors for each term.
        Sub-terms (e.g. Summer A and B terms) should use the color associated
        with the parent term. Note that while there is some proximity to other
        semantic colors, academic term colors should only be used in context,
        and ideally in conjunction with the quarter labels so as to clearly
        indicate their meaning.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-autumn rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ffc8b7</td>
            <td>--</td>
            <td>bg-autumn</td>
          </tr>
          <tr>
            <td>
              <div class="bg-winter rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ccddff</td>
            <td>--</td>
            <td>bg-winter</td>
          </tr>
          <tr>
            <td>
              <div class="bg-spring rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ccffcc</td>
            <td>--</td>
            <td>bg-spring</td>
          </tr>
          <tr>
            <td>
              <div class="bg-summer rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#fcf990</td>
            <td>--</td>
            <td>bg-summer</td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>
          use in conjunction with a quarter/term label whenever space allows
          (see Color General Principles above)
        </li>
        <li>use only black text (#000000) labels</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>
          if no label is present, do not use colors against a gray background as
          they do not provide sufficient contrast to be accessible
        </li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Workflow States</h3>
      <p>
        For objects in a workflow, colors may be used to better communicate the
        state of an object (e.g. object colors, or badges attached to objects).
        The following color assignments offer guidance for typical workflow
        states:
      </p>

      <h4>Draft State (Gray / Secondary)</h4>
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
        <template #preview>
          <span
            class="badge rounded-pill bg-secondary-subtle text-secondary-emphasis me-1"
            >Draft</span
          >
          <span class="badge rounded-pill text-bg-secondary">Draft</span>
        </template>
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
        <template #preview>
          <span
            class="badge rounded-pill bg-info-subtle text-info-emphasis me-1"
            >Approved</span
          >
          <span class="badge rounded-pill text-bg-info">Approved</span>
        </template>
      </CodeBlock>

      <h4>Suspended State [Actionable] (Orange / Warning)</h4>
      <p>Item on hold, not in use but may be used in the future.</p>

      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-warning-subtle text-warning-emphasis me-1"
            >Inactive</span
          >
          <span class="badge rounded-pill text-bg-warning">Inactive</span>
        </template>
      </CodeBlock>

      <h4>Suspended State [Not Actionable] (Gray / Secondary)</h4>
      <p>Item on hold, not in use but may be used in the future.</p>
      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-secondary-subtle text-secondary-emphasis me-1"
            >Locked</span
          >
          <span class="badge rounded-pill text-bg-secondary">Locked</span>
        </template>
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
        <template #preview>
          <span
            class="badge rounded-pill bg-success-subtle text-success-emphasis me-1"
            >Completed</span
          >
          <span class="badge rounded-pill text-bg-success">Completed</span>
        </template>
      </CodeBlock>

      <h4>Canceled State (Red / Critical)</h4>
      <p>Blocked or discarded item.</p>
      <p>
        Examples:
        <span class="fst-italic">Canceled, Error, Closed</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-danger-subtle text-danger-emphasis me-1"
            >Closed</span
          >
          <span class="badge rounded-pill text-bg-danger">Closed</span>
        </template>
      </CodeBlock>

      <hr class="my-5" />

      <h3 class="fw-bold">Decorative Colors</h3>
      <p>
        When it is not necessary to communicate semantics, decorative colors can
        be used to differentiate objects in an interface – they are primarily
        used for data visualizations or objects like courses, schedule blocks,
        etc.
      </p>

      <h4>Surface (background)</h4>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 150px">Light</th>
            <th scope="col" style="width: 150px">Dark</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-decorative-1 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ac4bb9</td>
            <td>#bd6fc7</td>
            <td>bg-decorative-1</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-2 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#008099</td>
            <td>#3399ad</td>
            <td>bg-decorative-2</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-3 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#bd4e05</td>
            <td>#ca7137</td>
            <td>bg-decorative-3</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-4 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#787a00</td>
            <td>#939533</td>
            <td>bg-decorative-4</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-5 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#c84674</td>
            <td>#d36b90</td>
            <td>bg-decorative-5</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-6 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#735696</td>
            <td>#8f78ab</td>
            <td>bg-decorative-6</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-7 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#a06b22</td>
            <td>#b3894e</td>
            <td>bg-decorative-7</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-decorative-8 rounded p-2 text-white small"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#374dc2</td>
            <td>#5f71ce</td>
            <td>bg-decorative-8</td>
          </tr>
        </tbody>
      </table>

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

      <hr class="my-5" />

      <h3 class="fw-bold">Color Usage in Data Visualizations</h3>
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
import { BBreadcrumb, BBreadcrumbItem, BLink } from "bootstrap-vue-next";
import { watch } from "vue";

export default {
  name: "DocsColor",
  components: { Layout, BBreadcrumb, BBreadcrumbItem, BLink },
  data() {
    return {
      pageTitle: "Color",
      colorMode: "light",
    };
  },
  updated() {
    this.colorMode = document.documentElement.getAttribute("data-bs-theme");
  },
};
</script>
