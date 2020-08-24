/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import nokti_manikura from "../assets/nokti_manikura.jpg"

export default ({ psi }) => {
  const isnotLargeatAll = useMediaQuery("(min-width: 760px)")
  const isMobile = useMediaQuery("(min-width: 450px)")
  const psiList = psi.map(({ pas }) => {
    const { id, excerpt } = pas
    const { name, image, slug } = pas.frontmatter
    return (
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
        <div style={{width: "100%", float: "right", height: "100%", 
        backgroundColor: "rgba(0,0,0,0.5)", color: "#fff"}}>
          <p style={{fontSize: "1.3em", marginTop: "20px", marginBottom: "20px", fontWeight: "600"}}>Manikura</p>
          
          <div style={{height: "100%", 
              color: "#fff", backgroundColor: "rgba(0,0,0,0.5)", width: "100%", margin: "auto"}}>
          <div style={{display: "inline-block", width: "50%"}}>
          <ul style={{fontSize: "0.55em", listStyleType: "none"}}>
            <li>Ugradnja noktiju dužina S: 250 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Ugradnja noktiju dužina M: 280 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Ugradnja noktiju dužina L: 300 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Nadopuna dužina S: 220 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Nadopuna dužina M: 250 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Nadopuna dužina L: 280 kn</li>

          </ul>
          </div>
          <div style={{display: "inline-block", width: "50%"}}>
          <ul style={{fontSize: "0.55em", listStyleType: "none"}}>
            <li>Trajni lak: 150 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Skidanje trajnog laka: 60 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Manikura clasic: 70 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Lakiranje običnim lakom: 30 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Popravak nokta: 30 kn</li>
            <hr style={{width: "70%", marginTop: "5px", marginBottom: "5px"}}></hr>
            <li>Produživanje nokta: 30 kn</li>
            
            
          </ul>
          </div>


        </div>

        </div>
      </div>
    )
  })

  return psiList
}
