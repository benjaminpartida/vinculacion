import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import labData from '../../../data/labData.json';
import { MdPadding } from 'react-icons/md';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-gray-200">
      <button
        className="w-full text-left p-4 bg-transparent hover:bg-gray-200 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium ">{title}</span>
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
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="p-4 text-gray-700">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => (
  <div className="max-w-full p-2 mx-auto mt-10">
    {items.map((item, index) => (
      <AccordionItem key={index} title={item.title} content={item.content} />
    ))}
  </div>
);

const ApplicationCard = ({ title, description }) => (
  <div className="bg-transparent p-6 ">
    <h3 className="text-xl font-semibold mb-2 text-white" >{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const LabDetailPage = () => {
  const { labId } = useParams();  // Get labId from URL
  const [lab, setLab] = useState(null);

  useEffect(() => {
    const selectedLab = labData.find(lab => lab.id === labId);
    setLab(selectedLab);
  }, [labId]);

  if (!lab) {
    return <div>Loading...</div>;  // Display loading message while data is being fetched
  }

  // Prepare accordion items dynamically for services
  const accordionItems = lab.services.map(service => ({
    title: service.title,
    content: (
      <>
        <p>{service.description}</p>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Equipo</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Rango</th>
            </tr>
          </thead>
          <tbody>
            {service.equipment.map((eq, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{eq.name}</td>
                <td className="border border-gray-300 p-2">{eq.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  }));

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-6xl font-bold text-[var(--primary-color)]">{lab.name}</h1>
      </header>

      {/* Mission Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Misión</h2>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">{lab.mission}</p>
      </section>

      {/* Research Lines Section
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Líneas de Investigación</h2>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">{lab.researchLines}</p>
      </section> */}
      {/* Research Lines Section with Flexibility */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Líneas de Investigación</h2>
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


      {/* Services and Equipment Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Servicios y Equipo</h2>
        <Accordion items={accordionItems} />
      </section>

      {/* Photo Gallery Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Galería de Fotos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {lab.gallery.map((image, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Applications Section
        <section className="space-y-4 bg-blue-900 -mx-8">
          <div style={{ height: '50px' }}></div>
          <h2 className="text-4xl font-bold text-white pb-2 px-8">Aplicaciones</h2>
          <div className="space-y-4 px-10">
            {lab.applications.map((app, index) => (
              <ApplicationCard key={index} title={app.title} description={app.description} />
            ))}
          </div>
          
          <div style={{ height: '50px' }}></div>
        </section> */}

      <section className="relative space-y-4 -mx-8">
        {/* Background image and overlay */}
        <div className="absolute inset-0 bg-[var(--primary-color)] opacity-95 z-10 "></div>
        <div
          className="absolute inset-0 bg-cover bg-repeat-round z-0 "
          style={{ backgroundImage: 'url("/lab/labg.jpg")' }}
        ></div>

        {/* Section content */}
        <div className="relative z-20">
          <div style={{ height: '50px' }}></div>
          <h2 className="text-4xl font-semibold text-[#6fbc7e] pb-2 px-8">Aplicaciones</h2>
          <div className="space-y-4 px-10">
            {lab.applications.map((app, index) => (
              <ApplicationCard key={index} title={app.title} description={app.description} />
            ))}
          </div>
          <div style={{ height: '50px' }}></div>
        </div>
      </section>


      {/* Lab Manager Section */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 border-b-2 pb-2">Responsable del Laboratorio</h2>
        <div className="flex items-center space-x-4">
          <img
            src={lab.labManager.photo}
            alt="Responsable del laboratorio"
            className="w-24 h-24 rounded-full shadow-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{lab.labManager.name}</h3>
            <div className="text-gray-700">
              {/* Check if description is an array or a string */}
              {Array.isArray(lab.labManager.description) ? (
                lab.labManager.description.map((desc, index) => (
                  <p key={index} className="mb-2">
                    {desc}
                  </p>
                ))
              ) : (
                <p>{lab.labManager.description}</p>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LabDetailPage;
