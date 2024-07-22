<template>
  <header>
    <TitleBar />
    <!-- <t class="TitleBarContents" id="Name">
      Ryan Lacey
    </t> -->
  </header>
  <main>
    <h1>A Brief Sumamary</h1>
    <article> Currently working in an AI/ML environment in Cork City,
      conducting data engineering, script development, validation and collection. Strong personal interest in software
      development and data engineering.
    </article>
    <h2>
      October 2023 – Present: Engineering Data Collection Project Co-Ordinator – Globetech
    </h2>
    <article>
      Contracted by a client of GlobeTech, tasked to assist research and development of existing AI/ML models. Client
      facing environment.
      Responsibilities include conducting data engineering tasks, project management, technical support and
      administration
      of the data collection process.
      Designed and implemented a Python script using the Pandas library into the data pipeline. This script cleans and
      compares expected data against actual data, transforming multiple datasets into fully usable sets for analysis and
      validation before passing them to the next stage. Created solely by me, many team members now use this script
      daily.
      My work is based in Cork for a large multinational tech company that competes with Samsung, Google, and Microsoft,
      though the client cannot be named due to confidentiality reasons.
    </article>
    <h2>March 2022 – August 2022: Front-End Software Developer – Teamwork Inc.
    </h2>
    <article>
      Frontend software engineer working on the teamwork web application using JavaScript and the VUE.js
      framework as well as SQL, CSS, Sass/Scss, and Tailwind manipulation.
      Operated in an agile work environment and participated in daily scrum meetings.
      Involved in the teamwork web application, designed for team, task, and project management,
      Fixed bugs and assisted the team with ongoing projects also contributed to production code.
    </article>
    <h2> May 2020 – August 2020: IT Support - Infosys</h2>
    <article>
      Technical support for end user customers of the UK phone provider, EE. Responsibilities included identifying
      issues and guiding customers through solutions as well as technical aspects such as rectifying service issues.
      Maintained high levels of customer care with personal customer follow-up, while ensuring daily quotas were
      achieved.
    </article>
  </main>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
export default {
  name: 'ExperiencePage',
  components: { TitleBar },
  created() {

  },
  data() {
    return {
    }
  },
  props: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

img {
  margin-top: 10%;
  width: 20%;

}
</style>
