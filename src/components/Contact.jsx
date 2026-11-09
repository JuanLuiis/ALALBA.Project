import React from 'react';

const Contact = () => (
    <section id="contacto" className="py-16 md:py-24 px-6 bg-brand-brown text-brand-cream">
        <div className="max-w-3xl mx-auto bg-brand-cream text-brand-brown rounded-[2.5rem] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <i data-lucide="mail" className="w-24 h-24 sm:w-32 sm:h-32"></i>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Estamos aquí para ti.</h2>
            <p className="text-base sm:text-lg opacity-80 mb-4 leading-relaxed">¿Te interesa alguna de nuestras piezas o tienes una idea en mente?</p>
            <p className="text-sm sm:text-base font-medium text-brand-brown/70 mb-10 sm:mb-12 italic">
                Puedes solicitar cualquier pieza directamente desde nuestro catálogo haciendo clic en el producto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <a href="https://wa.me/34695604563" target="_blank" className="flex items-center justify-center gap-3 p-4 bg-brand-brown text-brand-cream rounded-full shadow-sm hover:bg-brand-brownLight transition-all group">
                    <i data-lucide="message-circle" className="group-hover:scale-110 transition-transform"></i>
                    <span className="font-semibold">Contactar</span>
                </a>
                <a href="https://www.instagram.com/alalba.studio?obrf=NmEydHduMXVhaXhj" target="_blank" className="flex items-center justify-center gap-3 p-4 bg-brand-brown text-brand-cream rounded-full shadow-sm hover:bg-brand-brownLight transition-all group">
                    <i data-lucide="instagram" className="group-hover:scale-110 transition-transform"></i>
                    <span className="font-semibold">Visitar Instagram</span>
                </a>
            </div>
        </div>
    </section>
);

export default Contact;
