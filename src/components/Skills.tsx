"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "Habilidades Blandas" | "Habilidades Técnicas" | "other";
}

export function Skills() {
  const skills: Skill[] = [
    { name: "Comunicación", level: 95, category: "Habilidades Blandas" },
    { name: "Trabajo en equipo", level: 98, category: "Habilidades Blandas" },
    { name: "Resolución de problemas", level: 85, category: "Habilidades Blandas" },
    { name: "Creatividad", level: 100, category: "Habilidades Blandas" },
    { name: "Buena relacion con los clientes", level: 90, category: "Habilidades Blandas" },
    { name: "Adaptabilidad", level: 100, category: "Habilidades Blandas" },
    { name: "Proactiva", level: 100, category: "Habilidades Blandas" },
    { name: "HTML/CSS", level: 90, category: "Habilidades Técnicas" },
    { name: "JavaScript", level: 85, category: "Habilidades Técnicas" },
    { name: "PHP", level: 80, category: "Habilidades Técnicas" },
    { name: "Node.js", level: 75, category: "Habilidades Técnicas" },
    { name: "Analisis funcional", level: 90, category: "Habilidades Técnicas" },
    { name: "Gestión de Proyectos", level: 90, category: "Habilidades Técnicas" },
    { name: "Trello", level: 90, category: "Habilidades Técnicas" },
    { name: "Figma", level: 90, category: "Habilidades Técnicas" },
    { name: "UX/UI Design", level: 70, category: "Habilidades Técnicas" },
    { name: "Photoshop", level: 90, category: "other" },
    { name: "Mongo.DB", level: 80, category: "other" },
    { name: "SQL", level: 75, category: "other" },
    { name: "Testing", level: 85, category: "other" },
    { name: "Fotografía", level: 100, category: "other" },



  ];

  // Agrupar por categoría
  const designSkills = skills.filter(skill => skill.category === "Habilidades Blandas");
  const developmentSkills = skills.filter(skill => skill.category === "Habilidades Técnicas");
  const otherSkills = skills.filter(skill => skill.category === "other");

  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A lo largo de mi carrera he desarrollado diversas habilidades técnicas y creativas
            que me permiten abordar proyectos de manera integral.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Diseño */}
          <Card className="backdrop-blur-sm bg-background/70 border border-border/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Habilidadaes Blandas</h3>
                <div className="h-1 w-10 bg-primary rounded-full mx-auto" />
              </div>

              <div className="space-y-5">
                {designSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Desarrollo */}
          <Card className="backdrop-blur-sm bg-background/70 border border-border/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Habilidades Técnicas</h3>
                <div className="h-1 w-10 bg-secondary rounded-full mx-auto" />
              </div>

              <div className="space-y-5">
                {developmentSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-secondary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Otras Habilidades */}
          <Card className="backdrop-blur-sm bg-background/70 border border-border/50 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Otras Habilidades</h3>
                <div className="h-1 w-10 bg-accent rounded-full mx-auto" />
              </div>

              <div className="space-y-5">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
