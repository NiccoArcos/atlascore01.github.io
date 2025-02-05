import { Link } from 'react-router-dom';
import { MotionTransition } from "./TransitionComponents"
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, WrenchIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <MotionTransition position="bottom" className="w-full">

      <nav className="p-4 ">
        <div className=" mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/logo-full-white.png" alt="Mi Sitio Logo" className="h-8 pl-2" />
            </Link>

            {/* Botón menú hamburguesa */}
            <button className="lg:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* Menú desktop */}
            <div className="hidden lg:flex space-x-6 text-zinc-200">
              <Link to="/" className="font-tech hover:text-[#e8e4e6] flex items-center gap-2 relative group">
                <HomeIcon className="h-5 w-5" />
                <span>Inicio</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8e4e6] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/services" className="font-tech hover:text-[#e8e4e6] flex items-center gap-2 relative group">
                <WrenchIcon className="h-5 w-5" />
                <span>Servicios</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8e4e6] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="font-tech hover:text-[#e8e4e6] flex items-center gap-2 relative group">
                <EnvelopeIcon className="h-5 w-5" />
                <span>Contacto</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8e4e6] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Menú móvil */}
          <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4 text-zinc-200">
              <Link to="/" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
                <HomeIcon className="h-5 w-5" />
                <span>Inicio</span>
              </Link>
              <Link to="/services" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
                <WrenchIcon className="h-5 w-5" />
                <span>Servicios</span>
              </Link>
              <Link to="/contact" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5" />
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
}
