/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import Layout from "../components/layout"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import UdomiExcerpt from "../components/udomi-excerpt"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import nokti_manikura from "../assets/nokti_manikura.jpg"


const Udomljavanje = ({
  pageContext,
  data: {
    allMdx: { psi },
  },
}) => {
  const isLarge = useMediaQuery("(min-width: 1090px)")
  const isnotLargeatAll = useMediaQuery("(min-width: 680px)")
  const isMobile = useMediaQuery("(max-width: 360px)")
  const { currentPage, numofPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numofPages
  const previousPage =
    currentPage - 1 === 1 ? "/udomi/" : `/udomi/${(currentPage - 1).toString()}`
  const nextPage = `/udomi/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <SEO title="Usluge" />
      <div style={{
        marginTop: "20px"
      }}>
        <div>
          <div style={{
            textAlign: "center",
            backgroundImage: `url(${nokti_manikura})`,
            backgroundColor: "#000000",
            minHeight: "320px",
            width: "70%",
            margin: "auto",
            marginBottom: "20px",
            backgroundSize: "cover",
            backgroundPositionY: "-440px",
            fontSize: "2em",
            fontFamily: 'Quicksand'

          }}>
            <div style={{
              width: "100%", float: "right", height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)", color: "#fff"
            }}>
              <p style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "20px", fontWeight: "600" }}>Manikura</p>

              <div style={{
                height: "100%",
                color: "#fff", backgroundColor: "rgba(0,0,0,0.5)", width: "100%", margin: "auto"
              }}>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <ul style={{ fontSize: "0.55em", listStyleType: "none" }}>
                    <li>Ugradnja noktiju dužina S: 250 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Ugradnja noktiju dužina M: 280 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Ugradnja noktiju dužina L: 300 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Nadopuna dužina S: 220 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Nadopuna dužina M: 250 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Nadopuna dužina L: 280 kn</li>

                  </ul>
                </div>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <ul style={{ fontSize: "0.55em", listStyleType: "none" }}>
                    <li>Trajni lak: 150 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Skidanje trajnog laka: 60 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Manikura clasic: 70 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Lakiranje običnim lakom: 30 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Popravak nokta: 30 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Produživanje nokta: 30 kn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div>
          <div style={{
            textAlign: "center",
            backgroundImage: `url(${nokti_manikura})`,
            backgroundColor: "#000000",
            minHeight: "320px",
            width: "70%",
            margin: "auto",
            marginBottom: "20px",
            backgroundSize: "cover",
            backgroundPositionY: "-440px",
            fontSize: "2em",
            fontFamily: 'Quicksand'

          }}>
            <div style={{
              width: "100%", float: "right", height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)", color: "#fff"
            }}>
              <p style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "20px", fontWeight: "600" }}>Pedikura</p>

              <div style={{
                height: "100%",
                color: "#fff", backgroundColor: "rgba(0,0,0,0.5)", width: "100%", margin: "auto"
              }}>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <ul style={{ fontSize: "0.55em", listStyleType: "none" }}>
                    <li>Estetska pedikura: 150 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Estetska pedikura sa trajnim lakom: 180 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Medicinska pedikura: 180 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Medicinska pedikura sa trajnim lakom: 230 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Trajni lak: 150 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Gel: 200 kn</li>

                  </ul>
                </div>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <ul style={{ fontSize: "0.55em", listStyleType: "none" }}>
                    <li>Francuska manikura: 140 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Lakiranje običnim lakom: 30 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Skidanje gela/laka: 70 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Komplicirana pedikura: +30 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Kurje oko: +30 kn</li>
                    <hr style={{ width: "70%", marginTop: "5px", marginBottom: "5px" }}></hr>
                    <li>Urasli nokat: +60 kn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Udomljavanje

export const query = graphql`
  query Udomljavanje($skip: Int, $limit: Int) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//content/udomi//" } }
      limit: $limit
      skip: $skip
    ) {
      psi: edges {
        pas: node {
          id
          frontmatter {
            name
            slug
            image {
              childImageSharp {
                fixed(height: 290, width: 269) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`
