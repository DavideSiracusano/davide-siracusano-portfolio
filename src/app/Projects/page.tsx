export const metadata = {
  title: "Progetti",
  description:
    "Collezione dei progetti realizzati da Davide Siracusano — app e demo con link a GitHub.",
  openGraph: {
    title: "Progetti - Davide Siracusano",
    description:
      "Collezione dei progetti realizzati da Davide Siracusano — app e demo con link a GitHub.",
    url: "https://davide-siracusano-portfolio.vercel.app/projects",
    siteName: "Davide Siracusano Portfolio",
    images: [
      {
        url: "../imgs/mockupAnime.png",
        width: 1200,
        height: 630,
        alt: "Progetti Davide Siracusano",
      },
    ],
  },
};

import ProjectsClient from "./ProjectsClient";

export default function Page() {
  return <ProjectsClient />;
}
