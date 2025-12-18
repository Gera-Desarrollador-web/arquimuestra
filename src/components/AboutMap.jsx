import React from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function AboutMap() {
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Sobre Nuestro Estudio
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl grid md:grid-cols-2 gap-10">
        {/* INFO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TbBuildingSkyscraper className="text-3xl text-gray-800" />
            <h3 className="text-xl font-semibold">
              Arquitectura & Construcción
            </h3>
          </div>

          <div className="rounded-xl overflow-hidden shadow mb-5">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="Arquitectura y construcción"
              className="w-full h-60 object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Somos un estudio especializado en arquitectura, construcción y
            diseño de cocinas a medida. Transformamos espacios combinando
            funcionalidad, estética y materiales de alta calidad para crear
            ambientes modernos, duraderos y hechos para disfrutar.
          </p>

          <ul className="mt-4 text-gray-700 space-y-2">
            <li>• Diseño arquitectónico personalizado</li>
            <li>• Construcción y remodelación integral</li>
            <li>• Cocinas modernas y funcionales</li>
            <li>• Materiales premium y acabados de alta calidad</li>
          </ul>

          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* MAP */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Dónde nos encontramos
          </h3>

          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.603464301502!2d-99.133208!3d19.432607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c553c7ddb%3A0x9c006e64546a1e0f!2sCDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-4 text-gray-700 space-y-1">
            <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad, País</p>
            <p><strong>Teléfono:</strong> +52 55 1234 5678</p>
            <p><strong>Horario:</strong> Lun - Vie, 9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
