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
                            <span>Saturday</span>
                            <span>20th January 2020</span>
                        </div>
                        <h4>An Event Title</h4>
                        <p className="event-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href="#" className="event-link">Read More</a>
                    </div>

                </div>



            </div>

            <Footer/>

        </div>
    )
}