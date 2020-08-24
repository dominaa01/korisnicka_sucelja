/** @jsx jsx */
import { Header, jsx } from "theme-ui"
//import Logo from "./logo"
import NavigationLinks from "./NavigationLinks"

const Navigation = ({ menuItems }) => {
  //const menus= menuItems.map(({link, text}) => (
  // <NavigationLink  to={link}>{text}</NavigationLink>
  //  ))

  //  return <Header sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  //      <Logo/>
  //      {menus}
  // </Header>
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

//problem each child... unique key... je ode u komponenti i bila bi sporija stranica
//svaki child mora imat jedinstveni property koji se zove key, trebamo dodat key element, a to su nam li
//key moze bit link jer je jedinstven
//nav element kod navigationa
