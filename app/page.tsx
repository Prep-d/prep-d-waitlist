"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { QuizModal } from "@/components/quiz-modal"

export default function HomePage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const handleOpenQuiz = () => {
    setIsQuizOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar onOpenQuiz={handleOpenQuiz} />
      <HeroSection onOpenQuiz={handleOpenQuiz} />
      <HowItWorks />
      <Features />
      <CTASection onOpenQuiz={handleOpenQuiz} />
      <Footer />

      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </main>
  )
}
