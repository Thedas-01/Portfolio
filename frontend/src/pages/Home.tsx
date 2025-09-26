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
              Software Engineer | Web Developer | Tech Enthusiast | UI/UX Designer
            </h2>
            <p className="home-desc">
              Skilled in full-stack development, IoT integrations, and real-time data processing. Experienced with Node.js, React Native (TypeScript), MongoDB, and Firebase. Strong background in cloud deployment, API development, and database management. Proficient in Python for machine learning and data analytics. Familiar with DevOps practices, CI/CD pipelines, and containerization. Enthusiastic about building scalable, efficient, and user-focused software solutions.
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