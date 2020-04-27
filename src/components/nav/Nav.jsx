import React from 'react'
import styles from './Nav.module.css'
import logo from '../../img/logo/logo.png'
import logo2 from '../../img/logo/covidlogo.png'

const Nav = () => {
    return(
        <div className = {styles.container}>
            
            <a href=''> <img className= {styles.logo} src={logo2} alt="logo" /></a>

         </div>
    )
}





export default Nav;