import { RootLayoutInner } from "@/components/layout/navbar";
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
          "min-h-screen bg-[#0D0D11] font-sans antialiased",
          fontSans.variable
        )}
      >
        <RootLayoutInner>{children}</RootLayoutInner>
      </body>
    </html>
  );
}
