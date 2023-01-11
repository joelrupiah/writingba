import React from 'react'
import './Hero.css'

const Hero = () => {
	return (
		<div className="hero-content">

			<div className="header-logo">
				<img src="/WritingBA-Main-Logo.png" alt="main logo" />
			</div>
			
			<div className="hero-title-description">
				<div className="title-description">
					<div className="title">
						Prep for your TOEFL Exam with <span className="title-head">WritingBA</span>
					</div>
					<div className="description">
						Your instructor is a well-educated UCLA English grad with 9 years of education experience.
					</div>
				</div>

				<div className="course-search">
					<input className="search-input" type="text" placeholder="Search for a course..." />
					<button className="search-button">
						<i class="fa-sharp fa-solid fa-magnifying-glass"></i>Search
					</button>
				</div>

			</div>

			<div className="hero-image">
				<img src="Heroimage-removebg.png" alt="hero tag" /> 
			</div>

		</div>
	)
}

export default Hero