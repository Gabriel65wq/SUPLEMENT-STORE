import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-cyan-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="outline" className="mb-8 border-cyan-300 dark:border-cyan-700 hover:bg-cyan-100 dark:hover:bg-cyan-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Términos y Condiciones
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Al utilizar este sitio aceptás nuestras condiciones de compra, precios vigentes, métodos de pago, disponibilidad de productos y procesos de envío. Los pedidos se procesan únicamente cuando la información brindada es correcta y completa. Los tiempos de entrega pueden variar según la demanda o ubicación del cliente. Suplement Store se reserva el derecho de actualizar precios, modificar contenido del sitio o cancelar pedidos por información incorrecta o motivos de seguridad. Al finalizar una compra, el cliente confirma haber leído y aceptado estos términos y se compromete a utilizar el sitio de forma responsable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
