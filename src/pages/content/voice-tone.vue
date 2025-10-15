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
      <br /><br />
      Both voice and tone adhere to and follow the
      <a
        href="https://insideuwit.uw.edu/support-units/communications/brand-style-other-resources/uw-it-writing-style-guide/"
        >UW-IT Writing Style Guide</a
      >
      and the
      <a
        href="https://www.washington.edu/brand/guides/editorial-guide/#editorial-4"
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
      <h2 class="ff-encodesans pt-4 pb-3" id="voice">Voice</h2>
      <p>
        Voice - the consistent and recognizable communication style in messaging
        - is intended to align with the UW style and brand, and in addition, is
        designed to optimize usability, accessibility and inclusivity. The
        recommended voice is:
      </p>

      <p><strong>Conversational but professional </strong></p>
      <p>
        We communicate in a way that is easy to understand for a nontechnical
        audience - we write how people talk, as if we&rsquo;re having a
        conversation. We avoid language that's overly opinionated, humorous, or
        trendy.
      </p>
      <p><strong>Clear and concise</strong></p>
      <p>
        We look for the simplest way to communicate information, without
        unnecessary jargon.
      </p>
      <p><strong>Informative</strong></p>
      <p>
        We provide information to users when they need it, helping them avoid
        errors, and explaining the impact of actions they may take.
      </p>
      <p><strong>Empathetic and inclusive</strong></p>
      <p>
        We ensure that messages are easily understood by a wide and diverse
        audience. We maintain a warm and approachable demeanor, fostering
        respect and understanding.
      </p>

      <h2 id="tone">Tone</h2>
      <p>
        If voice is our brand&rsquo;s personality, tone is the emotion expressed
        that conveys how users should interpret information. The right tone
        depends on the context, audience, and level of engagement required for
        effective communication.
      </p>

      <h3>Tone Map</h3>
      <p>
        Since tone will vary throughout a UI, this tone map demonstrates what
        tone could be used in the outlined use cases. Note that even this tone
        map is guidance and should be weighed with what the proper tone is for
        the context of use.
      </p>

      <p><strong>Tone map axes are:</strong></p>
      <ul>
        <li>Ranging from detailed to concise</li>
        <li>
          Ranging from casual (friendly, fun) to formal (serious, authoritative)
        </li>
      </ul>

      <img src="/images/tone-map.png" class="image-fluid w-100 border" />

      <p>
        Tone Map items described below for accessibility purposes. Range values:
        evenly split between two ends, somewhat, moderately, and very
      </p>

      <p><strong>Forms</strong></p>
      <ul>
        <li><strong>Labels:</strong> somewhat casual, somewhat concise</li>
        <li>
          <strong>Empty states:</strong> moderately casual, somewhat detailed
        </li>
        <li><strong>Errors:</strong> moderately formal, moderately detailed</li>
        <li>
          <strong>Placeholder text:</strong> somewhat formal, very concise
        </li>
        <li>
          <strong>Form help &amp; feedback:</strong> moderately formal, somewhat
          concise
        </li>
      </ul>

      <p><strong>Workflow Messaging</strong></p>
      <ul>
        <li><strong>Onboarding:</strong> moderately concise, very casual</li>
        <li>
          <strong>Dialogs:</strong> evenly split between casual and formal,
          moderately concise
        </li>
        <li>
          <strong>New feature notices:</strong> very detailed, very casual
        </li>
      </ul>

      <p><strong>Academic Messaging</strong></p>
      <ul>
        <li>
          <strong>Journey/Academic guidance:</strong> very casual, somewhat
          detailed
        </li>
        <li>
          <strong>Academic processes:</strong> A very formal, moderately
          detailed
        </li>
      </ul>

      <p><strong>Systems Messaging</strong></p>
      <ul>
        <li>
          <strong>Permissions or wrong URL error:</strong> moderately casual,
          somewhat concise
        </li>
        <li>
          <strong>Server or system error:</strong> very formal, somewhat
          detailed
        </li>
      </ul>

      <p><strong>Situational/Semantic Messaging</strong></p>
      <ul>
        <li>
          <strong>Success messaging:</strong> moderately casual, very concise
        </li>
        <li>
          <strong>Informational alerts:</strong> evenly split between casual and
          formal, moderately detailed
        </li>
        <li>
          <strong>Warning alerts:</strong> moderately formal, somewhat detailed
        </li>
        <li>
          <strong>Critical alerts:</strong> very formal, somewhat detailed
        </li>
      </ul>
    </template>
    <template #author>Leila, Cayla, William</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import PageContents from "@/components/PageContents.vue";

export default {
  name: "DocsContentVoice",
  components: { Layout, PageContents },
  data() {
    return {
      pageTitle: "Voice & Tone",
    };
  },
};
</script>
