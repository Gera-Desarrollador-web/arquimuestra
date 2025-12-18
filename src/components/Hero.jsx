export default function Hero() {
    return (
        <section
            id="home"
            className="
    relative max-w-7xl mx-auto px-6
    py-14 md:py-24
    grid grid-cols-1 md:grid-cols-2
    gap-12 items-center
  "
        >

            {/* Texto */}
            <div className="z-10">
                <span className="uppercase tracking-widest text-sm text-gray-500">
                    Arquitectura & Construcción
                </span>

                <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
                    Cocinas diseñadas <br />
                    <span className="text-neutral-600">para vivirse</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-xl">
                    Diseñamos y construimos cocinas a medida combinando arquitectura,
                    funcionalidad y materiales de alta calidad.
                    Transformamos espacios en experiencias.
                </p>

                <div className="mt-10 flex items-center gap-6">
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-semibold hover:opacity-70 transition"
                    >
                        Solicitar diseño
                        <span>→</span>
                    </a>

                    <a
                        href="#proyectos"
                        className="text-sm text-gray-500 hover:text-gray-800 transition"
                    >
                        Ver proyectos
                    </a>
                </div>
            </div>

            {/* Imagen */}
            <div className="relative">
                <div className="absolute inset-0 bg-black/10 rounded-2xl" />

                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Diseño de cocina moderna"
                    className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
                    +15 años diseñando espacios
                </div>
            </div>
        </section>
    );
}
