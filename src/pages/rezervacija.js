import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"
import Help from "../components/helpus"

const rezervacija = () => {
  return (
    <Layout>
      <SEO title="Rezervacija" />
      <PozadinskaSlika naziv={"Rezervacija"}/>
      <Help/>
    </Layout>
  )
}

export default rezervacija
