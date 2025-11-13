export type Category =
  | "Todos"
  | "Importados"
  | "Proteínas"
  | "Creatinas"
  | "Ganador de Peso"
  | "Magnesio y Omega 3"
  | "Colágeno y Resveratrol"
  | "Vitaminas"
  | "Pre Entreno"
  | "Accesorios"
  | "Combos"

export interface PriceByQuantity {
  quantity: string
  priceARS: number
}

export interface Product {
  id: string
  name: string
  subtitle: string
  image: string
  category: Exclude<Category, "Todos">
  description: string
  benefits: string[]
  howToUse: string
  pricesByQuantity: PriceByQuantity[]
  priceARS?: number
}

export const products: Product[] = [
  // CATEGORÍA: PROTEÍNAS
  {
    id: "proteina1",
    name: "WHEY DOY PACK 2LB – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/whey-protein-star-nutrition-doy-pack.jpg",
    category: "Proteínas",
    description:
      "WHEY DOY PACK 2LB - STAR NUTRITION es un ultra concentrado, aislado e hidrolizado de suero, producido mediante métodos no agresivos que garantizan máxima pureza y calidad. Ideal para complementar la dieta y aumentar la ingesta de proteína de forma eficiente.",
    benefits: [
      "Fomenta el crecimiento muscular y mantiene la masa muscular.",
      "Mejora la fuerza y el rendimiento en entrenamientos.",
      "Acelera la recuperación post entrenamiento.",
      "Evita la pérdida muscular generada por sobreentrenamiento.",
    ],
    howToUse:
      "Consumir 1 a 2 servicios diarios: uno a la mañana y otro post entrenamiento. Puede mezclarse con agua o sumarse a comidas.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "proteina2",
    name: "WHEY PROTEIN 2LB – GOLD NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/whey-protein-gold-nutrition-2lb.jpg",
    category: "Proteínas",
    description:
      "Blend Premium de proteína concentrada, aislada e hidrolizada con 28g por servicio. Incluye BCAA y L-Glutamina, esenciales para la recuperación y crecimiento muscular.",
    benefits: [
      "Proteína baja en carbohidratos y calorías.",
      "Reconocida por su sabor superior.",
      "Alto valor nutricional y digestibilidad.",
      "Suplemento de referencia por calidad y eficacia.",
    ],
    howToUse: "Mezclar 1 scoop en 250 ml de agua o leche descremada, antes o después de entrenar.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "proteina3",
    name: "WHEY PROTEIN PLATINUM X3KG – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/whey-protein-platinum-star-nutrition-3kg.jpg",
    category: "Proteínas",
    description:
      "Proteína de suero de leche de máxima pureza, diseñada para quienes desean mejorar su rendimiento físico y favorecer la recuperación muscular.",
    benefits: [
      "Aporta proteínas de alta calidad para construcción muscular.",
      "Recuperación acelerada: contiene aminoácidos esenciales, BCAA y glutamina.",
      "Excelente sabor y disolución.",
      "Presentación de 3KG con 100 servicios.",
    ],
    howToUse: "Diluir 1 scoop en 200 ml de agua o leche descremada antes o después del entrenamiento.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "proteina4",
    name: "WHEY PROTEIN X5LB – GOLD NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/whey-protein-gold-nutrition-5lb.jpg",
    category: "Proteínas",
    description:
      "Proteína premium 100% WHEY PROTEIN®, mezcla de proteínas concentradas, hidrolizadas e aisladas. Incluye BCAAs y L-Glutamina.",
    benefits: [
      "28g de proteína por servicio.",
      "Bajo en carbohidratos y calorías.",
      "Sabor excepcional, líder en su categoría.",
      "Presentación 2300g (65 servicios).",
    ],
    howToUse: "Mezclar 30g en agua o bebida preferida antes o después del entrenamiento.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },

  // CATEGORÍA: CREATINAS
  {
    id: "creatina1",
    name: "CREATINA STAR NUTRITION DOY PACK 300G",
    subtitle: "Precio: $0 ARS",
    image: "/creatina-star-nutrition-doy-pack-300g.jpg",
    category: "Creatinas",
    description:
      "Creatina monohidrato ideal para mejorar fuerza, potencia y rendimiento general. Suplemento seguro y altamente estudiado.",
    benefits: [
      "Aumenta fuerza y potencia explosiva.",
      "Mejora rendimiento deportivo.",
      "Favorece el desarrollo muscular y disminución de grasa.",
      "Evita pérdida muscular por lesión.",
      "Beneficios cognitivos: memoria, concentración y velocidad mental.",
      "60 servicios (300g).",
    ],
    howToUse:
      "Consumir 5g diarios en agua. Óptimo 1 hora antes o después de entrenar. No saltear tomas (funciona por acumulación).",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "creatina2",
    name: "CREATINA X300G POTE – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/creatina-star-nutrition-pote-300g.jpg",
    category: "Creatinas",
    description: "Creatina monohidrato ultramicronizada que garantiza mejor absorción y rendimiento.",
    benefits: ["Incremento de fuerza y resistencia.", "Reduce fatiga muscular.", "Recuperación más eficiente."],
    howToUse: "5g diarios mezclados con agua antes o después de entrenar.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "creatina3",
    name: "CREATINA X300G – GOLD NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/creatina-gold-nutrition-300g.jpg",
    category: "Creatinas",
    description: "Creatina diseñada para potenciar entrenamiento de alta intensidad y mejorar la energía muscular.",
    benefits: [
      "Aporte rápido de energía.",
      "Retrasa fatiga muscular.",
      "Mejora fuerza y potencia.",
      "Hidratación celular óptima.",
    ],
    howToUse: "Diluir 5g en 200 ml agua/jugo. Fase de carga: 5g dos veces al día. Mantenimiento: 5g diarios.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "creatina4",
    name: "CREATINA X1KG – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/creatina-star-nutrition-1kg.jpg",
    category: "Creatinas",
    description:
      "Creatina monohidrato recomendada para fuerza, salud muscular, composición corporal y beneficios cognitivos.",
    benefits: [
      "Mejora fuerza y potencia.",
      "Aumenta masa muscular y reduce grasa.",
      "Previene pérdida muscular por lesión.",
      "Mejora memoria, concentración y rendimiento cerebral.",
      "Duración: 200 servicios.",
    ],
    howToUse: "Consumir 5g diarios en agua. Funciona por acumulación.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },

  // CATEGORÍA: GANADOR DE PESO
  {
    id: "ganador1",
    name: "MUTTANT MASS DOY PACK X1.5KG – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/mutant-mass-star-nutrition-doy-pack.jpg",
    category: "Ganador de Peso",
    description:
      "MUTTANT MASS DOY PACK X1.5KG - STAR NUTRITION es un suplemento diseñado para quienes buscan incrementar su rendimiento físico y aumentar su masa muscular. Combina carbohidratos y proteínas de alta calidad que actúan como fuente de energía y apoyo a la recuperación muscular.",
    benefits: [
      "Energía sostenida gracias a su aporte de carbohidratos.",
      "Recuperación acelerada al consumirse post entrenamiento.",
      "Aporta aproximadamente 400 calorías por porción de 100g.",
      "Ideal para complementar dietas de volumen muscular.",
    ],
    howToUse:
      "Colocar 250–350cc de agua o leche en un shaker. Agregar 1 medida (100g) de Mutant Mass N.O. Batir y consumir. Cuándo tomarlo: antes de la actividad física o después del entrenamiento si se comió previamente.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "ganador2",
    name: "5LB GAINER GOLD – GOLD NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/gainer-gold-nutrition-5lb.jpg",
    category: "Ganador de Peso",
    description:
      "GAINER GOLD 5LB - GOLD NUTRITION combina un blend 8 en 1 con proteínas, carbohidratos complejos, aminoácidos, vitaminas y minerales. Diseñado para quienes buscan ganar peso de forma saludable y eficiente.",
    benefits: [
      "Aumento de masa muscular.",
      "Blend completo de fuentes proteicas y carbohidratos complejos.",
      "Energía sostenida por su fórmula 3:1 carbohidratos/proteína.",
      "Alta asimilación y excelente aporte energético.",
    ],
    howToUse:
      "Mezclar una porción con agua o leche, preferentemente después de entrenar para maximizar la recuperación y el aumento de masa muscular.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
  {
    id: "ganador3",
    name: "MUTANT MASS XXL X5KG – STAR NUTRITION",
    subtitle: "Precio: $0 ARS",
    image: "/mutant-mass-xxl-star-nutrition-5kg.jpg",
    category: "Ganador de Peso",
    description:
      "MUTANT MASS XXL X5KG de Star Nutrition es un suplemento premium formulado para incrementar masa muscular de manera efectiva. Contiene 80% carbohidratos y 20% proteínas, junto a vitaminas, minerales y L-Arginina.",
    benefits: [
      "Mezcla óptima de carbohidratos, proteínas, vitaminas y minerales.",
      "Generador de Óxido Nítrico (N.O.) gracias a su contenido de L-Arginina.",
      "Mejora la circulación y el rendimiento deportivo.",
      "Bajo en grasas y azúcares.",
      "Ideal para aumentar masa muscular sin aumentar grasa corporal.",
    ],
    howToUse:
      "Mezclar una porción de 75g con agua o bebida favorita. Consumir una vez al día, preferentemente después de entrenar, para una mejor recuperación y crecimiento muscular.",
    pricesByQuantity: [{ quantity: "1x", priceARS: 0 }],
    priceARS: 0,
  },
]
