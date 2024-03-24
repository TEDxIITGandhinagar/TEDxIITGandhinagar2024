import React from 'react';
import './Ticket.css'

function Tickets() {
    const handleChoice1Click = () => {
        window.open('https://docs.google.com/forms/d/1g1oAozWB4gR4MjhqmSCaa9gsh47N4-dzYqgNx28m9Nw/viewform?ts=65fdd29b&edit_requested=true', '_blank');
    };

    const handleChoice2Click = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScKjAhZo50A28L9VF0T2CHd9lM_pmur6qk7QjxoSuXRULHK2Q/viewform?vc=0&c=0&w=1&flr=0', '_blank');
    };

    return (
        <div className='form-link'>
            <video autoPlay loop muted className='background-video'>
                <source src='bg.mp4' type='video/mp4' />
            </video>
            <h1 className='heading1'>Welcome to <span id='tedd'>TEDx</span>IITGandhinagar 2024!</h1>
            <h1 className='heading2'>Date of the event : <span id='tedd'>April 7th(Sunday)</span> </h1>
            <h1 className='heading2'>Buy the Tickets now!</h1>
            <div className='choose'>
                <div className='comp portfolio-experiment'>
                    <a className='no-hover' onClick={handleChoice1Click}>
                        <span className="text">IIT Gandhinagar Community</span>
                        <span className="line -bottom"></span>
                    </a>
                </div>
                <div className='comp portfolio-experiment'>
                    <a className='no-hover' onClick={handleChoice2Click}>
                        <span className="text">External Community</span>
                        <span className="line -bottom"></span>
                    </a>
                </div>
            </div>
            <h1 className='heading3'>Click on the applicable button above to buy tickets</h1>
        </div>
    );
};

export default Tickets;
