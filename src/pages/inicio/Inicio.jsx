// import React from 'react';

// const Inicio = () => {
//   return (
//     <div className="p-4 ">
//       <h2 className="text-2xl font-bold">Inicio</h2>
//       <p>This is the content of Section 1.</p>
//       <p>This is the content of Section 1.</p>
//       <p>This is the content of Section 1.</p>
//       <p>This is the content of Section 1.</p>
//       <p>This is the content of Section 1.</p>
//       <p>This is the content of Section 1.</p>
//     </div>

//   );
// };

// export default Inicio;
import React, { useState, useEffect, useRef } from "react";
import img1 from "../../assets/images/inicio/_mg_8971.jpg";
import img2 from "../../assets/images/inicio/_mg_8827-u161-fr2.jpg";
import img3 from "../../assets/images/inicio/_mg_8852-u169-fr.jpg";
import img4 from "../../assets/images/inicio/_mg_8994-u166-fr2.jpg";
import SlideshowHeader1 from "../../assets/images/inicio/iim-5.jpg"; //esta dms grande esta imagen
import SlideshowHeader2 from "../../assets/images/inicio/placeholder.jpg"; //tmb grande

const people = [
  {
    name: "Laboratorio de XPS",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-02-02.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-03-03.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-04-04.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-05-05.svg",
    link: "#",
  },
  {
    name: "Laboratorio de XPS",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-06-06.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-07-07.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-04-04.svg",
    link: "#",
  },
  {
    name: "Laboratorio de Fuerza Atómica",
    description: "Lorem Ipsum",
    imageUrl: "/lab/lab-05-05.svg",
    link: "#",
  },
  // Add more people here...
];

const scienceCards = [
  {
    name: "Finalmente México tendrá su propio aceledor de partículas",
    description: "Lorem Ipsum",
    imageUrl: "/ciencia/sincroton.jpg",
    link: "#",
  },
  {
    name: "Un nuevo nanomaterial reemplaza al mercurio para producir luz UVC",
    description: "Lorem Ipsum",
    imageUrl: "/ciencia/luzuv.jpg",
    link: "#",
  },
  // {
  //   name: "Placeholder",
  //   description: "Lorem Ipsum",
  //   imageUrl: "/lab/lab-04-04.svg",
  //   link: "#",
  // },

  // Add more people here...
];

const collaborators = [
  { id: 2, logo: "./icons/bdm.png" },
  { id: 3, logo: "./icons/biocriss.jpg" },
  { id: 1, logo: "./icons/ine.jpg" },
  { id: 4, logo: "./icons/ciatec.png" },
  { id: 5, logo: "./icons/rehab.jpg" },
];

const items = [
  {
    school: "SERVICIOS A LA INDUSTRIA",
    title:
      "Impulsamos la vinculación del Instituto con el sector empresarial y con instituciones públicas y privadas, a través de la prestación de servicios ofrecidos por los diferentes departamentos que conforman al Instituto.",
    img: img1,
    link: "/servicios-a-la-industria", // specify the link
  },
  {
    school: "PATENTES",
    title:
      "Apoyamos en la protección de propiedad intelectual de los trabajos desarrollados por investigadores y técnicos del Instituto, además de facilitar la transferencia de tecnología al sector público y privado.",
    img: img2,
    link: "/patentes", // specify the link
  },
  {
    school: "CONVENIOS",
    title:
      "Establecemos convenios con la industria, organismos públicos y privados e instituciones de educación superior mediante la realización de proyectos de investigación y/o prestación de servicios.",
    img: img3,
    link: "/convenios", // specify the link
  },
  {
    school: "INNOVACIÓN Y EMPRENDIMIENTO",
    title:
      "En el IIM contamos con herramientas y modelos de innovación y emprendimiento que apoyan a la academia, la industria y el gobierno en el desarrollo de productos y servicios de alto impacto. Con el propósito de validar la pertinencia de las investigaciones en el mercado y procurar reducir la tasa de fracaso de los proyectos empresariales antes de iniciar operaciones.",
    img: img4,
    link: "/innovacion", // specify the link
  },
];

