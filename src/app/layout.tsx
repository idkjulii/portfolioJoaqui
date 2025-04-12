import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio | Diseño & Creatividad",
  description: "Portafolio profesional con un toque de color rosa y lila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <ClientBody className={cn(
        inter.className,
        "min-h-screen bg-background antialiased"
      )}>
        {children}
      </ClientBody>
    </html>
  );
}
