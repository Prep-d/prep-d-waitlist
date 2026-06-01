"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onOpenQuiz: () => void
}

export function CTASection({ onOpenQuiz }: CTASectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Ready to transform your nutrition?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join our early access program and be among the first to experience 
            truly personalized nutrition from world-class chefs.
          </p>
          <Button 
            size="lg" 
            onClick={onOpenQuiz}
            className="group text-base px-8 py-6 bg-accent hover:bg-accent/90 text-white font-medium"
          >
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-muted-foreground text-sm mt-6">
            No credit card required. Limited spots available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
