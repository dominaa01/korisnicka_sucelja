import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"

const prijava = () => {
  return (
    <Layout>
      <SEO title="Prijava" />
      <PozadinskaSlika naziv={"Prijava"} />
      <div style={{width: "70%", marginRight: "auto", marginLeft: "auto", marginBottom: "30px"}}>
        <div style={{width: "45%", 
        display: "inline-block", padding: "20px"}}>
          <div style={{border: "2px solid #542D7D",backgroundColor:"white"}}>
          <p style={{
            fontFamily: "Quicksand", fontSize: "1.6em", marginLeft: "10px",
            fontWeight: "bold", color: "#542d7d", textAlign: "center"
          }}>Prijavite se</p>
          <table className="contactTable" style={{
            width: "100%", marginRight: "0",
            marginLeft: "auto", fontFamily: "Quicksand", marginBottom: "100px",paddingTop:"50px"
          }} cellPadding="8px">
            <tr style={{ paddingBottom: "20px", alignContent:"center"}}>
              <td style={{ textAlign: "right" }}>
                Email:
            </td>
              <td>
                <input type="email" className="inputContact"></input>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                Zaporka:
            </td>
              <td>
                <input type="password" className="inputContact"></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button type="submit" style={{backgroundColor:"",marginTop:"20px"}}className="inputButton">Prijava</button>
              </td>
            </tr>
          </table>
          </div>
        </div>
        <div style={{width: "45%", 
        display: "inline-block", padding: "20px"}}>
          <div style={{border: "2px solid #542D7D", backgroundColor:"white"}}>
          <p style={{
            fontFamily: "Quicksand", fontSize: "1.6em", marginLeft: "10px",
            fontWeight: "bold", color: "#542d7d", textAlign: "center"
          }}>Registrirajte se</p>
          <table className="contactTable" style={{
            width: "100%", marginRight: "auto",
            marginLeft: "0", fontFamily: "Quicksand", marginBottom: "50px"
          }} cellPadding="8px">
            <tr style={{ paddingBottom: "20px" }}>
              <td style={{ textAlign: "right" }}>
                Korisničko ime:
            </td>
              <td>
                <input type="email" className="inputContact"></input>
              </td>
            </tr>
            <tr style={{ paddingBottom: "20px" }}>
              <td style={{ textAlign: "right" }}>
                Email:
            </td>
              <td>
                <input type="email" className="inputContact"></input>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                Zaporka:
            </td>
              <td>
                <input type="password" className="inputContact"></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button type="submit" style={{marginTop:"20px"}}className="inputButton">Prijava</button>
              </td>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default prijava
