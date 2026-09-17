export function Navbar() {
  return (
    <nav className="bg-white text-black fixed top-0 h-15 min-w-screen flex row-span">
      <div className="flex justify-start items-center ">
        <img className="w-30 ml-5" src="../images/fischerLogo.png"></img>
        <img className="ml-2 h-10" src="../images/separacion.png"></img>
        <div className="w-50 ml-4">Stock Management Software</div>
      </div>
      <div className="flex justify-end items-center">
          <div>Caracteristicas</div>
          <div>Beneficios</div>
          <div>Empresa</div>
      </div>
    </nav>
  );
}
