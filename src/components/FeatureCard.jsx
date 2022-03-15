import React from 'react'

function FeatureCard(props) {
    return (
        <div className='card'>
           <img src={props.image} alt="feature" /> 
           <div className="card-title">{props.title}</div>
           <div className="card-description">{props.description}</div>
        </div>
    )
}

export default FeatureCard
