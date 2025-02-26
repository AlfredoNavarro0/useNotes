import Links from '../links/Links';

function Navbar() {
  return (
    <nav className="w-full h-[8vh] min-h-14 max-h-20 bg-[#3e3e42] flex items-center">
      <ul className="w-full flex flex-row justify-around text-white font-bold">
        <Links tieneImagen={false} title="Inicio" link="#" />
        <Links tieneImagen={true} src="/logo.png" alt="Logo" link="#" />
        <Links tieneImagen={false} title="Barra Busqueda" link="#" />
        <Links tieneImagen={false} title="Tema" link="#" />
        <Links tieneImagen={false} title="Inicio Sesión" link="#" />
      </ul>
    </nav>
  );
}

export default Navbar;