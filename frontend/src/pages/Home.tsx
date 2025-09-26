import React from "react";
import { useNavigate } from "react-router-dom";
import Topnavigation from "../components/Topnavigation";
import '../css/home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Topnavigation />
      <main className="home-main">
        <section className="home-section">
          <div className="home-content">
            <h1 className="home-title">Thedas Sri Harisha</h1>
            <h2 className="home-subtitle">
              Developer | UI/UX Designer | Graphic Designer | Tech Enthusiast 
            </h2>
            <p className="home-desc">
              Skilled in full-stack development with experience in Node.js, React Native (TypeScript), MongoDB, and Firebase, along with cloud deployment, API development, and database management. Proficient in Python for machine learning and data analytics, familiar with DevOps practices, CI/CD pipelines, containerization, and manual testing. Passionate about UI/UX design, creating intuitive, responsive, and user-friendly interfaces that enhance the overall user experience. Focused on building scalable, efficient, and user-centered software solutions that combine strong technical expertise with excellent design.
            </p>
            <div className="home-buttons">
              <button className="home-btn" onClick={() => navigate("/projects")}>View Projects</button>
              <button className="home-btn secondary" onClick={() => navigate("/contacts")}>Contact Me</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;