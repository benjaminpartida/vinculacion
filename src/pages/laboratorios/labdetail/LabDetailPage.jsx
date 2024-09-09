import React from "react";

const LabDetailPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-16">
      {/* Mission Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Misión
        </h2>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Nuestra misión es fomentar la investigación de vanguardia en el campo
          de los materiales, contribuyendo al desarrollo científico y
          tecnológico mediante la innovación y la colaboración con la industria
          y la academia.
        </p>
      </section>

      {/* Research Lines Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Líneas de Investigación
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Nanotecnología</h3>
            <p className="text-gray-700">
              Investigación sobre propiedades y aplicaciones de materiales a
              escala nanométrica.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Materiales Avanzados</h3>
            <p className="text-gray-700">
              Desarrollo de nuevos materiales con propiedades mejoradas para la
              industria tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Services and Equipment Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Servicios y Equipo
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Análisis Químico</li>
          <li>Difracción de Rayos X</li>
          <li>Ensayos Mecánicos</li>
          <li>Microscopía Electrónica de Barrido</li>
        </ul>
        <p className="text-lg text-gray-700">
          El laboratorio está equipado con la última tecnología para realizar
          pruebas avanzadas y proporcionar servicios analíticos de alta
          calidad.
        </p>
      </section>

      {/* Photo Gallery Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Galería de Fotos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Equipamiento"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Investigación"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Laboratorio"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Applications Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Aplicaciones
        </h2>
        <div className="space-y-4">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Aplicación en la Industria Automotriz
            </h3>
            <p className="text-gray-700">
              Nuestros materiales avanzados son esenciales en el desarrollo de
              componentes más ligeros y resistentes para la industria
              automotriz.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Tecnologías Médicas</h3>
            <p className="text-gray-700">
              Aplicaciones en la biomedicina mediante el uso de materiales
              biocompatibles para implantes y dispositivos médicos.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Manager Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">
          Responsable del Laboratorio
        </h2>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Responsable del laboratorio"
            className="w-24 h-24 rounded-full shadow-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Dr. John Doe</h3>
            <p className="text-gray-700">Email: johndoe@laboratory.com</p>
            <p className="text-gray-700">Teléfono: (123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabDetailPage;
