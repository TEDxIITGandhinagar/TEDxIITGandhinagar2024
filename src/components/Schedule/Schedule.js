import React from 'react';
import './schedule.css';

function Schedule() {
    return (
        <div style={{ backgroundColor: '#1c1c1c' }}>
            <h2 className="heading"><span className="red-text">Programme </span>Schedule</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <a href="#" className="timeline timeline-right">
                            <div className="timeline-icon intial"><img className="fa-icon"
                                src="Assests\img\speakers-images\Reema-Nanavaty.webp" alt="" /></div>
                            <div className="timeline-content content-right">
                                <h3 className="title">Seeking inspiration from your own life</h3>
                                <h3 className="title">11: 30 - 11:45 AM</h3>
                                <p className="description">
                                    Reema Nanavaty
                                </p>
                                <p className="designation">
                                    Social worker Director,SEWA
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline timeline-left">
                            <div className="timeline-icon"><img className="fa-icon"
                                src="Assests\img\speakers-images\Nitin-Aggarwal.webp" /></div>
                            <div className="timeline-content content-left">
                                <h3 className="title">Artificiality of Intelligence</h3>
                                <h3 className="title">11:55 - 12:10 PM</h3>
                                <p className="description">
                                    Nitin Aggarwal
                                </p>
                                <p className="designation">
                                    Head of Cloud AI Services, Google India
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline timeline-right">
                            <div className="timeline-icon"><img className="fa-icon"
                                src="Assests\img\speakers-images\Anurag-Chauhan.webp" /></div>
                            <div className="timeline-content content-right">
                                <h3 className="title">Menstrual Taboo</h3>
                                <h3 className="title">1:00 - 1:15 PM</h3>
                                <p className="description">
                                    Anurag Chauhan
                                </p>
                                <p className="designation">
                                    Social Worker Founder
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline timeline-left">
                            <div className="timeline-icon"><img className="fa-icon"
                                src="Assests\img\speakers-images\Amitabha_Singh.jpg" /></div>
                            <div className="timeline-content content-left">
                                <h3 className="title">The rise of OTT</h3>
                                <h3 className="title">1:25 - 1:40 PM</h3>
                                <p className="description">
                                    Amitabha Singh
                                </p>
                                <p className="designation">
                                    Cinematographer and Producer
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline timeline-right">
                            <div className="timeline-icon"><img className="fa-icon"
                                src="Assests\img\speakers-images\Akshay-Singhal.webp" /></div>
                            <div className="timeline-content content-right">
                                <h3 className="title">The Talent Roadblock in India's EV Race</h3>
                                <h3 className="title">1:50 - 2:05 PM</h3>
                                <p className="description">
                                    Akshay Singhal
                                </p>
                                <p className="designation">
                                    Founder & CEO, Log9 Materials
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <section className="map-time">
                <h2 className="heading"><span className="red-text">Venue </span>and Time</h2>

                <div className="map">
                    <h3 >Venue: Jibaben Patel Memorial Auditorium ,IIT Gandhinagar</h3>
                    <h3>Date: February 26th, 2023</h3>
                    <h3>Start Time: 11 AM</h3>
                    <h3>Break: 12:20 - 1:00 PM</h3>
                    <h3>End Time: 3:00 PM</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58674.55852630597!2d72.64798041507593!3d23.200842332610822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b10360b0d7f%3A0xf6e108d2d8f029ac!2sJibaben%20Patel%20Memorial%20Auditorium!5e0!3m2!1sen!2sin!4v1677131943060!5m2!1sen!2sin"
                        width="600" height="450" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Schedule;