"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-muted-foreground">
            <span className="font-medium mr-1">© {new Date().getFullYear()}</span>
            <Link href="#home" className="text-primary hover:text-primary/80 transition-colors">
              Mi Portafolio
            </Link>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Lovingly made<Heart size={14} className="text-primary mx-1" /> by Milagros
            </span>
          </div>

          <div className="flex gap-4 text-sm">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
