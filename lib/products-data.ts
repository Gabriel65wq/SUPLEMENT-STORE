export type Category =
  | "Todos"
  | "Importados"
  | "Proteínas"
  | "Creatinas"
  | "Ganador de peso"
  | "Magnesio y Omega 3"
  | "Colágeno y Resveratrol"
  | "Vitaminas"
  | "Pre Entreno"
  | "Accesorios"
  | "Combos"
  | "Accesorios Apple"
  | "Varios"
  | "Vapes"
  | "Perfumes"

export interface PriceByQuantity {
  quantity: string
  priceUSD: number
}

export interface Product {
  id: string
  name: string
  subtitle: string
  image: string
  category: Exclude<Category, "Todos">
  description: string
  details: string[]
  pricesByQuantity: PriceByQuantity[]
  priceUSD?: number
}

export const products: Product[] = [
  // CATEGORÍA: PROTEÍNAS
  {
    id: "proteina1",
    name: "WHEY DOY PACK 2LB – STAR NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/whey-protein-star-nutrition-doy-pack.jpg",
    category: "Proteínas",
    description:
      "WHEY DOY PACK 2LB - STAR NUTRITION es el suplemento ideal para quienes buscan maximizar su ingesta proteica de manera efectiva y sencilla. Este ultra concentrado, aislado e hidrolizado de suero se obtiene mediante métodos no agresivos, garantizando así la máxima pureza y calidad del producto.",
    details: [
      "Beneficios Principales:",
      "• Proteína de Alta Calidad: fomenta el crecimiento muscular y ayuda a mantener la masa.",
      "• Incremento de Fuerza: mejora el rendimiento en entrenamientos.",
      "• Recuperación Muscular: acelera la recuperación post entrenamiento.",
      "• Prevención de Pérdida Muscular: evita degradación por sobreentrenamiento.",
      "",
      "Modo de Uso:",
      "Consumir 1 a 2 servicios al día, uno por la mañana y otro post entrenamiento. Puede mezclarse con agua o agregarse a comidas.",
      "",
      "Optimiza tu rendimiento y alcanzá tus objetivos fitness con WHEY DOY PACK de Star Nutrition.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "proteina2",
    name: "WHEY PROTEIN 2LB – GOLD NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/whey-protein-gold-nutrition-2lb.jpg",
    category: "Proteínas",
    description:
      "WHEY PROTEIN 2LB - GOLD NUTRITION es un Blend Premium de proteína concentrada, hidrolizada y aislada, con 28g de proteína por servicio. Incluye BCAAs y L-Glutamina de alta calidad.",
    details: [
      "Beneficios Principales:",
      "• Baja en carbohidratos y calorías.",
      "• Delicioso sabor.",
      "• Calidad superior y altamente efectiva.",
      "",
      "Modo de Uso:",
      "Mezclar 1 scoop en 250 ml de agua o leche descremada, antes o después de entrenar.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "proteina3",
    name: "WHEY PROTEIN PLATINUM X3KG – STAR NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/whey-protein-platinum-star-nutrition-3kg.jpg",
    category: "Proteínas",
    description: "Proteína de suero de alta pureza, diseñada para optimizar rendimiento y recuperación.",
    details: [
      "Beneficios Principales:",
      "• Construcción y mantenimiento muscular.",
      "• Recuperación acelerada gracias a BCAA y glutamina.",
      "• Sabor agradable y excelente disolución.",
      "",
      "Modo de Uso:",
      "Diluir 1 scoop en 200 ml de agua o leche descremada antes o después del entrenamiento.",
      "",
      "Presentación:",
      "Doy pack 3KG, rinde 100 servicios.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "proteina4",
    name: "WHEY PROTEIN X5LB – GOLD NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/whey-protein-gold-nutrition-5lb.jpg",
    category: "Proteínas",
    description:
      "Proteína 100% WHEY PROTEIN® concentrada, hidrolizada e aislada. Aporta 28g de proteína por servicio, incluye BCAAs y L-Glutamina.",
    details: [
      "Beneficios Principales:",
      "• Alto contenido de aminoácidos.",
      "• Bajo en carbohidratos y calorías.",
      "• Reconocida por su sabor excepcional.",
      "",
      "Modo de Uso:",
      "Mezclar una porción de 30g antes o después de entrenar.",
      "Contiene 2300g (65 medidas).",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },

  // CATEGORÍA: CREATINAS
  {
    id: "creatina1",
    name: "CREATINA STAR NUTRITION DOY PACK 300G",
    subtitle: "Precio: $0 USD",
    image: "/creatina-star-nutrition-doy-pack-300g.jpg",
    category: "Creatinas",
    description: "Creatina monohidrato de la más alta calidad para maximizar tu rendimiento deportivo y cognitivo.",
    details: [
      "¿Para qué sirve?",
      "• Incrementa fuerza y potencia.",
      "• Mejora rendimiento deportivo.",
      "• Ayuda al desarrollo muscular y reducción de grasa.",
      "• Evita pérdida muscular por lesión.",
      "• Beneficios cognitivos: memoria, concentración y velocidad mental.",
      "",
      "Modo de Uso:",
      "Consumir 5g diarios en agua, ideal 1h antes o después de entrenar.",
      "Funciona por acumulación, no saltear tomas.",
      "",
      "Duración:",
      "60 servicios (2 meses).",
      "",
      "Combinación recomendada:",
      "• Para aumento muscular: creatina + whey + ZMA.",
      "• Para salud muscular/cerebral: creatina + magnesio + colágeno + omega 3.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "creatina2",
    name: "CREATINA X300G POTE – STAR NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/creatina-star-nutrition-pote-300g.jpg",
    category: "Creatinas",
    description: "Creatina monohidrato ultramicronizada para máxima absorción.",
    details: [
      "Beneficios:",
      "• Más fuerza y resistencia.",
      "• Menor fatiga muscular.",
      "• Recuperación acelerada.",
      "",
      "Modo de Uso:",
      "5g en agua antes o después de entrenar.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "creatina3",
    name: "CREATINA X300G – GOLD NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/creatina-gold-nutrition-300g.jpg",
    category: "Creatinas",
    description: "Ideal para energía rápida y entrenamientos intensos.",
    details: [
      "Beneficios:",
      "• Retrasa fatiga muscular.",
      "• Aumenta fuerza y potencia.",
      "• Mejora hidratación celular.",
      "",
      "Modo de Uso:",
      "Diluir 5g en 200ml agua o jugo.",
      "Carga: 5g x2 veces al día.",
      "Mantenimiento: 5g diarios.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
  {
    id: "creatina4",
    name: "CREATINA X1KG – STAR NUTRITION",
    subtitle: "Precio: $0 USD",
    image: "/creatina-star-nutrition-1kg.jpg",
    category: "Creatinas",
    description: "Presentación económica de 1KG para usuarios regulares de creatina.",
    details: [
      "¿Para qué sirve?",
      "• Mayor fuerza y potencia.",
      "• Mejora rendimiento deportivo.",
      "• Aumenta masa muscular y reduce grasa.",
      "• Beneficios cognitivos.",
      "",
      "Modo de Uso:",
      "5g diarios. Funciona por acumulación.",
      "",
      "Duración:",
      "200 servicios (200 días).",
      "",
      "Combinación recomendada:",
      "• Para masa muscular: creatina + whey + ZMA.",
      "• Para salud: magnesio + colágeno + omega 3.",
    ],
    pricesByQuantity: [{ quantity: "1x", priceUSD: 0 }],
    priceUSD: 0,
  },
]
