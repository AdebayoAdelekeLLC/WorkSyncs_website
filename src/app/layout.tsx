import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mabryPro = localFont({
  src: "../../public/Mabry Pro Black.ttf",
  variable: "--font-mabry-pro",
});

export const metadata: Metadata = {
  title: "WorkSyncs - Simplify Project Delivery",
  description: "The all-in-one workspace for HR and project management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mabryPro.className} antialiased`}>{children}</body>
    </html>
  );
}
