import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid
} from '@material-ui/core'
import Img from "gatsby-image";
import './Experience.css'

const ExperienceLayout = () => {
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
  const images = data.allImageSharp.edges;

  return ( 
    <>
      <Grid container className="experience-wrapper">
        <Grid item xs={12} sm={6}>
          <div className="experience-card">
            <Img fluid={images[1].node.fluid} />
            <h3
              style={{
                fontWeight: '400',
                marginTop: '1rem'
              }}  
            >IBM</h3>
            <p>Front End Developer Intern</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="experience-card">
            <Img fluid={images[2].node.fluid} />
            <h3
              style={{
                fontWeight: '400',
                marginTop: '1rem'
              }}  
            >Inspirave</h3>
            <p>UI/UX Developer</p>
          </div>
        </Grid>
      </Grid>
    </>
   );
}
 
export default ExperienceLayout;