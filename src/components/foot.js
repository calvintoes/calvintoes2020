import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";

const Foot = ({siteFooter}) => (
  <footer className="#contact">
    <div
      style={{
        width: 1260,
        backgroundColor: '#323232',
        height: '2px',
        margin: '0 auto',
        marginTop: '6.5rem'
      }}
      >
    </div>
    <p  
      style={{
        margin: '2.25rem auto',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: 300,
        textAlign: 'center'
      }}
      >
        Hey.
      </p>
      <div>
        <img src="../images/envelope.svg" />
      </div>
  </footer>
)
  
Foot.propTypes = {
  siteFooter: PropTypes.string 
}

Foot.defaultTypes = {
  siteFooter: ``,
}

 
export default Foot;