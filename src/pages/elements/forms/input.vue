<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/elements">Elements</BBreadcrumbItem>
        <BBreadcrumbItem to="/elements/forms">Forms</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Input fields allow users to enter data for submission or search.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#states"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >States</a
              >
            </li>
            <li>
              <a
                href="#options"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Options</a
              >
            </li>
            <li>
              <a
                href="#practices"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Best Practices</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="anatomy">Anatomy</h2>
      <ul>
        <li>
          <span class="fw-bold">Label</span> – Text to identify the data object
          represented by the form field, located above or to the left of the
          input.
        </li>
        <li>
          <span class="fw-bold">Field</span> – Area where data can be input by
          user or programmatically.
        </li>
        <li>
          <span class="fw-bold">Data entry text</span> – Text typed into form
          fields should be clearly distinguished as entered data
        </li>
        <li>
          <span class="fw-bold">Required/optional indicator</span> – Place where
          either a symbol or label that follows the field label and that informs
          users of whether a form is required for valid submission of the form
          or is optional to fill out.
        </li>
        <li>
          <span class="fw-bold">Constraint text</span> – Text below the input
          specifies the format needed for valid data entry, and can include
          format examples or any other constraints for valid input.
        </li>
        <li>
          <span class="fw-bold">Help text</span> – Text that is displayed in a
          tooltip triggered by a help icon, can give additional instructions for
          this field, or also provide additional context or supplementary
          information.
        </li>
      </ul>

      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="states">States</h2>

      <ul class="d-flex flex-column list-unstyled">
        <div class="d-flex flex-row mb-3">
          <li class="flex-fill align-self-stretch w-100 me-2">
            <h3 class="text-center fw-medium ff-encode-sans pt-3">Default</h3>
            <PreviewBlock>
              <template #preview>
                <div class="">
                  <label for="validationCustom02" class="form-label fw-bold">
                    Form label *
                  </label>
                  <input
                    id="validationCustom02"
                    type="text"
                    class="form-control"
                    value=""
                  />
                  <div id="" class="form-text">Constraint text</div>
                </div>
              </template>
            </PreviewBlock>
          </li>
          <li class="flex-fill align-self-stretch w-100">
            <h3 class="text-center fw-medium ff-encode-sans pt-3">Error</h3>
            <PreviewBlock>
              <template #preview>
                <div class="">
                  <label for="validationCustom02" class="form-label fw-bold"
                    >Form label *</label
                  >
                  <input
                    id="validationCustom02"
                    type="text"
                    class="form-control is-invalid"
                    value="ABC"
                  />
                  <div class="invalid-feedback">
                    <span class="pe-2">Client-side error message.</span
                    ><span>Server-side error messages.</span>
                  </div>
                </div>
              </template>
            </PreviewBlock>
          </li>
        </div>
        <div class="d-flex flex-row">
          <li class="flex-fill align-self-stretch w-100 me-2">
            <h3 class="text-center fw-medium ff-encode-sans pt-3">Disabled</h3>
            <PreviewBlock>
              <template #preview>
                <label for="validationCustom02" class="form-label fw-bold">
                  Form label *
                </label>
                <input
                  id="validationCustom02"
                  type="text"
                  class="form-control"
                  value="uneditable text"
                  disabled
                />
              </template>
            </PreviewBlock>
          </li>
          <li class="flex-fill align-self-stretch w-100">
            <h3 class="text-center fw-medium ff-encode-sans pt-3">Read-only</h3>
            <PreviewBlock>
              <template #preview>
                <div class="">
                  <label for="validationCustom02" class="form-label fw-bold">
                    Form label *
                  </label>
                  <p>Read-only text</p>
                </div>
              </template>
            </PreviewBlock>
          </li>
        </div>
      </ul>

      <p>
        See <a href="../validation">Form Validation</a> for more details on
        error states.
      </p>
      <p>
        <em>Note:</em> Server-side error messages should be inline with and
        displayed <em>after</em> client-side error messages, so that any
        client-side message triggered to appear or disappear by real-time
        validation is more noticeable.
      </p>

      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="options">Options</h2>
      <h3 class="ff-encodesan fw-medium ff-encode-sans pt-3 pb-3">
        Bootstrap Input Groups
      </h3>
      <p>
        <a href="https://getbootstrap.com/docs/5.3/forms/input-group/"
          >Bootstrap input groups</a
        >
        are UI elements that visually group either a label and an input, or an
        input and another form element (button, checkbox, radio button).
      </p>

      <h4 class="pt-2">Word of Caution</h4>
      <p>
        It seems Boostrap's intention behind grouping UI elements in this way,
        is to associate them with one another. However, these groupings are not
        common, and users may not be familiar with how they operate.
      </p>
      <p>
        Many of these input groups are likely to degrade usability and cause
        confusion, so use with caution and adhere to the best practices outlined
        below.
      </p>

      <h4 class="pt-2">When to use</h4>
      <p>Input groups should generally only be used for one of two reasons:</p>
      <p>
        <strong>1. Use to indicate the format or units of an input</strong> by
        prepending or appending input text or selection. This is best reserved
        for times when confusion or errors might otherwise be likely.
      </p>
      <div class="pb-4">
        <PreviewBlock>
          <template #preview>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span class="input-group-text">.00</span>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2"
                >@example.com</span
              >
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01"
                >Options</label
              >
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="input-group">
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02"
                >Options</label
              >
            </div>
          </template>
        </PreviewBlock>
      </div>
      <p>
        <strong>2. Use to help communicate that input is required</strong> when
        a particular checkbox or radio button is selected.
        <em>Note:</em> consider if physical proximity or grouping items in a
        panel might serve the same purpose.
      </p>

      <PreviewBlock>
        <template #preview>
          <div class="input-group">
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
            />
          </div>
        </template>
      </PreviewBlock>

      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="practices">
        Best Practices
      </h2>
      <h3 class="fw-medium ff-encode-sans pt-3 pb-3">Label</h3>

      <UsageBlock variant="do"
        ><template #text>
          <ul>
            <li>
              <strong
                >Do place the label above or to the left of the form
                field.</strong
              >
            </li>
            <li>
              <strong>Do use just a few words for the label</strong> – Avoid
              long labels as they can be overwhelming and distracting. Instead,
              use help and constraint text to provide supplementary information,
              context, and input constraints or examples.
            </li>

            <li>
              <strong
                >Do use verbs like “enter,” “add,” or “input” sparingly </strong
              >– Generally use the label to describe what information a user
              needs to provide, rather than direct them to do it. The visual
              affordances of form inputs already imply that a user needs to
              enter, add, or input information in order to complete the form.
              The exception to this is if an interaction is new or unfamiliar, a
              user may need more guidance.
            </li>
            <li><strong>Do use sentence case.</strong></li>
          </ul>
        </template>
      </UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          ><p>
            <strong>Don't add a colon (:) at the end of a field label.</strong>
          </p>
          <p class="small">
            The proximity of label to input already implies the relationship
            between the two elements.
          </p>
        </template>
        <template #preview>
          <label for="validationCustom02" class="form-label">
            Form label:
          </label>
          <input
            id="validationCustom02"
            type="text"
            class="form-control"
            value=""
          />
        </template>
      </UsageBlock>

      <UsageBlock variant="dont"
        ><template #text
          ><p><strong>Don't use floating labels.</strong></p>
          <p class="small">
            Fields with text in them are less noticeable, in addition, users
            might think there is already a default value entered in the field.
            Also, some browsers and assistive technologies don't properly or
            reliably read placeholder text. Ultimately, while floating labels do
            offer a better user experience than the label as a placeholder,
            placing the label and any example or constraint text outside the
            field is best.
          </p>
        </template>
        <template #preview>
          <span class="visually-hidden">Example:</span>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
        </template></UsageBlock
      >

      <h3 class="fw-medium ff-encode-sans pt-3 pb-3">Field</h3>
      <UsageBlock variant="dont"
        ><template #text>
          <p>
            <strong>Don't use placeholder text.</strong>
          </p>
          <p>
            Placeholder text that disappears when the form field receives focus
            hurts usability.. Placeholder text can disappear prematurely for
            users navigating fields by keyboard, and in general can be hard to
            remember. It is better to rely on constraint text to communicate
            format requirements to users.
          </p>
        </template>
      </UsageBlock>
      <UsageBlock variant="do"
        ><template #text>
          <p>
            <strong>Don't use disabled fields that are never editable.</strong>
          </p>
          <p>
            If a field will never become editable for a user, display the
            content as read-only text instead. Disabled fields imply a temporary
            state that can be changed based on the user's actions (or an
            external process or workflow).
          </p>
        </template>
      </UsageBlock>
      <h3 class="fw-medium ff-encode-sans pt-3 pb-3">
        Required/Optional indicator
      </h3>
      <h4>Overview</h4>
      <ul class="mb-4 py-2">
        <li>
          <strong>Clearly indicate both required and optional fields.</strong>
          Use one or the other for<em> all </em>input fields.
        </li>
        <ul>
          <li>
            Required fields should be indicated with an asterisk immediately
            after the label, using the same color as the input label (in most
            cases, black or dark gray).
          </li>

          <li>“optional” should be written out and in parenthesis.</li>
        </ul>

        <li>
          <strong>Provide a legend on the page </strong>indicating required
          fields are marked with *. An asterisk is a widely recognized indicator
          of required fields, but is best to be safe.
        </li>

        <li>
          <strong>Use the <code>required</code> attribute.</strong> With this,
          screen readers announce "required" along with the label text, since
          the required asterisk indicator may not always be announced by screen
          readers, or some users may not understand this convention.
        </li>
      </ul>

      <UsageBlock
        ><template #text>
          <ul>
            <li>
              <strong>Do omit requiredness indicators on login forms.</strong>
              It’s OK to skip these because it is well understood these fields
              are required.
            </li>
            <li>
              <strong
                >Do indicate requireness in constraint text area when there is
                not an input form label.</strong
              >
              (e.g. an input in a table that only has a table header).
            </li>
          </ul>
        </template>
      </UsageBlock>

      <UsageBlock variant="dont"
        ><template #text>
          <strong>Don't indicate requiredness or optional using color</strong>,
          instead reserve use of color for indicating invalid input.
        </template>
      </UsageBlock>

      <h3 class="fw-medium ff-encode-sans pt-3 pb-3">Constraint text</h3>

      <UsageBlock
        ><template #text>
          <strong>Do replace constraint text with error message</strong>, and
          unless a more specific error message can be given, repeat input
          constraints in the error message.
        </template>
      </UsageBlock>

      <h3 class="fw-medium ff-encode-sans pt-3 pb-3">Input Groups</h3>
      <UsageBlock variant="do">
        <template #text
          ><strong>Do always provide an input label</strong> for the input
          group; don't rely on the input group “add-on.”</template
        >
        <template #preview>
          <label for="basic-url" class="form-label">Dollars spent</label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
          <div class="form-text" id="basic-addon4">
            Amount spent cannot exceed approved expenditure.
          </div>
        </template>
      </UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          ><strong> Don't use to display the input label.</strong></template
        >
        <template #preview>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"
              >Dollars spent &nbsp; $</span
            >
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
            <span class="input-group-text">.00</span>
          </div>
          <div class="form-text" id="basic-addon4">
            Amount spent cannot exceed approved expenditure.
          </div>
        </template></UsageBlock
      >

      <UsageBlock variant="dont"
        ><template #text
          ><strong
            >Don't use to display constraint text or sample formats.</strong
          ></template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">MM/DD/YY</span>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </template>
          </PreviewBlock> </template
      ></UsageBlock>

      <UsageBlock variant="do">
        <template #text
          ><p>
            <strong
              >Do place button or dropdown that populates data
              <em>before</em> input.</strong
            >
          </p>
          <p>
            <em>Warning:</em> this input group configuration should only be used
            when users can edit the populated data. Otherwise, use a read-only
            field instead of an editable input field after the button or
            dropdown.
          </p>
        </template>
        <template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group mb-3">
                <button
                  class="btn btn-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Button
                </button>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
              <div class="input-group">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
              </div>
            </template>
          </PreviewBlock>
        </template>
      </UsageBlock>

      <UsageBlock variant="do">
        <template #text
          ><strong>
            Do place button or dropdown that acts upon input data
            <em>after</em> the input.</strong
          ></template
        >
        <template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button class="btn btn-secondary" type="button">Button</button>
              </div>
            </template>
          </PreviewBlock>
        </template>
      </UsageBlock>

      <UsageBlock variant="dont"
        ><template #text
          ><strong>
            Don't use a custom select with a button on the left.</strong
          ></template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <button class="btn btn-secondary" type="button">Button</button>
                <select
                  class="form-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                >
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </template>
          </PreviewBlock>
        </template></UsageBlock
      >

      <UsageBlock variant="dont"
        ><template #text
          ><strong
            >Don't use with
            <a
              href="https://getbootstrap.com/docs/5.3/forms/input-group/#multiple-inputs"
              >multiple inputs</a
            ></strong
          >, as validations styles are not supported in this case. </template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input
                  type="text"
                  aria-label="First name"
                  class="form-control"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  class="form-control"
                />
              </div>
            </template>
          </PreviewBlock> </template
      ></UsageBlock>

      <UsageBlock variant="dont"
        ><template #text
          ><strong>Don't use with multiple buttons.</strong></template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username with two button addons"
                />
                <button class="btn btn-secondary" type="button">Button</button>
                <button class="btn btn-secondary" type="button">Button</button>
              </div>
            </template>
          </PreviewBlock>
        </template></UsageBlock
      >

      <UsageBlock variant="dont"
        ><template #text
          ><strong
            >Don't use with
            <a
              href="https://getbootstrap.com/docs/5.3/forms/input-group/#multiple-addons"
            >
              multiple add-ons</a
            >
            next to each other.</strong
          >
          Use the input add-ons to prepend or append the input, or both. </template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
              </div>
            </template>
          </PreviewBlock> </template
      ></UsageBlock>

      <UsageBlock variant="dont"
        ><template #text>
          <strong
            >Don't use
            <a
              href="https://getbootstrap.com/docs/5.3/forms/input-group/#segmented-buttons"
              >segmented (split) buttons</a
            ></strong
          >, as users may miss critical functionality shown in the dropdown.
          Instead, use a single dropdown with all the available options. </template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <button type="button" class="btn btn-outline-primary">
                  Action
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </template>
          </PreviewBlock>
        </template></UsageBlock
      >

      <UsageBlock variant="dont"
        ><template #text>
          <p>
            <strong
              >Don't use Bootstrap's
              <a
                href="https://getbootstrap.com/docs/5.3/forms/form-control/#file-input"
                >standard</a
              >
              or
              <a
                href="https://getbootstrap.com/docs/5.3/forms/input-group/#custom-file-input"
                >custom file inputs</a
              ></strong
            >

            – they are unconventional and offer misleading affordances (the
            input appears focusable but instead triggers a OS file upload
            dialog).
          </p>
          <p>
            Instead, use a single upload button and an area to display read-only
            information about the uploaded item.
          </p> </template
        ><template #preview>
          <PreviewBlock>
            <template #preview>
              <div class="mb-3">
                <label for="formFile" class="form-label"
                  >Default file input example</label
                >
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02"
                  >Upload</label
                >
              </div>
            </template>
          </PreviewBlock>
        </template></UsageBlock
      >

      <p class="muted">
        This is an icon tooltip
        <a href="#" class="text-dark" data-bs-toggle="tooltip" data-bs-title="Another tooltip"><i class="bi bi-question-circle-fill"></i></a>

      </p>
    </template>

    <template #author>William Washington</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import PreviewBlock from "@/components/PreviewBlock.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

import { Tooltip } from "bootstrap";

export default {
  name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,

  components: {
    Layout,
    PreviewBlock, UsageBlock,
    PageContents,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  inject: ["mq"],
  data() {
    return {
      pageTitle: "Input Fields",
    };
  },
  mounted() {
    // enable bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  },
};
</script>
