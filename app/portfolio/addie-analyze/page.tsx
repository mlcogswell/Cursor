"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ADDIEAnalyzePage() {
  const [isLoaded, setIsLoaded] = useState(false)

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

  const analyzeSteps = [
    "Identify the reason for Training involvement in the project",
    "Identify the learning delta",
    "Identify stakeholders and stakeholder needs",
    "Identify target audience",
    "Identify top level learning goal",
    "Conduct Training Needs Analysis (TNAs)",
    "Define initial draft timeline",
    "Map required resources",
  ]

  const designSteps = [
    "Obtain alignment with stakeholders",
    "Determine program Learning Objectives",
    {
      main: "Determine training evaluation methods",
      sub: ["Course evaluation", "Other learner feedback"],
    },
    "Determine desired SMART outcomes",
    "Define deliverables",
    "Identify program content",
    "Sequence content",
    "High-level outline of training program",
    "Develop a communication plan",
  ]

  const developSteps = [
    "Work with SMEs to obtain source materials",
    "Determine instructional strategies, media, and methods",
    "Develop training from source materials",
    "Perform Instructional Design for all materials",
    "Deliver materials for external SME review and implement feedback",
    "Deliver materials for internal Instructional Design review and implement feedback",
    "Create evaluation tools",
    "Deliver internal pilot if appropriate and implement pilot feedback",
  ]

  const implementSteps = [
    "Publish course materials",
    "Publish learner exams",
    "Publish course evaluations",
    "Implement communication plan",
  ]

  const evaluateSteps = [
    "Gather formal course evaluation/CSAT data",
    "Gather assessment data",
    "Evaluate data against SMART targets",
    "Gather and review informal learner feedback (i.e., pilot program, training inbox)",
    "Propose points of improvement",
    "Implement feedback and improvements as necessary",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button variant="outline" asChild className="mb-6">
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
              Modified ADDIE Method
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <img
                src="/images/addie-fracal-new.gif"
                alt="ADDIE Fractal Pattern"
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
              A framework for instructional design that reflects both ADDIE best practices and team workflow
            </motion.p>
          </div>

          {/* Analyze Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Analyze
            </motion.h2>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {analyzeSteps.map((step, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Design Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Design
            </motion.h2>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {designSteps.map((step, index) => (
                <motion.li key={index} variants={item}>
                  {typeof step === "string" ? (
                    <div className="flex items-start">
                      <span className="text-primary mr-2 text-2xl">•</span>
                      <span>{step}</span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2 text-2xl">•</span>
                        <span>{step.main}</span>
                      </div>
                      <ul className="ml-8 mt-2 space-y-2">
                        {step.sub.map((subItem, subIndex) => (
                          <li key={subIndex} className="flex items-start">
                            <span className="text-primary mr-2 text-xl">•</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Develop Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Develop
            </motion.h2>

            <motion.p
              className="text-primary italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              Note, this stage is iterative
            </motion.p>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {developSteps.map((step, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Implement Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Implement
            </motion.h2>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {implementSteps.map((step, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Evaluate Section */}
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              Evaluate
            </motion.h2>

            <motion.ul
              className="space-y-4 text-lg"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {evaluateSteps.map((step, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <span className="text-primary mr-2 text-2xl">•</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
          >
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Structured approach to learning design</li>
                <li>Clear documentation of project requirements</li>
                <li>Stakeholder alignment from the beginning</li>
                <li>Efficient resource allocation</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reduced project scope creep</li>
                <li>Improved learning outcomes</li>
                <li>Better alignment with business objectives</li>
                <li>More accurate project timelines</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
