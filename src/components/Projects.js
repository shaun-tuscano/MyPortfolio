import "./styles/projects.css"
import todoImg from "../assests/todo.jpg"
import careerImg from "../assests/career.jpg"
import portfolioImg from "../assests/protfolio.jpg"
import moodImg from "../assests/mood.jpg"

const data = [

    {
        title: "Career Guidance System",
        description: "Developed a comprehensive Career Guidance System using React, HTML, CSS, and PHP to assist users in making informed career decisions. The application provides valuable insights into various career paths,required skill sets, and industry trends. This project demonstrated my ability to create a dynamic and user-centric web application while utilizing a combination of front-end and back-end technologies.",
        imgUrl: careerImg,
        websiteUrl: "https://github.com/shaun-tuscano"
    },
    {
        title: "Portfolio website",
        description: "Explore my dynamic portfolio showcasing a collection of my projects and experiences. Built with the power of React.js, HTML, and CSS, my website is a testament to my skills as a web developer. Dive into my projects, discover my journey, and get in touch to explore how we can collaborate on exciting opportunities.",
        imgUrl: portfolioImg,
        websiteUrl: "https://shaun-tuscano.github.io/MyPortfolio/"
    },
    {
        title: "TODO LIST",
        description: "Developed a modern and interactive TODO list application using React.js that allows users to efficiently manage their tasks and to-do items. The application offers a clean and user-friendly interface for adding, editing, and marking tasks as completed. The project showcased proficiency in React’s component-based architecture and state management, enabling a seamless user experience.",
        imgUrl: todoImg,
        websiteUrl: "https://shaun-tuscano.github.io/Todo-List/"
    },
    {
        title: "Mood Detector",
        description: "I spearheaded the development of a Mood Detector website leveraging the ChatGPT API. This innovative platform allows users to articulate their daily experiences and emotions, generating personalized emoji-based responses. The project demonstrates my proficiency in front-end development, API integration, and user experience design, showcasing a commitment to creating engaging and emotionally intelligent web applications.",
        imgUrl: moodImg,
        websiteUrl: "https://shaun-tuscano.github.io/Mood_detector/"
    },


]

function Projects() {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {data.map((item) => (
                    <div className="project-card">
                        <img src={item.imgUrl} alt="todo img" />
                        <h2 className="project-title">{item.title}</h2>
                        <div className="pro-details">
                            <p>{item.description}</p>
                        </div>
                        <div className="pro-btns">
                            <a href= {item.websiteUrl}
                                className="btn" style={{ borderRadius: 24 }}>
                                View
                            </a>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}

export default Projects;
