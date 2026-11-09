import React, { useState, useEffect } from 'react';

const ProductModal = ({ product, onClose, onConfirm }) => {
    const [customerName, setCustomerName] = useState("");
    const [isNaming, setIsNaming] = useState(false);

    useEffect(() => {
        // This part is tricky with Babel standalone/React.umd without a way to call lucide.createIcons
        // on a specific element easily without a ref or direct DOM access.
        // We will call lucide globally in the app.js.
    }, []);

    const handleWhatsAppOrder = () => {
        const phoneNumber = "34695604563";
        const catalogUrl = `${window.location.origin}${window.location.pathname}#catalogo`;
        const nameToUse = customerName.trim() || "Cliente";
        const message = `¡Hola AL·ALBA! Mi nombre es *${nameToUse}*. Estoy interesado en adquirir la pieza: *${product.name}* con un valor de *${product.price}€*. \n\nPuedes ver el catálogo completo aquí: ${catalogUrl}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
    };

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-brand-cream rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl transform transition-all animate-scale-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-3 bg-brand-brown text-brand-cream rounded-full hover:bg-brand-brownLight transition-all shadow-xl active:scale-90"
                    aria-label="Cerrar"
                >
                    <i data-lucide="x" className="w-6 h-6"></i>
                </button>

                <div className="flex flex-col md:grid md:grid-cols-2 overflow-y-auto max-h-[85vh] md:max-h-none">
                    <div className="h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] bg-white flex items-center justify-center shrink-0">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain drop-shadow-xl" />
                    </div>
                    <div className="p-6 sm:p-12 flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest font-bold opacity-60">{product.category}</span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown">{product.name}</h2>
                        </div>
                        <p className="text-base sm:text-lg opacity-80 leading-relaxed italic">{product.description}</p>
                        <div className="text-2xl sm:text-3xl font-bold text-brand-brown">{product.price}€</div>

                        {!isNaming ? (
                            <button
                                onClick={() => setIsNaming(true)}
                                className="bg-brand-brown text-brand-cream px-8 py-4 rounded-full font-semibold text-center hover:bg-brand-brownLight transition-all transform hover:-translate-y-1 shadow-lg block w-fit"
                            >
                                Pedir por WhatsApp
                            </button>
                        ) : (
                            <div className="space-y-4 animate-fade-in">
                                <p className="text-sm font-medium text-brand-brown">Para personalizar tu pedido, por favor dinos tu nombre:</p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="text"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        placeholder="Tu nombre..."
                                        className="flex-1 px-4 py-3 rounded-full border-2 border-brand-brown/20 focus:border-brand-brown outline-none bg-white/50 transition-all"
                                        style={{
                                            color: "#352319",
                                            WebkitTextFillColor: "#352319"
                                        }}
                                        autoFocus
                                    />
                                    <button
                                        onClick={handleWhatsAppOrder}
                                        disabled={!customerName.trim()}
                                        className={`px-6 py-3 rounded-full font-semibold transition-all ${customerName.trim() ? 'bg-brand-brown text-brand-cream hover:bg-brand-brownLight shadow-md' : 'bg-brand-brown/30 text-brand-brown/50 cursor-not-allowed'}`}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsNaming(false)}
                                    className="text-xs underline opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    Volver
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
