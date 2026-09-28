import "./Internship.css";

const Internship = () => {
  return (
    <section className="internship">

      <div className="internship-title">
        <p>MY EXPERIENCE</p>
        <h1>Internship</h1>
      </div>

      <div className="internship-card">

        <div className="company-icon">
          L
        </div>

        <div>

          <span>WEB DEVELOPMENT INTERN</span>

          <h2>Luminar Technolab</h2>

          <p>
            Gaining practical experience in frontend and web
            development using HTML, CSS, JavaScript, Bootstrap,
            APIs and related technologies.
          </p>

          <div className="internship-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>API</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Internship;