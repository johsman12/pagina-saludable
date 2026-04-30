import React from 'react';
import './Footer.css';

import logoNutrik from '../assets/Nutrik.jpg'; 
import imgTiktok from '../assets/tiktok.jpeg';
import imgInstagram from '../assets/instagram.jpeg';
import imgFacebook from '../assets/facebook.jpeg';
import imgColombia from '../assets/colombia.jpeg';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        
        <div className="footer-section logo-section">
          <img src={logoNutrik} alt="Nutrik Logo" className="footer-logo-img" />
          <p className="tagline">TU SALUD EMPIEZA AQUÍ</p>
        </div>

        
        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Contactanos</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Nesecitas ayuda</h3>
          <ul>
            <li><a href="#">Servicio al cliente</a></li>
            <li><a href="#">Atencion y pedidos</a></li>
            <li><a href="#">Horarios de atencion</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terminos y condiciones</a></li>
            <li><a href="#">Tratamiento de datos</a></li>
          </ul>

          <div className="footer-socials">
            <img src={imgTiktok} alt="TikTok" className="social-icon-img" />
            <img src={imgInstagram} alt="Instagram" className="social-icon-img" />
            <img src={imgFacebook} alt="Facebook" className="social-icon-img" />
          </div>
        </div>
      </div>

      <div className="footer-credits">
        <p>© 2026 Nutrick. Todos los derechos reservados</p>
        <div className="developer-tag">
          Hecho y desarrollado por <strong>@Nutrick Co</strong> 
          <img src={imgColombia} alt="Colombia" className="colombia-icon-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;