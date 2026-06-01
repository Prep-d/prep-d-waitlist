"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Loader2, Zap, Scale, Activity, Moon, Dumbbell, Heart, Brain, Salad, Clock, Repeat, HelpCircle, Utensils, Truck, Smartphone, Watch, Gauge, Apple, ThumbsUp, MessageCircle, Calendar, Timer, HeartPulse, Leaf, Users, GraduationCap, User, Users2, Home, FlaskConical } from "lucide-react"
import { ProgressBar } from "./progress-bar"
import { QuizOptionCard } from "./quiz-option-card"
import { SuccessState } from "./success-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"

const questions = [
  {
    id: "household",
    question: "How many people are in your household?",
    subtitle: "This helps us understand your meal needs",
    multiSelect: false,
    options: [
      { label: "Just me", icon: User },
      { label: "2 people", icon: Users2 },
      { label: "3-4 people", icon: Users },
      { label: "5+ people", icon: Home },
    ],
  },
  {
    id: "goals",
    question: "What are you trying to improve?",
    subtitle: "Select all that apply",
    multiSelect: true,
    options: [
      { label: "More energy", icon: Zap },
      { label: "Weight management", icon: Scale },
      { label: "Blood sugar stability", icon: Activity },
      { label: "Better sleep", icon: Moon },
      { label: "Workout recovery", icon: Dumbbell },
      { label: "Hormonal health", icon: Heart },
      { label: "Gut health", icon: Brain },
      { label: "Healthier eating habits", icon: Salad },
    ],
  },
  {
    id: "relationship",
    question: "What best describes your relationship with healthy eating?",
    subtitle: "Choose one",
    multiSelect: false,
    options: [
      { label: "I know what to eat but lack time", icon: Clock },
      { label: "I struggle with consistency", icon: Repeat },
      { label: "Overwhelmed by conflicting advice", icon: HelpCircle },
      { label: "Healthy meals feel repetitive", icon: Utensils },
      { label: "I rely too much on takeout", icon: Truck },
      { label: "I want personalization for my body", icon: Smartphone },
    ],
  },
  {
    id: "tracking",
    question: "Do you use any health tracking tools?",
    subtitle: "Select all that apply",
    multiSelect: true,
    options: [
      { label: "Apple Watch / Apple Health", icon: Watch },
      { label: "Oura Ring", icon: Moon },
      { label: "Whoop", icon: Activity },
      { label: "CGM (Dexcom, Libre, Levels)", icon: Gauge },
      { label: "Fitbit", icon: HeartPulse },
      { label: "Gut microbiome test (ZOE, Viome)", icon: FlaskConical },
      { label: "MyFitnessPal / Cronometer", icon: Apple },
      { label: "None yet", icon: Smartphone },
    ],
  },
  {
    id: "interest",
    question: "Would you try a chef service personalized to your health data?",
    subtitle: "Be honest",
    multiSelect: false,
    options: [
      { label: "Definitely", icon: ThumbsUp },
      { label: "Interested, want to learn more", icon: MessageCircle },
      { label: "Maybe for special occasions", icon: Calendar },
      { label: "Probably not", icon: HelpCircle },
    ],
  },
  {
    id: "priorities",
    question: "What matters most when choosing a chef service?",
    subtitle: "Pick up to 2",
    multiSelect: true,
    maxSelect: 2,
    options: [
      { label: "Saves me time", icon: Timer },
      { label: "Improves my health", icon: HeartPulse },
      { label: "Better tasting healthy food", icon: Utensils },
      { label: "Personalized to my body", icon: Activity },
      { label: "Less food waste", icon: Leaf },
      { label: "Convenient for family", icon: Users },
      { label: "Learning what works for me", icon: GraduationCap },
    ],
  },
  {
    id: "dietary",
    question: "Any dietary restrictions or health considerations?",
    subtitle: "Optional",
    type: "textarea",
  },
  {
    id: "contact",
    question: "Where should we send your invite?",
    subtitle: "Almost there",
    type: "contact",
  },
]

interface WaitlistQuizProps {
  onClose?: () => void
}

