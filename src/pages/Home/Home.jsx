import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import profileImage from "../../assets/profile/gradPic.jpg";
import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero" id="hero" aria-label="Hero section">
        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__greeting">Available for Internships</span>
            <h1 className="hero__name">
              Hi, I'm <span className="hero__name-highlight">Rolemir Zayas</span>
            </h1>
            <p className="hero__title">a Computer Science Student</p>

            <p className="hero__description">
              I build clean, responsive, and accessible web experiences.
              Passionate about React, modern JavaScript, and turning
              great designs into working code.
            </p>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">5+</span>
                <span className="hero__stat-label">Projects Built</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">2+</span>
                <span className="hero__stat-label">Years Learning</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">7+</span>
                <span className="hero__stat-label">Technologies</span>
              </div>
            </div>

            <div className="hero__cta">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>

              <a
                href="/resume.pdf"
                className="btn btn-outline"
                download
                aria-label="Download resume PDF"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-ring" aria-hidden="true" />
              <div className="hero__avatar">
                <img
                  src={profileImage}
                  alt="Rolemir Zayas profile picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;