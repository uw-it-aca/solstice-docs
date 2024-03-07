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

      <p class="p-0 lead text-muted">
        Actionable language in interface elements such as links, buttons, and
        headings play a crucial role in guiding users through a workflow. The
        words chosen shape how users perceive and use our tools to complete
        their tasks. Clear and concise actionable language helps our users
        understand and take action. <br />
        Inclusive language is paramount in fostering a welcoming and respectful
        digital environment and ensures that all users feel respected,
        represented, and included at the University of Washington.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Actionable Language</h2>
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
        next action:
      </p>
      <UsageBlock>Submit application</UsageBlock>
      <UsageBlock variant="dont">Application submission</UsageBlock>
      <p>
        Buttons are key elements in driving user interactions. Choose active
        verbs that resonate with the intended action:
      </p>
      <UsageBlock
        ><template #preview
          ><button type="button" class="btn btn-primary">
            Manage UW NetID account
          </button></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #preview
          ><button type="button" class="btn btn-primary">
            UW NetID account management
          </button></template
        ></UsageBlock
      >
      <p>
        Buttons need to be clear and predictable. Users should be able to
        anticipate what will happen when they select a button. Mislabeling a
        button causes confusion.
      </p>
      <p>
        Headings set the tone for a section and can guide users on what to
        expect. Use active language to create impactful headings:
      </p>
      <UsageBlock>Create and manage your academic plan</UsageBlock>
      <UsageBlock variant="dont"
        >Academic plan creation and management</UsageBlock
      >
      <h3>Best Practices</h3>
      <h4>Heading and subheadings</h4>
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
      <h4>Buttons</h4>
      <p>
        Buttons should always lead with a strong verb that encourages action. To
        provide enough context, use the content formula {verb} + {noun} on
        buttons, except in the case of common actions like “Done,” “Close,”
        “Cancel,” or “OK.”
      </p>
      <UsageBlock
        ><template #text
          >Use the content formula {verb} + {noun} on buttons</template
        ><template #preview
          ><button type="button" class="btn btn-primary">
            Download syllabus
          </button></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text>Avoid using "new" with "Create" or "Add"</template>
        <template #preview
          ><button type="button" class="btn btn-primary">
            Add new assignment
          </button></template
        >
      </UsageBlock>
      <UsageBlock
        ><template #preview
          ><button type="button" class="btn btn-primary">
            Send us feedback
          </button></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #preview
          ><button type="button" class="btn btn-primary">
            Feedback
          </button></template
        ></UsageBlock
      >
      <h4>Links</h4>
      <p>
        Links serve as essential navigation elements. Effective and actionable
        language is crucial to guide users seamlessly through task completion.
      </p>
      <ol class="list-unstyled">
        <li>Be descriptive:</li>
        <UsageBlock><a href="#">View course schedule</a></UsageBlock>
        <UsageBlock variant="dont"><a href="#">Click Here</a></UsageBlock>

        <li>Align with user goals:</li>
        <UsageBlock><a href="#">Apply for financial aid</a></UsageBlock>
        <UsageBlock variant="dont"
          ><a href="#">Financial Aid Information</a></UsageBlock
        >

        <li>Utilize contextual language:</li>
        <UsageBlock><a href="#">Explore Biology programs</a></UsageBlock>
        <UsageBlock variant="dont"><a href="#">Explore Programs</a></UsageBlock>

        <li>Use consistent terminology:</li>
        <UsageBlock><a href="#">Submit enrollment form</a></UsageBlock>
        <UsageBlock variant="dont"><a href="#">Complete Form</a></UsageBlock>

        <li>Prioritize Accessibility:</li>
        <p>
          Ensure link text is descriptive and meaningful (see sample #1 above)
          in order to assist users who rely on screen readers or other assistive
          technologies.
        </p>

        <li>Avoid Redundancy:</li>
        <UsageBlock><a href="#">Download syllabus</a></UsageBlock>
        <UsageBlock variant="dont"
          ><a href="#">Click Here to Download Syllabus </a></UsageBlock
        >
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
      <h2>Inclusivity</h2>
      <p>
        Inclusive language is paramount in fostering a welcoming and respectful
        digital environment and ensures that all users feel respected,
        represented, and included at the University of Washington. This document
        outlines the significance of inclusive language in user interface design
        and clarifies its application within our university community context.
      </p>
      <h3>What is Inclusive Language?</h3>
      <p>
        Inclusive language refers to language choices that avoid stereotypes,
        biases, or exclusions based on identity characteristics such as race,
        gender, ethnicity, ability, age, sexual orientation, religion,
        socioeconomic status, or any other relevant factor. It encompasses:
      </p>
      <ul>
        <li>Using gender-neutral terminology.</li>
        <li>Prioritizing person-first language.</li>
        <li>Acknowledging and respecting diverse cultural backgrounds.</li>
        <li>Avoiding assumptions or stereotypes based on identity markers.</li>
        <li>Avoiding idioms, jargons, and acronyms.</li>
      </ul>
      <h3>Importance of Inclusive Language</h3>
      <p>
        Inclusive language is integral to the University of Washington's
        commitment to diversity, equity, and inclusion. It serves several key
        purposes:
      </p>
      <ul>
        <li>
          <strong>Reflecting Diversity:</strong> Inclusive language acknowledges
          and respects the diverse identities, backgrounds, and experiences of
          our university community members.
        </li>
        <li>
          <strong>Promoting Belonging:</strong> It cultivates a sense of
          belonging and inclusivity among all users, regardless of their race,
          gender, ethnicity, ability, or other identity markers.
        </li>
        <li>
          <strong>Enhancing Accessibility:</strong> Inclusive language
          contributes to the accessibility of our digital platforms by ensuring
          that content is understandable and relatable to all users.
        </li>
        <li>
          <strong>Aligning with Values:</strong> By prioritizing inclusive
          language, we uphold the university's values of equity, respect, and
          social justice.
        </li>
      </ul>
      <h3>Best Practices</h3>
      <ul class="list-unstyled">
        <li>Prioritize Gender Neutrality:</li>
        <UsageBlock>their</UsageBlock>
        <UsageBlock variant="dont">his or her</UsageBlock>
        <li>Design for all levels of ability</li>
        <UsageBlock><a href="#">Display your schedule</a></UsageBlock>
        <UsageBlock variant="dont"
          ><a href="#">See your schedule</a></UsageBlock
        >
        <li>
          Race, Ethnicity, Nationality, Religion, Native/Indigenous Identity:
        </li>
        <UsageBlock>Students from various cultural backgrounds</UsageBlock>
        <UsageBlock variant="dont">Minority students</UsageBlock>
        <li>Avoid Age Stereotypes:</li>
        <UsageBlock></UsageBlock>
        <UsageBlock variant="dont"></UsageBlock>
        <li>Use Inclusive Terms:</li>
        <UsageBlock>First-year students</UsageBlock
        ><usageBlock variant="dont">Freshmen</usageBlock>
        <UsageBlock></UsageBlock
        ><usageBlock variant="dont"></usageBlock>
        <UsageBlock></UsageBlock
        ><usageBlock variant="dont"></usageBlock>
      </ul>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import UsageBlock from "@/components/UsageBlock.vue";

export default {
  name: "DocsPatternsMessaging",
  components: { Layout, UsageBlock },
  data() {
    return {
      pageTitle: "Language & Inclusivity",
    };
  },
};
</script>
