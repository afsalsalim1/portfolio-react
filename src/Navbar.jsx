import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        AFSAL
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/internship">Internship</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;