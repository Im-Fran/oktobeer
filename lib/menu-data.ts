export type MenuItem = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

export type MenuCategory = {
  lista?: MenuItem[];
  adicionales?: MenuItem[];
  aguas?: MenuItem[];
  bebidas?: MenuItem[];
  bebidas_energeticas?: MenuItem[];
  jugos?: MenuItem[];
  limonadas?: MenuItem[];
  artesanales?: MenuItem[];
  piscos_premium?: MenuItem[];
  piscos_tradicionales?: MenuItem[];
  clasicos?: MenuItem[];
  [key: string]: MenuItem[] | undefined;
};

export type MenuData = {
  [key: string]: MenuItem[] | MenuCategory;
};

export const menuData: MenuData = {
  pizzas: [
    {
      nombre: "Pizza Margarita",
      precio: 13500,
      descripcion: "Salsa pomodoro, queso mozzarella y hojas de albahaca.",
    },
    {
      nombre: "Pizza La Pepperoni",
      precio: 14900,
      descripcion: "Pepperoni.",
    },
    {
      nombre: "Pizza Prohibida",
      precio: 14900,
      descripcion: "Jamón, piña.",
    },
    {
      nombre: "Pizza La Hereje",
      precio: 15500,
      descripcion: "Pepperoni y trozos de piña.",
    },
    {
      nombre: "Pizza Americana",
      precio: 15900,
      descripcion: "Pepperoni y doble queso.",
    },
    {
      nombre: "Pizza Bianca",
      precio: 15900,
      descripcion: "Salsa de tomates, cebolla caramelizada y tocino salteados en crema.",
    },
    {
      nombre: "Pizza Hawaiian Porky",
      precio: 15900,
      descripcion: "Tocino, choclo y piña.",
    },
    {
      nombre: "Pizza Napolitana",
      precio: 15900,
      descripcion: "Tomate, jamón y aceitunas con amargo.",
    },
    {
      nombre: "Pizza Pollo al Pesto",
      precio: 15900,
      descripcion: "Pollo y pesto casero.",
    },
    {
      nombre: "Pulled Pork BBQ",
      precio: 15900,
      descripcion: "Pulled pork en salsa BBQ.",
    },
    {
      nombre: "Pizza del Pueblo",
      precio: 15900,
      descripcion: "Salsa de tomates, cebolla caramelizada y salame.",
    },
    {
      nombre: "Pizza Pimpollo",
      precio: 16500,
      descripcion: "Salsa de tomates, pollo y pimientos salteados en crema.",
    },
    {
      nombre: "Pizza Peñafeta",
      precio: 16500,
      descripcion: "Aceitunas sevillanas, jamón y pepperoni.",
    },
    {
      nombre: "Pizza Chime Chime",
      precio: 16500,
      descripcion: "Pepperoni, carne, cebolla morada y tocino.",
    },
    {
      nombre: "Pizza Española",
      precio: 16500,
      descripcion: "Tomate, chorizo, pimiento y aceitunas con amargo.",
    },
    {
      nombre: "Pizza Oveja",
      precio: 16500,
      descripcion: "Queso de cabra, salame y aceitunas sevillanas.",
    },
    {
      nombre: "Pizza La Sabrosa",
      precio: 16500,
      descripcion: "Tomate cherry, palmitos y pesto.",
    },
    {
      nombre: "Delizata",
      precio: 17500,
      descripcion: "Espárragos, champiñones y unos toques de queso azul.",
    },
    {
      nombre: "Pizza Cerdo Puerco",
      precio: 17500,
      descripcion: "Salchicha italiana, pepperoni y tocino.",
    },
    {
      nombre: "Pizza Huancavelica",
      precio: 18500,
      descripcion: "Aceitunas sevillanas, jamón, cebolla morada, morrón y huevo.",
    },
    {
      nombre: "Pizza CHI-1",
      precio: 18500,
      descripcion: "Tomate, carne, cebolla, poroto verde, ají verde y doble queso.",
    },
    {
      nombre: "Pizza Calama City",
      precio: 18500,
      descripcion: "También llamada 'Pizza Calameña' en algunos listados.",
    },
    {
      nombre: "Pizza Cordoba",
      precio: 18500,
      descripcion: "Salsa de tomates, fondos de alcachofa, palmitos, tocino, huevo y pimienta.",
    },
    {
      nombre: "Pizza Chanchín",
      precio: 18500,
      descripcion: "Base de crema, trozos de tomate, tocino, huevo y pimienta.",
    },
    {
      nombre: "Pizza La Amazonica",
      precio: 18900,
      descripcion: "Carne mechada junto a un puré de palta.",
    },
    {
      nombre: "Pizza Serrana",
      precio: 18900,
      descripcion: "Jamón serrano, chorizo, cebolla y queso azul.",
    },
    {
      nombre: "Pizza Cremadora",
      precio: 19500,
      descripcion: "Salsa de tomates, camarones, champiñones, crema y un toque de ajo.",
    },
  ],
  pizzas_adicional: [
    {
      nombre: "Vegetal Adicional",
      precio: 1500,
    },
    {
      nombre: "Proteína Adicional",
      precio: 2500,
    },
  ],
  hamburguesas: [
    {
      nombre: "Cheese Burger",
      precio: 9000,
      descripcion: "Burger de 180g con queso cheddar, en pan brioche de la casa. Incluye papas fritas.",
    },
    {
      nombre: "American Burger",
      precio: 10500,
      descripcion: "Burger de 180g, queso cheddar, pepinillos, cebolla y pan brioche. Incluye papas fritas.",
    },
    {
      nombre: "Oklahoma",
      precio: 10500,
      descripcion: "Burger de 180g, queso cheddar, cebolla a la plancha y pan brioche. Incluye papas fritas.",
    },
    {
      nombre: "Bacon Blue",
      precio: 11000,
      descripcion: "Burger de 180g, queso cheddar, tocino y salsa de queso azul en pan brioche. Incluye papas fritas.",
    },
    {
      nombre: "Italiana",
      precio: 11000,
      descripcion: "Burger de 180g con tomate, palta y mayonesa en pan brioche de la casa.",
    },
    {
      nombre: "Doble Cheese Burger",
      precio: 12500,
      descripcion: "Doble burger de 180g, queso cheddar y pan brioche. Incluye papas fritas.",
    },
  ],
  tablas_y_snacks: [
    {
      nombre: "Agregado Mix Camote",
      precio: 3900,
      descripcion: "Convierte las papas de cualquier tabla por nuestro mix de Papas Fritas y Camote",
    },
    {
      nombre: "Pan de Ajo",
      precio: 5000,
      descripcion: "Lengüitas de pan en salsa casera de ajo horneadas con queso mozzarella",
    },
    {
      nombre: "Pan a la oliva",
      precio: 5900,
      descripcion: "Lengüitas de pan con ajo, horneadas con queso mozzarella y pasta de aceitunas con amargo.",
    },
    {
      nombre: "Pan de Ajo Serrano",
      precio: 5900,
      descripcion: "Pan con ajo horneado con queso mozzarella y jamón serrano",
    },
    {
      nombre: "Pan Serrano Blue",
      precio: 5900,
      descripcion: "Pan de ajo serrano y un toque de queso azul.",
    },
    {
      nombre: "Papas Fritas",
      precio: 8900,
      descripcion: "Nuestras exquisitas y crujientes papas. Para 2 personas.",
    },
    {
      nombre: "Picoteo",
      precio: 11500,
      descripcion: "Nuggets de pollo, Mozzarella sticks y Bolitas de queso crema con jalapeño.",
    },
    {
      nombre: "Tabla Papas Cheese Ok",
      precio: 12900,
      descripcion: "Cama de papas fritas con reducción de crema, vino blanco, ajo y queso (2-3 personas).",
    },
    {
      nombre: "Tabla Vegetariana",
      precio: 13900,
      descripcion: "Papas fritas con salteado de pimentones, champiñones y zapallo italiano en salsa bechamel.",
    },
    {
      nombre: "Tabla Papas Bacon",
      precio: 14900,
      descripcion: "Papas fritas, salsa de queso cheddar y tocino.",
    },
    {
      nombre: "Tabla 7-0",
      precio: 18500,
      descripcion: "Papas fritas con carne desmechada, jalapeños y salsa de queso cheddar (2-3 personas).",
    },
    {
      nombre: "Tabla Pichanga",
      precio: 23900,
      descripcion: "Papas fritas con carne, jamón y choricillo.",
    },
    {
      nombre: "Tabla Chorrillana",
      precio: 25500,
      descripcion: "Papas fritas, carne, chorizo, cebolla caramelizada y huevo frito.",
    },
    {
      nombre: "Tabla Oktobeer",
      precio: 25500,
      descripcion: "Mix de papas y camote, carne mechada, queso cheddar, crema ácida y tomate.",
    },
  ],

  bebidas: [
    {
      nombre: "Coca Cola",
      precio: 2500,
    },
    {
      nombre: "Coca Cola Sin Azúcar",
      precio: 2500,
    },
    {
      nombre: "Sprite",
      precio: 2500,
    },
    {
      nombre: "Agua Tónica",
      precio: 2500,
      descripcion: "Fever Tree, Fentimans, Britvic o Tomas Henry (según stock).",
    },
  ],
  aguas: [
    {
      nombre: "Agua mineral con gas",
      precio: 2000,
    },
    {
      nombre: "Agua mineral sin gas",
      precio: 2000,
    },
    {
      nombre: "Agua con Gas",
      precio: 2500,
    },
    {
      nombre: "Agua sin Gas",
      precio: 2500,
    },
  ],
  bebidas_energeticas: [
    {
      nombre: "Redbull",
      precio: 3500,
    },
    {
      nombre: "Redbull Sabores (Yellow o Red)",
      precio: 3500,
    },
    {
      nombre: "Redbull sin Azúcar",
      precio: 3500,
    },
  ],
  jugos: [
    {
      nombre: "Jugo de Arándano",
      precio: 4900,
    },
    {
      nombre: "Jugo de Chirimoya",
      precio: 4900,
    },
    {
      nombre: "Jugo de Frambuesa",
      precio: 4900,
    },
    {
      nombre: "Jugo de Mango",
      precio: 4900,
    },
    {
      nombre: "Jugo de Maracuyá",
      precio: 4900,
    },
    {
      nombre: "Jugo de Piña",
      precio: 4900,
    },
  ],
  limonadas: [
    {
      nombre: "Limonada de Chirimoya",
      precio: 5000,
    },
    {
      nombre: "Limonada con pulpa de Chirimoya",
      precio: 5000,
    },
    {
      nombre: "Limonada de Frutilla",
      precio: 5000,
    },
    {
      nombre: "Limonada con pulpa de Frutilla",
      precio: 5000,
    },
    {
      nombre: "Limonada de Mango",
      precio: 5000,
    },
    {
      nombre: "Limonada con pulpa de Mango",
      precio: 5000,
    },
    {
      nombre: "Limonada de Maracuyá",
      precio: 5000,
    },
    {
      nombre: "Limonada con pulpa de Maracuyá",
      precio: 5000,
    },
    {
      nombre: "Limonada con Piña",
      precio: 5000,
    },
    {
      nombre: "Limonada Menta & Jengibre",
      precio: 5000,
      descripcion: "Zumo de limón, goma, menta y jengibre.",
    },
    {
      nombre: "Limonada Tradicional",
      precio: 3000,
    },
  ],

  shots_2x: [
    {
      nombre: "Cucaracha 2x",
      precio: 5900,
    },
    {
      nombre: "Fireball shots 2x",
      precio: 5900,
    },
    {
      nombre: "Jagermesiter shots 2x",
      precio: 5900,
    },
    {
      nombre: "Tequila Jose Cuervo shots 2x",
      precio: 5900,
    },
    {
      nombre: "Ole Smoky – Mango Habanero 2x",
      precio: 6900,
    },
    {
      nombre: "Olmeca Chocolate shots 2x",
      precio: 6900,
    },
  ],
  piscos_tradicionales: [
    {
      nombre: "Nor Terra 35° Añejo",
      precio: 15900,
    },
    {
      nombre: "Nor Terra 35° Doble Destilado",
      precio: 16500,
    },
    {
      nombre: "Alto del Carmen 35° Tradicional",
      precio: 5000,
    },
    {
      nombre: "Mistral 40°",
      precio: 7500,
    },
    {
      nombre: "Mistral 46°",
      precio: 8500,
    },
  ],
  piscos_artesanales: [
    {
      nombre: "1.5 Frutado 40°",
      precio: 6500,
    },
    {
      nombre: "Chañar de Carén 40° Doble Destilado",
      precio: 7500,
    },
    {
      nombre: "Amaru 40°",
      precio: 7000,
    },
    {
      nombre: "Colún del Desierto",
      precio: 8500,
    },
  ],
  piscos_premium: [
    {
      nombre: "Kappa 1.5°",
      precio: 8500,
    },
    {
      nombre: "Tobalo Blue 1.5°",
      precio: 9000,
    },
    {
      nombre: "Waqar 40° (ej. 500 ml)",
      precio: 15500,
    },
  ],
  tragos_after_office: [
    {
      nombre: "Alto del Carmen 40° Doble Destilado AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Brodi Porter AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Brodin – Red Ale AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Havana Especial AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Mojito Cubano AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Mistral 35° AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Nortena Doble Destilado AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Tubinger Red Ale AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Tubinger Summer AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Ballantine's AFTER",
      precio: 5000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Matusalem AFTER",
      precio: 6000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Mistral 46° AFTER",
      precio: 6000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Mojito Sabores AFTER",
      precio: 6000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Ramazzoti AFTER",
      precio: 6000,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Jester Lupulus AFTER",
      precio: 5500,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Tobalo Blue AFTER",
      precio: 5500,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Black Heron AFTER",
      precio: 5500,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
    {
      nombre: "Tobalo Black AFTER",
      precio: 9500,
      descripcion: "Vigente de 18 a 21 hrs.",
    },
  ],

  destilados_gin: [
    {
      nombre: "Bombay",
      precio: 6900,
    },
    {
      nombre: "Tanqueray Simple",
      precio: 6900,
    },
    {
      nombre: "Beefeater Simple",
      precio: 7500,
    },
    {
      nombre: "Beefeater Pink",
      precio: 7500,
    },
    {
      nombre: "Gin & Gin",
      precio: 14900,
    },
    {
      nombre: "Gin Tonic",
      precio: 8890,
    },
    {
      nombre: "Hendrick's",
      precio: 9900,
    },
  ],
  destilados_ron: [
      {
        nombre: "Havana Club – Añejo Especial",
        precio: 6500,
      },
      {
        nombre: "Matusalem 7",
        precio: 7200,
      },
      {
        nombre: "Diplomático – Mantuano",
        precio: 11900,
      },
    ],
  destilados_vodka: [
      {
        nombre: "Stolichnaya",
        precio: 5900,
      },
      {
        nombre: "Absolut Blue",
        precio: 6300,
      },
      {
        nombre: "Absolut Mango",
        precio: 6500,
      },
      {
        nombre: "Absolut Pear",
        precio: 6500,
      },
      {
        nombre: "Absolut Raspberry",
        precio: 6500,
      },
  ],

  whiskys: [
    {
      nombre: "Ballantine's Finest",
      precio: 6200,
    },
    {
      nombre: "Johnnie Walker – Red Label",
      precio: 6900,
      descripcion: "Incluye bebida: CocaCola, Sprite o Canada Dry.",
    },
    {
      nombre: "Jack Daniel's Old N°7",
      precio: 7900,
    },
    {
      nombre: "Ole Smoky – Apple Pie",
      precio: 7900,
    },
    {
      nombre: "Ole Smoky – Charred",
      precio: 7900,
    },
    {
      nombre: "Ole Smoky – Honey",
      precio: 7900,
    },
    {
      nombre: "Jack Daniel's Apple",
      precio: 8900,
    },
    {
      nombre: "Jack Daniel's Fire",
      precio: 8900,
    },
    {
      nombre: "Jack Daniel's Honey",
      precio: 8900,
    },
    {
      nombre: "Johnnie Walker – Black Label",
      precio: 9800,
    },
    {
      nombre: "Ole Smoky – Cinnamon",
      precio: 7900,
    },
    {
      nombre: "Jack Daniel's Gentleman",
      precio: 11900,
    },
    {
      nombre: "Jack Daniel's Single Barrel",
      precio: 12900,
    },
    {
      nombre: "Johnnie Walker – Gold Label",
      precio: 13900,
    },
    {
      nombre: "Buchanan's 12",
      precio: 14900,
    },
    {
      nombre: "Chivas Regal 12",
      precio: 14900,
    },
  ],
  ole_smoky: [
    {
      nombre: "Ole Smoky – Butter Pecan",
      precio: 6900,
      descripcion: "Crema de whiskey con sabores a mantequilla, crema, nueces tostadas y caramelo.",
    },
    {
      nombre: "Ole Smoky – Mountain Java",
      precio: 6900,
      descripcion: "Crema de whiskey con café y vainilla.",
    },
    {
      nombre: "Ole Smoky – Strawberry Chocolate",
      precio: 6900,
      descripcion: "Crema de whiskey de Frutilla y Chocolate Blanco.",
    },
    {
      nombre: "Ole Smoky – Banana Pudding",
      precio: 6900,
      descripcion: "Crema de whiskey sabor Pudín de Banana.",
    },
    {
      nombre: "Ole Smoky Apple Pie",
      precio: 7900,
      descripcion: "Sabor a manzana, canela molida y otras especias.",
    },
    {
      nombre: "Ole Smoky – Cinnamon",
      precio: 7900,
      descripcion: "Moonshine con canela.",
    },
    {
      nombre: "Ole Smoky – Charred",
      precio: 7900,
      descripcion: "En barrica de roble 6 meses (51.5% Alc).",
    },
    {
      nombre: "Ole Smoky – Honey",
      precio: 7900,
      descripcion: "Versión Honey con un toque de miel.",
    },
    {
      nombre: "Ole Smoky Strawberry",
      precio: 7900,
      descripcion: "Crema de whiskey Ole Smoky con Frutillas y Chocolate Blanco.",
    },
  ],
  cocteleria: [
    {
      nombre: "Pisco Sour",
      precio: 6900,
      descripcion: "Pisco, limón, azúcar.",
    },
    {
      nombre: "Margarita",
      precio: 7500,
      descripcion: "Tequila, triple sec, jugo de limón.",
    },
    {
      nombre: "Mojito",
      precio: 6500,
      descripcion: "Ron, hierbabuena, azúcar, limón, soda.",
    },
    {
      nombre: "Aperol Spritz",
      precio: 6900,
      descripcion: "Aperol, espumante y soda.",
    },
  ],
  catas: [
    {
      nombre: "CATA DE OLE",
      precio: 11500,
      descripcion: "1 shot con cada variedad (4 a elección).",
    },
    {
      nombre: "CATA DE CERVEZAS",
      precio: 16000,
      descripcion: "6 vasos de muestra para probar cualquiera de nuestras variedades.",
    },
    {
      nombre: "CATA DE PISCOS",
      precio: 19200,
      descripcion: "4 vasos de cata + 2 bebidas a elección (negra, blanca, tónica, redbull, etc.).",
    },
  ],

  cervezas_de_barril: [
    {
      nombre: "ChuquiKamata – Lager sin filtrar",
      precio: 5000,
      descripcion: "Suave, ligeramente nubosa, alta tomabilidad y leve carbonatación."
    },
    {
      nombre: "Tübinger – Tubinator",
      precio: 5000,
      descripcion: "Dark Strong Ale (8% Alc, 28 IBU). Maltas dulces, caramelo, frutos secos y final tostado."
    },
    {
      nombre: "Brodir – Neipa",
      precio: 5900,
      descripcion: "5.6° Alc, New England IPA de apariencia nubosa y aroma intenso, no muy amarga."
    },
    {
      nombre: "El Regreso – Mocho",
      precio: 5900,
      descripcion: "English Red Ale (5.5° Alc, 25 IBU). Almendras, caramelo y ciruela, final semi dulce."
    },
    {
      nombre: "Szot – Chora Mailaxia",
      precio: 5900,
      descripcion: "Hazy IPA (6.5% Alc). Jugosa, tropical y cremosa, con notas a maracuyá, mango y naranja."
    },
    {
      nombre: "El Regreso – Juicy Pale Ale",
      precio: 6200,
      descripcion: "5.5% Alc, 25 IBU, frutal y fácil de tomar, con mango y frutas tropicales."
    },
    {
      nombre: "Loa – Minga Loca",
      precio: 6200,
      descripcion: "West Coast IPA (6.5° Alc, 50 IBU). Amargor y aromas cítricos/frutales."
    },
    {
      nombre: "Szot – Pilsoca",
      precio: 6200,
      descripcion: "Pale Lager Checa (5.5% Alc). Cremosa, leve dulzor, final herbal y floral."
    },
    {
      nombre: "Granizo – Abisal",
      precio: 6900,
      descripcion: "Imperial Stout, robusta y voluminosa, con café, chocolate y frutos secos."
    },
    {
      nombre: "Jester – Biciclo",
      precio: 6900,
      descripcion: "Doble Hazy IPA (8% Alc, 70 IBU). Muy lupulada, aromas tropicales y resinosos."
    },
    {
      nombre: "Jester – Manitoba",
      precio: 6900,
      descripcion: "Dorada, refrescante, balance de amargor. 5.2% Alc, 40 IBU."
    },
    {
      nombre: "Jester – Mornin",
      precio: 6900,
      descripcion: "Stout con avena, sedosa, con café y maltas tostadas."
    },
    {
      nombre: "Szot – Aguita de Calzon",
      precio: 6900,
      descripcion: "Double dry hopped hazy IPA (6.5% Alc), con notas a guayaba, pino y frutilla."
    },
    {
      nombre: "Szot – Marzeneke",
      precio: 6900,
      descripcion: "Amber lager (5.5° Alc, 30 IBU) con notas a pan tostado, nueces y miel."
    },
    {
      nombre: "Szot – Perruchi",
      precio: 6900,
      descripcion: "Pilsner Lager (4.9% Alc). Suave, carbonatación media, ideal para empezar."
    },
    {
      nombre: "Tamango – Green Room",
      precio: 6900,
      descripcion: "Hoppy Pale Ale (5.5% Alc). Aromas frutales (maracuyá, piña) y algo de resinas."
    },
    {
      nombre: "Bundor Ninfa",
      precio: 7200,
      descripcion: "Irish Red Ale, ámbar intenso, caramelo y toffe, amargor sutil."
    },
    {
      nombre: "Bundor – Troll",
      precio: 7200,
      descripcion: "Oatmeal stout (5.8% Alc), con avena, cacao y café."
    },
    {
      nombre: "Jester – Chelada Wey",
      precio: 7200,
      descripcion: "Mexican Lager (5.2%). Cuerpo suave, con adición de limón, final seco y balanceado."
    },
    {
      nombre: "Jester – Luptopia",
      precio: 7200,
      descripcion: "West Coast Imperial IPA (9° Alc, 100 IBU). Sabor cítrico, frutal y herbal."
    },
    {
      nombre: "Jester – Red Eye",
      precio: 7200,
      descripcion: "Red IPA (7.5° Alc, 80 IBU). Amargor firme, leve maltosidad, notas a pino y cítricos."
    },
    {
      nombre: "Jester – Resinosa",
      precio: 7200,
      descripcion: "NEIPA (7% Alc, 60 IBU). Frutal (damasco, papaya, coco) y golpe herbal resinoso."
    },
    {
      nombre: "Tamango – Space",
      precio: 7200,
      descripcion: "Triple hazy IPA (9% Alc). Aromas a pomelo, durazno, piña, cuerpo maltoso."
    },
    {
      nombre: "Tamango – Brazlian Wax",
      precio: 7300,
      descripcion: "Juicy IPA (5.8% Alc). Turbia, fruta tropical madura, coco y toques mentolados."
    },
    {
      nombre: "Jester – El Retorno del IBU",
      precio: 7500,
      descripcion: "West Coast IPA (6.2% Alc, 80 IBU). Intensos aromas a maracuyá y cítricos."
    },
    {
      nombre: "Jester – Evening",
      precio: 7500,
      descripcion: "Oatmeal Stout (6% Alc). Notas a café, chocolate bitter y tostado."
    },
    {
      nombre: "Szot – Daddy Danky",
      precio: 7600,
      descripcion: "Hazy IPA con lúpulos neozelandeses (Nelson Sauvin, Motueka), 6.5% Alc."
    }
  ],
  cervezas_amber_y_rojas: [
    {
      nombre: "Brodir – Red Ipa",
      precio: 5900,
      descripcion: "Red Ipa de color rojizo a ámbar. Enfocada en el lúpulo, con caramelo/toffe y frutos tropicales."
    },
    {
      nombre: "Loa – Otra Ronda",
      precio: 6200,
      descripcion: "American Amber Lager (35 IBU, 5.1% Alc.)."
    },
    {
      nombre: "Bundor – Freyja",
      precio: 6500,
      descripcion: "Ambar Bitter (6° Alc, 17 IBU). Color cobre, aroma a bizcocho y leve caramelo toffee."
    },
    {
      nombre: "Jester – Feierabend 🇩🇪",
      precio: 6500,
      descripcion: "Amber Märzen (5.8° Alc), con malta Munich y un toque de lúpulos alemanes."
    },
    {
      nombre: "Tubinger – Red Ale",
      precio: 6500,
      descripcion: "Color rojo intenso, espuma abundante, notas a ciruelas, caramelo y algo de tostado (5.5% Alc, 27 IBU)."
    },
    {
      nombre: "Cuello Negro – Ambar",
      precio: 6900,
      descripcion: "Amber Pale Ale (5.8% Alc, 23 IBU), maltosa, frutal, amargor bajo y equilibrado."
    }
  ],
  cervezas_frutales: [
    {
      nombre: "Lacustre – K-Lafate",
      precio: 6900,
      descripcion: "Cerveza frutal basada en el fruto del sur de Chile. 20 IBU, 6% Alc."
    },
    {
      nombre: "Tamango – Elektra",
      precio: 6900,
      descripcion: "6° Alc. Kettle Sour con frambuesa, maracuyá y yuzu. Acidez natural de la fruta."
    },
    {
      nombre: "Delirium – Red",
      precio: 8200,
      descripcion: "8% Alc, 10 IBU. Cerveza dulce y frutal, con leve acidez a cerezas y espuma rosada."
    },
    {
      nombre: "Lindemans – Kriek 🇧🇪",
      precio: 8200,
      descripcion: "3.5° Alc, 18 IBU. Lambic belga con 1 año en barrica + jugo de cereza, ligeramente ácida."
    }
  ],
  cervezas_ipas_y_lupuladas: [
    {
      nombre: "Byggvir – Ipaliptus",
      precio: 6200,
      descripcion: "60 IBU, 6% Alc. IPA de color rubio pajizo, de aromas herbales. En boca es levemente dulce, con toques herbales y eucalipto, y un final levemente amargo."
    },
    {
      nombre: "Jester – La Nube",
      precio: 6200,
      descripcion: "New England Pale Ale. Sedosa, nubosa, de aroma a frutos tropicales. Ideal para quienes inician en este mundo. 40 IBU, 5.2% Alc."
    },
    {
      nombre: "Bundor – Kali",
      precio: 6500,
      descripcion: "6.5° Alc, 60 IBU. De color ámbar pálido, aroma potente a cítrico y frutos tropicales (pomelo, mango, guayaba), en boca textura media y con un amargor alto, retrogusto largo y resinoso."
    },
    {
      nombre: "Jester – Chispeza",
      precio: 6900,
      descripcion: "West Coast Pils más liviana en cuerpo y ligera que una IPA,con una carga desproporcionada de lúpulos con un doble dry hop la hacen ser una cerveza única. Intensos aromas a frutas tropicales y exóticos, con un balance preciso y una tomabilidad muy alta. 4."
    },
    {
      nombre: "Szot – Chora Mailaxia",
      precio: 6900,
      descripcion: "Hazy IPA de 6.5% Alc Jugosa, tropical y cremosa. Explota las notas a maracuya, mango y naranja. Tiene un retrogusto un poco amargo."
    },
    {
      nombre: "Tamango – Corta Corriente",
      precio: 6900,
      descripcion: "IPA de lupulo fresco y tropical, una de las estrellas del bar. 55 IBU, 6% Alc."
    }
  ],
  cervezas_lagers_y_rubias: [
    {
      nombre: "Coda – Cream Ale",
      precio: 5900,
      descripcion: "4.7% Alc, 18 IBU. Es limpia, bien atenuada y sabrosa, con ligeros toques a maiz. Fácil de tomar y refrescante, pero con más cuerpo que las lagers americanas."
    },
    {
      nombre: "Jester – Chido Wey",
      precio: 5900,
      descripcion: "Mexican Lager de 5.2° Alc. sin filtrar, con un hermoso color dorado, levemente nublada, de cuerpo suave y ligero. En aroma se perciben ricas notas de granos de malta y de maíz por la adición de este. Es seca, muy limpia en sabor y tiene un amargor balance"
    },
    {
      nombre: "Tubinger – Summer",
      precio: 5900,
      descripcion: "Golden Ale. Aroma leve a lupulo y cereal. En boca se siente fresca y veraniega, de cuerpo ligero. 20 IBU, 4% Alc."
    },
    {
      nombre: "Byggvir – Schwarzelager",
      precio: 6200,
      descripcion: "Es una schwarzbier (dark lager) de 4,7 grados y 26 de IBU. De facil tomabilidad y cuerpo ligero. En boca tostada con notas a cacao y chocolate amargo. Que su color no te engañe!"
    },
    {
      nombre: "Loa – Atrapanubes",
      precio: 6200,
      descripcion: "Lager altamente refrescante. 18 IBU, 4.8% Alc."
    },
    {
      nombre: "Greed – Erase una vez en Greedland",
      precio: 6900,
      descripcion: "Cerveza Kölsch, parecida a una Pilsner alemana, pero con mayor tomabilidad. Exquisita, suave, refrescante, liviana, ideal para el verano y para quienes se estan integrando al mundo de las birras artesanales. 18 IBU, 4.6° Alc"
    },
    {
      nombre: "Tamango – Humboldt",
      precio: 6900,
      descripcion: "Clásica pilsen alemana, para tomarla fresca y fría, con aromas que recuerdan a pan recién horneado, toques florales y tomabilidad máxima. 5% Alc."
    }
  ],
  cervezas_oscuras: [
    {
      nombre: "Brodir – Porter",
      precio: 5900,
      descripcion: "5.5% Alc. Cerveza oscura de alta tomabilidad con base en distintas maltas tostadas y oscuras. Destaca su adicion de Cacao Nibsm lo que le da un sabor chocolatoso unico."
    },
    {
      nombre: "Bundor – Nessie",
      precio: 6500,
      descripcion: "8.0° Alc, 17 IBU. Wee Heavy de color marrón rubí intenso, aroma a toffee, ahumado y algo de chocolate, cuerpo pleno en boca y una ligera sensación alcohólica. Retrogusto corto pero complejo que recuerda a frutos secos."
    },
    {
      nombre: "Cuello Negro – Stout",
      precio: 6900,
      descripcion: "Stout de cuerpo medio, sensacion a cafe express y un leve malteo sabor a caramelo. 56 IBU, 8% Alc."
    },
    {
      nombre: "Greed – Cachocabra",
      precio: 6900,
      descripcion: "Strong Ale / American con notas y toques de merken ahumado. Una cerveza única y distinta. 7.5% Alc, 27 IBU"
    },
    {
      nombre: "Delirium – Tremens",
      precio: 8200,
      descripcion: "Strong Pale Ale de 8,5% Alc, 24 IBU. Aroma ligeramente a malta, un buen toque de alcohol con notas dulces y frutales.En un principio predominan los sabores cítricosos, luego los sabores tienden hacia notas más dulces."
    }
  ],
  cervezas_sin_alcohol_y_cheladas: [
    {
      nombre: "Chelada",
      precio: 1500,
      descripcion: "Zumo de limon y escarchado de sal"
    },
    {
      nombre: "Michelada",
      precio: 2000,
      descripcion: "Zumo de limon, salsa inglesa y tabasco en vaso escarchado de sal y merken ahumado."
    },
    {
      nombre: "Erdinger sin alcohol 330cc",
      precio: 4500,
      descripcion: "Cerveza sin alcohol 330cc"
    },
    {
      nombre: "SIN ALCOHOL – Erdinger Botellin",
      precio: 5500,
      descripcion: "Cerveza de trigo, lager, en botellin de 500 ml"
    }
  ],
};

/**
 * Formato de precios
 */
export const formatPrice = (price: number) => {
  return price.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });
};

