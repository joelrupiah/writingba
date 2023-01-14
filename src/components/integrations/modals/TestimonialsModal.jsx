import React from 'react'
import './TestimonialsModal.css'

const TestimonialsModal = ({data, closeModal}) => {
	return (
		<>
			<div className='modal-backdrop' onClick={closeModal}>
				<div className="testimonials-modal" data-aos="zoom-in">
					<div className="modal-avatar-name">
						<img className="modal-avatar" src={data.image} alt="modal avatar" />
						<div className="modal-name">{data.name}</div>
					</div>
					<div className="modal-ratings">
						<img src="star.png" alt="modal star" />
						<img src="star.png" alt="modal star" />
						<img src="star.png" alt="modal star" />
						<img src="star.png" alt="modal star" />
						<img src="star.png" alt="modal star" />
					</div>
					<div className="testimonials-content">
						{data.description}
					</div>
				</div>
			</div>
		</>
	)
}

export default TestimonialsModal