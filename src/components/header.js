import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#151515`,
      marginBottom: `10.25rem`,
    }}
  >
    <div
      style={{
        margin: `0 5rem`,
        padding: `1.75rem 1.0875rem`,
      }}
    >
      <nav>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: 'inline-block',
            float: 'left'
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      
        <ul style={{ display: 'inline-block', float: 'right', padding: '0.75rem 0' }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `0 1rem`,
                display: 'inline',
                fontFamily: `Libre Franklin, sans-serif`,
              }}
            >
              <Link style={{ color: `white`, textDecoration: `none` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
