import React from 'react'

function TestimonyCard(props) {
    return (
        <div className='testiCard'>
            <div className="testimony">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</div>
            <div className="profile-section">
                <div className="profile-image">
                    <img src={props.image} alt="Some random human" />
                </div>
                <div className="profile-info">
                    <div className="name">{props.name}</div>
                    <div className="occupation">Founder & CEO, Huddle</div>
                </div>
            </div>
        </div>
    )
}

export default TestimonyCard
