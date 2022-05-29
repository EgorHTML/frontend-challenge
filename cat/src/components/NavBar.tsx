import React from "react"
import {Link} from "react-router-dom"


const NavBar = () => {
    return ( <div className="nav__bar">
        <li><Link style={{color:"white"}} to="/">Все котики</Link></li>
        <li><Link style={{color:"white"}} to="/favoriteCats">Любимые котики</Link></li>
    </div> )
}

export default NavBar