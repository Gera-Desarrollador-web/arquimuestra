import React from "react";

const projects = [
  {
    id: 1,
    title: "Trabajo de remodelación en montereal",
    before:
      "https://mx.habcdn.com/photos/business/medium/img-20170816-171211719-299035.jpg",
    after:
      "https://8820244.fs1.hubspotusercontent-na1.net/hubfs/8820244/shutterstock_1932352316.jpg",
  },
  {
    id: 2,
    title: "Cocina remodelada en quintana roo",
    before:
      "https://www.shutterstock.com/image-photo/parker-colorado-usajanuary-11-2023a-600nw-2560151447.jpg",
    after:
      "https://www.docrysdc.es/sites/default/files/inline-images/cocinas-modernas.jpg",
  },
];

export default function BeforeAfter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Antes y Después
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Transformamos espacios antiguos en cocinas modernas, funcionales
          y diseñadas a la medida.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-10">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <h3 className="text-lg font-semibold px-6 py-4 text-center tracking-wide">
              {p.title}
            </h3>

            {/* Before / After columns */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* BEFORE */}
              <div className="relative h-[360px]">
                <img
                  src={p.before}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  Antes
                </span>
              </div>

              {/* AFTER */}
              <div className="relative h-[360px]">
                <img
                  src={p.after}
                  alt="Después"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  Después
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
