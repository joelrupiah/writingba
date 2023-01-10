import React from 'react'
import './Home.css'
import Hero from '../../integrations/home/Hero'
import Description from '../../integrations/home/Description'
import Service from '../../integrations/home/Service'
import Subscribe from '../../integrations/home/Subscribe'

const Home = () => {
	return (
		<div className="Home">
			<Hero />
			<Description />
			<Service />
			<Subscribe />
		</div>
	)
}

export default Home