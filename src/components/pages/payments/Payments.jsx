import React from 'react'
import { Link } from "react-router-dom"

const Payments = () => {
    return (
        <div className='payments'>
            Process payment<br/>
            <Link to="/reset-password">Reset password</Link><br />
            <Link to="/sign-in">Sign In</Link><br />
            <Link to="/sign-up">Sign Up</Link><br />
        </div>
    )
}

export default Payments