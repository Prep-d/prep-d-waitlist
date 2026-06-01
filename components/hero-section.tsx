"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onOpenQuiz: () => void
}

export function HeroSection({ onOpenQuiz }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with visible edge gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Base background */}
        <div className="absolute inset-0 bg-[#FDFBF7]" />
        
        {/* Large corner gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2C5545]/20 via-[#2C5545]/10 to-transparent blur-3xl" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#8B7355]/20 via-[#8B7355]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#8B7355]/15 via-[#8B7355]/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-[#2C5545]/15 via-[#2C5545]/5 to-transparent blur-3xl" />
        
        {/* Edge color strips */}
        <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-[#2C5545]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#F5F2ED] to-transparent" />
        
        {/* Side gradients */}
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-[#2C5545]/10 to-transparent" />
        <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-[#8B7355]/10 to-transparent" />
        
        {/* Center fade for content focus */}
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-transparent" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[10%] w-32 h-32 rounded-full bg-[#2C5545]/10 blur-xl"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[12%] w-28 h-28 rounded-full bg-[#8B7355]/12 blur-xl"
        />
        <motion.div
          animate={{ y: [-10, 20, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-[#2C5545]/8 blur-xl"
        />
        <motion.div
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-[18%] w-20 h-20 rounded-full bg-[#8B7355]/10 blur-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary border border-primary/20 rounded-full mb-8 bg-white/80 backdrop-blur-sm shadow-sm">
            <Leaf className="h-3 w-3" />
            Now accepting early access
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance leading-[1.1] mb-6"
        >
          Personal chefs,{" "}
          <span className="italic text-accent">powered by</span>{" "}
          your health data
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
        >
          Fresh meals cooked in your kitchen by vetted chefs. Every dish 
          informed by your wearables, dietary needs, and wellness goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            onClick={onOpenQuiz}
            className="group text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
