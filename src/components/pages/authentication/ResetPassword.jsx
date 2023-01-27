import React from 'react'
import { Link } from "react-router-dom"

const ResetPassword = () => {
    return (
        <div className='reset-password'>
            Reset Password Page<br />
            <Link to="/sign-in">Sign In</Link><br />
            <Link to="/sign-up">Sign Up</Link><br />
        </div>
    )
}

export default ResetPassword