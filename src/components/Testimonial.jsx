import React from 'react'
import TestimonyCard from './TestimonyCard'
import satish from '../images/profile-1.jpg'
import bruce from '../images/profile-2.jpg'
import iva from '../images/profile-3.jpg'
import Subscription from './Subscription'

function Testimonial() {
    return (
        <div className='testimonial-section'>
            <TestimonyCard 
                name="Satish Patel"
                image={satish}
            />
            <TestimonyCard 
                name="Bruce McKenzie"
                image={bruce}
            />
            <TestimonyCard 
                name="Iva Boyd"
                image={iva}
            />

            <Subscription />
        </div>
    )
}

export default Testimonial
