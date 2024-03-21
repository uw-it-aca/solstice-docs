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
        The Voice and Tone establish a uniform and easily identifiable
        communication style, promoting a cohesive user experience across
        various interfaces. It's not just about conveying information; it's
        about fostering a connection with users through consistent language,
        style, and attitude. Solstice’s Voice and Tone encapsulates our unique
        personality and identity, fostering consistency and coherence, and
        contributes to a seamless and engaging user experience.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Voice</h2>
      <p>
        The voice of Solstice serves as the articulate and consistent
        expression of our character. It ensures a recognizable communication
        style across various design elements. Through Solstice’s voice, we aim
        to convey a story that resonates with our audience and reinforces our
        identity. Solstice's voice is:
      </p>
<!--
      <h3>Professional and formal</h3>
      <P>Avoid language that's overly opinionated, humorous, or trendy</P>

      <h3>Understandable and concise</h3>
      <p>
        Look for the simplest way to communicate information, without
        unnecessary jargon
      </p>

      <h3>Informative and clear</h3>
      <p>
        Explain the impact clearly, ensuring that the message is easily
        understood by the audience.
      </p>

      <h3>Empathetic and inclusive</h3>
      <p>
        Maintain a warm and approachable demeanor, fostering a respectful and
        understanding environment
      </p>
-->
      <ul>
        <li>
         <strong>Professional and formal</strong>
         <p>Avoid language that's overly opinionated, humorous, or trendy</p>
        </li>
        <li>
          <strong>Understandable and concise</strong>
           <p>
           Look for the simplest way to communicate information, without
           unnecessary jargon
           </p>
        </li>
        <li>
          <strong>Informative and clear</strong>
          <p>
          Explain the impact clearly, ensuring that the message is easily
          understood by the audience.
          </p>
        </li>
        <li>
          <strong>Empathetic and inclusive</strong>
        </li>
        <p>
        Maintain a warm and approachable demeanor, fostering a respectful and
        understanding environment
        </p>
      </ul>

      <h2>Tone</h2>
      <p>
        If voice embodies our brand's personality, tone is the vehicle through
        which we articulate and embody that personality. The right tone depends
        on the context, audience, and the level of engagement and emotionality
        required for effective communication. Solstice’s tone should be:
      </p>

      <h3>Instructive (Frequently)</h3>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Convey information in a straightforward manner by providing clear
            and specific guidance.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-light">
              <img src="../../assets/images/voice-and-tone-1.png" width="500">
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use overly specific terms or any language that might
            cause confusion.</template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-light">
              <img src="../../assets/images/voice-and-tone-2.png" width="500">
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
            <div class="border rounded-3 p-3 bg-light">
               <img src="../../assets/images/voice-and-tone-3.png" width="500">
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t use overly dramatic or scary words for simple errors
            </template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-light">
              <img src="../../assets/images/voice-and-tone-4.png" width="500">
            </div>
          </template>
        </UsageBlock>
      </div>

      <h3>Supportive (Rarely)</h3>

      <div class="my-5">
        <UsageBlock>
          <template #text
            >Acknowledge effort, progress, and completion</template>
          <template #preview>
            <div class="border rounded-3 p-3 bg-light">
              <img src="../../assets/images/voice-and-tone-5.png" width="500">
            </div>
          </template>
        </UsageBlock>
        <UsageBlock variant="dont">
          <template #text
            >Don&rsquo;t refer to a simple action or complete step as a success
          </template
          >
          <template #preview>
            <div class="border rounded-3 p-3 bg-light">
              <img src="../../assets/images/voice-and-tone-6.png" width="500">
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
    </template>
    <template #author>tbd</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import UsageBlock from "@/components/UsageBlock.vue";

export default {
  name: "DocsContentVoice",
  components: { Layout, UsageBlock },
  data() {
    return {
      pageTitle: "Voice & Tone",
    };
  },
};
</script>
