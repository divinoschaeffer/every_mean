import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";


const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Every-mean",
  description: "All grade, all mean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <body className={rubik.className}>{children}</body>
    </html>
  );
}
