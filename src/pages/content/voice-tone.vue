<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/content/">Content</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>

    <template #lead>
      Voice and Tone establish a uniform and easily identifiable communication
      style, promoting a clear, cohesive, and contextualized user experience.
      Voice, like personality, is constant throughout our messaging, while tone,
      like emotions, is dynamic and depends on the context/situation.
      <br>
      Both voice
      and tone adhere to and follow the
      <a
          href=https://insideuwit.uw.edu/support-units/communications/brand-style-other-resources/uw-it-writing-style-guide/
          target="_blank"
        >UW-IT Writing Style Guide</a
      >
      and the
      <a
          href=https://www.washington.edu/brand/guides/editorial-guide/#editorial-4
          target="_blank"
        >UW Editorial Guide</a
      >. Both of these resources should be explored, as they contain additional
      tips and guidance.
    </template>

    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#voice"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Voice</a
              >
            </li>
            <li>
              <a
                href="#tone"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Tone</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>


    <template #content>
      <h2 class="display-6 ff-encodesans pt-4 pb-3" id="voice">Voice</h2>
      <p>
        Voice &ndash; the consistent and recognizable communication style in messaging &ndash;
        is intended to align with the UW style and brand, and in addition, is designed
        to optimize usability, accessibility and inclusivity. The recommended voice is&colon;
      </p>

      <!-- not sure if this heading situation is ok -->
          <h3 class="fs-6 fw-bold ff-encodesans">Conversational but professional</h3>
          <p>We communicate in a way that is easy to understand for a nontechnical audience &ndash;
            we write how people talk, as if we&apos;re having a conversation. We avoid language
            that's overly opinionated, humorous, or trendy.</p>

          <h3 class="fs-6 fw-bold ff-encodesans">Clear and concise</h3>
          <p>
            We look for the simplest way to communicate information, without unnecessary jargon.
          </p>

          <h3 class="fs-6 fw-bold ff-encodesans">Informative</h3>
          <p>
            We provide information to users when they need it, helping them avoid errors, and
            explaining the impact of actions they may take.
          </p>

          <h3 class="fs-6 fw-bold ff-encodesans">Empathetic and inclusive</h3>
          <p>
            We ensure that messages are easily understood by a wide and diverse audience.
            We maintain a warm and approachable demeanor, fostering respect and understanding.
          </p>


      <h2 class="display-6 ff-encodesans pt-4 pb-3" id="tone">Tone</h2>
      <p>
        If voice is our brand&apos;s personality, tone is the emotion expressed that conveys how users should interpret information. The right tone depends on the context, audience, and level of engagement required for effective communication.
      </p>

      <!-- not sure if we should reconfigure there isn't only one h3? -->
      <h3 class="fw-medium ff-encodesans">Tone map</h3>
      <p>Since tone will vary throughout a UI, this tone map demonstrates what tone could be used in the outlined use cases. Note that even this tone map is guidance and should be weighed with what the proper tone is for the context of use.
        <br>

      </p>

      <h4>Map axes</h4>
      <p>The axes of the tone map range from detailed to concise, and from casual (friendly, fun) to formal (serious authoritative)</p>


      <p class="text-danger">image needs to be inserted here</p>

      <!-- this doesn't look good/right -->
      <h4>Map description</h4>
      <p>Tone Map items described below for accessibility purposes. Range values: evenly split between two ends, somewhat, moderately, and very</p>

      <h5 class="fw-bold">Forms</h5>
      <ul>
        <li><strong>Labels:</strong> somewhat casual, somewhat concise</li>
        <li><strong>Empty states:</strong> moderately casual, somewhat detailed</li>
        <li><strong>Errors:</strong> moderately formal, moderately detailed</li>
        <li><strong>Placeholder text:</strong> somewhat formal, very concise</li>
        <li><strong>Form help &amp; feedback:</strong> moderately formal, somewhat concise</li>
      </ul>

      <h5 class="fw-bold">Workflow messaging</h5>
      <ul>
        <li><strong>Onboarding:</strong> moderately concise, very casual</li>
        <li><strong>Dialogs:</strong> evenly split between casual and formal, moderately concise</li>
        <li><strong>New feaure notices:</strong> very detailed, very casual</li>
      </ul>

      <h5 class="fw-bold">Academic messaging</h5>
      <ul>
        <li><strong>Journey/Academic guidance</strong> very casual, somewhat detailed</li>
        <li><strong>Academic processes:</strong> very formal, moderately detailed</li>
      </ul>

      <h5 class="fw-bold">System messaging</h5>
      <ul>
        <li><strong>Permissions or wrong URL error:</strong> moderately casual, somewhat concise</li>
        <li><strong>Server or system error:</strong> very formal, somewhat detailed</li>
      </ul>


      <h5 class="fw-bold">Situational/Semantic messaging</h5>
      <ul>
        <li><strong>Success messaging:</strong> moderately casual, very concise</li>
        <li><strong>Informational alerts:</strong> evenly split between casual and formal, moderately detailed</li>
        <li><strong>Warning alerts:</strong> moderately formal, somewhat detailed</li>
        <li><strong>Critical alerts:</strong> very formal, somewhat detailed</li>
      </ul>


      <!--
      <h3>Instructive (Frequently)</h3>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Convey information in a straightforward manner by providing clear
            and specific guidance.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>Click the "Submit" button to complete the registration.</p>
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use overly specific terms or any language that might
            cause confusion.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>"Error code: 410"</p>
            </div>
          </template>
        </UsageBlock>
      </div>

      <h3>Helpful (Occasionally)</h3>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Offering guidance, providing information, and encouraging
            individuals to reach out for further assistance.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>
                As you begin to consider what you want to major in, we recommend
                scheduling a meeting with your adviser to discuss your
                interests, goals, degree requirements and academic planning.
              </p>
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use overly dramatic or scary words for simple errors
          </template>
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>“Forbidden”, “Bad request”, “Not acceptable”</p>
            </div>
          </template>
        </UsageBlock>
      </div>

      <h3>Supportive (Rarely)</h3>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Acknowledge effort, progress, and completion</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>
                Congratulations! You have completed the registration process.
              </p>
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t refer to a simple action or complete step as a success
          </template>
          <template #preview>
            <div class="border rounded-3 p-3 bg-body-tertiary">
              <p>Great job! You're one step closer to completion.</p>
            </div>
          </template>
        </UsageBlock>
      </div>

      <p>
        Use of
        <a href="https://itconnect.uw.edu/work/inclusive-language-guide/"
          >UW-IT DEI approved words</a
        >. Also, optimized for a11y.
      </p>
      -->
    </template>
    <template #author>Cayla Snooke</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import UsageBlock from "@/components/UsageBlock.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsContentVoice",
  components: { Layout, UsageBlock, PageContents },
  data() {
    return {
      pageTitle: "Voice & Tone",
    };
  },
};
</script>
