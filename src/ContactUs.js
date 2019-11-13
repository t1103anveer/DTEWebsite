import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactUs(){

    return(
        <div className="background">
            <Navbar/>
            <div className="contact-wrapper">
                <div className="contact-title wow fadeInUp" data-wow-delay="0.25">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-intro wow  fadeInUp" data-wow-delay="0.45">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="contact-cards">
                    <div className="contacts wow fadeInLeft" data-wow-delay="0.65">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">someemail@example.com</p>
                        <p className="contact-phone">01345678976</p>
                    </div>
                    <div className="contacts wow fadeInLeft" data-wow-delay="0.85">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">someemail@example.com</p>
                        <p className="contact-phone">01345678976</p>
                    </div>
                    <div className="contacts wow fadeInLeft" data-wow-delay="1.05">
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