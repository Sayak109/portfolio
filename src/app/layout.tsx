import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserratBody = Montserrat({
  variable: "--font-montserrat-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sayak Panda | Portfolio",
  description: "Portfolio of Sayak Panda, a MERN Stack Developer building thoughtful modern web experiences.",
  icons: {
    icon: "/portfolio_logo.png",
    shortcut: "/portfolio_logo.png",
    apple: "/portfolio_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${montserratBody.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070b] text-white">
        {children}
      </body>
    </html>
  );
}
