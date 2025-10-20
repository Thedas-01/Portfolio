import React from "react";
import Topnavigation from "../components/Topnavigation";
import "../css/projects.css";

const projects = [
  {
    title: "UI/UX Design",
    description: "Focuses on creating user-friendly and visually appealing digital experiences. Design clear interfaces, build intuitive navigation, and ensure smooth interactions that meet both user needs and business goals. By combining creativity with usability, a UI/UX designer improves how users engage with websites, apps, or systems.",
    link: "https://www.figma.com/design/vVL5WfAwg3TJ9yPuhK1oVK/design?node-id=0-1&t=qvBtk0YImAWiXbn7-1",
    tags: ["Figma"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TypeScript, featuring responsive design and smooth animations.",
    link: "https://github.com/Thedas-01/Portfolio",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Alwon ERP System",
    description: "ERP system for small to medium enterprises to manage inventory, sales, and customer relationships.",
    link: "https://github.com/minduleeWick/Alwon",
    tags: ["Node.js", "Typescript", "MongoDB", "Render", "Vercel"],
  },
  {
    title: "Frontend Development ",
    description: "Two screen base simple frontend development .",
    link: "https://github.com/minduleeWick/Home-Frontend",
    tags: ["HTML", "SCSS", "CSS", "Java Script", "Doker" ],
  },
   {
    title: "Salon Management System",
    description: "A Salon Management System is a software (web app, desktop, or mobile) that helps a salon manage its daily operations smoothly..",
    link: "https://github.com/Thedas-01/Salon-Mangement-Sytem",
    tags: ["Java Script", "Css", "HTML", "MongoDB" ],
  },
 {
    title: "Hiru Capital Investment Management System",
    description: "A full-stack investment management platform with user authentication, portfolio tracking, and analytics.",
    link: "https://github.com/NavodDeshan/Hiru-Captial-Investment",
    tags: ["React", "Express", "Node.js", "MongoDB", "Netlify", "Render"],
  },
  {
    title: "Movie Booking System",
    description: "A movie booking system is an online platform or application that allows users to browse movies, view showtimes, select seats, and book tickets easily. It simplifies the process by providing movie details, seat availability, and payment options in one place. The system helps both customers, by saving time and effort, and theaters, by managing bookings and reducing manual work.",
    link: "https://github.com/Thedas-01/Movie-Booking-System",
    tags: ["PHP", "CSS"],
  },
  {
    title: "Gym Management System",
    description: "This project aims to enhance operational efficiency, provide an improved user experience for both staff members and gym members, and streamline and automate various aspects of running a gym facility.",
    link: "https://github.com/Thedas-01/Gym-Management-System",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js" ],
  },
  {
    title: "Law Store (Client's Document Management System)",
    description: "The Law Store system is a document management platform designed for lawyers to organize and manage their clients’ legal documents securely. It allows lawyers to store, access, and track case files, agreements, and client records in one place, making legal work more efficient and reducing paperwork.",
    tags: ["SQL Server", "Typescript", "GO"],
  },
];

const Projects: React.FC = () => (
  <>
    <Topnavigation />
    <main className="projects-main">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title === "UI/UX Design" ? "Visit Figma" : "View on GitHub"}
            </a>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Projects;