import React from 'react';

const Values = () => (
    <section className="py-16 md:py-24 bg-brand-creamDark/30 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
                { title: "Diseño con propósito", icon: "heart", desc: "Cada pieza es pensada para inspirar paz y reflexión." },
                { title: "Tecnología e innovación", icon: "cpu", desc: "Utilizamos la vanguardia de la impresión 3D para máxima precisión." },
                { title: "Devoción en cada detalle", icon: "sparkles", desc: "Cuidado artesanal en el acabado final de cada artículo." }
            ].map((val, i) => (
                <div key={i} className="text-center p-8 rounded-2xl bg-brand-cream hover:shadow-md transition-shadow group">
                    <div className="w-16 h-16 bg-brand-brown text-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide={val.icon}></i>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-4">{val.title}</h3>
                    <p className="opacity-70 text-sm sm:text-base">{val.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Values;
