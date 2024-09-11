<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <h1>Education</h1>

      <div id="tableContainer">
        <table class="highlights-table">
          <th id="mainHeading" colspan="2">Highlights</th>
          <tr>
            <th class="left-column">First Class Honours</th>
            <th>Second Class Honours</th>
          </tr>
          <tr>
            <td class="left-column">Introduction to programming - 80%</td>
            <td>Financial Strategy</td>
          </tr>
          <tr>
            <td class="left-column">Foundations of Computer Science I - 71%</td>
            <td>Advanced Programming with Java</td>
          </tr>
          <tr>
            <td class="left-column">Intermediate programming - 84%</td>
            <td>Software Enterprise Project</td>
          </tr>
          <tr>
            <td class="left-column">Economics of Managerial Decision Making - 71% </td>
            <td></td>
          </tr>
          <tr>
            <td class="left-column">Software Engineering - 74%</td>
            <td></td>
          </tr>
          <tr>
            <td class="left-column"> Team Software Project - 70%</td>
            <td></td>
          </tr>
        </table>
      </div>

      <h2>DCU 2018-2019</h2>

      <article>
        I spent a year studying marketing innovation and technology at Dublin City University, during which time I
        studied
        modules such as modern technology, creativity and design, economics and general marketing modules. The course
        gave
        me
        an insight into consumerism and focused highly on the theory of “crossing the chasm”. This theory focuses on
        bringing
        modern products from the early adopters and smaller niche markets to a more mainstream widespread consumer base.
        The
        economics side of this course allowed for a smooth transition into Software Entrepreneurship at UCC
      </article>
      <h2>UCC 2019-2023 Overview</h2>
      <article>
        My time at University College Cork consisted of four years, with the first year being pure mainstream computer
        science
        and the remaining three years branched off into “software entrepreneurship.

        <div id="uccFirstHalf" class="yearSummaries">
          <div class="yearSummary card">
            <h3>Year 1</h3>
            <h4>“CS1117 - Introduction to programming”</h4>
            During my first year at UCC, a large emphasis was placed on learning Python and coding practices in general
            which
            were thought through this language in the module CS1117. I am proud to have ended the year with a first
            class
            honours grade of 80% in this module.

            <h4>“CS1112 - Foundations of Computer Science I” </h4>
            Covered the logic and problem-solving aspects behind coding.
            This module emphasized how to approach and design programs and software structuring. In this module, a first
            class
            honours grade of 71% was achieved.
          </div>
          <div class="yearSummary card">
            <h3>Year 2</h3>

            <h4>CS2513 - Intermediate programming</h4> built on the foundations learnt in first years CS1117, and
            teaching
            concepts such as object-oriented programming with assessment consisting of both a written examination and
            assessment on software I created. In this module, a first class honours of 84% was achieved.

            <h4>EC3008 - Financial Strategy </h4>
            After branching out into software entrepreneurship, I took on additional modules outside of CS, while still
            learning the essential and core computing fundamentals and furthering my coding skills. Due to a scheduling
            error,
            the course had to undertake a third year finance module, this was unexpected and challenging however the
            module
            proved interesting and provided an insight into the challenges and business and software product will face,
            the
            risks associated with products and how to strategize and orchestrate decisions based on the risk and cost
            benefits
            associated. A second class honours was achieved in this module.

            <h4>EC2200 - Economics of Managerial Decision Making</h4>
            EC2200 focused on microeconomics, in other words, team management, time management, and strategic decision
            making
            in a more human capital orientation as opposed to a purely financial approach. In other work team skills,
            people
            management and organization were instilled. A first class honours grade of 71% was achieved in this module.
          </div>
        </div>

        <div id="uccSecondHalf">
          <div class="yearSummary card">
            <h3>Year 3</h3>
            <h4>CS3500 - Software Engineering</h4>
            CS3500 focused on large scale projects and the approach that should be taken, for example agile
            methodologies
            and a strong emphasis on group work and group projects. Outlining the requirements of a project and
            modeling
            software before and during development were key points as well as project management techniques and
            documentation. A first class honours grade of 74% was achieved in this module.

            <h4>CS3318 - Advanced Programming with Java</h4>
            CS3318 was a java oriented module, focusing on the advanced aspects of Java programming and Java project
            development. The UCC book of modules outlines the module content as the following: “Java project management,
            including developing projects (using an IDE), structuring projects (using packages), project documentation
            (with
            JavaDoc), testing (with JUnit), version control (with GIT), and deployment. Advanced Java including
            defensive
            programming (with exceptions) and event-driven software and graphical user interfaces.” A second class
            honours
            was achieved in this module.

            <h4>CS3305 - Team Software Project</h4>
            CS3305 was a software assignment graded on the following criteria:
            Total Marks 200
            * Continuous Assessment 200 Marks
            * Project - 1 x software development project analysis and design documentation, 60 marks (60 Marks)
            * Project - 1 x software system implementation and test suite, 100 marks (100 Marks)
            * Presentation - 1 x presentation of the software system, 40 mark (40 Marks)
            A first class honours grade of 70% was achieved in this module.
          </div>
          <div class="yearSummary card">
            <h3>Year 4</h3>
            <h4>CS4503 - Software Enterprise Project</h4>
            A large portion of final year was spent on CS4503, this was my dissertation and consisted of designing an
            application which was conceptualized and proposed by myself. The application “SafeWay” was a personal safety
            iOS
            application, the front and backend was created by myself as well as the UI and UX. The implementation and
            design
            process can be found <a
              href="https://github.com/ryanlacey20/SafeWay/blob/main/Report%20on%20SafeWay-%20A%20Personal%20Safety%20App.pdf">
              here</a>
            which
            links to the full dissertation on GitHub. The code can also be found <a
              href="https://github.com/ryanlacey20/SafeWay"> here.</a>

            A second class honors was achieved for the dissertation, narrowly missing a first class honors by 2%
            <a href="https://github.com/ryanlacey20/SafeWay/blob/main/Report%20on%20SafeWay-%20A%20Personal%20Safety%20App.pdf"
              id="safeWayImageContainer">
              <img src="../../Resources/safeWayCover.jpg" id="safeWayCover">
            </a>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
export default {
  name: 'EducationPage',
  components: { TitleBar },
  created() {

  }
}
</script>

<style lang="scss" scoped>
main {
  margin-left: 5%;
  margin-right: 5%;
}

article {
  text-align: start;
}

#gradPhoto {
  width: 48%;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 90%;
}

#uccFirstHalf {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

#uccSecondHalf {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.textSection {
  margin-right: 2%;
}

img {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.textSection {
  width: 50%;
  margin-right: 2%;
}

#tableContainer {
  display: flex;
  justify-content: center;
}

.highlights-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.highlights-table th {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
}

.highlights-table td {
  padding: 16px;
  border-top: 1px solid #f2f2f2;
}

.highlights-table tbody tr:last-child td {
  border-bottom: 1px solid #f2f2f2;
}

.highlights-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.highlights-table tbody tr:nth-child(odd) {
  background-color: #f7f7f7;
}

.highlights-table td.left-column {
  width: 50%;
}

.card {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}

.card h3 {
  margin-top: 0;
}

.card h4 {
  margin-top: 10px;
}

.year-summary {
  margin-bottom: 20px;
}

.year-summary:last-child {
  margin-bottom: 0;
}



#safeWayImageContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

#safeWayCover {
  width: auto;
  max-height: 400px;
  border-radius: 15px;
}
</style>
