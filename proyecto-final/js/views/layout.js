import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout(content) {
  document.getElementById("app").innerHTML = `
    <header>
      ${Navbar()}
    </header>
    <main>
      ${content}
    </main>
    ${Footer()}
  `;

  const toggle = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".navbar-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  }
}

export default Layout;
