import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/pages/index.module.scss"

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
        <p>Here are gonna be some boxes</p>
      </section>
      {/* Tech */}
      <section className={styles.section}>
        <h1>Tech</h1>
        <button>See More</button>
      </section>
      {/* Projects */}
      <section className={styles.section}>
        <h1>Projects</h1>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
