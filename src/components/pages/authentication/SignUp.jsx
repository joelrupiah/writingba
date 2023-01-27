import React from 'react'
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <div className='sign-up'>
            Sign Up Page<br />
            <Link to="/reset-password">Reset password</Link><br />
            <Link to="/sign-in">Sign In</Link><br />
        </div>
    )
}

export default SignUp