import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Header from '../inc/Header'
import Footer from '../inc/Footer'
import Home from './pages/home/Home'

const Main = () => {

	useEffect(() => {
		AOS.init({ duration:2000 })
	}, [])
	return (
		<div className="App">


			{/*<Header />*/}

				<Routes>

	            	<Route exact path='/' element={<Home />} />

	            </Routes>

			<Footer />

		</div>
	)
}

export default Main