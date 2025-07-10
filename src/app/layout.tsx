import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
const GTM_ID = 'GTM-PNFHBSPC';

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
  title: "Vet Domicílio SP Lapa | Bruno Pisetta",
  description: "Veterinário domiciliar em São Paulo/Lapa para cães e gatos. Consultas, vacinas, exames e acompanhamento personalizado. Agende sua consulta!",
  openGraph: {
    title: "Vet Domicílio SP Lapa | Bruno Pisetta",
    description: "Veterinário domiciliar em São Paulo/Lapa para cães e gatos. Consultas, vacinas, exames e acompanhamento personalizado. Agende sua consulta!",
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
    <html lang="pt-BR">
      <GoogleTagManager gtmId={GTM_ID} />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
