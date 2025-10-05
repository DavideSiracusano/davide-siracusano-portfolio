"use client";

import { motion } from "framer-motion";
import reactImg from "../imgs/image.png";
import javascriptImg from "../imgs/javascript-logo-javascript-icon-transparent-free-png.webp";
import cssImg from "../imgs/CSS3_logo_and_wordmark.svg.png";
import htmlImg from "../imgs/HTML5_logo_and_wordmark.svg.png";
import nextjsImg from "../imgs/nextjsImg.png";
import bootstrapImg from "../imgs/Bootstrap_logo.svg.png";
import tailwindImg from "../imgs/tailwindImg.png";
import Image from "next/image";

export default function Home() {
  const technologies = [
    { src: reactImg, alt: "React" },
    { src: javascriptImg, alt: "JavaScript" },
    { src: cssImg, alt: "CSS3" },
    { src: htmlImg, alt: "HTML5" },
    { src: bootstrapImg, alt: "Bootstrap" },
    { src: nextjsImg, alt: "Next.js" },
    { src: tailwindImg, alt: "Tailwind" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Benvenuto sulla mia pagina! 👋🏻
        </h1>

        <div className="mx-auto max-w-2xl">
          <p className="animate-gradient  rounded-lg p-6 shadow-lg text-center text-lg  dark:text-gray-300 mb-12">
            Ciao! Sono{" "}
            <strong className="text-gray-900 dark:text-white">Davide</strong>,
            sviluppatore front-end appassionato di web e nuove tecnologie...
          </p>
        </div>

        <h4 className="text-2xl font-semibold text-center mb-8">
          Tecnologie con cui lavoro:
        </h4>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.alt}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="transition-transform duration-300"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={50}
                height={50}
                className="w-12 h-12 object-contain hover:drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
