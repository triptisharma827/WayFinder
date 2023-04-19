import React from "react";

function Footer(){
    return (
        <section id="footer">
            <div>
        
        <div className="footer container">
            <div className="row">
                <div className="col-md-4"><div className="logo">
                    <img src="images/logo.png" alt="logo" />
                    <img src="images/logoName.png" alt="logoNAme"/>
            </div>
            </div>
            <div className="center col-md-4"><p>Find me on social media:
            </p>
            <div className="social">
                <a href="https://www.linkedin.com/in/tripti--sharma/" target="blank"><img className="social-icon" src="images/linkedin.png" /></a>
                <a href="https://linktr.ee/triptisharmaa" target="blank"><img className="social-icon" src="images/linktree.png" /></a>
                <a href="https://github.com/triptisharma827" target="blank"><img className="social-icon" src="images/github-logo.png" /></a>
            </div>
            </div>
            <div className="right col-md-4"><p style={{color:"#FAB438"}}>I'm Always Happy To Help!</p>
            <p>triptisharma827@gmail.com</p>
            </div>
            </div>
        </div>
        <hr style={{backgroundColor:"#fff"}}></hr>
        <div className="copyRight container">
            <p className="copyright">Copyright © 2023 Tripti Sharma</p>
        </div>

    </div>
        </section>
    )
}


export default Footer;