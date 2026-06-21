import {
  FaCode, FaCubes, FaServer, FaTools,
  FaGitAlt, FaGithub, FaFigma, FaTerminal
} from 'react-icons/fa';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    icon: <FaCode />,
    title: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Intermediate', percent: 80 },
      { name: 'HTML5', level: 'Proficient', percent: 95 },
      { name: 'CSS3', level: 'Proficient', percent: 85 },
      { name: 'Java', level: 'Intermediate', percent: 75 },
      { name: 'PHP', level: 'Proficient', percent: 85 },
    ],
  },
  {
    id: 'frameworks',
    icon: <FaCubes />,
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Intermediate', percent: 75 },
      { name: 'React Router', level: 'Intermediate', percent: 75 },
      { name: 'Vite', level: 'Familiar', percent: 60 },
      { name: 'Laravel', level: 'Proficient', percent: 85 },
    ],
  },
  {
    id: 'databases',
    icon: <FaServer />,
    title: 'Databases & APIs',
    skills: [
      { name: 'SQL / MySQL', level: 'Intermediate', percent: 80 },
      { name: 'MongoDB', level: 'Beginner', percent: 40 },
    ],
  },
];

const TOOLS = [
  { label: 'VS Code', icon: <FaCode /> },
  { label: 'Git', icon: <FaGitAlt /> },
  { label: 'GitHub', icon: <FaGithub /> },
  { label: 'Figma', icon: <FaFigma /> },
  { label: 'Vercel', icon: <FaServer /> },
  { label: 'Terminal', icon: <FaTerminal /> },
];

function Skills() {
  return (
    <main className="skills">
      <div className="skills__container">

        <h1 className="section-title">Skills &amp; Technologies</h1>
        <p className="section-subtitle">
          Technologies I've learned and tools I work with regularly.
        </p>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skill-category">

              <div className="skill-category__header">
                <span className="skill-category__icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h2 className="skill-category__title">{category.title}</h2>
              </div>

              <ul className="skill-category__list">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <div className="skill-item__top">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}</span>
                    </div>
                    <div
                      className="skill-item__bar-bg"
                      role="progressbar"
                      aria-valuenow={skill.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.percent}%`}
                    >
                      <div
                        className="skill-item__bar-fill"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <h2 className="skills__tools-title">
          <FaTools style={{ marginRight: '8px', opacity: 0.7 }} />
          Tools I Use
        </h2>
        <div className="skills__tools-grid">
          {TOOLS.map((tool) => (
            <div key={tool.label} className="skills__tool-chip">
              <span className="skills__tool-chip-icon" aria-hidden="true">
                {tool.icon}
              </span>
              {tool.label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;