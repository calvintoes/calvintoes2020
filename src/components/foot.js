import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Img from 'gatsby-image'
import {
  Grid,
  Container
} from '@material-ui/core';
import './Foot.css'

const Foot = ({siteFooter, icons}) => (
  <footer className="#contact" >
    <div
      style={{
        width: 1260,
        backgroundColor: '#323232',
        height: '2px',
        margin: '0 auto',
        marginTop: '6.5rem'
      }}
    / >
    
    <p  
      style={{
        margin: '2rem auto',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: 300,
        textAlign: 'center'
      }}
      >
        Hey.
    </p>
    <Container className="icon-wrapper">
      <Grid item>
        <div className="social-icons">
          <Img fluid={icons[5].node.fluid} />
          <Img fluid={icons[4].node.fluid} />
          <Img fluid={icons[3].node.fluid} />
        </div>
      </Grid>
    </Container>
    <p
      style={{
        textAlign: 'center',
        marginTop: '1.75rem',
        fontSize: 14,
        fontFamily: 'Montserrat',
      }}
    >
      © twenty twenty.
    </p>
  </footer>
)
  
Foot.propTypes = {
  siteFooter: PropTypes.string 
}

Foot.defaultTypes = {
  siteFooter: ``,
}

 
export default Foot;