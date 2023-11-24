import NavBar from "../common/navbar";
import React from "react";
import introImg from "../assests/herobanner.jpg"
import { Link } from "react-router-dom";
import "./styles/homepage.css"
import Projects from "./Projects";
import Footer from "../common/Footer";

function Homepage() {
  return (
    <React.Fragment>

      <div>
        <NavBar active="home" />

        <div className="hero">
          <div className="mask">
            <img className="intro-img" src={introImg} alt="intro" />
          </div>

          <div className="content">
            <p>HI, I'M SHAUN TUSCANO.</p>
            <h1> A React Developer.</h1>
            <div>
              <a href="https://drive.google.com/file/d/13XdOtFStjbdlv6SiggXzo2jKvn8hcZi2/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer"> Resume</a>

              <Link to="/contact"
                className="btn btn-light">
                Contact
              </Link>

            </div>


          </div>

        </div>

        <Projects />
        <Footer />
      </div>

    </React.Fragment>
  );
}

export default Homepage;
