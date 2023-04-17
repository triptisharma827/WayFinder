import React from "react";

function Footer(){
    return (<div>
        
        <div className="footer container">
            <div className="row">
                <div className="col-md-4"><div className="logo">
                    <img src="images/logo.png" alt="logo" />
                    <img src="images/logoName.png" alt="logoNAme"/>
            </div>
            </div>
            <div className="center col-md-4"><p>Find us on social media:
            </p>
            <div className="social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            </div>
            <div className="right col-md-4"><p style={{color:"#FAB438"}}>We're Always Happy To Help!</p>
            <p>support@gmail.com</p>
            </div>
            </div>
        </div>
        <hr style={{backgroundColor:"#fff"}}></hr>
        <div className="copyRight container">
            <p className="copyright">Copyright © 2023 Tripti Sharma</p>
        </div>

    </div>)
}


export default Footer;