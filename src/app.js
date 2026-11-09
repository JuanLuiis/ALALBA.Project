import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { products } from './data/products.js';

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Initializing icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, [selectedProduct]);

    return (
        <div className="min-h-screen font-sans">
            <Navbar />
            <Hero />
            <Values />
            <Catalog onProductClick={(p) => setSelectedProduct(p)} />
            <Contact />
            <Footer />

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

// Export for production or just render in app.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
