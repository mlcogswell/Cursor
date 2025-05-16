"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CybersecurityArchitecturePage() {
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
          <h1 className="text-4xl font-bold mb-6 text-center">Cybersecurity Solution Architecture Presentation</h1>

          <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ZIoNBTQYAkg?autoplay=1"
              title="Cybersecurity Solution Architecture Presentation"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-black text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">About This Presentation</h2>
            <p className="mb-4">
              This presentation was part of a comprehensive technical training program I developed for cybersecurity
              professionals. The training focused on the architecture and implementation of an AI-powered cybersecurity
              solution.
            </p>
            <p className="mb-4">
              In this excerpt, I explain the complex technical architecture of the solution, breaking down how the
              various components interact and how the AI engine processes potential security threats.
            </p>
            <p>
              The full training program included hands-on labs, technical documentation, and interactive sessions
              designed to ensure participants could effectively implement and manage the solution in their environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Training Approach</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Technical depth appropriate for security engineers</li>
                <li>Visual aids to illustrate complex concepts</li>
                <li>Real-world examples and use cases</li>
                <li>Clear explanation of technical terminology</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Learning Outcomes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Understanding of solution architecture</li>
                <li>Knowledge of AI implementation in security</li>
                <li>Ability to troubleshoot integration issues</li>
                <li>Skills to optimize system performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
