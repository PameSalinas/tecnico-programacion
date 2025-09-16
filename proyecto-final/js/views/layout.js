import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

function Layout(content) {
  document.getElementById("app").innerHTML = `
    ${Navbar()}
    <main>
      ${content}
    </main>
    ${Footer()}
  `;
}

export default Layout; 