import "./projects.css";

const Projects = () => {

  const projects = [
    {
      title: "EV Electrocharge",
      tech: "Flutter + Firebase",
      description:
        "EV charging station locator application with Firebase authentication, real-time database and location-based navigation."
    },
    {
      title: "Todo Application",
      tech: "HTML + CSS + JavaScript + Bootstrap",
      description:
        "Task management application with add, edit, delete, search and LocalStorage functionality."
    },
    {
      title: "Book Library",
      tech: "JavaScript + Bootstrap + Fetch API",
      description:
        "Book library application that retrieves and displays book information using API data."
    }
  ];

  return (
    <section className="projects">

      <div className="projects-title">
        <p>MY RECENT WORK</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <span>0{index + 1}</span>

            <h2>{project.title}</h2>

            <h4>{project.tech}</h4>

            <p>{project.description}</p>

            <button>View Project →</button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;