import React from 'react'

const Payments = () => {
    return (
        <div className='payments'>
            Process payment
            <a to="/reset-password">Reset password</a>
            <a to="/sign-in">Sign In</a>
            <a to="/sign-up">Sign Up</a>
        </div>
    )
}

export default Payments