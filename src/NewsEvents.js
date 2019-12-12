import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NewsEvents(){


    return(
        <div className="background">

            <Navbar/>

            <div className="events-post-wrapper">

                <div className="event">

                    <div className="event-image">
                        <img src={require('./Electric Rail.jpg')} alt="Event Image"/>
                    </div>

                    <div className="event-info">
                        <div className="event-date">
                            <span>Tuesday</span>
                            <span>21st January 2020</span>
                        </div>
                        <h4>DTE Launch Event</h4>
                        <p className="event-description">This event signifies the official launch of the Decarbonising Transport through Electrification Network. More details to be released shortly.</p>
                        <a href="#" className="event-link">Link to event</a>
                    </div>

                </div>



            </div>

            <Footer/>

        </div>
    )
}