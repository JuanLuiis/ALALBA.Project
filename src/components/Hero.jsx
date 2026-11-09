import React from 'react';

const Hero = () => (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in space-y-6 md:space-y-8 text-center md:text-left z-10">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-brown">
                    Fe, Diseño y <br className="hidden sm:block" /><span className="italic font-normal">Devoción</span> en cada detalle.
                </h1>
                <p className="text-base sm:text-lg text-brand-brown opacity-80 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    En <strong className="font-bold">AL·ALBA</strong> damos forma a la fe a través de la impresión 3D. Creamos piezas decorativas y artículos religiosos con dedicación, cuidando cada detalle para convertir la devoción en algo que puedas tener siempre cerca.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href="#catalogo" className="bg-brand-brown text-brand-cream px-8 py-4 rounded-full font-semibold text-center hover:bg-brand-brownLight transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto">
                        Explorar Catálogo
                    </a>
                    <a href="#contacto" aria-label="Ir a la sección de contacto" className="border-2 border-brand-brown text-brand-brown px-8 py-4 rounded-full font-semibold text-center hover:bg-brand-brown hover:text-brand-cream transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                        Contactar
                    </a>
                </div>
            </div>
            <div className="relative fade-in" style={{animationDelay: '0.3s'}}>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-creamDark rounded-full blur-3xl opacity-50"></div>

                <div className="relative z-10 flex justify-center items-center w-[120%] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                    <div className="relative transition-all duration-500 float-logo">
                        <img
                            src="assets/images/LOGO-ALALBA.png"
                            className="w-[800px] max-w-none h-auto object-contain transition-all duration-700 hover:scale-105 relative z-10"
                            alt="Logo AL·ALBA"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
