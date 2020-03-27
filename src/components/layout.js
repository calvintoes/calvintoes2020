/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState }from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Foot from "./Foot"
import Header from "./header"
import Burger from './Burger/Burger'
import Menu from './Menu/Menu'
import "./layout.css"

const Layout = ({ children }) => {

  const [open, setOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
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
  `);

  const images = data.allImageSharp.edges;

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        menuLinks={data.site.siteMetadata.menuLinks} 
      />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}/>
      </div>
      <div
        style={{
          // margin: `0 7.5rem`,
          padding: `0px 1.45rem`,
          paddingTop: 0,
        }}
      >
        
        <main>{children}</main>

      </div>
      <Foot icons={images} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
