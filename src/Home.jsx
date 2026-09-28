import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home">

      <div className="home-content">

        <p className="home-small">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Afsal Salim</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="home-description">
          I build responsive and user-friendly web applications
          using modern web technologies.
        </p>

        <div className="home-buttons">

          <Link to="/projects" className="home-btn primary">
            View Projects
          </Link>

          <Link to="/contact" className="home-btn secondary">
            Contact Me
          </Link>

        </div>

      </div>

      <div className="home-image">
        <div className="profile-circle">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHSm93JhRA1uA/profile-displayphoto-scale_200_200/B56aDiF4enIEAg-/0/1790499589401?e=1792022400&v=beta&t=tQdKwArDfPhzrdxaQ3dVZV0QpZVBZhMS7IEbozP8gVU"
            alt="Afsal Salim"
          />
        </div>
      </div>

    </section>
  );
};

export default Home;