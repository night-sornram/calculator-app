import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const ls = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "calculator-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="theme1">
      <body className={ls.className}>{children}</body>
    </html>
  );
}
