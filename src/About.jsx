import "./About.css";

const About = () => {
  return (
    <section className="about">

      <div className="about-title">
        <p>GET TO KNOW ME</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">

        <div className="about-text">

          <h2>I'm Afsal Salim</h2>

          <p>
            I’m a B.Tech Computer Science and Engineering graduate
            with a strong interest in frontend and web development.
          </p>

          <p>
            I enjoy building responsive and user-friendly web
            applications and continuously improving my development
            skills through practical projects.
          </p>

          <p>
            I have hands-on experience with HTML, CSS, Bootstrap,
            Tailwind CSS, JavaScript, React, APIs, Fetch and
            LocalStorage.
          </p>

        </div>

        <div className="about-card">

          <div>
            <h3>Education</h3>
            <p>B.Tech Computer Science & Engineering</p>
          </div>

          <div>
            <h3>Role</h3>
            <p>Frontend / Web Developer</p>
          </div>

          <div>
            <h3>Location</h3>
            <p>Kerala, India</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;