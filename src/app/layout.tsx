import type { Metadata } from "next";
import "./globals.css";
import AosInit from "./utilis/aosInit";

export const metadata: Metadata = {
  title: "Petshop",
  description: "Cuidamos do seu melhor amigo com amor e dedicação! Serviços de banho, tosa e atendimento veterinário para garantir o bem-estar do seu pet.",
  openGraph:{
    title: "Petshop",
    description: "Cuidando do seu melhor amigo com amor e dedicação.",
    images: [
      {
        url: "/imagens/Icon.png",
        width: 300,
        height: 300,
        alt: "Imagem representando o Petshop",
      },
    ]

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        
      >
        {children}
        <AosInit/>
      </body>
    </html>
  );
}