const Slideshow = () => {
  const slides = [
    {
      title: "Secretaría de Vinculación",
      subtitle: "This is the subtitle for slide 1",
      ctaText: "Learn More",
      imageUrl: SlideshowHeader1,
    },
    {
      title: "Slide 2 Title",
      subtitle: "This is the subtitle for slide 2",
      ctaText: "Get Started",
      imageUrl: SlideshowHeader2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false); // Start with animation off

  useEffect(() => {
    // Trigger the animation after the component has mounted
    setTimeout(() => {
      setAnimateIn(true);
    }, 100); // Short delay to ensure the component has fully mounted
  }, []);

  const changeSlide = (direction) => {
    setAnimateIn(false); // Trigger fade out
    setTimeout(() => {
      setCurrentSlide((prevSlide) => {
        if (direction === "next") {
          return (prevSlide + 1) % slides.length;
        } else if (direction === "prev") {
          return (prevSlide - 1 + slides.length) % slides.length;
        }
        return prevSlide;
      });
      setAnimateIn(true); // Trigger fade in
    }, 500); // Match this with the duration of the transition
  };

  return (
    <div
      className="relative w-full h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Gradient */}
      <div
        className={`w-full h-full bg-cover bg-center flex items-center justify-start text-white transition-opacity duration-1000 ease-in-out ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 90%), url(${slides[currentSlide].imageUrl})`,
        }}
      >
        {/* Slideshow content */}
        <div
          className={`ml-16 max-w-xl text-left z-10 transform transition-all duration-1000 ease-in-out ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl mb-6">
            {slides[currentSlide].subtitle}
          </p>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md">
            {slides[currentSlide].ctaText}
          </button>
        </div>

        {/* Navigation Arrows */}
        <>
          <button
            onClick={() => changeSlide("prev")}
            className="absolute left-4 bottom-4 p-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white text-2xl"
          >
            &#10094;
          </button>
          <button
            onClick={() => changeSlide("next")}
            className="absolute left-16 bottom-4 p-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white text-2xl"
          >
            &#10095;
          </button>
        </>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const NewsItemList = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            setVisibleItems((prevVisibleItems) => [...prevVisibleItems, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Adjust the threshold as needed
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 p-5 pt-0">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a href={item.link} className="block">
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`flex items-center justify-between p-5 group transition-all duration-[1000ms] ease-out transform ${
                visibleItems.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-30px] opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="max-w-[60%]">
                <h4 className="text-gray-500 text-sm mb-1">{item.school}</h4>
                <h3 className="text-black text-lg font-bold relative">
                  {item.title}
                  <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-transparent group-hover:bg-black transition-background-color duration-300 ease"></span>
                </h3>
              </div>
              <div className="max-w-[35%] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[200px] h-[150px] object-cover rounded-sm transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          </a>
          {index < items.length - 1 && (
            <div className="border-t border-gray-300 my-1"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    {
      id: "benefits",
      title: "Misión",
      content:
        "Coadyuvar en la gestión de los procesos de generación, transferencia, aplicación y difusión del conocimiento científico y tecnológico del IIM, mediante la ejecución de mecanismos de vinculación de los grupos de investigación con el medio en general y el sector productivo en particular.",
    },
    {
      id: "selfDevelopment",
      title: "Visión",
      content:
        "Consolidar a la Secretaría de Vinculación del IIM como un área de apoyo para vincular al personal académico del Instituto con las empresas, las Instituciones de Educación Superior (IES), los Centros de Investigación (CI) y las entidades gubernamentales con el fin de fortalecer las áreas de desarrollo e innovación tecnológica en el área de los Materiales en respuesta a las necesidades del país.",
    },
    // { id: 'spirituality', title: 'Placeholder', content: 'Lorem Ipsum.' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 max-h-[350px]">
        {" "}
        {/* Set a lower max height for the image */}
        <img
          src="./placeholder.jpg"
          alt="Placeholder"
          className="w-full h-full object-cover rounded-lg shadow-md max-h-[350px]"
        />{" "}
        {/* Restrict the image's height */}
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 pl-6 flex flex-col">
        {" "}
        {/* Align content to the top left */}
        {/* Tabs */}
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${activeTab === tab.id ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]" : "text-gray-500"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">
            {tabs.find((tab) => tab.id === activeTab).title}
          </h2>
          <p className="text-gray-700">
            {tabs.find((tab) => tab.id === activeTab).content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ person }) => {
  return (
    <div className="relative group overflow-hidden shadow-lg animate-on-scroll">
      {/* Image */}
      <img
        src={person.imageUrl}
        alt={person.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4">
        <a
          href={person.link}
          className="text-white font-semibold flex items-center"
        >
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
        </a>
      </div>
    </div>
  );
};

const ScienceCard = ({ person }) => {
  return (
    <div className="rounded-md relative group overflow-hidden shadow-lg transform transition-all duration-700 ease-in-out opacity-0 translate-y-8 animate-on-scroll">
      {/* Image */}
      <img
        src={person.imageUrl}
        alt={person.name}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-transparent`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 50%)`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute bottom-0 left-0 p-4 w-full transition-all duration-700 ease-in-out group-hover:translate-y-[-30%]">
          <h3 className="text-white text-2xl font-bold mb-2">{person.name}</h3>
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out mb-4">
            {person.description}
          </p>
          <a
            href={person.link}
            className="text-white font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          >
            <span className="mr-2">Ver más</span>
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
          </a>
        </div>
      </div>
    </div>
  );
};

const ScienceCardGrid = ({ people }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setTimeout(() => {
            element.classList.add("opacity-100", "translate-y-[-20]");
          }, index * 100); // Staggering the animation by 150ms for each card
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {people.map((person, index) => (
        <ScienceCard key={index} person={person} />
      ))}
    </div>
  );
};

const CardGrid = ({ people }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setTimeout(() => {
            element.classList.add("opacity-100", "translate-y-[-20]");
          }, index * 150); // Staggering the animation by 150ms for each card
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {people.map((person, index) => (
        <Card key={index} person={person} />
      ))}
    </div>
  );
};

const Inicio = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* Slideshow Component */}
      <Slideshow />
      <div className="pt-0 pb-4 pl-4 pr-4">
        <TabbedSection />
        <h1 class="w-full flex-auto text-4xl font-bold text-slate-900 pl-4 pr-4 pt-10">
          Laboratorios
        </h1>
        <div className="p-6">
          <CardGrid people={people} />
        </div>
        <h1 class="w-full flex-auto text-4xl font-bold text-slate-900 pl-4 pr-4 pt-10">
          Nuestras Actividades
        </h1>
        <NewsItemList items={items} />
        <h1 class="w-full flex-auto text-4xl font-bold text-slate-900 pl-4 pr-4 pt-10">
          Próximos Eventos
        </h1>
        <h1 class="w-full flex-auto text-4xl font-bold text-slate-900 pl-4 pr-4 pt-10">
          Ciencia, Tecnología e Innovación
        </h1>
        <div className="p-6">
          <ScienceCardGrid people={scienceCards} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
