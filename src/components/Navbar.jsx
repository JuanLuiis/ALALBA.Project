import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'py-5 bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Mobile Menu Button */}
                <div className="md:hidden order-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        className="text-brand-brown p-2 transition-transform active:scale-90"
                    >
                        <i data-lucide={isOpen ? "x" : "menu"}></i>
                    </button>
                </div>

                {/* Logo */}
                <a href="#inicio" className="block order-2 md:order-1">
                    <img src="assets/images/LOGO-ALALBA-NAVBAR.png" alt="AL·ALBA Logo" className="h-8 md:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest order-3">
                    <a href="#inicio" className="hover:text-brand-brownLight transition-colors">Inicio</a>
                    <a href="#catalogo" className="hover:text-brand-brownLight transition-colors">Catálogo</a>
                    <a href="#contacto" className="hover:text-brand-brownLight transition-colors">Contacto</a>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-t border-brand-brown/10 py-8 px-6 flex flex-col space-y-6 text-center font-medium uppercase tracking-widest text-sm shadow-2xl mobile-menu-enter">
                    <a href="#inicio" onClick={() => setIsOpen(false)} className="py-2 mobile-link-premium transition-all">Inicio</a>
                    <a href="#catalogo" onClick={() => setIsOpen(false)} className="py-2 mobile-link-premium transition-all">Catálogo</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} className="py-2 mobile-link-premium transition-all">Contacto</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
