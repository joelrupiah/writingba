import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
	return (
		<div className="Footer">

			<div className="footer-content">

				<div className="footer-logo">
					<img src="main-logo.png" alt="Footer logo" />
				</div>
				<div className="footer-copyright">
					<span className="copyright-tag ">&copy;</span> 
					<span className="copywright-name">Copyright writingBA 2023</span>
				</div>

				<div className="footer-social-links">

					<div className="social-div">

						<span className="footer-social-icons">
							<img src="/facebook.png" alt="social icon" />
						</span>

						<span className="footer-social-icons">
							<img src="/instagram.png" alt="social icon" />
						</span>

						<span className="footer-social-icons">
							<img src="/twitter.png" alt="social icon" />
						</span>


					</div>

				</div>

			</div>

		</div>
	)
}

export default Footer