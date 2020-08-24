/** @jsx jsx */
import { jsx } from "theme-ui"
import FooterIcon from "./footericon"
//import GoogleMap from "./googlemap"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Footer = () => {
  const isRowBased = useMediaQuery("(min-width: 300px)")
  return (
    <footer
      style={{
        backgroundColor: "#CBB4E4",
        padding: "50px",
        margin: "0 -2px 0 -2px",
      }}
    >
      <div style={isRowBased ? styles1 : styles2}>
        <FooterIcon />
       
      </div>
      <div style={{textAlign: "center", 
            marginTop: "20px",  fontFamily: 'Quicksand', fontSize: "1em"}}>
        <p>
        <span style={{display: "block", marginBottom: "10px", fontSize: "1.2em"}}>Nail Studio <b>FLEX</b></span>
        <span style={{display: "block", marginBottom: "5px",}}>Vukovarska 10, 21000</span> 
        <span style={{display: "block", marginBottom: "5px",}}>Mob: <a href="tel:+385917265348">+385917265348</a></span> 
        <span style={{display: "block", marginBottom: "5px",}}>Tel: <a href="tel:+38521476133">+38521476133</a></span> 
        <span style={{display: "block", marginBottom: "5px",}}>Mail: <a href="mailto:nailstudioflex@gmail.com">nailstudioflex@gmail.com</a></span> 
        <span style={{display: "block"}}></span> 

        </p>
      </div>

      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          color: "#406b62",
          textAlign: "center",
        }}
      >
        
      </div>
    </footer>
  )
}

export default Footer

const styles1 = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}

const styles2 = {
  display: "grid",
  justifyItems: "center",
  gridRowGap: "20px",
}
