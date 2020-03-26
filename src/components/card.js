import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

const Card = ({projectName, projectDescription, imageName}) => {

  return (
    <div
      style={{
        height: 'auto',
        width: '500px',
        padding: '0 1.25rem',
      }}
    >
      <Img fluid={imageName} className="project-image"/>
      <h3
        style={{
          fontWeight: '400',
          margin: '1.5rem 0'
        }}  
      >{projectName}</h3>
      <p>{projectDescription}</p> 
    </div>
      
  )
 
}
 
export default Card;