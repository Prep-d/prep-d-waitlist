"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Leaf } from "lucide-react"

interface SuccessStateProps {
  name: string
}

export function SuccessState({ name }: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 className="w-8 h-8 text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">
          You&apos;re on the list{name ? `, ${name}` : ""}
        </h2>
        <p className="text-muted-foreground max-w-sm mx-auto mb-8">
          We&apos;ll review your profile and reach out with next steps for your personalized chef experience.
        </p>

        <div className="bg-secondary rounded-xl p-5 max-w-sm mx-auto text-left">
          <p className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            What happens next
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
              <span>Profile review and chef matching</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
              <span>Early access invitation via email</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
              <span>Schedule your first chef session</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
