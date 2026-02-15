export const metadata = {
  title: "Home | Davide Siracusano",
  description:
    "Portfolio di Davide Siracusano, Front-End Developer specializzato in React, Next.js e TypeScript. Esperto nello sviluppo di interfacce moderne, accessibili e performanti.",
  openGraph: {
    title: "Davide Siracusano | Front-End Developer",
    description:
      "Portfolio di Davide Siracusano, Front-End Developer specializzato in React, Next.js e TypeScript. Esperto nello sviluppo di interfacce moderne, accessibili e performanti.",
    url: "https://davide-siracusano-portfolio.vercel.app/",
    siteName: "Davide Siracusano Portfolio",
    images: [
      {
        url: "./Home/imgdavide.png",
        width: 800,
        height: 600,
        alt: "Davide Siracusano",
      },
    ],
  },
};

import Home from "./Home/HomeClient";

export default function Page() {
  return <Home />;
}