export function WaitlistQuiz({ onClose }: WaitlistQuizProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", zipCode: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const currentQuestion = questions[currentStep]
  const totalSteps = questions.length

  const handleOptionSelect = (option: string) => {
    const questionId = currentQuestion.id
    
    if (currentQuestion.multiSelect) {
      const currentAnswers = (answers[questionId] as string[]) || []
      const maxSelect = (currentQuestion as { maxSelect?: number }).maxSelect
      
      if (currentAnswers.includes(option)) {
        setAnswers({
          ...answers,
          [questionId]: currentAnswers.filter(a => a !== option),
        })
      } else {
        if (maxSelect && currentAnswers.length >= maxSelect) {
          setAnswers({
            ...answers,
            [questionId]: [...currentAnswers.slice(1), option],
          })
        } else {
          setAnswers({
            ...answers,
            [questionId]: [...currentAnswers, option],
          })
        }
      }
    } else {
      setAnswers({
        ...answers,
        [questionId]: option,
      })
      setTimeout(() => {
        if (currentStep < totalSteps - 1) {
          setCurrentStep(currentStep + 1)
        }
      }, 200)
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else if (onClose) {
      onClose()
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      const supabase = createClient()
      
      const { error: insertError } = await supabase
        .from("waitlist_submissions")
        .insert({
          first_name: contactInfo.name,
          email: contactInfo.email,
          zip_code: contactInfo.zipCode,
          household_size: answers.household as string || null,
          cooking_struggle: Array.isArray(answers.relationship) ? answers.relationship : answers.relationship ? [answers.relationship] : null,
          meals_per_week: answers.interest as string || null,
          wearable_device: Array.isArray(answers.tracking) ? answers.tracking.join(", ") : answers.tracking || null,
          priorities: Array.isArray(answers.priorities) ? answers.priorities : null,
          dietary_restrictions: answers.dietary ? [answers.dietary as string] : null,
        })
      
      if (insertError) {
        if (insertError.code === "23505") {
          setError("This email is already on our waitlist.")
        } else {
          throw insertError
        }
        return
      }
      
      setIsComplete(true)
    } catch (err) {
      console.error("Submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    if (currentQuestion.type === "textarea") {
      return true
    }
    if (currentQuestion.type === "contact") {
      return contactInfo.name && contactInfo.email && contactInfo.zipCode
    }
    const answer = answers[currentQuestion.id]
    if (currentQuestion.multiSelect) {
      return Array.isArray(answer) && answer.length > 0
    }
    return !!answer
  }

  if (isComplete) {
    return <SuccessState name={contactInfo.name.split(" ")[0]} />
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-8"
        >
          <div className="text-center mb-6">
            <h2 className="font-serif text-xl md:text-2xl tracking-tight mb-1 text-slate-900">
              {currentQuestion.question}
            </h2>
            <p className="text-sm text-slate-500">
              {currentQuestion.subtitle}
            </p>
          </div>

          {currentQuestion.type === "textarea" ? (
            <div className="max-w-md mx-auto">
              <Textarea
                placeholder="E.g., gluten-free, vegetarian, allergies, diabetes..."
                value={(answers[currentQuestion.id] as string) || ""}
                onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                className="min-h-[100px] resize-none"
              />
            </div>
          ) : currentQuestion.type === "contact" ? (
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700">Name</label>
                <Input
                  placeholder="Your name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700">Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700">ZIP Code</label>
                <Input
                  placeholder="Your ZIP code"
                  value={contactInfo.zipCode}
                  onChange={(e) => setContactInfo({ ...contactInfo, zipCode: e.target.value })}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              {currentQuestion.options?.map((option) => (
                <QuizOptionCard
                  key={option.label}
                  label={option.label}
                  icon={option.icon}
                  selected={
                    currentQuestion.multiSelect
                      ? ((answers[currentQuestion.id] as string[]) || []).includes(option.label)
                      : answers[currentQuestion.id] === option.label
                  }
                  onClick={() => handleOptionSelect(option.label)}
                  multiSelect={currentQuestion.multiSelect}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-slate-500 hover:text-slate-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {currentStep === totalSteps - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className="bg-accent hover:bg-accent/90 text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
