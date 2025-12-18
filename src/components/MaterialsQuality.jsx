import React from "react";
import {
  TbWood,
  TbTools,
  TbRulerMeasure,
  TbShieldCheck,
} from "react-icons/tb";

const materials = [
  {
    title: "Materiales Premium",
    description:
      "Trabajamos con maderas, laminados y superficies de alta resistencia, seleccionados para garantizar durabilidad y estética.",
    icon: TbWood,
  },
  {
    title: "Herrajes de Alta Calidad",
    description:
      "Utilizamos herrajes certificados con cierre suave, alta capacidad de carga y larga vida útil.",
    icon: TbTools,
  },
  {
    title: "Acabados de Precisión",
    description:
      "Cada detalle es cuidado al máximo: cortes limpios, uniones perfectas y acabados profesionales.",
    icon: TbRulerMeasure,
  },
  {
    title: "Garantía y Confianza",
    description:
      "Nuestros proyectos están respaldados por garantía y estándares de calidad comprobados.",
    icon: TbShieldCheck,
  },
];

export default function MaterialsQuality() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Materiales y Calidad
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Diseñamos y construimos cocinas que combinan estética, resistencia
            y funcionalidad, utilizando materiales cuidadosamente seleccionados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-8 shadow-lg text-center
                  hover:shadow-xl transition
                "
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="
                    w-16 h-16 rounded-full
                    bg-gray-100
                    flex items-center justify-center
                  ">
                    <Icon className="text-3xl text-gray-800" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
