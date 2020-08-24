/** @jsx jsx */
import { jsx } from "theme-ui"


const About = () => {
  return (
    <div style={{
      width: "60%", marginLeft: "auto", marginRight: "auto",
      padding: "30px", fontFamily: "Quicksand"
    }}>
      <div style={{ display: "inline-block", width: "50%", verticalAlign: "top" }}>
        <div style={{ textAlign: "right", marginRight: "20px" }}>
        <span style={{ display: "block", marginBottom: "15px", fontSize: "1.2em", textAlign: "right" }}>Nail Studio <b>FLEX</b></span>
        <span style={{ display: "block", marginBottom: "10px", textAlign: "right" }}>Vukovarska 10, 21000 Split</span>
        <span style={{ display: "block", marginBottom: "10px", textAlign: "right" }}>Mob: <a href="tel:+385917265348">+385917265348</a></span>
        <span style={{ display: "block", marginBottom: "10px", textAlign: "right" }}>Tel: <a href="tel:+38521476133">+38521476133</a></span>
        <span style={{ display: "block", marginBottom: "10px", textAlign: "right" }}>Mail: <a href="mailto:nailstudioflex@gmail.com">nailstudioflex@gmail.com</a></span>
        <span style={{ display: "block" }}></span>
        </div>
        
      </div>
      <div style={{ display: "inline-block", width: "50%" }}>
        <iframe 
          title="GoogleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.5322605805595!2d16.441948515001076!3d43.51209226956269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e065717deb3%3A0xcdbeeb2c90b5a336!2sVukovarska%20ul.%2010%2C%2021000%2C%20Split!5e0!3m2!1shr!2shr!4v1597947763544!5m2!1shr!2shr"
          width="400"
          height="200"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false">
        </iframe>
      </div>
    </div>
  )
}

export default About
