import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import musicPlayer from "../../assets/profile/taylorSwift.png";
import leafGames from "../../assets/profile/leafGames.png";
import UMDC from "../../assets/profile/UMDC.png";
import LCSmartRetail from "../../assets/profile/LC.png";
import DLX from "../../assets/profile/DLXHotel.png";

const PROJECTS = [
  {
    id: 1,
    image: musicPlayer,
    bannerClass: 'project-card__banner--frontend',
    title: 'Static Music Player',
    description:
      'My first solo project, built for a friend who needed a music solution outside of Spotify and YouTube restrictions at work. Developed from scratch using only HTML, CSS, and JavaScript, this project reflects my early approach to building real-world applications. Although it started as a simple and static implementation, it became an important milestone that inspired me to improve my coding practices and rebuild projects using modern tools and techniques I have learned.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kirkiboi/musicRequestNiDeltaGirl',
    live: 'https://kirkiboi.github.io/musicRequestNiDeltaGirl/',
  },
  {
    id: 2,
    image: leafGames,
    bannerClass: 'project-card__banner--frontend',
    title: 'Leaf Games Landing Page',
    description:
      'One of several landing pages I have created as a personal hobby, built entirely with HTML and CSS. This gaming-themed project focuses on clean layouts, modern styling, and responsive design while showcasing a fictional brand and its products. It reflects my passion for crafting visually engaging and user-friendly web experiences.',
    tags: ['HTML', ' CSS'],
    github: 'https://github.com/kirkiboi/leafGames',
    live: 'https://kirkiboi.github.io/leafGames/',
  },
  {
    id: 3,
    image: UMDC,
    bannerClass: 'project-card__banner--frontend',
    title: 'University of Mindanao Dining Center System',
    description:
      'A drag-and-drop Kanban board for task management. Built with React and local storage persistence. Features create, edit, delete, and status columns.',
    tags: ['PHP', 'Laravel', 'localStorage', 'DnD', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/kirkiboi/SoftEng-2',
    live: 'https://softeng2-deploy.onrender.com'
  },
  {
    id: 4,
    image: LCSmartRetail,
    bannerClass: 'project-card__banner--fullstack',
    title: 'L&C Smart Retail',
    description:
      'A full-stack Laravel application built for a local LPG retailer, featuring POS transactions, inventory monitoring, employee attendance tracking, and reporting tools designed to improve operational efficiency and reduce manual record-keeping errors.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'JavaScript'],
    github: 'https://github.com/kirkiboi/LeviAndConnie_LPG',
    live: null,
  },
  {
    id: 5,
    image: DLX,
    bannerClass: 'project-card__banner--fullstack',
    title: 'DLX Luxury Hotel Reservation',
    description:
      'A full-stack hotel reservation and management system developed with Java Swing and MySQL. The application provides a complete workflow for managing reservations, room availability, guest records, check-ins/check-outs, billing, and administrative operations. Built to deliver an efficient, user-friendly experience while ensuring accurate data management and streamlined hotel operations.',
    tags: ['Java Swing', 'Java', 'MySQL'],
    github: null,
    live: null,
  },
];

function Projects() {
  return (
    <main className="projects">
      <div className="projects__container">

        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">
          A selection of things I&apos;ve built while learning and growing
          as a developer.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">

              <div className={`project-card__banner ${project.bannerClass}`}>
                <img
                  src={project.image}
                  alt={project.title} />
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Projects;