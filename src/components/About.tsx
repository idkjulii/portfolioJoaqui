"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    { name: "Diseño UI/UX", icon: "🎨" },
    { name: "Desarrollo Frontend", icon: "💻" },
    { name: "Fotografía", icon: "📷" },
    { name: "Animación", icon: "✨" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sobre <span className="text-primary">Mí</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary blur-lg opacity-40 -z-10 scale-105" />
            <div className="w-full h-[400px] relative rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Sobre mí"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Systems Analyst & Project Manager con pasión por la creatividad</h3>

            <p className="text-muted-foreground">
              Mi nombre es Milagros Joaquina Selles Del Piano, soy estudiante de la carrera Ingeniería en Sistemas de Información y me gusta el análisis funcional y la gestión de proyectos.
            </p>

            <p className="text-muted-foreground">
              Busco adquirir nuevas experiencias laborales y estoy dispuesta a aprender nuevos conocimientos, nuevas habilidades y enfrentarme a nuevos desafíos.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="border border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
