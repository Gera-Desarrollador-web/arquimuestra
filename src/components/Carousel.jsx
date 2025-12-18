import React, { useState, useEffect } from "react";

export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: "Diseño de Cocinas a Medida",
            description: "Arquitectura funcional que combina estética, ergonomía y materiales de alta calidad.",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Construcción y Detalle",
            description: "Cada proyecto se ejecuta con precisión, cuidando cada unión y acabado.",
            image: "https://honduras.argos.co/wp-content/uploads/2023/11/Conoce-los-tipos-de-albanileria-ArgosHonduras-img-noticia.jpg",
        },
        {
            id: 3,
            title: "Espacios que Inspiran",
            description: "Cocinas pensadas para vivirlas, no solo para mirarlas.",
            image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1600&auto=format&fit=crop",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-xl">

                {/* Slides */}
                <div
                    className="flex transition-transform duration-[800ms] ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[380px] md:h-[460px] object-cover"
                            />

                            {/* Overlay elegante */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                            {/* Texto */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-xl px-8 md:px-14 text-white">
                                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-base md:text-lg text-white/85">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles */}
                <button
                    onClick={() =>
                        setIndex(index === 0 ? slides.length - 1 : index - 1)
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full border border-white/30
                        text-white backdrop-blur-sm hover:bg-white/10 transition"
                >
                    ‹
                </button>

                <button
                    onClick={() => setIndex((index + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full border border-white/30
                        text-white backdrop-blur-sm hover:bg-white/10 transition"
                >
                    ›
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={`h-[3px] w-8 rounded-full transition-all
                                ${i === index ? "bg-white" : "bg-white/40"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
