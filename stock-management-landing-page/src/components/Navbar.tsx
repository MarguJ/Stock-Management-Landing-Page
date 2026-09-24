export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <img src="/images/fischerLogo.png" alt="fischer" />
          <img className="brand-divider" src="/images/separacion.png" alt="|" />
          <span>stock management<br />software</span>
        </a>
        <div className="nav-links">
          <a href="#quienes-somos">Conocenos</a>
          <a href="#como-funciona">Entendelo</a>
          <a href="#crece-con-fsm">Probalo</a>
          <button className="nav-cta" type="button">
            SOLICITAR DEMO
          </button>
        </div>
      </nav>
    </header>
  );
}
