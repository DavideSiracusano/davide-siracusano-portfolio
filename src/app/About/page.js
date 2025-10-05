"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import start2impactImg from "../imgs/cropped-Logo_University-09.webp";

export default function About() {
  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12">
          Ciao! Sono Davide 🤝🏻
        </h1>

        <div className=" flex flex-wrap justify-center gap-6">
          {/* Soft Skills */}
          <div className="w-full sm:w-auto sm:max-w-[350px] animate-gradient rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-center font-bold text-lg mb-4 text-white ">
              Le mie soft skills:
            </p>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Comunicazione chiara ed efficace
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Creatività e problem solving
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Adattabilità e curiosità
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Empatia e ascolto attivo
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Teamwork e collaborazione
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Networking
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Servizio clienti
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Pazienza
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Gestione del tempo
              </li>
            </ul>
          </div>

          {/* Esperienza Tecnica */}
          <div className="w-full sm:w-auto sm:max-w-[350px] animate-gradient rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <p className="text-center text-white  text-md mb-4">
              Sono uno sviluppatore front-end appassionato di tecnologie web
              come <strong>HTML5, CSS3, JS, React, Next.js...</strong>
            </p>
            <p className="text-center text-white  text-md">
              Amo imparare cose nuove e restare aggiornato sulle ultime tendenze
              tecnologiche.
            </p>
          </div>

          {/* Percorso Formativo */}
          <div className="w-full sm:w-auto sm:max-w-[350px] animate-gradient rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-center font-bold text-lg mb-4 text-white">
              Percorso formativo:
            </p>
            <ul className="space-y-2 text-left text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                2014-2018: Laurea Triennale in Scienze della Comunicazione
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                2021-2022: Laurea Magistrale in Lingue e Letterature Straniere
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                2023-2024: Master Start2Impact
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                2024 - oggi: continuo a studiare
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <Image
                src={start2impactImg}
                alt="Start2Impact"
                width={200}
                height={100}
                className="rounded shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
