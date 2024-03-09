import "./About.css";
import React, { useState, useEffect } from "react";

function About() {
    const [aboutTitle, setAboutTitle] = useState("About TED");
    const [aboutContent, setAboutContent] = useState("TED is a nonprofit organization...");
    const [imgPosition, setImgPosition] = useState('static'); // New state variable
    useEffect(() => {
        const s = window.skrollr.init();

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 1000) {
                setAboutTitle("About TEDx");
                setAboutContent("In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)");
            } else {
                setAboutTitle("About TED");
                setAboutContent("TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.");
            }

            if (scrollPosition > 1000 && scrollPosition < 2000) {
                setImgPosition('fixed');
            } else {
                setImgPosition('static');
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            s.destroy();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="about-container">
                <img className="img1" style={{ position: imgPosition }} src="Vector2.png"></img>
                <div className="info">
                    <div className="info-container">
                        <h1 data-600="opacity: 0;" data-1000="opacity: 10;" id="about">{aboutTitle}</h1>
                        <span data-600="opacity: 0;" data-1000="opacity: 10;" id="ted">{aboutContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;