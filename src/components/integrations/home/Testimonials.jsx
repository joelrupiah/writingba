import React from 'react'
import './Testimonials.css'
// import customers from '../../../repository/slider.js'

const Testimonials = () => {

	

	const btnpressprev = () => {
		let box = document.querySelector('.testimonials-main-content')
		let width = box.clientWidth
		box.scrollLeft = box.scrollLeft - width
		console.log(width)
	}

	const btnpressnext = () => {
		let box = document.querySelector('.testimonials-main-content')
		let width = box.clientWidth
		box.scrollLeft = box.scrollLeft + width
		console.log(width)
	}

	// OR USE useRef

	// const ref = useRef(null); //ref to parent div

  	// const onClickLeftHandler = () => {
    // 	let width = ref.current.clientWidth;
    // 	ref.current.scrollLeft = ref.current.scrollLeft - width;
  	// };
  	// const onClickRightHandler = () => {
    // 	let width = ref.current.clientWidth;
    // 	ref.current.scrollLeft = ref.current.scrollLeft + width;
  	// };

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
					<div className="testimonials-left-control" onClick={btnpressprev}>
						<img src="left-chevron.png" alt="left control icon" />
					</div>
				</div>
				<div className="testimonials-right-section">
					<div className="testimonials-right-control" onClick={btnpressnext}>
						<img src="right-chevron.png" alt="right control icon" />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="testimonials-main-content">

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

			

		</div>
	)
}

export default Testimonials