function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a className="navbar__brand" href="#home">
          PR<span>.</span>
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;