"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft } from "lucide-react"

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
              135deg,
              rgba(16, 185, 129, 0.03) 0%,
              rgba(52, 211, 153, 0.06) 50%,
              rgba(16, 185, 129, 0.03) 100%
            );
          }

          :global(.dark) #referencias {
            background: linear-gradient(
              135deg,
              rgba(16, 185, 129, 0.08) 0%,
              rgba(52, 211, 153, 0.12) 50%,
              rgba(110, 231, 183, 0.08) 100%
            );
          }

          @keyframes particles-float {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0) rotate(0deg);
            }
            25% {
              transform: translate(-50%, -50%) translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translate(-50%, -50%) translateY(0) rotate(180deg);
            }
            75% {
              transform: translate(-50%, -50%) translateY(20px) rotate(270deg);
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

          @keyframes gradientFlow {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animated-gradient-text {
            background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #10b981);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-shift 3s ease infinite;
          }

          .animated-gradient-hr {
            height: 3px;
            background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #10b981);
            background-size: 200% auto;
            animation: gradient-shift 3s ease infinite, hr-expand 1s ease-out;
            border: none;
            margin: 0 auto;
          }

          .ref-img {
            box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          :global(.dark) .ref-img {
            box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
          }

          .ref-img:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 35px rgba(16, 185, 129, 0.5);
          }

          :global(.dark) .ref-img:hover {
            box-shadow: 0 8px 20px rgba(52, 211, 153, 0.5);
          }

          .blue-button {
            background: linear-gradient(135deg, #10b981, #34d399);
            color: white;
            border: none;
          }

          .blue-button:hover {
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
          }

          .shimmer-button {
            background-size: 300%;
            animation: gradientFlow 4s ease infinite;
          }
        `}</style>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] animate-[particles-float_20s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.1),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(110,231,183,0.08),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.09),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(52,211,153,0.11),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.15),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(110,231,183,0.12),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(52,211,153,0.16),transparent_35%)]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animated-gradient-text uppercase">
              Referencias
            </h2>
            <hr className="animated-gradient-hr w-64" />
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              ✅ +1000 clientes satisfechos en todo el país
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              📦 Envíos diarios por transporte y retiros coordinados
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              💬 Testimonios reales de WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8 max-w-5xl mx-auto">
            {mainReferences.map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg md:rounded-xl bg-muted">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Referencia ${index + 1}`}
                  className="ref-img object-cover w-full h-full cursor-pointer"
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
              className="blue-button shimmer-button relative overflow-hidden rounded-lg hover:scale-105 transition-transform px-8 py-6 text-lg font-semibold"
            >
              Ver Todas las Referencias
            </Button>
          </div>
        </div>
      </section>

      {showGallery && (
        <div className="fixed inset-0 bg-white dark:bg-black z-[9999] flex flex-col">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border flex-shrink-0">
            <Button
              onClick={() => setShowGallery(false)}
              className="blue-button shimmer-button hover:scale-105 transition-transform px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold flex items-center gap-2 text-sm md:text-base"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              Volver
            </Button>
            <h2 className="text-sm md:text-2xl font-bold text-foreground text-center flex-1 px-2">
              Galería de Referencias
            </h2>
            <div className="w-[60px] md:w-[100px]"></div>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6">
            <div className="w-full max-w-[1200px] mx-auto pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {allReferences.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-xl bg-muted cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Referencia ${index + 1}`}
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
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
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.6)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
