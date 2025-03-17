import Image from "next/image"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/pizzeria_75.webp"
          alt="OK TO BEER background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-7xl md:text-8xl text-white mb-16 md:mb-20 font-melting max-w-2xl text-center -rotate-12">BIENVENID@ SOBRINEKE</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/80">
            <a href="#menu">Ver Menú</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <a href="#ubicacion">Ubicación</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

