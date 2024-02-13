import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/pages/index.module.scss"
import Card from "../components/Card/Card"
import ProjectCard from "../components/ProjectCard/ProjectCard"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Intro */}
      <section className={styles.section}>
        <div>
          <h1 style={{marginTop: 0}}>Hello there! <br/> I'm Teemu Silver</h1>
          <p>A self-taught software developer with <strong>7 years</strong> of <br /> programming as a hobbist under my belt.</p>
          <button>Get in touch</button>
        </div>
      </section>
      {/* Work Experience */}
      <section className={styles.section} data-direction="row">
        <div>
          <h1>Work Experience</h1>
          <p>This is some little speech about my work</p>
        </div>
      </section>
      {/* Tech */}
      <section className={styles.section} data-direction="row">
        <div className={styles.subSection}>
          <div>
          <h1>Tech</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sem vulputate tellus efficitur feugiat. Fusce aliquam efficitur euismod. Vivamus molestie malesuada turpis, eu eleifend sapien posuere a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed erat vel ex commodo posuere non nec enim. In scelerisque nulla sed orci euismod tempus. Ut eu varius.</p>
          </div>
          <button>See More</button>
        </div>
        <div className={styles.cardGrid}>
          {
            new Array(9).fill(0).map(() => <Card><p>Testing</p></Card>)
          }
        </div>
      </section>
      {/* Projects */}
      <section className={styles.section}>
        <h1>Projects</h1>
          <ProjectCard projects={[
            {
              name: "",
              title: "",
              imageSrc: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg",
              logoSrc: "",
              color: "red",
            },
            {
              name: "",
              title: "",
              imageSrc: "https://womensfitness.co.uk/wp-content/uploads/sites/3/2022/11/Shutterstock_1675475479.jpg",
              logoSrc: "",
              color: "blue",
            },
            {
              name: "",
              title: "",
              imageSrc: "https://images.ctfassets.net/mrop88jh71hl/1GlQXrW5HeOyJwrV1VCgYo/ba5e654988b6fb5823cf72e3e189239d/html-css-coding-languages-for-kids.jpg?w=1280&h=718&fl=progressive&q=100&fm=jpg",
              logoSrc: "",
              color: "green",
            }
          ]}/>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
