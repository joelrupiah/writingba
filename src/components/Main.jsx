import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Header from '../inc/Header'
import Footer from '../inc/Footer'
import Home from './pages/home/Home'
import SignIn from './pages/authentication/SignIn'
import SignUp from './pages/authentication/SignUp'
import ResetPassword from './pages/authentication/ResetPassword'

const Main = () => {

	useEffect(() => {
		AOS.init({ duration:2000 })
	}, [])
	return (
		<div className="App">


			{/*<Header />*/}

				<Routes>

	            	<Route exact path='/' element={<Home />} />
	            	<Route path='/sign-in' element={<SignIn />} />
	            	<Route path='/sign-up' element={<SignUp />} />
	            	<Route path='/reset-password' element={<ResetPassword />} />

	            </Routes>

			<Footer />

		</div>
	)
}

export default Main