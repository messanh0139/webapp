import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaClock className="footer-logo-icon" />
              <h3>TimeTravel Agency</h3>
            </div>
            <p className="footer-tagline">
              Voyagez à travers le temps avec luxe et sécurité
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#paris">Paris 1889</a></li>
              <li><a href="#cretace">Crétacé</a></li>
              <li><a href="#florence">Florence 1504</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#safety">Sécurité</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: messanhyaovi.kodjo@ynov.com</li>
              <li>Tel: 07 49 82 05 62</li>
              <li>Adresse: 40 bd Jules Verne, 44300 Nantes</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TimeTravel Agency. Tous droits réservés.</p>
          <p className="footer-credit">
            Créé avec ❤️ par Messanh Yaovi KODJO - M2 Projet Web IA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
