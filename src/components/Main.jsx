import React from 'react'
import { Routes, Route } from "react-router-dom";
// import Header from '../inc/Header'
import Footer from '../inc/Footer'

import Home from './pages/home/Home'

const Main = () => {
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