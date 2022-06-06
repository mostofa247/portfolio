import React from "react";
import about from "../img/software engineer.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Mostofa Kamal</span>
        </h4>
        <p className="about-text">
          Here you can find out about my location,my skills and my services. I
          hope you will get details about me from this site. Thank you for
          visiting my web site.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Birth of date</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Md. Mostofa Kamal</p>
            <p>: 10 February,2002</p>
            <p>: Bangladeshi</p>
            <p>: Bengali, English</p>
            <p>: Alamdanga, Chuadanga</p>
            <p>: Bangladesh</p>
          </div>
        </div>
        <br></br>
        <a
          href="https://drive.google.com/file/d/14iGbxEBvSCp-j8_hUX3Lm2gA4RMIy-n0/view?usp=sharing"
          className="btn"
        >
          Download Cv
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
