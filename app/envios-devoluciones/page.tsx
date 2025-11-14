import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function EnviosDevolucionesPage() {
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
            Envíos y Devoluciones
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Realizamos envíos exclusivamente a la sucursal de transporte más cercana al domicilio del cliente para garantizar mayor seguridad y comodidad. Una vez despachado el paquete, enviamos comprobante y número de seguimiento. En caso de recibir un producto dañado, diferente o con fallas de fábrica, el cliente puede devolverlo para solicitar un cambio sin costo adicional, siempre que el artículo se encuentre en su empaque original y sin uso. No realizamos devoluciones por arrepentimiento de compra; solo aceptamos cambios por fallas o errores. Nuestro compromiso es entregarte tus suplementos en perfecto estado y con la mejor atención.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
