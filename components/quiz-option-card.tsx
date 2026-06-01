"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface QuizOptionCardProps {
  label: string
  icon?: LucideIcon
  selected: boolean
  onClick: () => void
  multiSelect?: boolean
}

export function QuizOptionCard({ 
  label, 
  icon: Icon, 
  selected, 
  onClick,
  multiSelect = false 
}: QuizOptionCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-4 rounded-xl text-left transition-all duration-200 border
        ${selected 
          ? "bg-primary text-white border-primary" 
          : "bg-white border-border hover:border-primary/40 hover:bg-primary/5"
        }
      `}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={`
            w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
            ${selected ? "bg-white/20" : "bg-primary/10"}
          `}>
            <Icon className={`w-4 h-4 ${selected ? "text-white" : "text-primary"}`} />
          </div>
        )}
        <span className={`text-sm font-medium ${selected ? "text-white" : "text-foreground"}`}>
          {label}
        </span>
        {multiSelect && (
          <div className={`
            ml-auto w-5 h-5 rounded border flex items-center justify-center flex-shrink-0
            ${selected 
              ? "bg-white border-white" 
              : "border-gray-300"
            }
          `}>
            {selected && <Check className="w-3 h-3 text-primary" />}
          </div>
        )}
      </div>
    </motion.button>
  )
}
