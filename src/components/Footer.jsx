"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/davide.siracusano/",
      icon: FaFacebook,
      color: "#1877F2",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/davide.siracusano/",
      icon: FaInstagram,
      color: "#E4405F",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/davide-siracusano-804989221/",
      icon: FaLinkedin,
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/DavideSiracusano",
      icon: FaGithub,
      color: "#333",
      label: "GitHub",
    },
  ];

  return (
    <footer className="text-center py-6 mt-auto animate-gradient text-white">
      <p className="mb-4">© Davide Siracusano 2025</p>
      <div className="font-medium my-4">I miei contatti:</div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon, color, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className=" flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <Icon size={20} color={color} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
