"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft } from 'lucide-react'

const mainReferences = ["/imagenes/referencias1.jpg", "/imagenes/referencias2.jpg", "/imagenes/referencias3.jpg"]

const allReferences = [
  "/imagenes/referencias1.jpg",
  "/imagenes/referencias2.jpg",
  "/imagenes/referencias3.jpg",
  "/imagenes/referencias4.jpg",
  "/imagenes/referencias5.jpg",
  "/imagenes/referencias6.jpg",
  "/imagenes/referencias7.jpg",
  "/imagenes/referencias8.jpg",
  "/imagenes/referencias9.jpg",
  "/imagenes/referencias10.jpg",
  "/imagenes/referencias11.jpg",
  "/imagenes/referencias12.jpg",
  "/imagenes/referencias13.jpg",
  "/imagenes/referencias14.jpg",
  "/imagenes/referencias15.jpg",
  "/imagenes/referencias16.jpg",
  "/imagenes/referencias17.jpg",
  "/imagenes/referencias18.jpg",
  "/imagenes/referencias19.jpg",
  "/imagenes/referencias20.jpg",
]

export function ReferencesSection() {
  const [showGallery, setShowGallery] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showGallery) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "unset"
      }
    }
  }, [showGallery])

  return (
    <>
      <section id="referencias" className="py-16 md:py-24 relative overflow-hidden">
        <style jsx>{`
          #referencias {
            background: linear-gradient(
              160deg,
              rgba(6, 182, 212, 0.03) 0%,
              rgba(34, 211, 238, 0.06) 50%,
              rgba(6, 182, 212, 0.02) 100%
            );
          }

          :global(.dark) #referencias {
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
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
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

          @keyframes scaleInHover {
            from {
              transform: scale(0.95);
            }
            to {
              transform: scale(1);
            }
          }

          .animated-gradient-text {
            background: linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9, #06b6d4);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-shift 3s ease infinite;
          }

          .animated-gradient-hr {
            height: 3px;
            background: linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9, #06b6d4);
            background-size: 200% auto;
            animation: gradient-shift 3s ease infinite, hr-expand 1s ease-out;
            border: none;
            margin: 0 auto;
          }

          .ref-img {
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeInUp 0.6s ease-out;
          }

          :global(.dark) .ref-img {
            box-shadow: 0 4px 20px rgba(6, 182, 212, 0.25);
          }

          .ref-img:hover {
            transform: scale(1.08) translateY(-5px);
            box-shadow: 0 12px 40px rgba(6, 182, 212, 0.6);
            filter: brightness(1.1);
          }

          :global(.dark) .ref-img:hover {
            box-shadow: 0 12px 40px rgba(34, 211, 238, 0.5);
          }

          .blue-button {
            background: linear-gradient(135deg, #06b6d4, #22d3ee);
            color: white;
            border: none;
          }

          .blue-button:hover {
            box-shadow: 0 10px 25px rgba(6, 182, 212, 0.4);
          }

          .shimmer-button {
            background-size: 300%;
            animation: gradientFlow 4s ease infinite;
          }
          
          @keyframes gradientFlow {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
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
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animated-gradient-text uppercase">
              Referencias
            </h2>
            <hr className="animated-gradient-hr w-64" />
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12 space-y-1">
            <p className="text-sm md:text-base leading-snug font-medium text-muted-foreground/90 dark:text-muted-foreground/80" style={{textShadow: '0 0 10px rgba(6, 182, 212, 0.15)'}}>
              💪 Resultados reales de nuestros atletas y clientes fitness.
            </p>
            <p className="text-sm md:text-base leading-snug font-medium text-muted-foreground/90 dark:text-muted-foreground/80" style={{textShadow: '0 0 10px rgba(6, 182, 212, 0.15)'}}>
              ⚡ Suplementos de alta calidad para todos los objetivos.
            </p>
            <p className="text-sm md:text-base leading-snug font-medium text-muted-foreground/90 dark:text-muted-foreground/80" style={{textShadow: '0 0 10px rgba(6, 182, 212, 0.15)'}}>
              ⭐ Opiniones verificadas de compradores satisfechos.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-5xl mx-auto">
            {mainReferences.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-2 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Referencia ${index + 1}`}
                  className="object-cover w-full h-full cursor-pointer transition-all duration-500 hover:scale-110 hover:brightness-110"
                  style={{
                    boxShadow: '0 8px 30px rgba(6, 182, 212, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(6, 182, 212, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(6, 182, 212, 0.25)'
                  }}
                  onClick={() => {
                    setShowGallery(true)
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setShowGallery(true)}
              className="blue-button shimmer-button relative overflow-hidden rounded-full hover:scale-105 transition-transform px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
            >
              Ver Todas las Referencias
            </Button>
          </div>
        </div>
      </section>

      {showGallery && (
        <div className="fixed inset-0 z-[9999] flex flex-col" style={{background: 'linear-gradient(160deg, rgba(6, 182, 212, 0.05), rgba(20, 184, 166, 0.08))'}}>
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
          
          <div className="relative z-10 flex items-center justify-between p-4 md:p-6 border-b border-cyan-500/20 flex-shrink-0">
            <Button
              onClick={() => setShowGallery(false)}
              className="shimmer-button modern-button hover:scale-105 transition-transform px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold flex items-center gap-2 text-sm md:text-base shadow-lg"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              Volver
            </Button>
            <h2 className="text-sm md:text-2xl font-bold animated-gradient-text text-center flex-1 px-2">
              Galería de Referencias
            </h2>
            <div className="w-[60px] md:w-[100px]"></div>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain p-4 md:p-6">
            <div className="w-full max-w-[1200px] mx-auto pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {allReferences.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-2 border-cyan-500/20 hover:border-cyan-400/40 cursor-pointer transition-all duration-500 hover:scale-105"
                    style={{
                      boxShadow: '0 8px 30px rgba(6, 182, 212, 0.2)',
                      animationDelay: `${index * 0.05}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 15px 50px rgba(6, 182, 212, 0.45), 0 0 30px rgba(34, 211, 238, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(6, 182, 212, 0.2)'
                    }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Referencia ${index + 1}`}
                      className="object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/97 z-[10000] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-12 h-12"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </Button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Referencia en tamaño real"
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.6)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
