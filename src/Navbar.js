import React from 'react';
import $ from "jquery";


export  default class  Navbar extends  React.Component{

    componentDidMount() {

        $("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
        });

        $("ul li").click(function() {
            $(this).find('ul').slideToggle();
        });

        $(window).resize(function() {
            if($(window).width() > 768) {
                $("ul").removeAttr('style');
            }
        });
    }

    render(){

        return(
            <div>
                <nav>
                    <div className="menu">
                        <i className="fa fa-bars"></i>
                    </div>

                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Home#workstreams">Work Streams </a>
                            <ul>
                                <li><a href="#">Vehicles and Associated Technologies</a></li>
                                <li><a href="#">Electricity as a Transport Fuel</a></li>
                                <li><a href="#">Information and Energy Flow</a></li>
                                <li><a href="#">PESTEL Analysis</a></li>
                            </ul>
                        </li>
                        <li><a href="/Home#ourteam">Our Team</a></li>
                        <li><a href="/BoardMembers">Advisory Board Members</a></li>
                        <li><a href="/NewsEvents">News & Events</a></li>
                        <li><a href="#">Deliverables</a>
                            <ul>
                                <li><a href="#" >Outputs</a></li>
                            </ul>
                        </li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        )

    }

}