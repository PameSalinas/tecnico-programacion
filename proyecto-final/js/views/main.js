import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

function principalPage() {
  document.getElementById("app").innerHTML = `
    ${Navbar()}
    <h1>Página principal</h1>
    ${Footer()}
  `;
}

export default principalPage; 