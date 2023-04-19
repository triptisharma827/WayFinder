import React, { useState } from "react";
// import "./Newsletter.css";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <section id="newsletter">
      <div className="newsletter-box">
      <div className="newsletter-title">
        <img
          src="images/subscribe.png"
          className="image-heading"
          height={"30px"}
          alt="subscribe"
        />
      </div>
      <div className="newsletter-container">
        <div className="newsletter-image">
          <img src="images/pana.png" alt="Newsletter" width={"450px"} />
        </div>
        <div className="newsletter-form">
          <form action="https://formsubmit.co/triptisharma827@gmail.com" method="POST">
            <div className="form-row">
              <div className="form-column">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-column">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <button type="submit"  >Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Newsletter;
