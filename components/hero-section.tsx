"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Instagram, Zap, Package } from 'lucide-react'

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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideExpandRight {
          from {
            width: 0%;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .hero-title {
          animation: fadeInScale 1s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 1.2s ease-out;
        }

        .hero-decorative-bar {
          animation: slideExpandRight 1.5s ease-out, glowPulse 3s ease-in-out infinite 1.5s;
        }

        .hero-description {
          animation: fadeInUp 1.4s ease-out;
        }

        .hero-buttons {
          animation: scaleIn 1.6s ease-out;
        }

        .feature-badge {
          animation: slideInLeft 1.8s ease-out;
        }

        .feature-badge:nth-child(2) {
          animation: slideInRight 1.8s ease-out;
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
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="feature-badge flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Resultados Garantizados</span>
            </div>
            <div className="feature-badge flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 backdrop-blur-sm">
              <Package className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Envíos a Todo el País</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-balance">
              <span className="animated-gradient-text">
                Suplement Store
              </span>
            </h1>

            <div className="hero-subtitle mb-8">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide animated-gradient-text uppercase">
                Suplementos Deportivos
              </p>
              <div className="hero-decorative-bar h-1 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500" />
            </div>

            <p className="hero-description text-base md:text-lg lg:text-xl text-foreground/80 dark:text-foreground/70 mb-10 leading-relaxed text-pretty max-w-3xl mx-auto px-4">
              Suplementos deportivos de calidad premium para maximizar tus resultados. Amplia variedad de productos,
              precios competitivos y envíos a todo el país. Potencia tu rendimiento con la mejor selección del mercado.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="default"
                asChild
                className="rounded-full shimmer-button blue-button text-sm md:text-base px-6 py-3 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
              >
                <a href="#productos" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Ver Productos
                </a>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="default"
                    variant="outline"
                    className="rounded-full text-sm md:text-base px-6 py-3 h-auto font-semibold border-2 border-cyan-500/50 hover:border-cyan-500 bg-cyan-500/5 hover:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 transition-all duration-300 hover:scale-105"
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
                        <MessageCircle className="h-5 w-5 text-cyan-600" />
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
      </div>
    </section>
  )
}
