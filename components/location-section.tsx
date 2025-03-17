const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-16 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="menu-section-title">UBICACION</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-full">
          <div className={"h-[400px]"}>
            <div className="bg-black/80 p-6 rounded-lg border border-primary/20 h-full">
              <h3 className="font-bebas text-2xl text-primary mb-4">ENCUÉNTRANOS</h3>
              <p className="text-gray-300 mb-4">
                Estamos ubicados en Calama, con fácil acceso y estacionamiento disponible.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-primary font-bold">Dirección:</span> Av la paz 180, Calama
                </li>
                <li>
                  <span className="text-primary font-bold">Horario:</span> Martes a Domingo desde las 18 horas
                </li>
                <li>
                  <span className="text-primary font-bold">Email:</span> info@oktobeer.cl
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/place/Bar+Oktobeer+Calama/@-22.4657716,-68.9060641,17z/data=!3m1!4b1!4m6!3m5!1s0x96abf7ea117ec18b:0xacd9068feece3d15!8m2!3d-22.4657766!4d-68.9034892!16s%2Fg%2F11tjp7x55l?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-black px-4 py-2 rounded-md font-bold hover:bg-primary/80 transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
            {/* Mapa de Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0731456349!2d-68.90606412532693!3d-22.465771584731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96abf7ea117ec18b%3A0xacd9068feece3d15!2sBar%20Oktobeer%20Calama!5e0!3m2!1ses!2scl!4v1710626400000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de OK TO BEER"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection

