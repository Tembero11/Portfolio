import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Hello from index</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
