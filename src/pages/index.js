import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const IndexPage = () => {
  return (
    <Layout pageTitle={"欢迎光临"}>
      <p>相遇就是缘分</p>
      <StaticImage
        alt="a logo"
        src="../images/coffee.svg"
        width={30}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="我是谁"/>
