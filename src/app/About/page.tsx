export const metadata = {
  title: "Chi Sono",
  description:
    "Informazioni su Davide Siracusano, full-stack developer specializzato in React e Next.js.",
  openGraph: {
    title: "Chi Sono - Davide Siracusano",
    description:
      "Informazioni su Davide Siracusano, full-stack developer specializzato in React e Next.js.",
    url: "https://davide-siracusano-portfolio.vercel.app/about",
    siteName: "Davide Siracusano Portfolio",
    images: [
      {
        url: "../imgs/cropped-Logo_University-09.webp",
        width: 800,
        height: 600,
        alt: "Davide Siracusano",
      },
    ],
  },
};

import AboutClient from "./AboutClient";

export default function Page() {
  return <AboutClient />;
}
