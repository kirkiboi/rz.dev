import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

function NotFound() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p style={{ color: '#a0a0c8', fontSize: '1.125rem' }}>
        Oops — that page doesn&apos;t exist.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
          borderRadius: '10px',
          color: 'white',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}

function App() {
  return (

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;