"use client";

import { motion } from "framer-motion";
import { FaAtom, FaDatabase, FaStar } from "react-icons/fa";
import reactImg from "../imgs/image.png";
import javascriptImg from "../imgs/javascript-logo-javascript-icon-transparent-free-png.webp";
import cssImg from "../imgs/CSS3_logo_and_wordmark.svg.png";
import htmlImg from "../imgs/HTML5_logo_and_wordmark.svg.png";
import nextjsImg from "../imgs/nextjsImg.png";
import bootstrapImg from "../imgs/Bootstrap_logo.svg.png";
import tailwindImg from "../imgs/tailwind.png";
import nodejsImg from "../imgs/nodejs.png";
import mysqlImg from "../imgs/mysql.png";
import postgreImg from "../imgs/postgre.png";
import prismaImg from "../imgs/prisma.png";
import attestatoImg from "../imgs/Attestato_Davide.png";
import formatemp from "../imgs/formatemp.png";
import formatemp_backend from "../imgs/formatemp_backend.png";
import imageDavide from "../imgs/imgdavide.png";
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
    { src: nodejsImg, alt: "Node.js" },
    { src: mysqlImg, alt: "MySQL" },
    { src: postgreImg, alt: "PostgreSQL" },
    { src: prismaImg, alt: "Prisma" },
  ];

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
    { name: "Node.js", pct: 75 },
    { name: "Express", pct: 70 },
    { name: "PHP", pct: 60 },
    { name: "MySQL", pct: 75 },
    { name: "PostgreSQL", pct: 75 },
    { name: "Prisma", pct: 70 },
  ];

  const tools = [
    { name: "Git", pct: 85 },
    { name: "GitHub", pct: 90 },
    { name: "Vite", pct: 80 },
    { name: "REST API", pct: 80 },
    { name: "Figma", pct: 70 },
  ];

  const IconFE = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:rotate-6">
      <FaAtom className="text-indigo-500 w-7 h-7 mr-2" />
    </div>
  );

  const IconBE = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:-rotate-6">
      <FaDatabase className="text-sky-500 w-7 h-7 mr-2" />
    </div>
  );

  const IconTools = () => (
    <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
      <FaStar className="text-emerald-500 w-7 h-7 mr-2" />
    </div>
  );

  function SkillBar({ label, percent, color }) {
    return (
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">{label}</span>
          <span className="font-mono">{percent}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`h-3 rounded bg-opacity-90 dark:bg-opacity-100 ${color}`}
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
        <div className="flex justify-center items-center my-5 font-mono">
          <h1 className="flex flex-col sm:flex-row items-center justify-center text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-full break-words">
            <span className="html-tag shrink-0 mb-1 sm:mb-0">&lt;h1&gt;</span>
            <span className="code-content code-animation mx-0 sm:mx-4">
              Benvenuto!👋🏻
            </span>
            <span className="html-tag shrink-0 mt-1 sm:mt-0">&lt;/h1&gt;</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="mx-auto max-w-2xl mb-16 sm:mb-20">
          <div className="hero-section rounded-lg p-7 sm:p-8 shadow-lg text-center mb-6">
            <div className="flex">
              <p className="text-white text-lg sm:text-xl mb-4">
                Ciao! Sono{" "}
                <strong className="text-white">Davide Siracusano</strong>
              </p>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">
              Full-Stack Developer con specializzazione in Front-End
            </h2>

            <Image
              src={imageDavide}
              alt="Davide Siracusano"
              className="w-32 h-34 rounded-full mx-auto mb-6"
            />

            <h4 className="text-white text-lg sm:text-xl mb-4">
              {`Sono un appassionato di progettazione web e sviluppo di interfacce moderne e accessibili...`}
            </h4>

            <motion.a
              href="/Davide Siracusano CV.pdf"
              download="Davide Siracusano CV.pdf"
              className="animate-gradient inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Scarica CV
            </motion.a>
          </div>
        </div>

        {/* IN SINTESI */}
        <section className="section-sintesi rounded-lg p-4 sm:p-6 shadow-lg text-center text-base sm:text-lg mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center justify-center text-white dark:text-white">
            <span className="mr-2">In sintesi:</span>
          </h2>
          <p className="text-white leading-relaxed">
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
            <div className="skill-card-frontend p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconFE />
                <span className="font-semibold ">Front-End</span>
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
            <div className="skill-card-backend p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconBE />
                <span className="font-semibold">Back-End</span>
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
            <div className="skill-card-tools p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <IconTools />
                <span className="font-semibold">Tools & altri</span>
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

        {/* Attestati Start2Impact */}
        <section className="mb-16">
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Attestati
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={attestatoImg}
                alt="Attestato Start2Impact University"
                width={400}
                height={500}
                className="rounded-lg hover:brightness-110 transition-all duration-300 w-full"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={formatemp}
                alt="Attestato Formatemp"
                width={400}
                height={500}
                className="rounded-lg hover:brightness-110 transition-all duration-300 w-full"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={formatemp_backend}
                alt="Attestato Formatemp Back end"
                width={400}
                height={500}
                className="rounded-lg hover:brightness-110 transition-all duration-300 w-full"
                priority
              />
            </motion.div>
          </motion.div>
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
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="transition-transform duration-300"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={80}
                height={70}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Contatti */}
        <section className="mt-16 mb-16">
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contattami
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-lg mx-auto animate-gradient rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <form
              action="https://formspree.io/f/myzbgoey"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Inserisci il tuo nome"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Inserisci la tua email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Es. ciao, Davide! mi piace tantissimo il tuo sito web! Mi piacerebbe proporti un'offerta lavorativa davvero spicy!"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Invia Messaggio
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
