function Navbar() {
  return `
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="/">ExploreSV</a>
      </div>
      <div class="navbar-links">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/places">Lugares</a></li>
          <li><a href="/about">Acerca de</a></li>
        </ul>
      </div>
    </nav>
  `;
}

export default Navbar;