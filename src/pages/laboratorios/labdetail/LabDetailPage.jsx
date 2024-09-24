import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import labData from '../../../data/labData.json';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-gray-200">
      <button
        className="w-full text-left p-4 bg-transparent hover:bg-gray-200 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ${isOpen ? 'max-h-full' : 'max-h-0'} overflow-hidden`}
      >
        <div className="p-4 text-gray-700">{content}</div>
      </div>
    </div>
  );
};



const Accordion = ({ items }) => (
  <div className="max-w-full p-2 mx-auto mt-0">
    {items.map((item, index) => (
      <AccordionItem key={index} title={item.title} content={item.content} />
    ))}
  </div>
);

const ApplicationCard = ({ title, description }) => (
  <div className="bg-transparent p-6">
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const LabDetailPage = () => {
  const { labId } = useParams(); // Get labId from URL
  const [lab, setLab] = useState(null);

  useEffect(() => {
    const selectedLab = labData.find((lab) => lab.id === labId);
    setLab(selectedLab);
  }, [labId]);

  if (!lab) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  const accordionItems = lab.services?.length
  ? lab.services.map((service) => ({
      title: service.title,
      content: (
        <>
          <p className="mb-4 text-gray-600">{service.description}</p>
          <div className="overflow-y-auto max-h-[60vh]">
            {/* Ensure the table uses available width without horizontal scroll */}
            <table className="table-fixed w-full text-left border-collapse bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="p-4 text-gray-600 font-semibold">Equipo</th>
                  <th className="p-4 text-gray-600 font-semibold">Muestra</th>
                </tr>
              </thead>
              <tbody>
                {service.equipment.map((eq, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-100 transition-colors duration-300 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="p-4 text-gray-700 break-words">{eq.name}</td>
                    <td className="p-4 text-gray-700 break-words">{eq.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    }))
  : [];

  return (
    <div className="min-h-screen bg-white relative">

      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 20%, rgba(230,240,255,0.5) 40%, rgba(200,220,255,0.3) 60%, rgba(180,200,255,0.2) 80%),
            radial-gradient(circle at 20% 20%, rgba(240,240,255,0.2), transparent 70%),
            radial-gradient(circle at 80% 80%, rgba(240,240,255,0.2), transparent 70%)
          `,
        }}
      ></div>

      <div className="relative z-10">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-2 py-8 mb-10">
          <header className="space-y-4">
            <h1 className="text-6xl font-bold text-[var(--primary-color)]">{lab.name}</h1>
          </header>
        </section>
  
        {/* Mission Section */}
        {lab.mission && lab.mission.length > 0 && (
          <section className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-4 mb-4">Misión</h2>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">{lab.mission}</p>
          </section>
        )}
  
        {/* Research Lines Section */}
        {lab.researchLines && lab.researchLines.length > 0 && (
          <section className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-4 mb-4">Líneas de Investigación</h2>
            {Array.isArray(lab.researchLines) ? (
              <ul className="list-disc list-inside text-lg text-gray-700">
                {lab.researchLines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-gray-700 text-justify leading-relaxed">{lab.researchLines}</p>
            )}
          </section>
        )}
  
        {/* Services and Equipment Section */}
        {lab.services && lab.services.length > 0 && (
          <section className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-4 mb-4">Servicios y Equipo</h2>
            <Accordion items={accordionItems} />
          </section>
        )}
  
        {/* Photo Gallery Section */}
        {lab.gallery && lab.gallery.length > 0 && (
          <section className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-4 mb-4">Galería de Fotos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {lab.gallery.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
  
        {/* Full-width Aplicaciones Section */}
        {lab.applications && lab.applications.length > 0 && (
          <section className="relative w-full space-y-4 mb-16">
            <div className="absolute inset-0 bg-[var(--primary-color)] opacity-95 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-repeat-round z-0"
              style={{ backgroundImage: 'url("/lab/labg.jpg")' }}
            ></div>
  
            <div className="relative z-20 px-8">
              <div style={{ height: '50px' }}></div>
              <h2 className="text-4xl font-semibold text-[#6fbc7e] pb-4 mb-4">Aplicaciones</h2>
              <div className="space-y-4 px-10">
                {lab.applications.map((app, index) => (
                  <ApplicationCard key={index} title={app.title} description={app.description} />
                ))}
              </div>
              <div style={{ height: '50px' }}></div>
            </div>
          </section>
        )}
  
        {/* Lab Manager Section */}
        {lab.labManager && lab.labManager.name && (
          <section className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-4 mb-4">Responsable del Laboratorio</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={lab.labManager.photo}
                alt="Responsable del laboratorio"
                className="w-24 h-24 rounded-full shadow-lg object-cover"
              />
              <div className="text-justify md:text-justify">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{lab.labManager.name}</h3>
                <div className="text-gray-700">
                  {Array.isArray(lab.labManager.description) ? (
                    lab.labManager.description.map((desc, index) => (
                      <p key={index} className="mb-2">{desc}</p>
                    ))
                  ) : (
                    <p>{lab.labManager.description}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
  
};

export default LabDetailPage;
