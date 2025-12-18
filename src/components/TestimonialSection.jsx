import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Martínez",
      role: "Remodelación de cocina integral",
      photo:
        "https://randomuser.me/api/portraits/men/32.jpg",
      comment:
        "El cambio fue impresionante. Mi cocina pasó de ser un espacio viejo a uno moderno y funcional. Cumplieron tiempos, calidad y cada detalle fue cuidado.",
    },
    {
      id: 2,
      name: "Ana Pérez",
      role: "Construcción de cocina a medida",
      photo:
        "https://randomuser.me/api/portraits/women/44.jpg",
      comment:
        "Desde el diseño hasta la instalación todo fue perfecto. Me asesoraron en materiales y el resultado superó mis expectativas.",
    },
    {
      id: 3,
      name: "Juan Rodríguez",
      role: "Remodelación completa",
      photo:
        "https://randomuser.me/api/portraits/men/65.jpg",
      comment:
        "Trabajo limpio, materiales de calidad y un trato muy profesional. Recomiendo totalmente su servicio para cualquier proyecto de cocina.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Clientes Satisfechos
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            La opinión de nuestros clientes respalda la calidad, el diseño
            y la dedicación que ponemos en cada cocina.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
            >
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{t.comment}”
              </p>

              <div className="flex items-center mt-auto">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
