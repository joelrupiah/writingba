import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
	return (
		<div className="Footer">
			<div className="footer-content">
				<div className="footer-logo">
					<img src="/WritingBA-Main-Logo.png" alt="Footer logo" />
				</div>
				<div className="footer-copyright">
					<span className="copywright-tag">&copy;</span> 
					<span className="copywright-name">Copyright writingba 2023</span>
				</div>
				<div className="footer-social-links">

					<div className="social-div">
						<span className="footer-facebook">
							<FacebookIcon />
						</span>
					</div>
					
					<span className="footer-instagram">
						{/*<InstagramOutlinedIcon />*/}
					</span>

					<span className="footer-twitter">
						{/*<TwitterOutlinedIcon />*/}
					</span>

				</div>
			</div>
		</div>
	)
}

export default Footer