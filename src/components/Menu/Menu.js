import React from 'react';
import './Menu.css'

const Menu = ({open, setOpen}) => {

  const isOpen = open ? 'translateX(0)' : 'translateX(-100%)'
  return (
    <nav id="menu" open={open} style={{transform: isOpen}}>
      <a className="mobile-menu" href="/">
        Portfolio
      </a>
      <a className="mobile-menu" href="/">
        Photography
        </a>
      <a className="mobile-menu" href="/">
        Contact
        </a>
      <a className="mobile-menu" href="/">
        Resume
      </a>
    </nav>
  )
}
export default Menu;