import React from 'react'
import './Service.css'

const Service = () => {
	return (
		<div className="service-section">

			<div className="service-title-description">
				<div className="service-title">
					Our services
				</div>
				<div className="service-description">
					Teaching the TOEFL Exam to passionate Nigerians.
				</div>
			</div>

			<div className="service-details-section">

				<div className="service-detail-content">
					<div className="service-detail-icon">
						<img className="service-detail-image" src="videos.png" alt="quality videos icon" />
					</div>

					<div className="service-title-description-section">
						<div className="service-detail-title">
							High-Quality Videos
						</div>
						<div className="service-detail-description">
							We provide excellent recorded course content for Nigerian students.
						</div>
					</div>

				</div>

				<div className="service-detail-content">
					<div className="service-detail-icon">
						<img className="service-detail-image" src="strategies.png" alt="strategies icon" />
					</div>
					<div className="service-title-description-section">
						<div className="service-detail-title">
							Top-Notch Scoring Strategies
						</div>
						<div className="service-detail-description">
							Your instructor provides well-researched strategies to help you get a competitive score on your TOEFL Exam.
						</div>
					</div>
				</div>

				<div className="service-detail-content">
					<div className="service-detail-icon">
						<img className="service-detail-image" src="like.png" alt="educator icon" />
					</div>
					<div className="service-title-description-section">
						<div className="service-detail-title">
							Exceptional Educator
						</div>
						<div className="service-detail-description">
							Your instructor is a TOEFL Expert and has 9 years experience teaching it.
						</div>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Service