import { FaGraduationCap } from 'react-icons/fa';
import './About.css';

const INTERESTS = [
  'Trail Running',
  'Video Games',
  'Fitness',
  'Hiking',
  'Programming',
  'Music',
  'Movies'
];

function About() {
  return (
    <main className="about">
      <div className="about__container">
        <div className="about__grid">

          <aside className="about__sidebar">
            <div className="about__info-card">
              <div className="about__info-item">
                <span className="about__info-label">Status</span>
                <span className="about__info-value">Open to work or internship</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Davao City, Philippines</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">r.zayas.551640@umindanao.edu.ph</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Focus</span>
                <span className="about__info-value">Web Development</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Technologies</span>
                <span className="about__info-value">React</span>
                <span className="about__info-value">Java</span>
                <span className="about__info-value">PHP</span>
                <span className="about__info-value">Laravel</span>
                <span className="about__info-value">HTML</span>
                <span className="about__info-value">CSS</span>
                <span className="about__info-value">JavaScript</span>
                <span className="about__info-value">Figma</span>
              </div>
            </div>
          </aside>

          <div className="about__content">
            <section className="about__intro" aria-labelledby="about-heading">
              <h1 id="about-heading">About Me</h1>
              <p>
                Hallo! I'm <strong>Rolemir Kirk Don Diango Zayas</strong>, commonly called as <strong>Kirk</strong>, a passionate web
                developer and computer science student in the University of Mindanao.
                I like building things, from small utility tools to full-stack applications.
              </p>
              <p>
                I started coding during my first year in the university and have been hooked ever since.
                My journey began with Java, then Databases, then I learned about plain HTML and CSS, then JavaScript, then Backend languages and frameworks, and
                now I'm diving deep into the React ecosystem. I believe great
                software is not just about working code, it's also about clean code and organized structure
                that's easy to maintain and a UI that's a pleasure to use.
              </p>
              <p>
                When I'm not coding, you can find me in the mountains, either hiking or trail running.
                I'm actively looking for internship or entry-level opportunities
                where I can contribute, grow, and continue learning alongside
                experienced developers.
              </p>
            </section>

            <section aria-labelledby="education-heading">
              <h2 className="about__section-title" id="education-heading">
                Education
              </h2>
              <div className="about__education-card">
                <span className="about__education-icon" aria-hidden="true">
                  <FaGraduationCap />
                </span>
                <div>
                  <p className="about__education-degree">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="about__education-school">
                    University of Mindanao
                  </p>
                  <p className="about__education-period">
                    2023 – Present
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="interests-heading">
              <h2 className="about__section-title" id="interests-heading">
                Hobbies
              </h2>
              <div className="about__interests">
                {INTERESTS.map((interest) => (
                  <span key={interest} className="badge">
                    {interest}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default About;