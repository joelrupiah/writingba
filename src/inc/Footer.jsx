import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import './Footer.css'

const Footer = () => {
	return (
		<div className="Footer">
		<ScrollToTop smooth color="white" width="28" height="16" className="scroll-to-top" />

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

						{/*<span className="footer-social-icons">
							<img src="/facebook.png" alt="social icon" />
						</span>

						<span className="footer-social-icons">
							<img src="/instagram.png" alt="social icon" />
						</span>*/}

						<a href="https://twitter.com/writing_ba" target="_blank">
							<span className="footer-social-icons">
								<img src="/twitter.png" alt="social icon" />
							</span>
						</a>

					</div>

				</div>

			</div>

		</div>
	)
}

export default Footer