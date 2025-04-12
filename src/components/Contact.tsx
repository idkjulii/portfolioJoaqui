"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Instagram, Github, Linkedin, Twitter, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitted(true);
      setIsDialogOpen(true);
      // Resetear el formulario
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Contacta</span> Conmigo
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes algún proyecto en mente? ¡Hablemos! Estoy disponible para proyectos freelance,
            colaboraciones o simplemente para charlar sobre diseño y desarrollo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="backdrop-blur-sm bg-background/70 border border-border/50">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Diferentes formas de ponerte en contacto conmigo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">joaquinaselles@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-medium">+54 3794086218</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">Corrientes, Argentina</p>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">Sígueme en redes sociales</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/joaquinaselles?igsh=ODB3M21lcHU0ajUx&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/milagros-undefined-067a33329/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/MiliJoaqui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/70 border border-border/50">
              <CardHeader>
                <CardTitle>Envíame un Mensaje</CardTitle>
                <CardDescription>
                  Rellena el formulario y me pondré en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                  >
                    Enviar Mensaje <Send size={14} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Dialog de Confirmación */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>¡Mensaje Enviado!</DialogTitle>
            <DialogDescription>
              Gracias por ponerte en contacto. Te responderé lo antes posible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl">
              ✓
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setIsDialogOpen(false)}>Cerrar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
