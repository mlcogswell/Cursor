"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

export default function SurveyPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    jobRequired: "",
    expectations: 5,
    suggestions: "",
    programFlow: 5,
    flowChanges: "",
    assessmentFrequency: "",
    useInWork: 5,
    contentUnderstanding: 5,
    detailLevel: "",
    missingContent: "",
    instructorRating: 5,
    instructionImprovement: "",
    platformSatisfaction: 5,
    recommendLikelihood: 5,
  })

  useEffect(() => {
    setIsLoaded(true)
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSliderChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value[0],
    })
  }

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would submit the form data to a server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    window.scrollTo(0, 0)
  }

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {formSubmitted ? (
            <motion.div
              className="bg-black text-white p-8 rounded-lg shadow-lg mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg mb-6">
                Your feedback has been submitted successfully. We appreciate your time and input.
              </p>
              <Button
                onClick={() => setFormSubmitted(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Complete Another Survey
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <motion.h1
                  className="text-4xl font-bold mb-4 text-black"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  CERTIFICATION PROGRAM COMPLETION SURVEY
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <img
                    src="/Cursor/images/course-completion-2-new.gif"
                    alt="Survey Data Visualization"
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
                  Please take a moment to provide your feedback on the certification program you've completed. Your
                  input helps us improve our training offerings.
                </motion.p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-8"
                variants={container}
                initial="hidden"
                animate={isLoaded ? "show" : "hidden"}
              >
                {/* Question 1 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 1: Are you required by your job role to take this training?{" "}
                    <span className="text-primary">*</span>
                  </h3>
                  <RadioGroup
                    required
                    name="jobRequired"
                    value={formData.jobRequired}
                    onValueChange={(value) => handleRadioChange("jobRequired", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="q1-yes" />
                      <Label htmlFor="q1-yes" className="text-white">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="q1-no" />
                      <Label htmlFor="q1-no" className="text-white">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </motion.div>

                {/* Question 2 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 2: On a scale of 1 - 10 please indicate how fulfilled your training expectations were.{" "}
                    <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Not fulfilled</span>
                      <span>10 - Completely fulfilled</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.expectations]}
                      onValueChange={(value) => handleSliderChange("expectations", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.expectations}</div>
                  </div>
                </motion.div>

                {/* Question 3 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 3: Do you have any suggestions that would have made the overall Certification Program
                    better?
                  </h3>
                  <Textarea
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleInputChange}
                    placeholder="Your suggestions here..."
                    className="bg-background text-foreground"
                  />
                </motion.div>

                {/* Question 4 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 4: On a scale of 1 - 10 please indicate how well the Certification Program's sequence
                    flowed. <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Poor flow</span>
                      <span>10 - Excellent flow</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.programFlow]}
                      onValueChange={(value) => handleSliderChange("programFlow", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.programFlow}</div>
                  </div>
                </motion.div>

                {/* Question 5 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 5: Are there changes you would like to see made to the sequence and flow?
                  </h3>
                  <Textarea
                    name="flowChanges"
                    value={formData.flowChanges}
                    onChange={handleInputChange}
                    placeholder="Your suggestions here..."
                    className="bg-background text-foreground"
                  />
                </motion.div>

                {/* Question 6 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 6: Assessment frequency <span className="text-primary">*</span>
                  </h3>
                  <RadioGroup
                    required
                    name="assessmentFrequency"
                    value={formData.assessmentFrequency}
                    onValueChange={(value) => handleRadioChange("assessmentFrequency", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="more" id="q6-more" />
                      <Label htmlFor="q6-more" className="text-white">
                        Yes, I would prefer more frequent assessments
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="appropriate" id="q6-appropriate" />
                      <Label htmlFor="q6-appropriate" className="text-white">
                        No, the frequency of the assessments is appropriate
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="less" id="q6-less" />
                      <Label htmlFor="q6-less" className="text-white">
                        No, I would prefer less frequent Assessments
                      </Label>
                    </div>
                  </RadioGroup>
                </motion.div>

                {/* Question 7 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 7: On a scale of 1 - 10 how likely are you to use the knowledge and skills from the
                    Certification Program in your everyday work? <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Not likely</span>
                      <span>10 - Very likely</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.useInWork]}
                      onValueChange={(value) => handleSliderChange("useInWork", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.useInWork}</div>
                  </div>
                </motion.div>

                {/* Question 8 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 8: On a scale of 1 - 10 how easy was the Certification Program's content to understand?{" "}
                    <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Very difficult</span>
                      <span>10 - Very easy</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.contentUnderstanding]}
                      onValueChange={(value) => handleSliderChange("contentUnderstanding", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.contentUnderstanding}</div>
                  </div>
                </motion.div>

                {/* Question 9 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 9: Was the content to the level of detail necessary for you to perform your role?{" "}
                    <span className="text-primary">*</span>
                  </h3>
                  <RadioGroup
                    required
                    name="detailLevel"
                    value={formData.detailLevel}
                    onValueChange={(value) => handleRadioChange("detailLevel", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="q9-yes" />
                      <Label htmlFor="q9-yes" className="text-white">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="q9-no" />
                      <Label htmlFor="q9-no" className="text-white">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </motion.div>

                {/* Question 10 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 10: Is there anything you wanted to learn that was not covered?
                  </h3>
                  <Textarea
                    name="missingContent"
                    value={formData.missingContent}
                    onChange={handleInputChange}
                    placeholder="Your answer here..."
                    className="bg-background text-foreground"
                  />
                </motion.div>

                {/* Question 11 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 11: On a scale of 1 - 10 how would you rate your instructor's delivery of the course
                    materials? <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Poor delivery</span>
                      <span>10 - Excellent delivery</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.instructorRating]}
                      onValueChange={(value) => handleSliderChange("instructorRating", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.instructorRating}</div>
                  </div>
                </motion.div>

                {/* Question 12 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 12: How could the quality of the instruction be improved?
                  </h3>
                  <Textarea
                    name="instructionImprovement"
                    value={formData.instructionImprovement}
                    onChange={handleInputChange}
                    placeholder="Your suggestions here..."
                    className="bg-background text-foreground"
                  />
                </motion.div>

                {/* Question 13 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 13: On a scale of 1 - 10 how satisfied were you with the overall user experience of the
                    learning platform? <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Very dissatisfied</span>
                      <span>10 - Very satisfied</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.platformSatisfaction]}
                      onValueChange={(value) => handleSliderChange("platformSatisfaction", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.platformSatisfaction}</div>
                  </div>
                </motion.div>

                {/* Question 14 */}
                <motion.div className="bg-black text-white p-6 rounded-lg" variants={item}>
                  <h3 className="text-lg font-medium mb-4">
                    Question 14: How likely are you to recommend this Certification Program to a colleague?{" "}
                    <span className="text-primary">*</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>1 - Not likely</span>
                      <span>10 - Very likely</span>
                    </div>
                    <Slider
                      defaultValue={[5]}
                      max={10}
                      min={1}
                      step={1}
                      value={[formData.recommendLikelihood]}
                      onValueChange={(value) => handleSliderChange("recommendLikelihood", value)}
                      className="py-4"
                    />
                    <div className="text-center font-medium">Selected: {formData.recommendLikelihood}</div>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  >
                    Submit Survey
                  </Button>
                </motion.div>
              </motion.form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
