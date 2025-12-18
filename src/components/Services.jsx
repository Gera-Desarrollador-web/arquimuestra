import { GiTooth, GiToothbrush, GiSharpSmile } from "react-icons/gi";
import { FaTeethOpen, FaChild } from "react-icons/fa";
import { LiaTeethSolid } from "react-icons/lia";
import { CgSmileMouthOpen } from "react-icons/cg";
import { RiToothLine } from "react-icons/ri";
import { PiToothLight } from "react-icons/pi";





export default function Services() {
    const services = [
        {
            title: "Limpieza Dental Profesional",
            icon: <GiToothbrush className="text-blue-600 text-4xl" />,
            description: "Elimina sarro, placa y manchas para una sonrisa más sana.",
        },
        {
            title: "Ortodoncia",
            icon: <LiaTeethSolid  className="text-blue-600 text-4xl" />,
            description: "Corrige la posición de tus dientes con técnicas modernas.",
        },
        {
            title: "Blanqueamiento Dental",
            icon: <CgSmileMouthOpen  className="text-blue-600 text-4xl" />,
            description: "Aclara varios tonos tu sonrisa de manera segura.",
        },
        {
            title: "Resinas y Carillas",
            icon: <FaTeethOpen className="text-blue-600 text-4xl" />,
            description: "Mejora la forma, color y estética de tus dientes.",
        },
        {
            title: "Extracciones",
            icon: <GiTooth className="text-blue-600 text-4xl" />,
            description: "Extracciones simples y molares de forma segura.",
        },
        {
            title: "Endodoncia",
            icon: <RiToothLine  className="text-blue-600 text-4xl" />,
            description: "Tratamiento para eliminar el dolor y salvar la pieza dental.",
        },
        {
            title: "Implantología",
            icon: <PiToothLight  className="text-blue-600 text-4xl" />,
            description: "Implantes dentales para reemplazar piezas faltantes.",
        },
        {
            title: "Odontopediatría",
            icon: <FaChild className="text-blue-600 text-4xl" />,
            description: "Atención especializada para niños con un enfoque amigable.",
        },
    ];

    return (
        <section  className="py-16 bg-white" id="servicios">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Nuestros Servicios Dentales
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mt-4" >{service.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
