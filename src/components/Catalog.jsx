import React, { useState } from 'react';
import { products, categories } from '../data/products.js';

const Catalog = ({ onProductClick }) => {
    const [filter, setFilter] = useState("Todos");
    const filtered = filter === "Todos" ? products : products.filter(p => p.category === filter);

    return (
        <section id="catalogo" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nuestro Catálogo</h2>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${filter === cat ? 'bg-brand-brown text-brand-cream shadow-md' : 'bg-white text-brand-brown hover:bg-brand-creamDark'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(p => (
                    <div key={p.id} onClick={() => onProductClick(p)} className="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative h-80 sm:h-[450px] overflow-hidden">
                            <img src={p.image} className="w-full h-full object-cover transition-transform duration-500" alt={p.name} />
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-brown leading-tight">{p.name}</h3>
                                <span className="font-bold text-base sm:text-lg text-brand-brown ml-4 whitespace-nowrap">{p.price}€</span>
                            </div>
                            <p className="text-sm opacity-70 leading-relaxed italic">{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;
