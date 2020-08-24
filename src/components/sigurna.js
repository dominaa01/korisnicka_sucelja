/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import salon from "../assets/walk-in-salon.jpg"

const Sigurna = () => {
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(max-width: 900px,min-width:600px)")
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px -8px 20px -8px",
        padding: isLarge ? "30px 0 30px 0" : "40px 0 10px 0",
      }}
    >
      <p
        style={{
          color: "#78758E",
          fontSize: isLarge ? "25px" : "23px ",
          textAlign: "center",
        }}
      >
        
      </p>
      <h2
        style={{
          color: "#280439",
          fontSize: isLarge ? "35px" : "33px ",
          marginTop: "-20px",
          textAlign: "center",
          fontFamily: "Quicksand"
        }}
      >
        DOBRODOŠLI U NAŠ SALON!
        <hr style={{color: "280439",width: "100%", marginTop: "5px", marginBottom: "5px"}}></hr>
      </h2>
      <p
        style={{
          fontFamily: "Quicksand",
          fontSize: isLarge ? "20px" : "18px ",
          textAlign: "center",
          marginBottom: "25px",
          letterSpacing: "1px",
          lineHeight: "1.8",
          width: "70%",
          margin: "auto",
          textAlign: "justify",
          textAlignLast: "center",
          paddingBottom: "30px",
          color: "#525252"
        }}
      >
         
         Nudimo veliki izbor usluga koje će oduševiti svakoga. Svojim stilom, radom, dodajući dašak glamura iskusnih profesionalaca naši radovi su prepoznatljivi. Luksuznim i naprednim trendovima pomićemo granice očekivanoga i time tretmani postaju zanimljiva i ugodna iskustva.

Novitet, kreativnost, strast - sve su to karakteristike koje posjedujemo uz ljubazno osoblje.

Naravno, naša vrhunska umjetnost noktiju osigurava da se klijenti vraćaju iznova. 


      </p>

    <img src={salon} alt="salon" />

      <p
        style={{
          fontFamily: "Quicksand",
          fontSize: isLarge ? "20px" : "18px ",
          textAlign: "center",
          color: "#525252",
          letterSpacing: "1px",
          lineHeight: "1.8",
          width: "70%",
          margin: "auto",
          textAlign: "justify",
          textAlignLast: "center",
          marginTop: "30px"
        }}
      >
         
       Mi vjerujemo da su nokti modni dodatak u kojem svaka dama uživa, a naša misija je da njihovu viziju pretvorimo u stvarnost. Prepustite se u ruke naših profesionalaca s povjerenjem i osjećajte se jedinstvenom.


      </p>
    </div>
  )
}

export default Sigurna
