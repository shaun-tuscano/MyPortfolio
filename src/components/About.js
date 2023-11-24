import Footer from "../common/Footer";
import NavBar from "../common/navbar";
import "./styles/about.css"

function About() {
  return (
    <div className="about-section">
        <NavBar active="about"/>
		<div className="about-container">
		  <div className="about-section">
			<h2 className="section-title">Who am I?</h2>
			<p className="section-description">
			As a software developer, my passion lies in creating innovative and efficient solutions to complex problems. With a strong foundation in computer science and hands-on experience in software development, I strive to deliver high-quality, scalable, and user-friendly applications.
			Throughout my career, I have honed my skills in various programming languages such as Java, Python, C++, and JavaScript. I am well-versed in modern frameworks and technologies like React and Angular, enabling me to build robust and responsive web applications.
			</p>
		  </div>
	
		  <div className="experience-section">
			<h2 className="section-title">Work Experience</h2>

			<div className="experience-card">
			  <h3 className="experience-title">Front-end Developer - jio platforms limited</h3>
              <p className="section-description">Sept 2022 - Present</p>
			  <p className="experience-description">
				<ul>
				<li>Developing modern and responsive web applications using React.</li>
				<li>Collaborating with cross-functional teams to deliver high-quality frontend solutions.</li>
				<li>Implementing UI designs, user interactions, and dynamic data rendering.</li>
				</ul>
			  </p>
			</div>
			<div className="experience-card">
			  <h3 className="experience-title">QA Tester - jio platforms limited</h3>
              <p className="section-description">Oct 2021 - Oct 2022</p>
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
        <Footer/>
	

    </div>
  );
}

export default About;