/**
 * Categorías con iconos e imágenes
 */
export const menuCategories = [
  { id: "pizzas", name: "Pizzas", icon: "🍕", image: "/categories/pizzas.webp", extras: [{ id: 'pizzas_adicional', name: 'Adicionales' }] },
  { id: "hamburguesas", name: "Hamburguesas", icon: "🍔", image: "/categories/hamburguesas.webp" },
  { id: "tablas_y_snacks", name: "Tablas & Snacks", icon: "🧀", image: "/categories/tablas-snacks.webp" },
  {
    id: "cervezas_de_barril",
    name: "Cervezas de Barril",
    icon: "🍺",
    image: "/categories/cerveza-barril.webp",
    extras: [
      { id: 'cervezas_amber_y_rojas', name: 'Amber y Rojas' },
      { id: 'cervezas_frutales', name: 'Frutales' },
      { id: 'cervezas_ipas_y_lupuladas', name: 'IPAs y Lupuladas' },
      { id: 'cervezas_lagers_y_rubias', name: 'Lagers y Rubias' },
      { id: 'cervezas_oscuras', name: 'Oscuras' },
      { id: 'cervezas_sin_alcohol_y_cheladas', name: 'Sin Alcohol y Cheladas' },
    ]
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    image: "/categories/bebidas-y-jugos.webp",
    extras: [
      { id: 'aguas', name: 'Aguas' },
      { id: 'bebidas_energeticas', name: 'Energéticas' },
      { id: 'jugos', name: 'Jugos' },
      { id: 'limonadas', name: 'Limonadas' }
    ]
  },
  { id: "shots_2x", name: "Shots 2x", icon: "🥃", image: "/categories/shot-2x.webp" },
  {
    id: "piscos_tradicionales",
    category_name: 'Piscos',
    name: "Tradicionales",
    icon: "🍸",
    image: "/categories/piscos.webp",
    extras: [
      { id: 'piscos_artesanales', name: 'Artesanales' },
      { id: 'piscos_premium', name: 'Premium' }
    ]
  },
  { id: "tragos_after_office", name: "Tragos After Office", icon: "🍹", image: "/categories/after-office.webp" },
  {
    id: "destilados_gin",
    category_name: 'Destilados',
    name: "Gin",
    icon: "🥂",
    image: "/categories/destilados.webp",
    extras: [
      { id: 'destilados_ron', name: 'Ron' },
      { id: 'destilados_vodka', name: 'Vodka' }
    ]
  },
  { id: "whiskys", name: "Whiskys", icon: "🥃", image: "/categories/whisky.webp" },
  { id: "ole_smoky", name: "Ole Smoky", icon: "🥃", image: "/categories/ole-smoky.webp" },
  { id: "cocteleria", name: "Coctelería", icon: "🍸", image: "/categories/cocteleria.webp" },
  { id: "catas", name: "Catas", icon: "🍷", image: "/categories/catas.webp" },
];