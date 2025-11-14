import { MessageCircle, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Columna 1: SUPLEMENT STORE */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400">SUPLEMENT STORE</h3>
            <p className="text-sm leading-relaxed">
              Suplementos deportivos de calidad premium. +1000 Clientes satisfechos.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 bg-transparent"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 text-cyan-500" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 bg-transparent"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 text-pink-500" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#informacion" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Información
                </a>
              </li>
              <li>
                <a href="#referencias" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Referencias
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/politica-privacidad" 
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block py-1 cursor-pointer touch-manipulation"
                  prefetch={true}
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/terminos-condiciones" 
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block py-1 cursor-pointer touch-manipulation"
                  prefetch={true}
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/envios-devoluciones" 
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block py-1 cursor-pointer touch-manipulation"
                  prefetch={true}
                >
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/preguntas-frecuentes" 
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block py-1 cursor-pointer touch-manipulation"
                  prefetch={true}
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Créditos */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400">Créditos</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Diseñada por: Gabriel Diaz</p>
              <p className="text-cyan-600 dark:text-cyan-400">Tel: +54 9 11 3429 5399</p>
            </div>
          </div>
        </div>

        {/* Copyright - siempre centrado */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-center text-sm">© 2025 Suplement Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
