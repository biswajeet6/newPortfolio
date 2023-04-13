import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/biswajeet-jena-89b48b170/', '_blank')} />
          <EmailIcon onClick={() => window.open('https://mail.google.com/mail', '_blank')} />
          <GithubIcon onClick={() => window.open('https://github.com/biswajeet6')} />
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
}

export default Footer;
