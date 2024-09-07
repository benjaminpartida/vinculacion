import React, {useEffect, useState } from 'react';
import Header from '../../components/Header';
import SlideshowHeader2 from "../../assets/images/inicio/placeholder.jpg";

const labs = [
    {
      name: "Laboratorio de XPS",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab1.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab2.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab3.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab4.svg",
      link: "#",
    },
    {
      name: "Laboratorio de XPS",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab5.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab6.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab7.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab8.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab9.svg",
      link: "#",
    },
    {
      name: "Laboratorio de XPS",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab10.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab11.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab12.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab13.svg",
      link: "#",
    },
    {
      name: "Laboratorio de Fuerza Atómica",
      description: "Lorem Ipsum",
      imageUrl: "/lab/lab14.svg",
      link: "#",
    },
  ];

const Card = ({ person }) => {
    return (
      <div className="relative group overflow-hidden shadow-lg opacity-0 translate-y-10 animate-on-scroll transition-all duration-700">
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
        {labs.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    );
  };

const Laboratorios = () => {

  return (
    <div>
      <Header title="Laboratorios" image="https://www.derechosautor.com/index_archivos/images/patente.jpg" />
      <div className="w-full pl-6 pr-6 pb-24">
        <CardGrid labs={labs} />
      </div>
    </div>


  );
};

export default Laboratorios;
