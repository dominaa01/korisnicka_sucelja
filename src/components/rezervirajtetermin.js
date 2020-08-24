/** @jsx jsx */
import { jsx } from "theme-ui"
import './layout.css'

const RezervirajteTermin = () => {
  return (
    <div style={{ width: "100%", display: "inline", marginLeft: "auto",
    marginRight: "auto" }}>
      <p style={{fontFamily: "Quicksand", fontSize: "1.6em", 
      textAlign: "center", fontWeight: "bold", color: "#542d7d"}}>Rezervirajte termin</p>
      <hr></hr>

      <form>
      <table className="contactTable" style={{width: "50%", marginRight: "auto", 
      marginLeft: "auto", fontFamily: "Quicksand", marginBottom: "50px"}} cellPadding="8px">
        <tr style={{paddingBottom: "20px"}}>
          <td style={{textAlign: "right"}}>
            Ime i prezime:
            </td>
          <td>
            <input type="text" required style={{fontWeight:"bold"}}className="inputContact"></input>
          </td>
        </tr>
        
        <tr>
          <td style={{textAlign: "right"}}>
            Usluga:
            </td>
          <td>
            <select className="inputContact" required style={{fontWeight:"bold"}}>
              <option>Ugradnja noktiju dužina S</option>
              <option>Ugradnja noktiju dužina M</option>
              <option>Ugradnja noktiju dužina L</option>
              <option>Nadopuna dužina S</option>
              <option>Nadopuna dužina M</option>
              <option>Nadopuna dužina L</option>
              <option>Trajni lak</option>
              <option>Skidanje trajnog laka</option>
              <option>Manikura clasic</option>
              <option>Lakiranje običnim lakom</option>
              <option>Popravak nokta</option>
              <option>Produživanje nokta</option>
              <option>Estetska pedikura</option>
              <option>Estetska pedikura sa trajnim lakom</option>
              <option>Medicinska pedikura</option>
              <option>Medicinska pedikura sa trajnim lakom</option>
              <option>Trajni lak na nogama</option>
              <option>Gel na nogama</option>
              <option>Obični lak na nogama</option>
              <option>French na nogama</option>
              <option>Skidanje gela/laka na nogama</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>
            Dodatak:
            </td>
          <td>
          <select className="inputContact" required style={{fontWeight:"bold"}}>
              <option>Ne želim dodatak</option>
              <option>Komplicirana pedikura</option>
              <option>Kurje oko</option>
              <option>Urasli nokat</option>
            </select>
          </td>
        </tr>            
        <tr>
          <td style={{textAlign: "right"}}>
            Datum termina:
            </td>
            <td>
              <input type="date" required className="inputContact"style={{fontWeight:"bold"}}></input>
            </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>
            Vrijeme termina:
            </td>
            <td>
              <input type="time" required className="inputContact"style={{fontWeight:"bold"}}></input>
            </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>
            Broj telefona:
            </td>
            <td>
              <input type="tel" required className="inputContact"style={{fontWeight:"bold"}}></input>
            </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>
            Email:
            </td>
            <td>
              <input type="email" required className="inputContact"style={{fontWeight:"bold"}}></input>
            </td>
        </tr>
        <tr>
          <td colSpan="2" style={{textAlign: "center"}}>
          <button type="submit" className="inputButton">Pošalji</button>
          </td>
        </tr>
      </table>
      </form>
    </div>
  )
}

export default RezervirajteTermin
