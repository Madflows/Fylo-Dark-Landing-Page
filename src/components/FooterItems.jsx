import React from 'react'

function FooterItems(props) {
    return (
        <div className="footerItems">
            <div className='footer-icon'>
                <img src={props.icon} alt="icon" />
            </div>
            <p className='description'>{props.description}</p>
        </div>
    )
}

export default FooterItems
