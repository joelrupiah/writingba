import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
	return (
		<div className="testimonials-section">

			<div className="testimonials-title-description">
				<div className="testimonials-title">
					Our Testimonials
				</div>
				<div className="testimonials-description">
					See what our students are saying about us
				</div>
			</div>

			<div className="testimonials-controls">
				<div className="testimonials-left-section">
					<div className="testimonials-left-control">
						<img src="left-chevron.png" alt="left control icon" />
					</div>
				</div>
				<div className="testimonials-right-section">
					<div className="testimonials-right-control">
						<img src="right-chevron.png" alt="right control icon" />
					</div>
				</div>
			</div>

			<div className="testimonials-main-content">

				<div className="single-testimonial">
					<div className="testimonial-avatar-name">
						<img className="customer-avatar" src="Avatar-one.png" alt="customer avatar" />
						<span className="customer-name">
							Stacy Linkmeyer
						</span>
					</div>
					<div className="testimonial-star-bulk">
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
					</div>
					<div className="single-testimonial-description">
						I've worked with many educators, but very few who are as encouraging, 
						thorough, and as passionate as Mike. 
						He enters every tutoring session seemingly excited Read more
					</div>
				</div>

				<div className="single-testimonial">
					<div className="testimonial-avatar-name">
						<img className="customer-avatar" src="Avatar-one.png" alt="customer avatar" />
						<span className="customer-name">
							Tabitha Stone
						</span>
					</div>
					<div className="testimonial-star-bulk">
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
					</div>
					<div className="single-testimonial-description">
						I've worked with many educators, but very few who are as encouraging, 
						thorough, and as passionate as Mike. 
						He enters every tutoring session seemingly excited Read more
					</div>
				</div>

				<div className="single-testimonial">
					<div className="testimonial-avatar-name">
						<img className="customer-avatar" src="Avatar-one.png" alt="customer avatar" />
						<span className="customer-name">
							Charlie Warren
						</span>
					</div>
					<div className="testimonial-star-bulk">
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
						<img src="star.png" className="testimonial-star" alt="testimonial star" />
					</div>
					<div className="single-testimonial-description">
						I've worked with many educators, but very few who are as encouraging, 
						thorough, and as passionate as Mike. 
						He enters every tutoring session seemingly excited Read more
					</div>
				</div>



			</div>

		</div>
	)
}

export default Testimonials