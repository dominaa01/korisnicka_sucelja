import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const PozadinskaSlika = ({ naziv }) => {
  const isLarge = useMediaQuery("(min-width: 700px)")
  const isNotLarge = useMediaQuery("(min-width: 500px)")
  const IsSmall = useMediaQuery("(min-width: 380px)")
  return (
    null
  )
}

export default PozadinskaSlika
