import React from "react";
import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="item1">
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Shaun Tuscano. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/shaun-tuscano"
                    target="_blank"
                    className="item3"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/shaun-tuscano-a623771a1"
                    target="_blank"
                    className="item4"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;