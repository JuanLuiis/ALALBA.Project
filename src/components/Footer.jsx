import React from 'react';

const Footer = () => (
    <footer className="py-12 px-6 border-t border-brand-brown/10 bg-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <img src="assets/images/LOGO-ALALBA-NAVBAR.png" alt="AL·ALBA Logo" className="h-8 md:h-12 w-auto object-contain mx-auto md:mx-0 mb-2" />
                <p className="text-sm opacity-60 italic">"Dando forma a la fe con tecnología y corazón."</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium uppercase tracking-widest">
                <a href="#inicio" className="hover:underline">Inicio</a>
                <a href="#catalogo" className="hover:underline">Catálogo</a>
                <a href="#contacto" className="hover:underline">Contacto</a>
            </div>
            <div className="text-xs opacity-50">
                © {new Date().getFullYear()} AL·ALBA. Todos los derechos reservados.
            </div>
        </div>
    </footer>
);

export default Footer;
