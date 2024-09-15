
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const labs = [
  {
    id: "lab1",
    name: "Laboratorio de Cromatografía",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab1.svg",
  },
  {
    id: "lab2",
    name: "Laboratorio de XPS",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab2.svg",
  },
  {
    id: "lab3",
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab3.svg",
  },
  {
    id: "lab4",
    name: "Laboratorio de Pruebas Mecánicas",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab4.svg",
  },
  {
    id: "lab5",
    name: "Laboratorio de Difracción de Rayos X",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab5.svg",
  },
  {
    id: "lab6",
    name: "Laboratorio de Resonancia Magnética Nuclear",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab6.svg",
  },
  {
    id: "lab7",
    name: "Laboratorio Universitario de Microscopía Electrónica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab7.svg",
  },
  {
    id: "lab8",
    name: "Laboratorio de Reología y Caracterización Fisicoquímica del Petróleo",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab8.svg",
  },
  {
    id: "lab9",
    name: "Laboratorio de Nanofibras para Ingeniería de Tejidos",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab9.svg",
  },
  {
    id: "lab10",
    name: "Laboratorio de Análisis Químico Elemental",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab10.svg",
  },
  {
    id: "lab11",
    name: "Laboratorio de Procesamiento de Polímeros",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab11.svg",
  },
  {
    id: "lab12",
    name: "Laboratorio de Análisis Térmico",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab12.svg",
  },
  {
    id: "lab13",
    name: "Laboratorio de Espectroscopía",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab13.svg",
  },
  {
    id: "lab14",
    name: "Laboratorio de Microscopía Electrónica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab14.svg",
  },
];

const Card = ({ lab }) => {
  return (
    <div className="relative group overflow-hidden shadow-lg opacity-0 translate-y-10 animate-on-scroll transition-all duration-700">
      {/* Image */}
      <img
        src={lab.imageUrl}
        alt={lab.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4">
        {/* Dynamic link */}
        <Link to={`/laboratorios/${lab.id}`} className="text-white font-semibold flex items-center">
          <span className="mr-2">Learn more</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

// CardGrid component
const CardGrid = ({ labs }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          // Stagger the animation based on the index
          setTimeout(() => {
            element.classList.add("opacity-100", "translate-y-0");
          }, index * 100); // Staggering animation by 100ms per card
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount in case elements are already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
      {labs.map((lab, index) => (
        <Card key={index} lab={lab} />
      ))}
    </div>
  );
};


// TwoColumnLayout for larger screens
const TwoColumnLayout = () => (
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h1 className="text-4xl font-bold text-center mt-32 mb-8 text-[var(--primary-color)]">
        Proceso de solicitud de servicios
      </h1>
      <img
        src="/lab/instructivo_servicios.svg"
        alt="Description of image"
        className="w-full h-auto max-w-full px-6 mx-auto"
      />
    </div>
    <div>
      <h1 className="text-4xl font-bold text-center mt-32 mb-8 text-[var(--primary-color)]">
        Documentación
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <a
          href="/lab/carta-solicitud-de-servicios.docx"
          download
          className="bg-transparent hover:bg-blue-500 text-[var(--primary-color)] font-semibold hover:text-white py-2 px-4 border-2 border-[var(--primary-color)] hover:border-transparent rounded inline-flex items-center"
        >
          <img src="/lab/documenticon.svg" alt="icon" className="w-8 h-8 mr-2" />
          <span>Carta de Solicitud de Servicios</span>
        </a>
        <a
          href="/lab/recepcion-_muestras_19.xlsx"
          download
          className="bg-transparent hover:bg-blue-500 text-[var(--primary-color)] font-semibold hover:text-white py-2 px-4 border-2 border-[var(--primary-color)] hover:border-transparent rounded inline-flex items-center"
        >
          <img src="/lab/documenticon.svg" alt="icon" className="w-8 h-8 mr-2" />
          <span>Formato de Recepción de Muestras</span>
        </a>
      </div>
    </div>
  </div>
);

// SingleColumnLayout for smaller screens
const SingleColumnLayout = () => (
  <div>
    <div>
      <h1 className="text-4xl font-bold text-center mt-32 mb-8 text-[var(--primary-color)]">
        Proceso de solicitud de servicios
      </h1>
      <img
        src="/lab/instructivo_servicios.svg"
        alt="Description of image"
        className="w-full h-auto max-w-full px-10 mx-auto"
      />
    </div>
    <div className="mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-[var(--primary-color)]">
        Documentación
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <a
          href="/lab/carta-solicitud-de-servicios.docx"
          download
          className="bg-transparent hover:bg-blue-500 text-[var(--primary-color)] font-semibold hover:text-white py-2 px-4 border-2 border-[var(--primary-color)] hover:border-transparent rounded inline-flex items-center"
        >
          <img src="/lab/documenticon.svg" alt="icon" className="w-8 h-8 mr-2" />
          <span>Carta de Solicitud de Servicios</span>
        </a>
        <a
          href="/lab/recepcion-_muestras_19.xlsx"
          download
          className="bg-transparent hover:bg-blue-500 text-[var(--primary-color)] font-semibold hover:text-white py-2 px-4 border-2 border-[var(--primary-color)] hover:border-transparent rounded inline-flex items-center"
        >
          <img src="/lab/documenticon.svg" alt="icon" className="w-8 h-8 mr-2" />
          <span>Formato de Recepción de Muestras</span>
        </a>
        <p className="text-xl font-bold text-[var(--primary-color)] mt-8">Política de Calidad de los Laboratorios</p>
        <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  </div>
);

const Laboratorios = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Define a handler to check window size
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200); // Use your breakpoint (1200px here)
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Check size on component mount
    handleResize();

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header title="Laboratorios" image="https://www.derechosautor.com/index_archivos/images/patente.jpg" />
      <div className="w-full px-10 pb-24">
        <div className="place-content-center mx-10">
          <p className="text-justify text-lg mt-6">
            El Instituto de Investigaciones en Materiales a través de la Secretaría de Vinculación ofrece servicios analíticos y tecnológicos al sector público y privado...
          </p>
          <p className="text-justify text-lg mt-6">
            Los laboratorios del IIM, encargados de la prestación de servicios técnicos, están integrados por personal altamente calificado...
          </p>
        </div>

        <CardGrid labs={labs} />

        {/* Conditionally render based on screen size */}
        {isLargeScreen ? <TwoColumnLayout /> : <SingleColumnLayout />}
        {isLargeScreen ? (
          <div>
            <p className="text-xl font-bold text-[var(--primary-color)] mt-20">
              Política de Calidad de los Laboratorios
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Laboratorios;
