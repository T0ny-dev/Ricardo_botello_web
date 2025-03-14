import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricardo Botello",
  description: "Ricardo Botello es un reconocido orador y escritor tamaulipeco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Ricardo Botello"/>
        <meta name="keywords" content="Conferencista, Orador y Escritor Tamaulipeco  "/>
        <meta name="lang" content="es"/>
        <meta property="og:image" content="/ia_nexus_chat.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
