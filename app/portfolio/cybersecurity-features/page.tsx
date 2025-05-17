"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CybersecurityFeaturesPage() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Cybersecurity Solution Feature Presentation</h1>

          <div className="bg-black p-6 rounded-lg mb-8 flex justify-center">
            <img
              src="/images/features-2-new.gif"
              alt="Cybersecurity Solution Features"
              className="max-h-[200px] object-contain slow-animation"
            />
          </div>

          <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/o0icB2GR7pY?autoplay=1"
              title="Cybersecurity Solution Feature Presentation"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-black text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">About This Presentation</h2>
            <p className="mb-4">
              This presentation was part of a comprehensive technical training program I developed for cybersecurity
              professionals. The training focused on the key features and capabilities of an AI-powered cybersecurity
              solution.
            </p>
            <p className="mb-4">
              In this excerpt, I explain the advanced features of the solution, demonstrating how they work together to
              provide enhanced threat detection and response capabilities. The presentation breaks down complex
              technical concepts into clear, actionable information.
            </p>
            <p>
              The full training program included detailed walkthroughs of each feature, hands-on configuration
              exercises, and real-world use cases to ensure participants could maximize the value of these features in
              their security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Key Features Covered</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advanced threat detection algorithms</li>
                <li>Automated response capabilities</li>
                <li>Integration with existing security tools</li>
                <li>Customizable alerting and reporting</li>
                <li>AI-powered behavioral analysis</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Training Methodology</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Feature demonstrations with real examples</li>
                <li>Interactive Q&A sessions</li>
                <li>Practical configuration exercises</li>
                <li>Case studies of successful implementations</li>
                <li>Best practices for feature optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
