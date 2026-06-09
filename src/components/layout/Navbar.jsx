import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Church } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/historia', label: 'Historia y Cultura' },
        { path: '/tañarandy', label: 'Tañarandy' },
        { path: '/museos', label: 'Museos' },
        { path: '/plazas', label: 'Plazas' },
        { path: '/gastronomia', label: 'Dónde Comer' },
        { path: '/mapa', label: 'Mapa' },
    ]

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50 transition-all duration-300 select-none"> 
            <div className="container-custom relative">
                <div className="flex justify-between items-center h-16 px-4 md:px-6">
                    
                    {/* Logo / Marca */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-2.5 group focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent]"
                    >
                        <Church className="h-6 w-6 text-amber-800 transition-colors duration-300 group-hover:text-amber-600"/>  
                        <span className="font-semibold text-lg tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
                            San Ignacio Guazú
                        </span>                
                    </Link>

                    {/* Menú de escritorio */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3.5 py-2 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent] ${
                                        isActive
                                        ? 'bg-amber-50 text-amber-900 border border-amber-200/50'
                                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50 border border-transparent'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Botón menú móvil */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent]"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Menú móvil */}
                <div 
                    className={`absolute top-16 left-0 right-0 md:hidden border-b border-stone-100 bg-white/95 backdrop-blur-lg px-4 py-3 space-y-1 shadow-md transition-all duration-300 ease-in-out ${
                        isOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => 
                                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent] ${
                                    isActive
                                    ? 'bg-amber-50 text-amber-900 border-l-4 border-amber-700 font-semibold'
                                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar