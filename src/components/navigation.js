/** @jsx jsx */
import { Header, jsx } from "theme-ui"
import NavigationLinks from "./NavigationLinks"

const Navigation = ({ menuItems }) => {
  return (
    <Header sx={{ justifyContent: "center", alignContent: "center", fontFamily: 'Quicksand' }}>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Bilbo&display=swap" rel="stylesheet" />
      <nav sx={{ display: "inline-block" }}>
        <NavigationLinks menuItems={menuItems} />
      </nav>
    </Header>
  )
}

export default Navigation
