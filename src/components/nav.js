import React from "react";
import logo from "../images/logo.png";
import logoNAme from "../images/logoName.png";


function Nav() {
    return(
        <nav>
            
            <ul className="navbar" type='none'>
                <div className="logo">
                <img src={logo} alt="logo" />
                <img src={logoNAme} alt="logoNAme"/>
                </div>
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/about" className="nav-link">Careers</a>
                </li>
                <li>
                    <a href="/work" className="nav-link active">How we work</a>
                </li>
                <li>
                    <a href="/testimonials" className="nav-link active">Testimonials</a>
                </li>
                <li>
                    <a href="/contact" className="nav-link active">Contact us</a>
                </li>
            </ul>
        </nav>

    )
}


export default Nav;