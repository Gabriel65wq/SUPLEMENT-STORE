"use client"

export function InfoSection() {
  return (
    <section id="informacion" className="py-16 md:py-24 relative overflow-hidden">
      <style jsx>{`
        /* Actualizando fondo para coincidir con #inicio */
        #informacion {
          background: linear-gradient(
            160deg,
            rgba(16, 185, 129, 0.03) 0%,
            rgba(52, 211, 153, 0.06) 50%,
            rgba(16, 185, 129, 0.02) 100%
          );
        }

        :global(.dark) #informacion {
          background: linear-gradient(
            160deg,
            rgba(16, 185, 129, 0.08) 0%,
            rgba(52, 211, 153, 0.12) 50%,
            rgba(16, 185, 129, 0.06) 100%
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

        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #10b981,
            #34d399,
            #6ee7b7,
            #10b981
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }

        .animated-gradient-hr {
          height: 3px;
          background: linear-gradient(
            90deg,
            #10b981,
            #34d399,
            #6ee7b7,
            #10b981
          );
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite, hr-expand 1s ease-out;
          border: none;
          margin: 0 auto;
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-[infoFloat_18s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.12),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(52,211,153,0.08),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 animate-[particleFloat_15s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18)_2px,transparent_2px),radial-gradient(circle_at_85%_80%,rgba(52,211,153,0.15)_3px,transparent_3px),radial-gradient(circle_at_45%_60%,rgba(16,185,129,0.12)_2px,transparent_2px),radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.16)_2.5px,transparent_2.5px)] bg-[length:100%_100%]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animated-gradient-text uppercase">
            Información
          </h2>
          <hr className="animated-gradient-hr w-64" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Retiros y Envíos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              Retiros y Envíos de Mercadería
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              En nuestro sistema de venta mayorista, ofrecemos dos modalidades para que puedas recibir tu pedido de
              forma cómoda y segura: retiro en depósito o envío a través de transporte. A continuación, te detallamos
              cómo funciona cada opción:
            </p>
          </div>

          {/* Retiros por Depósito */}
          <div className="space-y-4 bg-muted/50 p-6 rounded-lg border">
            <h4 className="text-xl font-bold">Retiros por Depósito</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Pedido previo:</strong> Debe realizarse previamente a través de nuestra página o mediante un
                vendedor autorizado.
              </li>
              <li>
                <strong>Coordinación:</strong> Una vez confirmado el pedido, se coordina día y horario con nuestro
                equipo.
              </li>
              <li>
                <strong>Horario de retiro:</strong> Lunes a viernes de 9 a 17 hs, sábados de 9 a 13 hs.
              </li>
              <li>
                <strong>Sin seña ni pago anticipado:</strong> El pago se realiza al momento del retiro.
              </li>
              <li className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Importante: No se entregan pedidos sin coordinación previa ni fuera del horario acordado.
              </li>
            </ul>
          </div>

          {/* Envíos a Todo el País */}
          <div className="space-y-4 bg-muted/50 p-6 rounded-lg border">
            <h4 className="text-xl font-bold">Envíos a Todo el País</h4>
            <p className="text-muted-foreground">Trabajamos con las siguientes empresas de logística:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Vía Cargo</li>
              <li>Correo Argentino</li>
              <li>Andreani</li>
              <li>Motomensajería (Quilmes, Zona Sur, CABA y alrededores)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Condiciones para el envío:</strong> Pago anticipado, despacho el mismo día una vez acreditado el
              pago, y tiempos de entrega estimados de 1 a 3 días hábiles.
            </p>
          </div>

          {/* Medios de Pago */}
          <div className="space-y-4 bg-muted/50 p-6 rounded-lg border">
            <h4 className="text-xl font-bold">Medios de Pago</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Transferencias.</li>
              <li>• Pesos en efectivo.</li>
            </ul>
          </div>

          {/* Aclaraciones */}
          <div className="space-y-4 bg-muted/50 p-6 rounded-lg border">
            <h4 className="text-xl font-bold">Aclaraciones</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• No hace falta seña para retirar.</li>
              <li>• Para envíos, el pago debe realizarse con anticipación.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
