import "./Skills.css";

const Skills = () => {

  const frontend = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "React"
  ];

  const web = [
    "DOM",
    "REST API",
    "Fetch API",
    "JSON",
    "LocalStorage"
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Android Studio"
  ];

  return (
    <section className="skills">

      <div className="skills-title">
        <p>WHAT I WORK WITH</p>
        <h1>My Skills</h1>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h2>Frontend</h2>

          <div className="skill-list">
            {frontend.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Web Technologies</h2>

          <div className="skill-list">
            {web.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>

          <div className="skill-list">
            {tools.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;