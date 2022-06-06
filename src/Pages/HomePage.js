import React from "react";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Mostofa Kamal.</span>
        </h1>
        <p className="h-sub-text">
          I'm a web designer and web developer. I work with front end and back
          end development. I take pride in all that I do and in the long-term
          relationships I’ve fostered in the process. I firmly believe that hard
          work eventually pays off, and I know that each day brings me closer to
          reaching my goals. Explore my portfolio, and feel free to get in touch
          with any questions.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100036697402595"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a href="https://github.com/mostofa247" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-mostofa-kamal-0884b11aa/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} href="" className="icon yt" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
