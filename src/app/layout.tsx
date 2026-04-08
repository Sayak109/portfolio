import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayak Panda | Portfolio",
  description: "Portfolio of Sayak Panda, a MERN Stack Developer building thoughtful modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070b] text-white">
        {children}
      </body>
    </html>
  );
}
