export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <img src="/images/fischerLogo.png" alt="fischer" />
          <img className="brand-divider" src="/images/separacion.png" alt="" />
          <span>
            stock management
            <br />
            software
          </span>
        </a>
        <div className="nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#contactanos">Contáctanos</a>
          <button className="nav-cta" type="button">
            SOLICITAR DEMO
          </button>
        </div>
      </nav>
    </header>
  );
}
