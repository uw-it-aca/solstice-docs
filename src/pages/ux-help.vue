<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse a
        neque non voluptas blanditiis saepe, tempora laudantium necessitatibus
        cum hic nobis libero delectus ullam alias facilis est provident. Quae.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>
            If you are a member of the UW community (student, staff, or faculty)
            and are looking for some professional guidance on:
          </p>
          <ul>
            <li>Design decisions or design process</li>
            <li>Accessibility accommodation</li>
            <li>UW branding guidelines</li>
          </ul>
          <p>the below resources are here to help.</p>

          <SHeading level="2"
            >User Experience & Design Thinking Community of Practice</SHeading
          >
          <p>
            <a
              href="http://mailman12.u.washington.edu/mailman/listinfo/ux_designthinking/"
              >Join our community of practice</a
            >
            to learn about and user experience design methods and best
            practices. Together we will discuss and think critically about a
            range of UX and design thinking topics (e.g. research methods,
            user-centered design in agile development, interface design, visual
            design and style).
          </p>

          <p>
            <a
              href="http://mailman12.u.washington.edu/mailman/listinfo/ux_designthinking/"
              >Sign up for the mailing list</a
            >
            to join the conversation and to stay abreast of meeting times and
            topics.
          </p>
          <ul>
            <li>Leads: William Washington</li>
            <li>Meetings: Once a quarter, location and time TBD</li>
            <li>Contact: ux_designthinking@uw.edu</li>
          </ul>

          <SHeading level="2">Accessibility Reviews</SHeading>
          <p>
            The Accessible Technology center offers FREE Accessibility
            consultations & evaluations - "Explore with Hadi" - to anyone
            affiliated with the UW. These are casual, friendly & informative.
          </p>
          <ul>
            <li>Meetings: Every second Thursday, 9-10am</li>
            <li>Location: Access Technology Center (MGH 064D)</li>
            <li>Contact: ux_designthinking@uw.edu</li>
          </ul>
          <p>
            <a href="http://www.washington.edu/accessibility/events/"
              >UW Accessibility resources.</a
            >
          </p>

          <SHeading level="2">Branding Guidelines</SHeading>
          <p>
            Use these best practices, templates, tools and guidelines to
            incorporate the brand into your materials.
          </p>
          <p>
            <a href="https://www.washington.edu/brand/">Get UW Branding Help</a>
          </p>
        </div>
      </div>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      BCard,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "UX Design Help",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: override layout pageTitle prop
      document.title = this.appName;

      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
