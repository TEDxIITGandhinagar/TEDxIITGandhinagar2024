import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <section className="footer-class">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-sm-3">
                            <h4>About TEDx</h4>
                            <p className="footer-tedx">TEDx is a local, self-organized event that brings people together to share a TED-like experience.</p>
                        </div>
                        <div className="footer-col col-sm-3">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="https://www.youtube.com/user/tedxtalks" target="_blank" rel="noopener noreferrer">TEDx Talks</a></li>
                                <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event" target="_blank" rel="noopener noreferrer">Organize a TEDx Event</a></li>
                                <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/sponsors-finances/sponsors-partnerships/about-partnerships" target="_blank" rel="noopener noreferrer">Become a TEDx Partner</a></li>
                            </ul>
                        </div>
                        <div className="footer-col col-sm-3">
                            <h4>Follow Us</h4>
                            <div className="social-handles">
                                <div className="social-handles-margin facebook-hai">
                                    <div>
                                        <a href="https://www.facebook.com/TEDxIITGn" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    </div>
                                    <div>
                                        <a href="https://www.facebook.com/TEDxIITGn" target="_blank" rel="noopener noreferrer"><i className="fa-brands brands fa-facebook-f"></i></a>
                                    </div>
                                </div>
                                <div className="social-handles-margin linkedin-hai">
                                    <div>
                                        <a href="https://www.linkedin.com/company/tedxiitgandhinagar/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/company/tedxiitgandhinagar/" target="_blank" rel="noopener noreferrer"><i className="fa-brands brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="social-handles-margin instagram-hai">
                                    <div>
                                        <a href="https://www.instagram.com/tedx.iitgandhinagar/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </div>
                                    <div>
                                        <a href="https://www.instagram.com/tedx.iitgandhinagar/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands brands fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="social-handles-margin instagram-hai">
                                    <div>
                                        <a href="mailto:tedxiitgandhinagar@iitgn.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
                                    </div>
                                    <div>
                                        <a href="mailto:tedxiitgandhinagar@iitgn.ac.in" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa brands fa-envelope-o"></i></a>
                                    </div>
                                </div>
                                <div className="social-handles-margin instagram-hai">
                                    <div>
                                        <a href="https://www.youtube.com/@tedxiitgandhinagar" target="_blank" rel="noopener noreferrer">Youtube</a>
                                    </div>
                                    <div>
                                        <a href="https://www.youtube.com/@tedxiitgandhinagar" target="_blank" rel="noopener noreferrer"> <i className="fa-brands brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-col col-sm-3">
                            <h4>Contact</h4>
                            <ul>
                                <li>IIT Gandhinagar</li>
                                <li>Near Palaj</li>
                                <li>Gandhinagar, Gujarat, India - 382355</li>
                                <div className="contact-numbers" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <li style={{ display: 'inline' }}><a style={{ fontSize: '1.6rem' }} href="tel:9713440242">Yeeshu:+91 9713440242</a></li>
                                    <li style={{ display: 'inline' }}><a style={{ fontSize: '1.6rem' }} href="tel:8005499671">Shreya:+91 8005499671</a></li>
                                    <li style={{ display: 'inline' }}><a style={{ fontSize: '1.6rem' }} href="tel:8511216030">Dhairya:+91 8511216030</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright">© Copyright 2023 <span className="red-text">TED<sup>x</sup>IITGandhinagar</span> | This independent TED<sup>x</sup>event is operated under license from TED.</p>
            </footer>
        </section>
    );
}

export default Footer;
