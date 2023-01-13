import React from 'react'
import './Hero.css'

const Hero = () => {
	return (
		<div className="Hero">

			<div className="header-logo">
				<img src="main-logo.png" alt="main logo" />
			</div>

			<div className="hero-title-description">

				<div className="title-description" data-aos="fade-right">
					<div className="title">
						Prep for your TOEFL Exam with <span className="title-head">WritingBA</span>
					</div>
					<div className="description">
						Your instructor is a well-educated UCLA English grad with 9 years of education experience.
					</div>
				</div>

				<div className="hero-button-section" data-aos="fade-up-right">
					<div className="hero-button">
						Sign Up for 8500 naira only
					</div>
				</div>

			</div>

			<div className="hero-tag" data-aos="zoom-in-left">
				<img className="hero-image" src="main-hero-image.png" alt="hero tag" /> 
				<img className="orange-ellipse" src="orange-ellipse.png" alt="orange ellipse" />
				<img className="blue-ellipse" src="blue-ellipse.png" alt="blue ellipse" />
			</div>

		</div>
	)
}

export default Hero