/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const BlogLink = ({ ...prop }) => (
  <Link
    {...prop}
    sx={{
      display: "inline-block",
      p: 3,
      color: "#406b62",
      backgroundColor: "gray.2",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "medium",
      lineHeight: "body",
      letterSpacing: "tight",
    }}
  />
)

const BlogPrevious = ({ ...prop }) => (
  <div
    {...prop}
    sx={{ color: "#9AD1C4", width: ["100%", "100%"], textDecoration: "none" }}
  />
)

const BlogNext = ({ ...prop }) => (
  <div
    {...prop}
    sx={{
      color: "#9AD1C4",
      width: ["100%", "100%"],
      marginTop: [2, 0],
      textAlign: "left",
    }}
  />
)

const BlogNav = ({ ...prop }) => (
  <nav
    {...prop}
    sx={{
      color: "#9AD1C4",
      display: ["block", "flex"],
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      mt: 4,
    }}
  />
)

BlogNav.Link = BlogLink
BlogNav.Previous = BlogPrevious
BlogNav.Next = BlogNext

export default BlogNav
