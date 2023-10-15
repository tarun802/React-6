import React from "react";
import { useState} from "react";
import "./styles.css";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Tarun Kamal</h1>
        <p>Web Developer & Designer</p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer and designer with a strong focus on front-end technologies. My goal is to create beautiful and user-friendly websites that provide a seamless experience.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built with React.js and styled with CSS.</p>
        </div>
        <div className="project">
          <h3>E-commerce Store</h3>
          <p>Developed a fully functional e-commerce website with payment integration using React and Node.js.</p>
        </div>
        <div className="project">
          <h3>Travel Blog</h3>
          <p>Created a travel blog with interactive maps and photo galleries using HTML, CSS, and JavaScript.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>
          You can reach me at:
          <a href="mailto:tarun802k@gmail.com">tarun802k@gmail.com</a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Tarun Kamal</p>
      </footer>
    </div>
  );
}




export default App;