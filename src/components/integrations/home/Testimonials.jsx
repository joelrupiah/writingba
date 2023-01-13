import React, { useState } from 'react'
import './Testimonials.css'
import customers from '../../../repository/slider.js'

import TestimonialsModal from '../modals/TestimonialsModal'

const Testimonials = () => {

	const [data, setData] = useState(null);
	const [visible, setVisible] = useState(false);

  	const toggleItem = (customer = null) => {
    	setData(customer);
    	setVisible(customer !== null);
  	};

  	// function to trim description to prevent word breaks

  	// function trimDownToWord(string, maxLength) {
	//   if (string <= maxLength) {
	//     return string;
	//   }

	//   let first = string.toString().substr(0, maxLength);
	//   const second = string.toString().substr(maxLength);

	//   if (/\w$/.test(first) && /^\w/.test(second)) {
	//     first = first.replace(/\b[^\w]*\w+$/, '');
	//   }

	//   return first.trim() + '...';
	// }

	// const [openModal, setOpenModal] = useState(false)
	// const [customers, setCustomers] = useState([
	// 	{
	// 		id: 1,
	// 		name: 'Joel Rupiah',
	// 		image: '/Avatar-one.png',
	// 		description: 'I have worked with many educators, but very few who are as encouraging thorough.',
	// 		rating: 5
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Joel Jeremiah Rupiah',
	// 		image: '/Avatar-two.png',
	// 		description: 'I have worked with many educators, but very few who are as encouraging thorough.',
	// 		rating: 4
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Joel Rupiah One',
	// 		image: '/Avatar-one.png',
	// 		description: 'I have worked with many educators, but very few who are as encouraging thorough.',
	// 		rating: 5
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Joel Jeremiah Rupiah One',
	// 		image: '/Avatar-two.png',
	// 		description: 'I have worked with many educators, but very few who are as encouraging thorough.',
	// 		rating: 4
	// 	},
	// ])
	

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
		<>
			<div className="testimonials-section">

				<div className="testimonials-title-description">
					<div className="testimonials-title">
						Our Testimonials
					</div>
					<div className="testimonials-description">
						See what our students are saying about us
					</div>
				</div>

				{/*{customers.map ((item) => <img src={item.image} alt="yes" /> )}*/}

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


				{/*{customers.map ((item) => <img src={item.image} alt="yes" /> )}*/}

					{customers.map ((customer) => 

						<div className="single-testimonial" key={customer.id}>
							<div className="testimonial-avatar-name">
								<img className="customer-avatar" src={customer.image} alt="customer avatar" />
								<span className="customer-name">
									{customer.name}
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
								{customer.description.substring(0, 160).substring(0, customer.description.substring(0, 160).lastIndexOf(' ')) + '...   '}
								<span className="read-more" onClick={() => toggleItem(customer)}>Read more</span>
							</div>

							{visible === true && data !== null && (
				              <TestimonialsModal data={data} closeModal={() => toggleItem()} />
				            )}

						</div>	

						)}

					</div>				

				</div>

			</div>

		</>
	)
}

export default Testimonials