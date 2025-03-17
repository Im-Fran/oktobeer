"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Facebook, Instagram, MapPin } from "lucide-react"
import Link from "next/link"

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="menu-section-title">CONTACTO</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-black/80 border border-primary/20">
            <h3 className="font-bebas text-2xl text-primary mb-4">RESERVAS Y CONSULTAS</h3>
            <p className="text-gray-300 mb-6">
              ¿Tienes alguna pregunta o quieres hacer una reserva? Completa el formulario y nos pondremos en contacto
              contigo lo antes posible.
            </p>

            <div data-tf-live="01JPJW7B5NMPX3ZMATHEM1PA45"></div>
            <script src="//embed.typeform.com/next/embed.js" async></script>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-black/80 border border-primary/20">
              <h3 className="font-bebas text-2xl text-primary mb-4">SÍGUENOS</h3>
              <p className="text-gray-300 mb-4">
                Mantente al día con nuestras promociones, eventos especiales y novedades siguiéndonos en nuestras redes
                sociales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://www.facebook.com/OKtobeercalama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/bar.oktobeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://www.google.com/maps/place/Bar+Oktobeer+Calama/@-22.4657716,-68.9060641,17z/data=!3m1!4b1!4m6!3m5!1s0x96abf7ea117ec18b:0xacd9068feece3d15!8m2!3d-22.4657766!4d-68.9034892!16s%2Fg%2F11tjp7x55l?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
                >
                  <MapPin size={20} />
                  <span>Maps</span>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-black/80 border border-primary/20">
              <h3 className="font-bebas text-2xl text-primary mb-4">HORARIOS</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Lunes:</span>
                  <span>Cerrado</span>
                </li>
                <li className="flex justify-between">
                  <span>Martes a Domingo:</span>
                  <span>desde las 18 horas</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-black/80 border border-primary/20">
              <h3 className="font-bebas text-2xl text-primary mb-4">UBICACIÓN</h3>
              <p className="text-gray-300 mb-2">
                <span className="text-primary font-bold">Dirección:</span> Av la paz 180, Calama
              </p>
              <p className="text-gray-300">
                <span className="text-primary font-bold">Email:</span> info@oktobeer.cl
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

