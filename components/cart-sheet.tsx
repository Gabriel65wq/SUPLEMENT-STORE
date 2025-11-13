"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { Product } from "@/lib/products-data"
import { CheckoutForm } from "@/components/checkout-form"
import { PaymentInvoice } from "@/components/payment-invoice"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartSheetProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemoveItem: (productId: string) => void
  onClearCart: () => void
}

export function CartSheet({ isOpen, onClose, items, onRemoveItem, onClearCart }: CartSheetProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentData, setPaymentData] = useState<{
    deliveryMethod: "retiro" | "cargo"
    formData: any
    pickupDate: string
    pickupTime: string
    totalARS: number
  } | null>(null)

  const totalARS = items.reduce((sum, item) => sum + (item.product.priceARS || 0) * item.quantity, 0)

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleContinueToPayment = (data: {
    deliveryMethod: "retiro" | "cargo"
    formData: any
    pickupDate: string
    pickupTime: string
    totalARS: number
  }) => {
    setPaymentData(data)
    setShowCheckout(false)
    setShowPayment(true)
  }

  const handleBackFromPayment = () => {
    setShowPayment(false)
    setShowCheckout(true)
  }

  return (
    <>
      <Sheet open={isOpen && !showCheckout && !showPayment} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-[450px] bg-white dark:bg-black text-black dark:text-white border-none">
          <style jsx>{`
            @keyframes gradientFlow {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
          `}</style>

          <SheetHeader className="border-b-2 border-emerald-200/20 dark:border-emerald-500/20 pb-6 mb-6">
            <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">
              Carrito de Compras
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-32 h-32 mb-6 opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-full h-full text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">El carrito está vacío</h3>
                <p className="text-muted-foreground mb-8">Agrega productos para comenzar tu pedido</p>
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-500 dark:to-emerald-300 text-white hover:scale-105 transition-transform"
                  style={{
                    backgroundSize: "300%",
                    animation: "gradientFlow 4s ease infinite",
                  }}
                >
                  Ver Productos
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="grid grid-cols-[80px_1fr_auto] gap-4 p-4 bg-gradient-to-br from-emerald-50/50 to-emerald-50/30 dark:from-emerald-900/10 dark:to-emerald-900/5 border border-emerald-200/20 dark:border-emerald-500/20 rounded-xl hover:translate-x-1 hover:border-emerald-400/40 dark:hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                    >
                      <div className="w-20 h-20 relative overflow-hidden rounded-lg bg-muted flex-shrink-0">
                        <img
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-between min-w-0">
                        <h4 className="font-semibold truncate text-foreground">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                          ${((item.product.priceARS || 0) * item.quantity).toLocaleString("es-AR")} ARS
                        </p>
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="rounded-lg bg-red-100/50 dark:bg-red-900/20 border border-red-300/30 dark:border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-200/50 dark:hover:bg-red-900/30 hover:scale-105 transition-all"
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <SheetFooter className="border-t-2 border-emerald-200/20 dark:border-emerald-500/20 pt-6 mt-6 space-y-4 bg-gradient-to-r from-emerald-50/50 to-emerald-50/50 dark:from-emerald-900/10 dark:to-emerald-900/10 -mx-6 px-6 -mb-6 pb-6">
                  <div className="w-full space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Resumen</h3>
                      <div className="flex justify-between p-4 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-900/50 rounded-lg border border-emerald-200/30 dark:border-emerald-500/30">
                        <span className="font-semibold text-lg">Total:</span>
                        <span className="font-bold text-xl text-emerald-600 dark:text-emerald-400">
                          ${totalARS.toLocaleString("es-AR")} ARS
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-500 dark:to-emerald-300 text-white hover:scale-105 transition-transform font-bold text-lg py-6"
                      onClick={handleCheckout}
                      style={{
                        backgroundSize: "300%",
                        animation: "gradientFlow 4s ease infinite",
                      }}
                    >
                      Continuar con el Pago
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 bg-transparent"
                      onClick={onClearCart}
                    >
                      Vaciar Carrito
                    </Button>
                  </div>
                </SheetFooter>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={showCheckout} onOpenChange={(open) => !open && setShowCheckout(false)}>
        <DialogContent className="max-w-[1600px] w-[95vw] max-h-[95vh] overflow-y-auto bg-white dark:bg-black border-emerald-200 dark:border-emerald-800">
          <CheckoutForm
            items={items}
            totalARS={totalARS}
            onBack={handleBackToCart}
            onContinueToPayment={handleContinueToPayment}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={showPayment} onOpenChange={(open) => !open && setShowPayment(false)}>
        <DialogContent className="max-w-[1800px] w-[98vw] max-h-[95vh] overflow-y-auto bg-white dark:bg-black border-emerald-200 dark:border-emerald-800">
          {paymentData && (
            <PaymentInvoice
              items={items}
              totalARS={paymentData.totalARS}
              deliveryMethod={paymentData.deliveryMethod}
              formData={paymentData.formData}
              pickupDate={paymentData.pickupDate}
              pickupTime={paymentData.pickupTime}
              onBack={handleBackFromPayment}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
