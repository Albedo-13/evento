import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 10,000 events worldwide",
};

type TProps = { children: React.ReactNode };

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
