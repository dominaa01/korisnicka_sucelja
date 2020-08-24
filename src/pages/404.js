import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Stranica nije pronađena</h1>
    <p>Pokušajte ponovno.</p>
  </Layout>
)

export default NotFoundPage
