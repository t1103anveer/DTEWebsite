import React from 'react';
import "./index.css";
import Navbar from './Navbar';
import Hero from './Hero';
import WorkStreams from './WorkStreams';
import OurTeam from './OurTeam';
import Footer from './Footer';
import Introduction from './Introduction';
import $ from "jquery"
import WOW from "wowjs/dist/wow.js";
import "bootstrap/dist/css/bootstrap.css";


class Home extends  React.Component {


    componentDidMount() {
        $(document).scroll(function () {
            var $nav = $(".nav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });

        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    &&
                    window.location.hostname === this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    render() {
        return (

            <div className="background">
                <Navbar/>
                <Hero/>
                <Introduction/>
                <WorkStreams/>
                <OurTeam/>
                <Footer/>
            </div>

        );
    }
}

export default Home;
