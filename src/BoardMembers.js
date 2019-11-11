import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BoardMembers(){

    return(
        <div className="background">
            <Navbar/>

            <div className="boardmembers-wrapper">
                <div className="boardmembers-header">
                    <div className="boardmembers-title wow fadeInUp" data-wow-delay="0.25">
                        <h1>Advisory Board Members</h1>
                    </div>
                </div>
                <div className="board-members">
                    <div className="board-member wow fadeInUp" data-wow-delay="0.3">
                        <p className="boardmember-name">John Wick</p>
                        <p className="boardmember-position">Executive Top Board CEO Member Network Engineer</p>
                        <p className="boardmember-details.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="board-member wow fadeInUp" data-wow-delay="0.35">
                        <p className="boardmember-name">John Wick</p>
                        <p className="boardmember-position">Executive Top Board CEO Member Network Engineer</p>
                        <p className="boardmember-details.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="board-member wow fadeInUp" data-wow-delay="0.4">
                        <p className="boardmember-name">John Wick</p>
                        <p className="boardmember-position">Executive Top Board CEO Member Network Engineer</p>
                        <p className="boardmember-details.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="board-member wow fadeInUp" data-wow-delay="0.4">
                        <p className="boardmember-name">John Wick</p>
                        <p className="boardmember-position">Executive Top Board CEO Member Network Engineer</p>
                        <p className="boardmember-details.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="board-member wow fadeInUp" data-wow-delay="0.4">
                        <p className="boardmember-name">John Wick</p>
                        <p className="boardmember-position">Executive Top Board CEO Member Network Engineer</p>
                        <p className="boardmember-details.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}