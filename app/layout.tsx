import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rylscosmetics Store",
  description: "The Rylscosmetics Store for your skin care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
