import React from 'react'
import { Link } from "react-router-dom"

const SignIn = () => {
    return (
        <div className='sign-in'>
            Sign In Page<br />
            <Link to="/reset-password">Reset password</Link><br />
            <Link to="/sign-up">Sign Up</Link><br />
        </div>
    )
}

export default SignIn