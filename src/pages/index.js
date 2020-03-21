import React from "react"
import { Link } from "gatsby"
import CardLayout from '../components/CardLayout'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{fontFamily: 'Montserrat', fontSize: 24, fontWeight: 400}}
    >
      Hello, I'm Calvin
    </h1>
    
    <h3
      style={{
        fontFamily: 'Montserrat', 
        fontSize: 36, 
        fontWeight: 400, 
        wordSpacing: '0.25rem',
        letterSpacing: '0.08rem' 
      }}
      >
      Front End Engineer and photographer.<br /> 
      Currently on last semester at RIT. <br />
      Going to be an IBM Intern this Summer.
    </h3>
    
    <section style={{marginTop: '20.25rem'}}>
      <h2
        style={{
          marginBottom: '5.5rem'
        }}
      >
        Projects
      </h2>
      <CardLayout />
    </section>
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
