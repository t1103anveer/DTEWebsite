import React from 'react';
import team1 from "./team-images/Slide1.PNG";
import team2 from "./team-images/Slide2.PNG";
import team3 from "./team-images/Slide3.PNG";
import team4 from "./team-images/Slide4.PNG";
import team5 from "./team-images/Slide5.PNG";
import team6 from "./team-images/Slide6.PNG";
import team7 from "./team-images/Slide7.PNG";
import team8 from "./team-images/Slide8.PNG";
import team9 from "./team-images/Slide9.PNG";
import team10 from "./team-images/Slide10.PNG";
import team11 from "./team-images/Slide11.PNG";
import team12 from "./team-images/Slide12.PNG";
import team13 from "./team-images/Slide13.PNG";
import team14 from "./team-images/Slide14.PNG";
import team15 from "./team-images/Slide15.PNG";
import team16 from "./team-images/Slide16.PNG";


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
                            <a className="profile-link" href={team1} data-lightbox="team1">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card2">
                            <h5 className="team-name">Jonathan Mark Preston</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team2} data-lightbox="team2">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card3">
                            <h5 className="team-name">Abderrahmane Haddad</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team3} data-lightbox="team3">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card4">
                            <h5 className="team-name">Craig Peter Lawson</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team4} data-lightbox="team4">View profile</a>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.4">
                        <div className="cardd col-lg-3 card5">
                            <h5 className="team-name">Antonios Tsourdos</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team5} data-lightbox="team5">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card6">
                            <h5 className="team-name">Howard Smith</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team6} data-lightbox="team6">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card7">
                            <h5 className="team-name">Jun Liang</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team7} data-lightbox="team7">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card8">
                            <h5 className="team-name">Omer Rana</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team8} data-lightbox="team8">View profile</a>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.4">
                        <div className="cardd col-lg-3 card9">
                            <h5 className="team-name">Patrick Chi-Kwong Luk</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team9} data-lightbox="team9">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card10">
                            <h5 className="team-name">Pietro Tricoli</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team10} data-lightbox="team10">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card11">
                            <h5 className="team-name">Phillip Morgan</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team11} data-lightbox="team11">View profile</a>
                        </div>
                        <div className="cardd col-lg-3 card12">
                            <h5 className="team-name">Xibo Yuan</h5>
                            <p className="profile-title">Co-Investigator</p>
                            <a className="profile-link" href={team12} data-lightbox="team12">View profile</a>
                        </div>
                    </div>
                        <div className="row wow fadeInUp" data-wow-delay="0.4">
                            <div className="cardd col-lg-3 card13">
                                <h5 className="team-name">Carol Featherston</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href={team13} data-lightbox="team13">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card14">
                                <h5 className="team-name">Clive Roberts</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href={team14} data-lightbox="team14">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card15">
                                <h5 className="team-name">Georgina Santos</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href={team15} data-lightbox="team15">View profile</a>
                            </div>
                            <div className="cardd col-lg-3 card16">
                                <h5 className="team-name">Dimitrios Potoglou</h5>
                                <p className="profile-title">Co-Investigator</p>
                                <a className="profile-link" href={team16} data-lightbox="team16">View profile</a>
                            </div>
                    </div>

                </div>
            </div>
            <div className="sponsors wow fadeInRight" data-wow-delay="0.3s">
                <img src={require('./Sponsors.png')} alt="Sponsors"/>
            </div>
        </div>
    )
}