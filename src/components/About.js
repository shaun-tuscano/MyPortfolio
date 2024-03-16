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
						Dedicated and results-driven Software Developer with 2+ years of experience in designing and
						developing innovative user interfaces for dynamic web applications. Proven expertise in translating product requirements into scalable, high-performance, and user-friendly frontend and backend solutions.Actively seeking
						a position that offers challenging projects, providing a platform to showcase my skills and continually
						learn in a dynamic professional environment.
					</p>
				</div>

				<div className="experience-section">
					<h2 className="section-title">Work Experience</h2>

					<div className="experience-card">
						<h3 className="experience-title">Front-end Developer - Jio Platforms Limited</h3>
						<p className="section-description">Feb 2022 - Present</p>
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
					<div className="experience-card">
						<h3 className="experience-title">QA Tester - Jio Platforms Limited</h3>
						<p className="section-description">Oct 2021 - Jan 2022</p>
						<p className="experience-description">
							<ul>
								<li>Understanding and analyzing test requirements.</li>
								<li>Contributing to test plan documentation.</li>
								<li>Executing all levels of testing (Beta testing, Smoke testing, Regression) and uploading bugs on DevOps tracking tool</li>
								<li>Communicating and collaborating with a team of 20+ testers.</li>
								<li>Participating in different types of test environments such as PC, Android, iOS.</li>
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
