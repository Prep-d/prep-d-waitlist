"use client"

import { motion } from "framer-motion"
import { Smartphone, Users, UtensilsCrossed, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Share Your Profile",
    description: "Connect your wearables and tell us your dietary goals. We analyze your health data to understand exactly what your body needs.",
  },
  {
    number: "02", 
    icon: Users,
    title: "Get Matched",
    description: "We pair you with a vetted personal chef who specializes in your dietary needs and cuisine preferences.",
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Enjoy Fresh Meals",
    description: "Your chef prepares meals in your kitchen, leaving you with days of perfectly portioned, health-optimized food.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gray-900">
            Three Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-secondary rounded-2xl p-8 h-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-gray-200 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                    <step.icon className="h-7 w-7 text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector - only show between cards on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
