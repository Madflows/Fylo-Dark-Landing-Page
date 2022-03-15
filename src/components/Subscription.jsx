import React from 'react'

function Subscription() {
    return (
        <div className='subscribe-container'>
            <div className="title">Get early access today</div>
            <div className="description">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</div>

            <form className='subscribe-form'>
                <input type="email" className='email-input' placeholder='email@example.com' autoComplete='email' />
                <input type="submit" className='cta-btn submit-input' value="Get Started For Free" />
            </form>
        </div>
    )
}

export default Subscription
