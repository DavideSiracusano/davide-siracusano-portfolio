"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaCode,
  FaHeartbeat,
  FaClock,
} from "react-icons/fa";
import { IconType } from "react-icons";
import start2impactImg from "../imgs/cropped-Logo_University-09.webp";
import { JSX } from "react";

interface SoftSkill {
  icon: IconType;
  text: string;
}

interface EducationItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function AboutClient() {
  const softSkills: SoftSkill[] = [
    { icon: FaHeartbeat, text: "Comunicazione chiara" },
    { icon: FaLightbulb, text: "Problem solving" },
    { icon: FaUsers, text: "Teamwork" },
    { icon: FaCode, text: "Creatività" },
    { icon: FaClock, text: "Gestione del tempo" },
    { icon: FaGraduationCap, text: "Apprendimento continuo" },
  ];

  const educationTimeline: EducationItem[] = [
    {
      year: "2025",
      title: "Corso Formatemp",
      subtitle: "Frontend e Backend",
      description: "320 ore - Approfondimento su tecnologie moderne",
    },
    {
      year: "2024-2025",
      title: "Sviluppo Autodidatta",
      subtitle: "Progetti Personali e Collaborativi",
      description: "Continuamente aggiornato e lavorando su nuovi progetti",
    },
    {
      year: "2023-2024",
      title: "Master Fullstack Developer",
      subtitle: "Start2Impact University",
      description:
        "850 ore - HTML, CSS, JS, React, Next.js, Node.js, Express, MongoDB, Git/GitHub",
    },
    {
      year: "2021-2022",
      title: "Laurea Magistrale",
      subtitle: "Lingue e Letterature Straniere",
      description: "Specializzazione in lingue straniere",
    },
    {
      year: "2014-2018",
      title: "Laurea Triennale",
      subtitle: "Scienze della Comunicazione",
      description: "Fondamenti di comunicazione e media",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Intro Bio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-section rounded-xl p-8 shadow-lg text-center mb-16"
        >
          <p className="text-lg text-white leading-relaxed">
            Ho una passione per la creazione di esperienze digitali intuitive e
            moderne. La mia missione è trasformare idee in codice funzionale,
            prestando attenzione ad ogni dettaglio del design e
            dell&apos;esperienza utente.
          </p>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-10 text-indigo-500"
          >
            ✨ Le Mie Soft Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="skill-card-about p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 dark:bg-blue-500/30 rounded-full">
                      <Icon className="text-2xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {skill.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Expertise Tecnica */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="expertise-section rounded-xl p-8 shadow-lg mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center gap-2">
            💻 La Mia Expertise Tecnica
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            Sono uno sviluppatore full-stack specializzato in tecnologie web
            moderne come{" "}
            <strong>
              HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Node.js,
              PostgreSQL, MongoDB e Prisma
            </strong>{" "}
            e molto altro.
          </p>
          <p className="text-lg text-white leading-relaxed">
            Amo continuamente imparare e restare aggiornato sulle ultime
            tendenze tecnologiche. La mia filosofia è scrivere codice pulito,
            mantenibile e accessibile, sempre pensando all&apos;esperienza
            dell&apos;utente finale.
          </p>
        </motion.div>

        {/* Timeline Formativa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-indigo-500 text-center">
            🎓 Percorso Formativo
          </h2>
          <div className="relative">
            {/* Linea verticale */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600"></div>

            {/* Timeline Items */}
            <div className="space-y-10">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Contenuto */}
                  <div className="md:w-1/2">
                    <div className="timeline-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                        {item.subtitle}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  {/* Punto sulla linea */}
                  <div className="md:w-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900 relative z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificazioni */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="certifications-section text-center p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            🏆 Certificazioni
          </h2>
          <div className="flex justify-center mb-6">
            <Image
              src={start2impactImg}
              alt="Start2Impact"
              width={300}
              height={150}
              className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>
          <p className="text-white text-lg">
            Attestato da <strong>Start2Impact University</strong> - Master
            Fullstack Developer
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
