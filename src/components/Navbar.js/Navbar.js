//COMPONENTS
import React from 'react'

// HELPER
import { NavbarData } from './NavbarData'
import "../App.css"


function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbarList">
                {NavbarData.map((val, key) => {
                    return (
                        <li key={key} className="row" onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon"> {val.icon}</div>
                            <div id="title"> {val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar