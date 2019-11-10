import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactUs(){

    return(
        <div>
            <Navbar/>
            <div className="contact-wrapper">
                <div className="contact-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-intro">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="contact-cards">
                    <div className="contact-one">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">someemail@example.com</p>
                        <p className="contact-phone">01345678976</p>
                    </div>
                    <div className="contact-two">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">someemail@example.com</p>
                        <p className="contact-phone">01345678976</p>
                    </div>
                    <div className="contact-three">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">someemail@example.com</p>
                        <p className="contact-phone">01345678976</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}