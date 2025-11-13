"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import type { CartItem } from "@/components/cart-sheet"

interface CheckoutFormProps {
  items: CartItem[]
  totalARS: number
  onBack: () => void
  onContinueToPayment: (data: any) => void
}

export function CheckoutForm({ items, totalARS, onBack, onContinueToPayment }: CheckoutFormProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<"retiro" | "cargo">("retiro")
  const [pickupDate, setPickupDate] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    email: "",
    phone: "",
    address: "",
    number: "",
    floor: "",
    locality: "",
    province: "",
    postal: "",
    instructions: "",
  })

  const validateDate = (date: string) => {
    if (!date) {
      return false
    }

    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      return false
    }

    return true
  }

  const validateTime = (time: string) => {
    if (!time) {
      return false
    }

    const [hours] = time.split(":").map(Number)

    if (hours < 9 || hours >= 17) {
      return false
    }

    return true
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setPickupDate(date)
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value
    setPickupTime(time)
  }

  const handleContinueToPayment = () => {
    if (!formData.name || !formData.dni || !formData.email || !formData.phone) {
      alert("Por favor complete todos los campos de información personal")
      return
    }

    if (deliveryMethod === "retiro") {
      if (!pickupDate || !pickupTime) {
        alert("Por favor seleccione fecha y horario de retiro")
        return
      }
      if (!validateDate(pickupDate) || !validateTime(pickupTime)) {
        return
      }
    }

    if (deliveryMethod === "cargo") {
      if (!formData.address || !formData.number || !formData.locality || !formData.province || !formData.postal) {
        alert("Por favor complete todos los campos de domicilio")
        return
      }
    }

    if (onContinueToPayment) {
      onContinueToPayment({
        deliveryMethod,
        formData,
        pickupDate,
        pickupTime,
        totalARS,
      })
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-emerald-200 dark:border-emerald-800 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-500 dark:to-emerald-300 bg-clip-text text-transparent animate-fade-in">
          Resumen del Pedido
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-shadow animate-slide-up">
            <h3 className="font-semibold text-xl text-emerald-900 dark:text-emerald-100">Productos</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm border-b border-emerald-100 dark:border-emerald-900/50 pb-2"
                >
                  <span className="flex-1 text-foreground">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    ${((item.product.priceARS || 0) * item.quantity).toLocaleString("es-AR")} ARS
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-emerald-200 dark:border-emerald-800 pt-4 space-y-3 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-900/50 p-4 rounded-lg">
              <div className="flex justify-between font-bold text-xl">
                <span className="text-emerald-900 dark:text-emerald-100">Total:</span>
                <span className="text-emerald-600 dark:text-emerald-400">${totalARS.toLocaleString("es-AR")} ARS</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-base font-semibold">Método de Entrega</Label>
            <RadioGroup
              value={deliveryMethod}
              onValueChange={(value) => setDeliveryMethod(value as "retiro" | "cargo")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="retiro" id="retiro" />
                <Label htmlFor="retiro" className="cursor-pointer">
                  Retiro en Persona
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cargo" id="cargo" />
                <Label htmlFor="cargo" className="cursor-pointer">
                  Vía Cargo
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-emerald-900 dark:text-emerald-100">Información Personal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                  id="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dni">DNI</Label>
                <Input
                  id="dni"
                  placeholder="12345678"
                  value={formData.dni}
                  onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Gmail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Número de Teléfono</Label>
                <Input
                  id="phone"
                  placeholder="+54 9 11 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          {deliveryMethod === "cargo" && (
            <div className="space-y-3 border-t border-emerald-200 dark:border-emerald-800 pt-4">
              <h3 className="font-semibold text-lg text-emerald-900 dark:text-emerald-100">Datos de Domicilio</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    placeholder="Av. Corrientes"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Altura</Label>
                  <Input
                    id="number"
                    placeholder="1234"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="floor">Piso/Departamento</Label>
                  <Input
                    id="floor"
                    placeholder="5° A"
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locality">Localidad</Label>
                  <Input
                    id="locality"
                    placeholder="CABA"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Provincia</Label>
                  <Input
                    id="province"
                    placeholder="Buenos Aires"
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Código Postal</Label>
                  <Input
                    id="postal"
                    placeholder="1043"
                    value={formData.postal}
                    onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="instructions">Instrucciones de Entrega</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Timbre 5A, portero eléctrico"
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {deliveryMethod === "retiro" && (
            <div className="space-y-3 border-t border-emerald-200 dark:border-emerald-800 pt-4">
              <h3 className="font-semibold text-lg text-emerald-900 dark:text-emerald-100">
                Fecha y Horario de Retiro
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha de Retiro</Label>
                  <Input
                    id="date"
                    type="date"
                    value={pickupDate}
                    onChange={handleDateChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horario (9 AM - 5 PM)</Label>
                  <Input id="time" type="time" min="09:00" max="17:00" value={pickupTime} onChange={handleTimeChange} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-emerald-200 dark:border-emerald-800 pt-4 mt-6 space-y-2">
        <Button
          variant="outline"
          className="w-full border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 bg-transparent"
          size="lg"
          onClick={onBack}
        >
          Volver al Carrito
        </Button>
        <Button className="w-full modern-button shimmer-button" size="lg" onClick={handleContinueToPayment}>
          Continuar al Pago
        </Button>
      </div>
    </div>
  )
}
