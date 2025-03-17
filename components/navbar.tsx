"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bebas text-3xl text-primary">
            <Image width={72} height={72} src={"/logo.webp"} alt={"OkToBeer Logo"}/>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div onClick={() => setIsOpen(!isOpen)} className="text-primary cursor-pointer transition transform hover:scale-110">
              {isOpen ? <X size={40} /> : <Menu size={40} />}
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#menu" className="text-white hover:text-primary transition-colors">
              Menú
            </Link>
            <Link href="#ubicacion" className="text-white hover:text-primary transition-colors">
              Ubicación
            </Link>
            <Link href="#contacto" className="text-white hover:text-primary transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link
              href="#menu"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menú
            </Link>
            <Link
              href="#ubicacion"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ubicación
            </Link>
            <Link
              href="#contacto"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

