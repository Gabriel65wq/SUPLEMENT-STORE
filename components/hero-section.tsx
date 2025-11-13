"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Instagram } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center justify-center"
    >
      <style jsx>{`
        #inicio {
          background: linear-gradient(
            160deg,
            rgba(6, 182, 212, 0.03) 0%,
            rgba(34, 211, 238, 0.06) 50%,
            rgba(6, 182, 212, 0.02) 100%
          );
        }

        :global(.dark) #inicio {
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
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #06b6d4,
            #22d3ee,
            #67e8f9,
            #06b6d4
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-[infoFloat_18s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 animate-[particleFloat_15s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18)_2px,transparent_2px),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.15)_3px,transparent_3px),radial-gradient(circle_at_45%_60%,rgba(6,182,212,0.12)_2px,transparent_2px),radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.16)_2.5px,transparent_2.5px)] bg-[length:100%_100%]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-balance animated-gradient-text">
            Suplement Store
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 animated-gradient-text">SUPLEMENTOS DEPORTIVOS</p>
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed text-pretty">
            Suplementos deportivos de calidad premium para maximizar tus resultados. Amplia variedad de productos,
            precios competitivos y envíos a todo el país. Potencia tu rendimiento con la mejor selección del mercado.
          </p>

          <div className="flex flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="rounded-full shimmer-button blue-button text-xs sm:text-sm md:text-base px-3 py-2 h-9 sm:px-4 sm:py-2 sm:h-10 md:px-6 md:h-11"
            >
              <a href="#productos">Ver Productos</a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full shimmer-button blue-button text-xs sm:text-sm md:text-base px-3 py-2 h-9 sm:px-4 sm:py-2 sm:h-10 md:px-6 md:h-11"
                >
                  Redes Sociales
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Síguenos en Redes Sociales</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5 text-pink-600" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
