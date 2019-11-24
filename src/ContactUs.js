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
                    <p>If you require any further information regarding the DTE Network, please email the network manager at the email address provided below.</p>
                </div>
                <div className="contact-cards">
                    <div className="contacts wow fadeInLeft" data-wow-delay="0.65">
                        <p className="contact-name">Professor Omer Rana</p>
                        <p className="contact-email">RanaOF@cardiff.ac.uk</p>
                        <p className="contact-phone">+44 29208 75542</p>
                    </div>
                    <div className="contacts wow fadeInLeft" data-wow-delay="0.85">
                        <p className="contact-name">Liana Cipcigan</p>
                        <p className="contact-email">cipciganlm@cardiff.ac.uk</p>
                        <p className="contact-phone">+44 29208 70665</p>
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