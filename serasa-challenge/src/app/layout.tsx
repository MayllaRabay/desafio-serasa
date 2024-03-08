import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/global.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulário de avaliação",
  description: "Desafio técnico front-end Serasa Experian",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
