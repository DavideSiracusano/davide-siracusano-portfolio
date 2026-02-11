"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import mockupAnime from "../imgs/mockupAnime.png";
import mockupYugi from "../imgs/mockupYugi.png";
import mockupMovies from "../imgs/mockupMovies.png";
import mockupPokedex from "../imgs/mockupPokedex.png";
import mockupReactTodolist from "../imgs/mockupTodolist.png";
import mockupJS from "../imgs/mockupJS.png";
import start2impactLogo from "../imgs/start2impact-cover.jpg";
import mockupCasper from "../imgs/casper.png";
import mockupAIchat from "../imgs/mockup-aichat.png";

const progetti = [
  {
    nome: "AI Chat",
    descrizione:
      "Chatbot AI avanzato con funzionalità di conversazione naturale.",
    Tecnologie: "React, Next.js Tailwind CSS, OpenAI API",
    immagine: mockupAIchat,
    github: "https://github.com/DavideSiracusano/AiChat",
    demo: "https://ai-chat-ochre-phi.vercel.app/",
  },
  {
    nome: "Casper Prompt Generator",
    descrizione:
      "AI-Powered Prompt Builder per sviluppatori e creativi usando il metodo Casper",
    Tecnologie: "React, Next.js, Tailwind CSS, OpenAI API",
    immagine: mockupCasper,
    github: "https://github.com/DavideSiracusano/casper-prompt-generator",
    demo: "https://casper-prompt-generator.vercel.app/",
  },
  {
    nome: "Anime World",
    descrizione: "App full stack per cercare e scoprire anime.",
    Tecnologie: "React, Next.js, Node.js, PostgreSQL, Prisma",
    immagine: mockupAnime,
    github: "https://github.com/DavideSiracusano/Anime-World",
    demo: "https://anime-world-psi-bice.vercel.app/",
  },
  {
    nome: "Yu-Gi-Oh Database",
    descrizione: "Database di carte Yu-Gi-Oh con filtri e ricerca.",
    Tecnologie: "React, Tailwind CSS, API Yu-Gi-Oh",
    immagine: mockupYugi,
    github: "https://github.com/DavideSiracusano/yu-gi-oh-database",
    demo: "https://yu-gi-oh-database.vercel.app/",
  },
  {
    nome: "Movies Selection",
    descrizione: "Selezione e scoperta di film con API.",
    Tecnologie: "React, Tailwind CSS, API Movies",
    immagine: mockupMovies,
    github: "https://github.com/DavideSiracusano/Movies-Selection",
    demo: "https://movies-selection.vercel.app/",
  },
  {
    nome: "React Pokedex",
    descrizione: "Pokedex interattivo realizzato con React.",
    Tecnologie: "React",
    immagine: mockupPokedex,
    github: "https://github.com/DavideSiracusano/react-pokedex",
    demo: "https://react-sirdavi-pokedex.netlify.app/",
  },
  {
    nome: "React To-do List",
    descrizione: "To-do List realizzato con React.",
    Tecnologie: "React",
    immagine: mockupReactTodolist,
    github:
      "https://github.com/DavideSiracusano/react-todo-list?tab=readme-ov-file",
    demo: "https://davide-todo-list.netlify.app/",
  },
  {
    nome: "Javascript Advanced",
    descrizione: "Progetto Javascript Advanced del master Start2Impact",
    Tecnologie: "JavaScript",
    immagine: mockupJS,
    github:
      "https://github.com/DavideSiracusano/JavaScript-Advanced---Information?tab=readme-ov-file",
    demo: "https://sirdavjavadvs2i.web.app/",
  },
  {
    nome: "Fullstack Project Frontend",
    descrizione: "Frontend Angular per il progetto fullstack di Start2Impact",
    Tecnologie: "Angular, TypeScript, Bootstrap",
    immagine: start2impactLogo,
    github: "https://github.com/DavideSiracusano/fullstackproject_frontend",
    demo: "https://fullstack-7899a.web.app/home",
  },
  {
    nome: "Fullstack Project Backend",
    descrizione:
      "Backend Node.js/Express per il progetto fullstack di Start2Impact",
    Tecnologie: "Node.js, Express, MongoDB",
    immagine: start2impactLogo,
    github: "https://github.com/DavideSiracusano/fullstackproject_backend",
    demo: "https://github.com/DavideSiracusano/fullstackproject_backend",
  },
];

export default function ProjectsClient() {
  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

        <div className="flex flex-wrap justify-center gap-8">
          {progetti.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[350px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Immagine del progetto */}
              <div className="overflow-hidden h-[150px] bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                <Image
                  src={proj.immagine}
                  alt={proj.nome}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Contenuto card */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-center mb-3 text-[#8b0000] dark:text-red-400">
                  {proj.nome}
                </h2>
                <p className="text-center text-sm text-gray-700 dark:text-gray-300 mb-6 flex-1">
                  {proj.descrizione}
                </p>

                {/* Tecnologie utilizzate */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
                  Tecnologie: {proj.Tecnologie}
                </p>

                {/* Links GitHub e Demo */}
                <div className="flex justify-around gap-4 mt-auto">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-white px-4 py-2 rounded-md animate-gradient hover:opacity-90 transition-opacity duration-300 font-medium bg-[#8b0000] dark:bg-red-600"
                  >
                    GitHub
                  </a>

                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-white px-4 py-2 rounded-md animate-gradient hover:opacity-90 transition-opacity duration-300 font-medium bg-[#8b0000] dark:bg-red-600"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
