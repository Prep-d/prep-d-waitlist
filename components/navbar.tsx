"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenQuiz: () => void
}

export function Navbar({ onOpenQuiz }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/98 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Prep&apos;d
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#how-it-works" 
            className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link 
            href="#features" 
            className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
          >
            Features
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={onOpenQuiz}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 shadow-sm hover:shadow-md transition-all"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <nav className="flex flex-col p-4 gap-1">
              <Link 
                href="#how-it-works" 
                className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="#features" 
                className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Button 
                  onClick={() => {
                    onOpenQuiz()
                    setIsOpen(false)
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
