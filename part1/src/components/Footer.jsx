import logo from '../assets/logo-serie.svg'
import IconInstagram from '../assets/instagram.svg'
import IconFacebook from '../assets/facebook.svg'

export const Footer = () => {
    return (
        <footer>
        <div class="newsletter-container">
          <div class="newsletter-text">
            <h3>Newsletter</h3>
            <p>Cadastre seu e-mail e receba novidades!</p>
          </div>
          <div class="newsletter-input">
            <input type="text" placeholder="seu@email.com.br" />
          </div>
          <div class="newsletter-button">
            <button type="submit">Cadastrar</button>
          </div>
        </div>
        <div class="footer-content">
          <div class="footer-logo">
            <img src={logo}alt="Logo Serie" />
          </div>
          <div class="footer-about">
            <h3 class="footer-title">Precisa de ajuda?</h3>
            <ul>
              <a class="footer-link" href="#">Sobre</a>
              <a class="footer-link" href="#">Politicas da Loja</a>
              <a class="footer-link" href="#">Politicas de Privacidade</a>
              <a class="footer-link" href="#">Contato</a>
            </ul>
          </div>
          <div class="footer-social"></div>
		  <h3 class="footer-title">redes sociais</h3>
		  <ul>
			<a class="footer-link" href="#"><img src={IconInstagram} alt="Instagram link" /></a>
			<a class="footer-link" href="#"><img src={IconFacebook} alt="Facebook link" /></a>
		  </ul>
        </div>
      </footer>
    )
  }
  