import Footer from "../common/Footer";
import NavBar from "../common/navbar";
import "./styles/about.css"

function About() {
	return (
		<div className="about-section">
			<NavBar active="about" />
			<div className="about-container">
				<div className="about-section">
					<h2 className="section-title">About Me</h2>
					<p className="section-description">
						Experienced Full-Stack Developer with over 3 years of expertise in designing, developing, and maintaining web
						applications. I was part of a team that designed and implemented a user-based recommendation system for
						websites. Actively seeking an opportunity to learn new technologies and enhance customer satisfaction.
					</p>
				</div>

				<div className="experience-section">
					<h2 className="section-title">Work Experience</h2>

					<div className="experience-card">
						<h3 className="experience-title">Full-Stack Developer - Pharmarack Technologies</h3>
						<p className="section-description">June 2024 - Present</p>
						<p className="experience-description">
							<ul>
								<li>Refactored and transitioned the existing HTML codebase to React.js, dramatically enhancing performance and
								optimization, resulting in a 25% increase in overall performance.</li>
								<li>Analyzed and addressed 20+ critical software bugs by developing targeted solutions.</li>
								<li>Currently developing and maintaining full-stack web applications with a focus on enhancing functionality and user
								experience.</li>
								<li>Collaborated with clients to understand their requirements and translated them into robust features, aligning product
								development with client needs.</li>
							</ul>
						</p>
					</div>

					<div className="experience-card">
						<h3 className="experience-title">Software Developer - Jio Platforms Limited</h3>
						<p className="section-description">Oct 2021 - June 2024</p>
						<p className="experience-description">
							<ul>
								<li> Actively contributed to the development of a modernized user interface for an existing product,
									enhancing user experience and visual appeal.
								</li>
								<li> Implemented key features such as version control and analytics dashboard, contributing to the
									overall functionality and data-driven decision-making capabilities of the system.
								</li>
								<li>Conducted routine system sanity checks to proactively identify and address potential issues, ensuring a stable and reliable product</li>
								<li> Engaged in bug fixing and performed regular website maintenance, ensuring optimal performance
									and user satisfaction.
								</li>
								<li> Successfully refactored existing codebase to enhance system performance and maintainability.</li>
								<li>laborated with clients to understand their requirements and translated them into robust features, aligning product development with client needs.
								</li>


							</ul>
						</p>
					</div>
					


				</div>
			</div>
			<Footer />


		</div>
	);
}

export default About;
