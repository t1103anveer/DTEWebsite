import React from 'react';
import $ from "jquery";
import "lightbox2/src/css/lightbox.css";
import "lightbox2/src/js/lightbox";
import team1 from "./team1.jpg";

export default function OurTeam() {



    return(

        <div id="ourteam">
            <div className="ourTeam-wrapper">
                <div className="title wow fadeInUp" data-wow-delay="0.25">
                    <h1>Our Team</h1>
                </div>

                <div className="team-table">
                    <div className="row wow fadeInUp" data-wow-delay="0.4">
                        <div className="cardd col-lg-3 card1">
                            <h5 className="team-name">Liana Mirela Cipcigan</h5>
                            <p className="profile-title">Principle Investigator</p>
                            <a className="profile-link" href="annie-spratt-uvMYpVdiqlU-unsplash.png" data-lightbox="team1">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card2">
                            <h5 className="team-name">Jonathan Mark Preston</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card3">
                            <h5 className="team-name">Abderrahmane Haddad</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team1} data-lightbox="image-1">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card4">
                            <h5 className="team-name">Craig Peter Lawson</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.4">
                        <div className="cardd col-lg-3 card5">
                            <h5 className="team-name">Antonios Tsourdos</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card6">
                            <h5 className="team-name">Howard Smith</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card7">
                            <h5 className="team-name">Jun Liang</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card8">
                            <h5 className="team-name">Omer Rana</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.4">
                        <div className="cardd col-lg-3 card9">
                            <h5 className="team-name">Patrick Chi-Kwong Luk</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card10">
                            <h5 className="team-name">Pietro Tricoli</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card11">
                            <h5 className="team-name">Phillip Morgan</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card12">
                            <h5 className="team-name">Xibo Yuan</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href="#">View profile</a>
                        </div>
                    </div>
                        <div className="row wow fadeInUp" data-wow-delay="0.4">
                            <div className="cardd col-lg-3 card13">
                                <h5 className="team-name">Carol Featherston</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href="#">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card14">
                                <h5 className="team-name">Clive Roberts</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href="#">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card15">
                                <h5 className="team-name">Georgina Santos</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href="#">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card16">
                                <h5 className="team-name">Dimitrios Potoglou</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href="#">View profile</a>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}