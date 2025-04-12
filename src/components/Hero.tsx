"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20 -z-10" />

      {/* Floating Circles - Decorative Elements */}
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl -z-10" />

      <div className="text-center max-w-3xl mx-auto space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary blur-lg opacity-70 -z-10 scale-110" />
          <Avatar className="w-40 h-40 border-4 border-background mx-auto shadow-xl">
            <AvatarImage src="/profile-photo.jpg" alt="Profile Photo" />
            <AvatarFallback className="text-4xl bg-primary text-primary-foreground">ME</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Hola, soy </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Milagros
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground">
            I'm a Systems Analyst, I'm a Project Manager
          </h2>

          <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-2xl mx-auto">
            Transformo necesidades en soluciones estratégicas y eficientes.
            Especializada en el análisis de requerimientos, gestión de proyectos y coordinación de equipos para lograr resultados concretos, innovadores y de alto impacto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link href="#projects">
            <Button size="lg" className="rounded-full px-8">
              Ver Proyectos
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contactar
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

