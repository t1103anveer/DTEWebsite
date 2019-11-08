import React from 'react';


export  default class  Navbar extends  React.Component{


    render(){

        return(
            <div>
                <nav>
                    <div className="menu">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>

                    <ul>
                        <li><a href="#">Home</a></li>
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
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        )

    }

}