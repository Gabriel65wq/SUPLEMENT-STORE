"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products-data"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onAddToCart: (product: Product, quantity: number) => void
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [selectedPrice, setSelectedPrice] = useState<number>(product.pricesByQuantity[0]?.priceARS || 0)
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    Number.parseInt(product.pricesByQuantity[0]?.quantity.replace(/[^\d]/g, "") || "1"),
  )

  useEffect(() => {
    if (isOpen) {
      setSelectedPrice(product.pricesByQuantity[0]?.priceARS || 0)
      setSelectedQuantity(Number.parseInt(product.pricesByQuantity[0]?.quantity.replace(/[^\d]/g, "") || "1"))
    }
  }, [isOpen, product])

  const handlePriceSelect = (priceARS: number, quantity: string) => {
    setSelectedPrice(priceARS)
    setSelectedQuantity(Number.parseInt(quantity.replace(/[^\d]/g, "")))
  }

  const totalARS = selectedPrice * selectedQuantity

  const handleAddToCart = () => {
    const productWithPrice = {
      ...product,
      priceARS: selectedPrice,
    }
    onAddToCart(productWithPrice, selectedQuantity)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 bg-gradient-to-br from-background via-background to-primary/5">
        <style jsx>{`
          @keyframes gradientFlow {
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
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
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

          .modal-title {
            background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientFlow 3s ease infinite, fadeInUp 0.5s ease;
          }

          :global(.dark) .modal-title {
            background: linear-gradient(90deg, #34d399, #6ee7b7, #10b981);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .modal-category {
            color: #f97316;
            animation: fadeInUp 0.6s ease;
          }

          .modal-section-title {
            color: #10b981;
            animation: fadeInUp 0.7s ease;
          }

          .modal-divider {
            background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent);
            animation: scaleIn 0.8s ease;
          }

          .modal-image-container {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(249, 115, 22, 0.05));
            position: relative;
            overflow: hidden;
            animation: scaleIn 0.5s ease;
          }

          .modal-image-container::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: shimmer 3s infinite;
          }

          .modal-content-section {
            animation: fadeInUp 0.6s ease;
          }

          .price-button {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(249, 115, 22, 0.05));
            border: 2px solid rgba(16, 185, 129, 0.2);
            transition: all 0.3s ease;
            animation: fadeInUp 0.8s ease;
          }

          .price-button:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
            border-color: #10b981;
          }

          :global(.dark) .price-button {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(249, 115, 22, 0.08));
            border-color: rgba(16, 185, 129, 0.3);
          }

          :global(.dark) .price-button:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(249, 115, 22, 0.15));
            border-color: #34d399;
          }

          .price-button.selected {
            border-color: #10b981;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(249, 115, 22, 0.15));
            box-shadow: 0 5px 20px rgba(16, 185, 129, 0.4);
            transform: scale(1.05);
          }

          :global(.dark) .price-button.selected {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(249, 115, 22, 0.2));
            border-color: #34d399;
          }

          .price-quantity {
            color: #10b981;
          }

          .total-price {
            color: #f97316;
          }

          .add-to-cart-button {
            background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #10b981) !important;
            background-size: 200% 100%;
            animation: gradientFlow 4s ease infinite;
            color: white !important;
            border: none !important;
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
          }

          .add-to-cart-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          }
        `}</style>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 h-10 w-10 z-50 bg-background/80 backdrop-blur-sm hover:bg-destructive/20 transition-all"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="grid md:grid-cols-[2fr,3fr] gap-0">
          {/* Imagen del producto */}
          <div className="modal-image-container relative min-h-[600px] flex items-center justify-center p-8">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="max-w-full max-h-[550px] w-auto h-auto object-contain rounded-lg relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contenido del producto */}
          <div className="flex flex-col gap-6 p-8">
            <div>
              <h2 className="modal-title text-3xl font-bold mb-2">{product.name}</h2>
              <Badge
                variant="secondary"
                className="modal-category text-sm font-semibold uppercase tracking-wide bg-orange-100 dark:bg-orange-900/30"
              >
                {product.category}
              </Badge>
            </div>

            <hr className="modal-divider border-none h-[2px]" />

            {/* Descripción */}
            <div className="modal-content-section">
              <h3 className="modal-section-title font-semibold text-base uppercase tracking-wide mb-2">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="modal-content-section">
              <h3 className="modal-section-title font-semibold text-base uppercase tracking-wide mb-2">
                Detalles / Beneficios Principales
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-content-section">
              <h3 className="modal-section-title font-semibold text-base uppercase tracking-wide mb-2">Modo de Uso</h3>
              <p className="text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-lg">{product.howToUse}</p>
            </div>

            <div>
              <h3 className="modal-section-title font-semibold text-base uppercase tracking-wide mb-3">
                Precios por Cantidad
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {product.pricesByQuantity.map((priceOption, index) => (
                  <button
                    key={index}
                    className={`price-button flex flex-col items-center justify-center h-auto py-3 rounded-lg cursor-pointer ${
                      selectedPrice === priceOption.priceARS &&
                      selectedQuantity === Number.parseInt(priceOption.quantity.replace(/[^\d]/g, ""))
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handlePriceSelect(priceOption.priceARS, priceOption.quantity)}
                  >
                    <span className="price-quantity text-sm font-bold">{priceOption.quantity}</span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      ${priceOption.priceARS.toLocaleString("es-AR")} ARS
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-6 mt-auto">
              <div className="bg-muted/50 p-6 rounded-lg space-y-3 backdrop-blur-sm">
                <div className="flex justify-between">
                  <span>Cantidad seleccionada:</span>
                  <span className="font-semibold">{selectedQuantity}x</span>
                </div>
                <div className="flex justify-between">
                  <span>Precio unitario:</span>
                  <span className="font-semibold">${selectedPrice.toLocaleString("es-AR")} ARS</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-3">
                  <span>Total:</span>
                  <span className="total-price">${totalARS.toLocaleString("es-AR")} ARS</span>
                </div>
              </div>

              <Button className="add-to-cart-button w-full mt-6" size="lg" onClick={handleAddToCart}>
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
