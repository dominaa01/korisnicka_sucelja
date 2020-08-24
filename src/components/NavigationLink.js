/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"


const NavigationLink = ({ children, ...prop }) => {
  return (
    <Link
      {...prop}
      sx={{
        display: "inline-block",
        px: 3,
        minWidth: "170px",
        textAlign: "center",
        color: "#2A2D3C",
        fontWeight: "800", 
        textDecoration: "none",
        whiteSpace: "nowrap",
        letterSpacing: "2px",
        lineHeight: theme =>
          `calc(${theme.sizes.logo} - 4 * ${theme.sizes.navLinkBorder})`,
        borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          color: "#000000",
          backgroundColor: theme => `#CBB4E4`
        },
      }}
      activeStyle={{
        backgroundColor: `#5F0A87`,
        color: '#ffffff',
      }}
    >
      {children}
    </Link>
  )
}

export default NavigationLink
