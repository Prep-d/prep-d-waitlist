"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { WaitlistQuiz } from "./waitlist-quiz"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] z-50 overflow-auto"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 min-h-full md:min-h-0 shadow-2xl border border-border">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <WaitlistQuiz onClose={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
