import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Deliverables(){

    return(
        <div className="background">

            <Navbar/>

            <div className="timeline-wrapper">

                <div className="entry left">
                <div className="entry-content">
                    <h2>2017</h2>
                    <p>Lorem ipsum..</p>
                </div>
            </div>
                <div className="entry right">
                    <div className="entry-content">
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="entry left">
                    <div className="entry-content">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="entry right">
                    <div className="entry-content">
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="entry left">
                    <div className="entry-content">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="entry right">
                    <div className="entry-content">
                        <h2>2016</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )


}