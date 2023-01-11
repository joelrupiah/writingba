import React from 'react'
import './Home.css'
import Hero from '../../integrations/home/Hero'
import Description from '../../integrations/home/Description'
import Service from '../../integrations/home/Service'
import Testimonials from '../../integrations/home/Testimonials'
import Subscribe from '../../integrations/home/Subscribe'

const Home = () => {
	return (
		<div className="Home">
			<Hero />
			<Description />
			<Service />
			<Testimonials />
			<Subscribe />
		</div>
	)
}

export default Home