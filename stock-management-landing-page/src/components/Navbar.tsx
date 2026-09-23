export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <img src="/images/fischerLogo.png" alt="fischer" />
          <img className="brand-divider" src="/images/separacion.png" alt="|" />
          <span>Stock Management</span>
        </a>
        <div className="nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#contactanos">Contactate</a>
          <button className="nav-cta" type="button">
            ¡Encontranos!
          </button>
        </div>
      </nav>
    </header>
  );
}
