"use client";

import { motion } from "framer-motion";
import { FaAtom, FaDatabase, FaStar } from "react-icons/fa";
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

  // Skill data
  const frontEnd = [
    { name: "React", pct: 85 },
    { name: "TypeScript", pct: 80 },
    { name: "JavaScript", pct: 90 },
    { name: "HTML5", pct: 95 },
    { name: "CSS3", pct: 90 },
    { name: "TailwindCSS", pct: 85 },
    { name: "Next.js", pct: 75 },
  ];
  const backEnd = [
    { name: "Node.js", pct: 70 },
    { name: "Express", pct: 65 },
    { name: "PHP", pct: 75 },
    { name: "MySQL", pct: 70 },
  ];
  const tools = [
    { name: "Git", pct: 85 },
    { name: "GitHub", pct: 90 },
    { name: "Vite", pct: 80 },
    { name: "REST API", pct: 80 },
    { name: "Figma", pct: 70 },
  ];

  // Front-End → atomo
  const IconFE = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:rotate-6">
      <FaAtom className="text-indigo-500 w-7 h-7 mr-2" />
    </div>
  );

  // Back-End → database
  const IconBE = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:-rotate-6">
      <FaDatabase className="text-sky-500 w-7 h-7 mr-2" />
    </div>
  );

  // Tools & altri → stella
  const IconTools = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
      <FaStar className="text-emerald-500 w-7 h-7 mr-2" />
    </div>
  );
  // Animated bar
  function SkillBar({ label, percent, color }) {
    return (
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-gray-700 dark:text-gray-200">
            {label}
          </span>
          <span className="font-mono text-gray-500 dark:text-gray-300">
            {percent}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`h-3 rounded ${color}`}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center items-center mb-8 font-mono">
          <h1 className="flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="html-tag shrink-0">&lt;h1&gt;</span>
            <span className="code-content code-animation mx-2">
              Benvenuto sulla mia pagina! 👋🏻
            </span>
            <span className="html-tag shrink-0">&lt;/h1&gt;</span>
          </h1>
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="animate-gradient rounded-lg p-4 sm:p-6 shadow-lg text-center text-base sm:text-lg mb-8 sm:mb-12 text-white">
            Ciao! Sono <strong className="text-white">Davide</strong>,
            sviluppatore front-end appassionato di web e nuove tecnologie!
          </p>
        </div>

        {/* IN SINTESI */}
        <section className="rounded-lg p-4 sm:p-6 shadow-lg text-center text-base sm:text-lg mb-8 sm:mb-12 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-950">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center justify-center text-white">
            <span className="mr-2">In sintesi:</span>
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Mi piace trasformare idee in esperienze digitali intuitive, curando
            ogni dettaglio del codice e del design. Credo nella collaborazione,
            nella chiarezza e nell&apos;accessibilità.
          </p>
        </section>

        {/* COMPETENZE */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
            Competenze
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Front-End */}
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconFE />
                <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                  Front-End
                </span>
              </div>
              {frontEnd.map((skill) => (
                <SkillBar
                  key={skill.name}
                  label={skill.name}
                  percent={skill.pct}
                  color="bg-indigo-500"
                />
              ))}
            </div>
            {/* Back-End */}
            <div className="bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconBE />
                <span className="font-semibold text-sky-700 dark:text-sky-300">
                  Back-End
                </span>
              </div>
              {backEnd.map((skill) => (
                <SkillBar
                  key={skill.name}
                  label={skill.name}
                  percent={skill.pct}
                  color="bg-sky-500"
                />
              ))}
            </div>
            {/* Tools & altri */}
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconTools />
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                  Tools & altri
                </span>
              </div>
              {tools.map((skill) => (
                <SkillBar
                  key={skill.name}
                  label={skill.name}
                  percent={skill.pct}
                  color="bg-emerald-500"
                />
              ))}
            </div>
          </div>
        </section>

        {/*technologies*/}
        <h4 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
          Tecnologie con cui lavoro:
        </h4>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
