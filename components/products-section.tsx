"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductModal } from "@/components/product-modal"
import { products, type Category, type Product } from "@/lib/products-data"

interface ProductsSectionProps {
  onAddToCart: (product: Product, quantity: number) => void
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const categories: Category[] = [
    "Todos",
    "Importados",
    "Proteínas",
    "Creatinas",
    "Ganador de Peso",
    "Magnesio y Omega 3",
    "Colágeno y Resveratrol",
    "Vitaminas",
    "Pre Entreno",
    "Accesorios",
    "Combos",
  ]

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="productos" className="py-16 md:py-24 relative overflow-hidden">
      <style jsx>{`
        #productos {
          background: linear-gradient(
            160deg,
            rgba(6, 182, 212, 0.03) 0%,
            rgba(34, 211, 238, 0.06) 50%,
            rgba(6, 182, 212, 0.02) 100%
          );
        }

        :global(.dark) #productos {
          background: linear-gradient(
            160deg,
            rgba(6, 182, 212, 0.08) 0%,
            rgba(34, 211, 238, 0.12) 50%,
            rgba(6, 182, 212, 0.06) 100%
          );
        }

        @keyframes infoFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-3%, 3%) rotate(-3deg);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(2%, -2%);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes hr-expand {
          0% {
            width: 0%;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes categoryGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(34, 211, 238, 0.4);
          }
        }

        @keyframes categoryPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9, #06b6d4);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite, fadeInUp 0.5s ease;
        }

        .animated-gradient-hr {
          height: 3px;
          background: linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9, #06b6d4);
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite, hr-expand 1s ease-out;
          border: none;
          margin: 0 auto;
        }

        .category-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: scaleIn 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .category-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .category-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .category-button:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.4);
        }

        .category-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        .category-button.active {
          animation: categoryGlow 2s ease-in-out infinite;
        }

        .product-card {
          animation: fadeInUp 0.6s ease;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .product-image {
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1) rotate(2deg);
        }
      `}</style>

      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-[infoFloat_18s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 animate-[particleFloat_15s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18)_2px,transparent_2px),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.15)_3px,transparent_3px),radial-gradient(circle_at_45%_60%,rgba(6,182,212,0.12)_2px,transparent_2px),radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.16)_2.5px,transparent_2.5px)] bg-[length:100%_100%]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animated-gradient-text uppercase">
            Nuestros Productos
          </h2>
          <hr className="animated-gradient-hr w-64" />
        </div>

        <div className="mb-12 space-y-3">
          {/* Fila 1: 5 botones */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(0, 5).map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`category-button relative z-10 ${
                  selectedCategory === category
                    ? "shimmer-button modern-button active"
                    : "border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:border-cyan-500 dark:hover:border-cyan-400"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Fila 2: 6 botones */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(5).map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`category-button relative z-10 ${
                  selectedCategory === category
                    ? "shimmer-button modern-button active"
                    : "border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:border-cyan-500 dark:hover:border-cyan-400"
                }`}
                style={{ animationDelay: `${(index + 5) * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="product-card overflow-hidden cursor-pointer border-0 shadow-md hover:shadow-2xl bg-white dark:bg-gray-900 rounded-xl"
              onClick={() => setSelectedProduct(product)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-cyan-50 to-orange-50 dark:from-cyan-900/20 dark:to-orange-900/20">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="product-image object-cover w-full h-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-2 p-4 text-center">
                <h3 className="font-semibold text-base line-clamp-2 text-gray-900 dark:text-gray-100">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  ${(product.priceARS || product.pricesByQuantity[0]?.priceARS || 0).toLocaleString("es-AR")} ARS
                </p>
                <Badge variant="secondary" className="text-xs bg-cyan-100 dark:bg-cyan-900/30">
                  {product.category}
                </Badge>
                <Button
                  size="sm"
                  className="w-full mt-2 shimmer-button modern-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProduct(product)
                  }}
                >
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No hay productos en esta categoría</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  )
}
