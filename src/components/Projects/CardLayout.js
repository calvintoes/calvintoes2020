import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from './Card';
import {
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
  return ( 
    <>
    <Grid container className="cardLayout-wrapper">
      <Grid item className="card" xs={12} sm={6} >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[0].node.fluid}
        />
      </Grid>

      <Grid item className="card" xs={12} sm={6}>
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[0].node.fluid}
        />
      </Grid>
    </Grid>

    <Grid container className="cardLayout-wrapper">
      <Grid item className="card" xs={12} sm={6}>
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[0].node.fluid}
        />
      </Grid>

      <Grid item className="card" xs={12} sm={6} >
        <Card
          projectName="Test"
          projectDescription="This is a test description"
          imageName={images[0].node.fluid}
        />
      </Grid>
    </Grid>
    </>
   );
}
 
export default CardLayout;