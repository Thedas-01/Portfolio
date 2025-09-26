import React from "react";
import "../css/footer.css";

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <span>
        © {new Date().getFullYear()} Thedas Sri Harisha. All rights reserved.
      </span>
      <div className="footer-socials">
        <a href="https://github.com/Thedas-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <span role="img" aria-label="GitHub">🐙</span>
        </a>
        <a href="https://www.linkedin.com/in/thedas-sri-harisha-328098198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span role="img" aria-label="LinkedIn">🔗</span>
        </a>
        <a href="https://www.facebook.com/thedas.sri.harisha.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <span role="img" aria-label="Facebook">📘</span>
        </a>
        <a href="https://www.instagram.com/thedas_sri_harisha/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <span role="img" aria-label="Instagram">📸</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;