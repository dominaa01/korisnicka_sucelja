import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"
import RezervirajteTermin from "../components/rezervirajtetermin"

const rezervacija = () => {
  return (
    <Layout>
      <SEO title="Rezervacija" />
      <PozadinskaSlika naziv={"Rezervacija"}/>
      <RezervirajteTermin/>
    </Layout>
  )
}

export default rezervacija
