const Footer = () => <footer className="bg-black py-8">
  <div className="container mx-auto px-4">
    <div className="mt-8 pt-4 border-t border-primary/20 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} OK TO BEER. Todos los derechos reservados. Desarrollado con 💙 por <a className={"text-primary hover:text-primary/90"} href={"https://franciscosolis.cl/?utm_src=oktobeer&utm_campaign=footer"} target={"_blank"}>FranciscoSolis</a></p>
    </div>
  </div>
</footer>

export default Footer

