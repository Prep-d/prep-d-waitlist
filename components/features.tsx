"use client"

import { motion } from "framer-motion"
import { 
  Watch, 
  ChefHat, 
  Salad, 
  CalendarDays,
  ShieldCheck,
  Sparkles,
  Timer,
  HeartPulse
} from "lucide-react"

const features = [
  {
    icon: Watch,
    title: "Wearable Sync",
    description: "Connects with Apple Watch, Oura, Whoop to understand your metabolic patterns.",
  },
  {
    icon: ChefHat,
    title: "Vetted Chefs",
    description: "Every chef passes background checks, food safety certification, and culinary tests.",
  },
  {
    icon: Salad,
    title: "Any Diet",
    description: "Keto, vegan, allergen-free, or custom macros — your chef adapts to you.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Schedule",
    description: "Book weekly, bi-weekly, or on-demand. Reschedule with 24-hour notice.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Every visit covered by comprehensive liability insurance for peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Spotless Kitchen",
    description: "Chefs clean as they cook. Your kitchen is left pristine after every session.",
  },
  {
    icon: Timer,
    title: "Meal Prep Ready",
    description: "Receive 4-6 days of portioned meals with labeled reheating instructions.",
  },
  {
    icon: HeartPulse,
    title: "Health Optimized",
    description: "AI meal suggestions based on your glucose response and energy patterns.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-primary relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4 text-white">
            Everything you need
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            A complete personal chef experience designed for modern wellness
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
