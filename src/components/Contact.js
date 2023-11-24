import Footer from "../common/Footer";
import NavBar from "../common/navbar";
import "./styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div >
            <NavBar active="contact" />
            <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-column">
                        <h2>Contact Details</h2>
                        <p>
                            <strong>Name:</strong> Shaun Tuscano
                        </p>
                        <p>
                            <strong>Phone:</strong> +91 9082908487
                        </p>
                        <p>
                            <strong>Email:</strong> Tuscanoshaun@gmail.com
                        </p>
                    </div>

                    <div className="social-column">
                        <h2>Connect with Me</h2>
                        <ul className="social-links">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/shaun-tuscano-a623771a1"
                                    target="_blank"
                                    // className="item4"
                                    rel="noreferrer noopener"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/shaun-tuscano"
                                    target="_blank"
                                    // className="item3"
                                    rel="noreferrer noopener"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/shaun_tuscano?igshid=MTk0NTkyODZkYg=="
                                    target="_blank"
                                    // className="item5"
                                    rel="noreferrer noopener"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            {/* Add more social links as needed */}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
