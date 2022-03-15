import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'

function SocialContainer() {
    return (
        <ul className='social-container'>
            <li className='social-icon'>
                <img src={facebook} alt="facebook" />
            </li>
            <li className='social-icon'>
                <img src={twitter} alt="twitter" />
            </li>
            <li className='social-icon'>
                <img src={instagram} alt="instagram" />
            </li>
        </ul>
    )
}

export default SocialContainer
