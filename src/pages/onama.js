import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutus"
import PozadinskaSlika from "../components/pozadinskaslika"

const onama = () => {
  return (
    <Layout>
      <SEO title="Info"/>
      <PozadinskaSlika naziv={"Info"} />
      <About/>
    </Layout>
  )
}

export default onama
