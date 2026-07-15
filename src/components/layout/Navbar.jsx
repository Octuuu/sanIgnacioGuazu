import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Church } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/historia", label: "Historia y Cultura" },
    { path: "/tañarandy", label: "Tañarandy" },
    { path: "/museos", label: "Museos" },
    { path: "/plazas", label: "Plazas" },
    { path: "/gastronomia", label: "Dónde Comer" },
    { path: "/mapa", label: "Mapa" },
  ]

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full select-none transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 py-3"
            : "bg-white/40 backdrop-blur-sm border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo / Marca */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none [-webkit-tap-highlight-color:transparent]"
            >
              <div className="p-2 rounded-xl bg-stone-900/5 group-hover:bg-amber-900/10 transition-colors duration-300">
                <Church className="h-5 w-5 text-amber-800 transition-colors duration-300 group-hover:text-amber-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-normal tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-amber-900">
                  San Ignacio Guazú
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 group-hover:text-amber-800 transition-colors duration-300 -mt-1">
                  Misiones · Paraguay
                </span>
              </div>
            </Link>

            {/* Menú de escritorio */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 outline-none [-webkit-tap-highlight-color:transparent] ${
                      isActive
                        ? "text-amber-900 bg-amber-50/60 font-semibold"
                        : "text-stone-600 hover:text-stone-950 hover:bg-stone-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {/* Línea decorativa inferior sutil en activo */}
                      {isActive && (
                        <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-amber-800/80 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2.5 rounded-xl text-stone-700 bg-stone-50 border border-stone-100 hover:bg-stone-100 active:scale-95 transition-all outline-none [-webkit-tap-highlight-color:transparent]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil (Pantalla Completa / Drawer Superior) */}
      <div
        className={`fixed inset-0 z-40 bg-stone-950/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 right-0 bg-white border-b border-stone-200 px-6 pt-24 pb-10 shadow-2xl rounded-b-3xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] tracking-[0.25em] font-bold text-amber-800 uppercase mb-4 border-b border-stone-100 pb-2">
              Navegación
            </span>
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ transitionDelay: `${index * 40}ms` }}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 transform [-webkit-tap-highlight-color:transparent] ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                  } ${
                    isActive
                      ? "bg-amber-50 text-amber-900 border-l-4 border-amber-800 pl-5 font-semibold"
                      : "text-stone-700 hover:bg-stone-50 hover:text-stone-900 pl-4"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar