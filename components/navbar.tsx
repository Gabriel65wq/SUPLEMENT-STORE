"use client"

import { useState } from "react"
import { Menu, ShoppingCart, Sun, Moon, Home, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"

interface NavbarProps {
  cartItemsCount: number
  onCartClick: () => void
}

export function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Productos", href: "#productos" },
    { label: "Información", href: "#informacion" },
    { label: "Referencias", href: "#referencias" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
        {/* MOBILE: Hamburguesa a la izquierda */}
        <div className="flex items-center md:hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center h-10 w-10"
            >
              <div className="flex flex-col gap-1 items-center justify-center w-5 h-5">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
              <span className="sr-only">Abrir menú</span>
            </Button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP: SUPLEMENT STORE a la izquierda */}
        <div className="hidden md:flex items-center">
          <a href="#inicio" className="text-xl font-bold tracking-tight">
            SUPLEMENT STORE
          </a>
        </div>

        {/* MOBILE: Inicio + Carrito centrados */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" asChild>
            <a href="#inicio">
              <Home className="h-5 w-5" />
              <span className="sr-only">Inicio</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartItemsCount}
              </Badge>
            )}
            <span className="sr-only">Carrito</span>
          </Button>
        </div>

        {/* DESKTOP: Botón Inicio visible */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="transition-transform duration-300 hover:scale-110">
            <a href="#inicio">
              <Home className="h-5 w-5" />
              <span className="sr-only">Inicio</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex items-center justify-center h-10 w-10 transition-transform duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">
              {isMenuOpen ? (
                <X className="h-5 w-5 transition-all duration-300 rotate-90 scale-100" />
              ) : (
                <Menu className="h-5 w-5 transition-all duration-300 rotate-0 scale-100" />
              )}
            </div>
            <span className="sr-only">Abrir menú</span>
          </Button>

          {isMenuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartItemsCount}
              </Badge>
            )}
            <span className="sr-only">Carrito</span>
          </Button>
        </div>

        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative transition-all duration-300 hover:scale-110 hover:bg-cyan-50 dark:hover:bg-cyan-900/30"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-orange-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-cyan-400" />
            <span className="sr-only">Cambiar tema</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
