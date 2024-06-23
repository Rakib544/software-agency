import Navbar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Software agency",
  description: "A next generation software agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[rgb(8,8,11)] font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="container mt-4">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
