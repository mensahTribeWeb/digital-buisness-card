import React from "react";
// import NickPro from "https://nickmensahportfolio.com/";
import Nick from "../img/nickMensah.png";
import email from "../img/mail.png";
import linkedIn from "../img/linkedin.png";


export default function Info() {
  return(
    <div className="info">
      <img src={Nick}alt=" Nick Mensah" />
      <h1 className="info--name">Nick Mensah</h1>
      <h2 className="info--title">Java Engineer</h2>
      <h3 info--website>
        <a href="https://nickmensahportfolio.com/">NickMensah.website</a>
      </h3>

      <div className="info--btn">
      <a href="mailto:nick.d.mensah@gmail.com">
        <button className="info--btn--email  info--btn--btn" type="email">
          <img className="info--btn--email--icon icon" src={email} alt="" />
          Email
        </button>
        </a>
        <a href="https://www.linkedin.com/in/nicholas-d-mensah/">
        <button className="info--btn--linkedin info--btn--btn" >
           <img className="info--btn--linkedin--icon icon" src={linkedIn} alt="" />
           LinkedIn
        </button>
        </a>  
      </div>
      
    </div>
  );
}