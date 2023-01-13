import React from 'react'
import './Description.css'

const Description = () => {
	return (
		<div className="description-section" data-aos="zoom-in">
			<p className="description-text">
				Let WritingBA be your resource to pass the TOEFL with a high score.
			</p>

			<div className="description-section-content">
				<div className="single-content">

					<div className="single-content-icon-text">
						<div className="single-content">
							<img src="symbol-outline.png" className="single-icon" alt="content icon" />
							<div className="single-description-content">
								Custom TOEFL Curriculum Procured From 1000+ Sessions
							</div>
						</div>
						<div className="single-content">
							<img src="symbol-diamond.png" className="single-icon" alt="content icon" />
							7.5 Hours of Recorded Instruction
						</div>
						<div className="single-content">
							<img src="symbol-outline.png" className="single-icon" alt="content icon" />
							16 Hours of Live Zoom Group Lessons
						</div>
						<div className="single-content">
							<img src="symbol-diamond.png" className="single-icon" alt="content icon" />
							2 Hours of Zoom Open Office Hours
						</div>
						<div className="single-content">
							<img src="symbol-outline.png" className="single-icon" alt="content icon" />
							Sample TOEFL Test Material & Full Scoring & Review
						</div>
					</div>
					
				</div>
			</div>

		</div>
	)
}

export default Description