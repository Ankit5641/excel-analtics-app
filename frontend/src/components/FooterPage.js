import React from "react";
import "../styles/FooterPage.css";
import BackButton from "../components/BackButton";

function FooterPage() {
  return (
    <div className="footerpage-container">
        <BackButton />
      <div className="footerpage-details">
        <b>Excel Work Project</b> &copy; {new Date().getFullYear()}<br />

        Designed by Ankit singh<br />

        Designed by Ankit Singh<br />
 7298f75f1daec5ea2135736faae278cdaf79332a
        Contact: <a href="ankitrajput5641@gmail.com">ankitrajput5641@gmail.com</a>
      </div>
    </div>
  );
}

export default FooterPage;
