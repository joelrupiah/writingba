 import React from 'react'
 import './Subscribe.css'
 
 const Subscribe = () => {
 	return (
 		<div className="subscribe-content">
 			<div className="text-content">
 				<div className="subscribe-title">
 					Subscribe to get free updates on all our writing courses.
	 			</div>
	 			<div className="subscribe-description">
	 				WritingBA instructors teach writing to learners of all backgrounds and grade levels,
					including writing exams like the TOEFL as well as academic writing in various
					Humanities and Social Sciences courses.
	 			</div>
 			</div>
 			
 			<div className="subscribe-form">
 				<input className="subscribe-input" type="text" placeholder="Enter email address" />
					<button className="subscribe-button">
						Subscribe
					</button>
 			</div>

 		</div>
 	)
 }
 
 export default Subscribe