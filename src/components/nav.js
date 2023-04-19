import React from "react";


function Nav() {
    return(
        <nav>
            
            <ul className="navbar" type='none'>
                <div className="logo">
                <img src="images/logo.png" alt="logo" />
                <img src="images/logoName.png" alt="logoNAme"/>
                </div>
                <li>
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="#careers" className="nav-link">Careers</a>
                </li>
                <li>
                    <a href="#about" className="nav-link active">How we work</a>
                </li>
                <li>
                    <a href="#testimonials" className="nav-link active">Testimonials</a>
                </li>
                <li>
                    <a href="#newsletter" className="nav-link active">Contact us</a>
                </li>
            </ul>
        </nav>

    )
}


export default Nav;