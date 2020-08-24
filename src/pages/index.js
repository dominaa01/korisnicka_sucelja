/** @jsx jsx */
import Layout from "../components/layout"
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import Salon from "../components/salon"
import "../components/image-gallery.css"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "../components/netlify-identity.css"
import naslovna from "../assets/naslovna.png"


const IndexPage = ({ data }) => {
  const identity = "https://modest-goodall-3c77be.netlify.com"
  return (
    <Layout>
      <IdentityContextProvider url={identity}>
        <SEO title="Nail Studio Flex" />
        <div style={{
          textAlign: "center",
          backgroundImage: `url(${naslovna})`,
          backgroundColor: "#000000",
          height: "350px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPositionY: "-95px",
          marginTop: "-15px",
          borderBottom: "2px solid #542D7D"
        }}>
        </div>
        <Salon />
       
      </IdentityContextProvider>
    </Layout>
  )
}

export default IndexPage
