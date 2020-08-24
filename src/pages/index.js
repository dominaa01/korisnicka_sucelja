/** @jsx jsx */
//import { Link } from "gatsby"

// ne triba jer cemo dodat u layout: import Navigation from "../components/navigation"
//importamo layout
import Layout from "../components/layout"
import { jsx } from "theme-ui"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ImageGallery from "react-image-gallery"
import Sigurna from "../components/sigurna"
import "../components/image-gallery.css"
import BlogExcerpt from "../components/blog-excerpt"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "../components/netlify-identity.css"
import naslovna from "../assets/naslovna.png"


const IndexPage = ({ data }) => {
  const posts = data.second.posts
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(min-width: 650px)")
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
        <Sigurna />
       
      </IdentityContextProvider>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    first: allFile(
      filter: { absolutePath: { regex: "//content/background/" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    second: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fileAbsolutePath: { regex: "//content/blog//" } }
    ) {
      posts: edges {
        post: node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`