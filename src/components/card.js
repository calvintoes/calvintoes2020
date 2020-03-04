import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = ({projectName, projectDescription}) => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "cityscape.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} />
      <h3>{projectName}</h3>
      <p>{projectDescription}</p> 
    </div>
      
  )
 
}
 
export default Card;