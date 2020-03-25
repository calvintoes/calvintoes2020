import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from './Card';
import {
  Container,
  Grid
} from '@material-ui/core'
import './CardLayout.css'

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
    <Grid container className="cardLayout-wrapper">
      <Grid item className="card" >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[2].node.fluid}
        />
      </Grid>

      <Grid item className="card"
        style={{
          marginTop: '8.5rem'
        }}
      >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[2].node.fluid}
        />
      </Grid>
    </Grid>

    <Grid container className="cardLayout-wrapper">
      <Grid item className="card">
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[2].node.fluid}
        />
      </Grid>

      <Grid item className="card"
        style={{
          marginTop: '8rem'
        }}
      >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[2].node.fluid}
        />
      </Grid>
    </Grid>
    </>
   );
}
 
export default CardLayout;