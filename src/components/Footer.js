import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>About TEDx</h4>
                        <p className="footer-tedx">TEDx is a local, self-organized event that brings people together to share a TED-like experience.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="https://www.youtube.com/user/tedxtalks" target="_blank" rel="noopener noreferrer">TEDx Talks</a></li>
                            <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event" target="_blank" rel="noopener noreferrer">Organize a TEDx Event</a></li>
                            <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/sponsors-finances/sponsors-partnerships/about-partnerships" target="_blank" rel="noopener noreferrer">Become a TEDx Partner</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-handles">
                            <ul>
                                <li><a href="https://www.facebook.com/TEDxIITGn" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><a href="https://www.linkedin.com/company/tedxiitgandhinagar/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    <FontAwesomeIcon icon={faLinkedinIn} /></li>
                                <li><a href="https://www.instagram.com/tedx.iitgandhinagar/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <FontAwesomeIcon icon={faInstagram} /></li>
                                <li><a href="mailto:tedxiitgandhinagar@iitgn.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
                                    <FontAwesomeIcon icon={faEnvelope} /></li>
                                <li><a href="https://www.youtube.com/@tedxiitgandhinagar" target="_blank" rel="noopener noreferrer">Youtube</a>
                                    <FontAwesomeIcon icon={faYoutube} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>IIT Gandhinagar</li>
                            <li>Near Palaj</li>
                            <li>Gandhinagar, Gujarat, India - 382355</li>
                            <div className="contact-numbers">
                                <li><a href="tel:9713440242">Pratham Sharda: +91 9713440242</a></li>
                                <li><a href="tel:8005499671">Shreyans Jain: +91 8005499671</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">© Copyright 2024 <span className="red-text" style={{ color: 'red' }}>TED<sup>x</sup>IITGandhinagar</span> | This independent TED<sup>x</sup> event is operated under license from TED.</p>
        </footer>
    );
}

export default Footer;
