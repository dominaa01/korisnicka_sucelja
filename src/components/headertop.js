/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import React from "react"
import "@reach/tabs/styles.css"
import "@reach/dialog"
import "@reach/visually-hidden"
import { Link } from "gatsby"


const Headertop = () => {
  const isLarge = useMediaQuery("(min-width: 700px)")
  const [dialog, setDialog] = React.useState(false)
  const identity = useIdentityContext()
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  return (
    <div style={isLarge ? style1 : style2}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Link to={`/`} style={{ textAlign: "center", 
        fontSize: "1.7em", color: "#280439", fontFamily: 'Quicksand', 
        verticalAlign: "middle", textDecoration: "none"  }}>
          <p style={{textAlign: "center", marginBottom: 0}}>
            NAIL STUDIO
          </p>
          
          <p style={{fontFamily: "Bilbo", fontWeight: "600", 
          fontSize: "1.5em", marginTop: 0, marginBottom: "10px",color:"#542d7d"}}>FLEX</p>
        </Link>
      </div>
      <div>
        
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => console.log("hello ", user.user_metadata)}
        onSignup={user => console.log("welcome ", user.user_metadata)}
        onLogout={() => console.log("bye ", name)}
      />
    </div>
  )
}

export default Headertop

const style1 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "2px solid #542D7D",
}

const style2 = {
  marginTop: "-10px",
  display: "grid",
  justifyItems: "center",
  borderBottom: "1px solid #78758E",
  marginRight: "-8px",
  marginLeft: "-8px",
}
