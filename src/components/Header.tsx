import React, { useState } from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        Ange<span className="logo-accent">Portfolio</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <a href="#hero" onClick={() => scrollToSection("hero")}>
          Home
        </a>
        <a href="#about" onClick={() => scrollToSection("about")}>
          About
        </a>
        <a href="#experience" onClick={() => scrollToSection("experience")}>
          Experience
        </a>
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;