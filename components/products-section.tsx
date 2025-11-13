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
            rgba(16, 185, 129, 0.03) 0%,
            rgba(249, 115, 22, 0.05) 50%,
            rgba(16, 185, 129, 0.02) 100%
          );
        }

        :global(.dark) #productos {
          background: linear-gradient(
            160deg,
            rgba(16, 185, 129, 0.06) 0%,
            rgba(249, 115, 22, 0.08) 50%,
            rgba(16, 185, 129, 0.05) 100%
          );
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-3%, 3%) rotate(-3deg);
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

        .animated-gradient-text {
          background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #10b981);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite, fadeInUp 0.5s ease;
        }

        .animated-gradient-hr {
          height: 3px;
          background: linear-gradient(90deg, #10b981, #f97316, #10b981);
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite, hr-expand 1s ease-out;
          border: none;
          margin: 0 auto;
        }

        .category-button {
          transition: all 0.3s ease;
          animation: scaleIn 0.4s ease;
        }

        .category-button:hover {
          transform: translateY(-2px) scale(1.05);
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
        <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[140%] animate-[float_18s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(249,115,22,0.06),transparent_50%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animated-gradient-text uppercase">
            Nuestros Productos
          </h2>
          <hr className="animated-gradient-hr w-64" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category
                  ? "shimmer-button modern-button"
                  : "border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category}
            </Button>
          ))}
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
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-emerald-50 to-orange-50 dark:from-emerald-900/20 dark:to-orange-900/20">
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
                  ${product.priceUSD || product.pricesByQuantity[0]?.priceUSD || 0} USD
                </p>
                <Badge variant="secondary" className="text-xs bg-emerald-100 dark:bg-emerald-900/30">
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
