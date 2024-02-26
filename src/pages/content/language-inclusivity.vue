<template>
  <Layout :page-title="pageTitle">
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/content/">Content Guidelines</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
      <h1>{{ pageTitle }}</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Actionable language in interface elements such as links, buttons, and
        headings play a crucial role in guiding users through a workflow. The
        words chosen shape how users perceive and use our tools to complete
        their tasks. Clear and concise actionable language helps our users
        understand and take action.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Active vs. Passive</h2>
      <p>
        When crafting language for labels, links, buttons, and headings, it's
        important to choose between active over passive terminology. Active
        language instills a sense of immediacy and clarity. Active verbs
        communicate a direct call to action, making it evident to users what
        steps they should take next. Passive language, on the other hand, tends
        to be more ambiguous and can create confusion regarding user
        expectations.
      </p>

      <h3>Choose active language</h3>
      <ul>
        <li>
          Clarity: Active language leaves no room for misinterpretation. Users
          can quickly grasp the intended action.
        </li>
        <li>
          Engagement: Active verbs inspire users to take immediate and
          intentional actions, fostering a more dynamic user experience.
        </li>
        <li>
          Empowerment: Users feel in control and empowered when presented with
          clear, actionable language.
        </li>
      </ul>
      <p>
        When creating labels, opt for verbs that clearly indicate the user's
        next action. For example:
      </p>
      <ul>
        <li>Active: "Submit application"</li>
        <li>Passive: "Application submission"</li>
      </ul>
      <p>
        Buttons are key elements in driving user interactions. Choose active
        verbs that resonate with the intended action:
      </p>
      <ul>
        <li>Active: "Manage UW NetID account"</li>
        <li>Passive: "UW NetID account management"</li>
      </ul>
      <p>
        Buttons need to be clear and predictable. Users should be able to
        anticipate what will happen when they select a button. Mislabeling a
        button causes confusion.
      </p>
      <p>
        Headings set the tone for a section and can guide users on what to
        expect. Use active language to create impactful headings:
      </p>
      <ul>
        <li>Active: "Create and manage your academic plan"</li>
        <li>Passive: "Academic plan creation and management"</li>
      </ul>
      <h2>Best Practices</h2>
      <h3>Heading and subheadings</h3>
      <p>
        Headings and subheadings help users identify their place, understand how
        things are organized, predict what actions they can take.
      </p>
      <p>Heading and subheadings should be concise and scannable:</p>
      <ul>
        <li>Use simple, clear language</li>
        <li>Keep headings to a single sentence</li>
        <li>Avoid using punctuation such as periods, commas, or semicolons</li>
        <li>
          Write in sentence case (capitalize the first word and proper nouns
          only)
        </li>
      </ul>
      <h3>Buttons</h3>
      <p>
        Buttons should always lead with a strong verb that encourages action. To
        provide enough context, use the content formula {verb} + {noun} on
        buttons, except in the case of common actions like “Done,” “Close,”
        “Cancel,” or “OK.”
      </p>
      <ul>
        <li>Good: "Send us feedback”</li>
        <li>Avoid: "Feedback"</li>
      </ul>
      <p>Don't be redundant. Avoid using "new" with "Create" or "Add":</p>
      <ul>
        <li>Good: "Add assignment”</li>
        <li>Avoid: "Add new assignment"</li>
      </ul>
      <h3>Links</h3>
      <p>
        Links serve as essential navigation elements. Effective and actionable
        language is crucial to guide users seamlessly through task completion.
      </p>
      <ol>
        <li>Be descriptive:</li>
        <ul>
          <li>Good: "View course schedule"</li>
          <li>Avoid: "Click Here"</li>
        </ul>
        <li>Align with user goals:</li>
        <ul>
          <li>Good: "Apply for financial aid"</li>
          <li>Avoid: "Financial Aid Information"</li>
        </ul>
        <li>Utilize contextual language:</li>
        <ul>
          <li>Good: "Explore Biology programs"</li>
          <li>Avoid: "Explore Programs"</li>
        </ul>
        <li>Use consistent terminology:</li>
        <ul>
          <li>Good: "Submit enrollment form"</li>
          <li>Avoid: "Complete Form"</li>
        </ul>
        <li>Prioritize Accessibility:</li>
        <ul>
          <li>
            Ensure link text is descriptive and meaningful (see sample #1 above)
            in order to assist users who rely on screen readers or other
            assistive technologies.
          </li>
        </ul>
        <li>Avoid Redundancy:</li>
        <ul>
          <li>Good: "Download syllabus"</li>
          <li>Avoid: "Click Here to Download Syllabus"</li>
        </ul>
      </ol>
      <p>
        Following these practices ensure a user-friendly and efficient
        experience for students, faculty, and staff.
      </p>
      <p>List of resources:</p>
      <ul>
        <li>
          <a href="http://uxdesign.uw.edu/interaction/labels.html"
            >http://uxdesign.uw.edu/interaction/labels.html</a
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "DocsPatternsMessaging",
  components: { Layout },
  data() {
    return {
      pageTitle: "Language & Inclusivity",
    };
  },
};
</script>
