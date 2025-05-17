"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LearningObjectivesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showAnswers, setShowAnswers] = useState([false, false, false, false, false])

  useEffect(() => {
    setIsLoaded(true)
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const questionItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const learningObjectives = [
    "Audit Policies",
    "Audit Groups",
    "Export and Audit Allow List, Deny List, and Exclusions",
    "Export and Audit Events",
  ]

  const knowledgeCheckQuestions = [
    {
      question:
        "1. Work with your network security team and cyber security provider to regularly review your _________.",
      answer: "Answer: Security policy",
    },
    {
      question: "2. If you wanted to find out who created a new group or policy, where should you look?",
      options: ["a. Event List", "b. Device Group", "c. Summary Reports", "d. Audit Log"],
      answer: "Answer: d. Audit Log",
    },
    {
      question: "3. True or False: Always use the Comment field when you can.",
      answer: "Answer: True",
    },
    {
      question: "4. Exclusions are the same as Allow Listing.",
      answer: "Answer: False",
    },
    {
      question: "5. Entries on the Audit Log will expire and drop off over time.",
      answer: "Answer: False",
    },
  ]

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers]
    newShowAnswers[index] = !newShowAnswers[index]
    setShowAnswers(newShowAnswers)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button variant="outline" asChild className="mb-6 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Course Learning Objectives and Knowledge Checks
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <img
                src="/Cursor/images/objectives-new.gif"
                alt="Fractal Pattern"
                className="mx-auto rounded-lg mb-8 max-w-full h-auto"
                style={{ maxHeight: "300px" }}
              />
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              An example of learning objectives created using action verbs and the knowledge check questions that test
              this learning
            </motion.p>
          </div>

          {/* Learning Objectives Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="text-primary">LEARNING OBJECTIVES:</span>
              <br />
              <span className="text-white">CYBER SECURITY AUDITING COURSE</span>
            </motion.h2>

            <motion.p
              className="text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              Upon completion of this course you will be able to:
            </motion.p>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {learningObjectives.map((objective, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span>{objective}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Knowledge Check Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="text-primary">KNOWLEDGE CHECK:</span>
              <br />
              <span className="text-white">CYBER SECURITY AUDITING COURSE</span>
            </motion.h2>

            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {knowledgeCheckQuestions.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2" 
                  initial="hidden"
                  animate="show"
                  variants={questionItem}
                >
                  <p className="text-lg">{item.question}</p>
                  {item.options && (
                    <ul className="ml-6 space-y-1">
                      {item.options.map((option, optIndex) => (
                        <li key={optIndex}>{option}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      onClick={() => toggleAnswer(index)}
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground text-sm py-1 px-3"
                    >
                      {showAnswers[index] ? "Hide Answer" : "Show Answer"}
                    </Button>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: showAnswers[index] ? 1 : 0,
                        height: showAnswers[index] ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-primary font-medium mt-2">{item.answer}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
          >
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Benefits of Clear Objectives</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provides clear direction for learners</li>
                <li>Helps instructors focus on essential content</li>
                <li>Makes assessment design more straightforward</li>
                <li>Ensures alignment with business needs</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Effective Knowledge Checks</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Directly test stated learning objectives</li>
                <li>Use a variety of question formats</li>
                <li>Provide immediate feedback</li>
                <li>Reinforce key concepts</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
