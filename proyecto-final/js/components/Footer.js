import { FacebookIcon, InstagramIcon, XIcon, GithubIcon } from "./Icons.js";

function Footer() {
  return `
    <footer class="footer">
      <span>© ${new Date().getFullYear()} Pamela Crisóstomo. Todos los derechos reservados.</span>
      <ul class="footer-icons">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            ${FacebookIcon()}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
            ${InstagramIcon()}
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noreferrer noopener">
            ${XIcon()}
          </a>
        </li>
        <li>
          <a href="https://github.com/PameSalinas/tecnico-programacion" target="_blank" rel="noreferrer noopener">
            ${GithubIcon()}
          </a>
        </li>
      </ul>
    </footer>
  `;
}

export default Footer;
