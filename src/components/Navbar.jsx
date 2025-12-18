import { TbBuildingSkyscraper } from "react-icons/tb";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <TbBuildingSkyscraper className="text-3xl text-gray-800" />
          <span className="tracking-wide">ArqNova</span>
        </div>

        {/* Nav */}
        <nav className="space-x-6 hidden md:flex text-gray-700 font-medium">
          <a href="#home" className="hover:text-gray-900">Inicio</a>
          <a href="#proyectos" className="hover:text-gray-900">Proyectos</a>
          <a href="#materiales" className="hover:text-gray-900">Materiales</a>
          <a href="#contacto" className="hover:text-gray-900">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
