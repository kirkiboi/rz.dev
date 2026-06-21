import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import emailjs from '@emailjs/browser';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData(INITIAL_FORM);

    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <main className="contact">
      <div className="contact__container">

        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Have an opportunity, question, or just want to say hi?
          My inbox is always open.
        </p>

        <div className="contact__grid">

          <div className="contact__info">
            <div>
              <h2 className="contact__info-heading">
                Let's work together.
              </h2>
              <p className="contact__info-text">
                I'm actively looking for internship and entry-level
                opportunities. Whether you have a project in mind, a role
                to fill, or just want to connect, drop me a message.
              </p>
            </div>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <FaEnvelope className="contact__info-item-icon" />
                <div>
                  <div className="contact__info-item-label">Email</div>
                  <a
                    href="mailto:your@email.com"
                    className="contact__info-item-value"
                  >
                    r.zayas.551640@umindanao.edu.ph
                  </a>
                </div>
              </div>
              <div className="contact__info-item">
                <FaMapMarkerAlt className="contact__info-item-icon" />
                <div>
                  <div className="contact__info-item-label">Location</div>
                  <a href="https://www.google.com/maps/place/Davao+City,+Davao+del+Sur/@7.2631918,125.4522449,10z/data=!3m1!4b1!4m6!3m5!1s0x32f96d9f519e327f:0xb53a24589f79c573!8m2!3d7.0647456!4d125.6088427!16zL20vMDJnbjF4?hl=gl&entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="contact__info-item-value"
                  >
                    Davao City, Philippines
                  </a>
                </div>
              </div>
              <div className="contact__info-item">
                <FaLinkedin className="contact__info-item-icon" />
                <div>
                  <div className="contact__info-item-label">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/rolemir-kirk-don-diango-zayas/"
                    className="contact__info-item-value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rolemir Kirk Don Diango Zayas
                  </a>
                </div>
              </div>
              <div className="contact__info-item">
                <FaGithub className="contact__info-item-icon" />
                <div>
                  <div className="contact__info-item-label">GitHub</div>
                  <a
                    href="https://github.com/kirkiboi"
                    className="contact__info-item-value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RZ_cola
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-card">
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >

              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__form-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Alexander (Exurb1a) McKechnie"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__form-label">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="exurb1a@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-subject" className="contact__form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="contact__form-input"
                  placeholder="Internship Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__form-textarea"
                  placeholder="Hi! I came across your portfolio and wanted to reach out..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="contact__feedback contact__feedback--success" role="alert">
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="contact__feedback contact__feedback--error" role="alert">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__form-submit"
                disabled={isSending}
                aria-busy={isSending}
              >
                <FaPaperPlane />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Contact;