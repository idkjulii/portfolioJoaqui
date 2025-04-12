"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ArrowRight
} from "lucide-react";

// Define los proyectos
const projectsData = [
  {
    id: "project1",
    title: "Sabores Adaptados",
    description: "Sabores adaptados es un proyecto que desarrollé para un equipo de fonoaudiología que requería un servicio web para presentar recetas a pacientes con disfagia y, a su vez, recibir retroalimentación sobre la adecuación de las mismas. En este proyecto, asumí la gestión, el análisis funcional y el desarrollo del front-end de la página web.",
    category: "web,UX/UI",
    image: "/project1.jpg",
    liveUrl: "https://saboresadaptados1-0.onrender.com/",
    codeUrl: "https://saboresadaptados1-0.onrender.com/"
  },
  {
    id: "project2",
    title: "Ventas JUFEC S.A",
    description: "El software interno de JUFEC.S.A., empresa dedicada a la distribución de productos de droguería, permite a los vendedores elaborar presupuestos, consultar el inventario, realizar pedidos y verificar la facturación. Por otro lado, los gerentes de farmacia pueden confirmar los pedidos y visualizar la facturación.",
    category: "web,UX/UI",
    image: "/project2.jpg",
    liveUrl: "https://github.com/MiliJoaqui/ProyectoVentasJUFEC",
    codeUrl: "https://github.com/MiliJoaqui/ProyectoVentasJUFEC"
  },
  {
    id: "project3",
    title: "E-mail Management",
    description: "Un software desarrollado para paradigmas web, que consiste en un sistema de correo electrónico que permite la creación de usuarios, el envío de correos electrónicos entre ellos, guardar correos como favoritos y responder a los mismos.",
    category: "web,UX/UI",
    image: "/project3.jpg",
    liveUrl: "https://emailmanager-frontend.vercel.app",
    codeUrl: "https://github.com/tomasv00805/Emailmanager-backend"
  },
  {
    id: "project4",
    title: "App galletita test",
    description: "Proyecto en el que se desarrolló un sistema de encuestas para un equipo de nutrición que debía encuestar a múltiples personas simultáneamente. Asumí la responsabilidad de gestionar y realizar el análisis funcional y el diseño de la página web.",
    category: "Web",
    image: "/project4.jpg",
    liveUrl: "#",
    codeUrl: null
  },
];

// Categorías disponibles
const categories = ["Todos", "web,UX/UI", "Web", "UX/UI"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtrar proyectos basado en la categoría activa
  const filteredProjects = activeCategory === "Todos"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis proyectos recientes en desarrollo y gestión.
            Cada trabajo refleja mi pasión por la creatividad y atención al detalle.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto pt-4 flex justify-between">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                  </div>

                  <Button variant="ghost" size="sm" className="gap-1">
                    Detalles <ArrowRight size={14} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button className="rounded-full px-8">
            Ver Todos los Proyectos <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
