import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkTheme from "@/components/DarkTheme";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Davide Siracusano Portfolio",
  description: "Portfolio di Davide, sviluppatore front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        className={`${montserrat.variable} font-montserrat antialiased bg-[rgb(241,240,240)] dark:bg-[rgb(29,26,26)] text-black dark:text-white transition-all duration-300 ease-in-out flex flex-col min-h-screen`}
      >
        <Header />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
