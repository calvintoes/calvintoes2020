import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from './Card';

const CardLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allImageSharp.edges
  // console.log("images: ", images)

  return ( 
    <>
      <div
        style={{
          margin: '0 5.25rem'
        }}
      >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[2].node.fluid}
        />
      </div>
    </>
   );
}
 
export default CardLayout;