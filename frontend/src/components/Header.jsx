import React from 'react'
import '../App.css';
import logo from '../images/logo.png'
import human from '../images/human.jfif'
function Header() {
  return (
    <div id="header">
        <img src={logo} alt="" id="logo"/>
        <h3>Good Morning, Abhay!</h3>
        <div id="input-box">
            <input type="text" id="search" placeholder='Search'/>
            <img src={human} alt="" id="dummy"/>
        </div>
    </div>
  )
}

export default Header