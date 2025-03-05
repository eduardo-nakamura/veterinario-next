import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//     <meta name="keywords" content="atendimento veterinário domiciliar, veterinário domiciliar, veterinário em domicílio, consulta veterinária domiciliar, vacina veterinária domiciliar, coleta de sangue veterinária domiciliar, veterinário para cães e gatos, veterinário Anhembi Morumbi, veterinário humanizado, veterinário acompanhamento longitudinal, veterinário [Sua Cidade/Bairro], veterinário para coelhos">
// 

export const metadata: Metadata = {
  title: "Atendimento Veterinário Domiciliar | Bruno Pisetta | São Paulo/Lapa",
  description: "Atendimento veterinário domiciliar para cães e gatos em São Paulo/Lapa. Consultas, vacinas, coleta de sangue e acompanhamento personalizado. Agende agora!",
  openGraph: {
    title: "Atendimento Veterinário Domiciliar | Bruno Pisetta | São Paulo/Lapa",
    description: "Atendimento veterinário domiciliar para cães e gatos em São Paulo/Lapa. Consultas, vacinas, coleta de sangue e acompanhamento personalizado. Agende agora!",
    images: "https://assets.storage.trakto.io/WFwSOE6steTvXQPjV3NfFTllMOZ2/41aa619f-ea28-40c0-8ccd-2eba2b1a44bb.png",
    // url: "https://example.com",
  },

  // twitter: {
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
