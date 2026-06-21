import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const SOCIAL_LINKS = [
  {
    id: 'github',
    href: 'https://github.com/kirkiboi',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/rolemir-kirk-don-diango-zayas/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/Rolerolerolemir',
    icon: <FaFacebook />,
    label: 'Facebook / Meta',
  },
  {
    id: 'email',
    href: 'mailto:r.zayas.551640@umindanao.edu.ph',
    icon: <FaEnvelope />,
    label: 'Email',
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__socials" aria-label="Social media links">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="footer__social-link"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span>© {currentYear}</span>
          <span>Rolemir Kirk Don Diango Zayas</span>
          <span>·</span>
          <span>all rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;