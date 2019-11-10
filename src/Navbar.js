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
                        <li><a href="#">Work Streams </a>
                            <ul>
                                <li><a href="#">Project 1</a></li>
                                <li><a href="#">Project 2</a></li>
                                <li><a href="#">Project 3</a></li>
                                <li><a href="#">Project 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Advisory Board Members</a></li>
                        <li><a href="#">News & Events</a></li>
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