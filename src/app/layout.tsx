import type { Metadata } from "next";
import "./globals.css";
import Header  from "@/app/components/Header01";
import Footer  from "@/app/components/Footer";


export const metadata: Metadata = {
  title: "Multiplier Holdings | The Operating System for Professional Services",
  description: "Expertise, Multiplied. Building and scaling professional services companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
