// Burger.js
import React from 'react';
import './Burger.css'


const Burger = ({open, setOpen}) => {
  return (
    <button id="burger-menu" open={open} onClick={() => setOpen(!open)}>
      <div className="burger-stem" />
      <div className="burger-stem" />
      <div className="burger-stem" />
    </button>
  )
}

export default Burger;