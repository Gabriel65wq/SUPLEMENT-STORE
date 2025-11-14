import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function PreguntasFrecuentesPage() {
  const faqs = [
    {
      q: "¿Qué suplemento me conviene si soy principiante?",
      a: "Lo ideal es comenzar con proteínas o creatina, ya que son seguros, efectivos y fáciles de incorporar a la rutina."
    },
    {
      q: "¿La creatina hace mal?",
      a: "No, es uno de los suplementos más estudiados y seguros. Ayuda a mejorar fuerza, energía y recuperación."
    },
    {
      q: "¿Cómo sé qué proteína elegir?",
      a: "Si buscás recuperación y construcción muscular, usá Whey. Si querés subir de peso, elegí un ganador de masa."
    },
    {
      q: "¿Cuánto tarda en llegar mi pedido?",
      a: "Los envíos suelen tardar entre 24 y 72 horas hábiles según la ubicación del cliente."
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Transferencia bancaria, efectivo y otros medios habilitados según disponibilidad."
    },
    {
      q: "¿Puedo cambiar un producto?",
      a: "Sí, siempre que tenga falla o no sea el producto solicitado. Se cambia sin costo adicional."
    },
    {
      q: "¿Los suplementos son originales?",
      a: "Sí, trabajamos únicamente con marcas reconocidas, certificadas y 100% auténticas."
    },
    {
      q: "¿Necesito tener experiencia para tomar suplementos?",
      a: "No, muchos suplementos están diseñados para principiantes y se adaptan a cualquier nivel físico."
    },
    {
      q: "¿Puedo combinar proteínas y creatina?",
      a: "Sí, es una de las combinaciones más recomendadas para mejorar fuerza, masa muscular y recuperación."
    },
    {
      q: "¿Hacen envíos al interior?",
      a: "Sí, enviamos a todo el país a la sucursal más cercana del cliente."
    }
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Preguntas Frecuentes (FAQ)
          </h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-cyan-500 dark:border-cyan-400 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
