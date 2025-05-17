"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AIOpsIntegrationPage() {
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
              className="text-4xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              AIOps Integration Course
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <img
                src="/Cursor/images/integration-new.gif"
                alt="AIOps Integration"
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
              Writing samples from a training course designed to help high-level IT users understand how to integrate
              two complex systems.
            </motion.p>
          </div>

          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
          >
            {/* Writing Sample 1 */}
            <motion.div className="bg-black text-white p-8 rounded-lg shadow-lg" variants={item}>
              <h2 className="text-2xl font-bold mb-4 text-primary">Writing Sample #1: CMDB Integration</h2>
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">
                  Communication between your AIOps Platform and your Ticketing Service's Configuration Management
                  Database (CMDB) is mono-directional. The CMDB exports data to the AIOps Platform. Unlike many products
                  that make an API call for every identified change, your AIOps Platform and your Ticketing Platform are
                  configured to export data that includes only the changes you identified. This data dump takes place,
                  by default, every 12 hours. Because the data transfer has the potential to be very large and take an
                  extended amount of time to complete, there is a small possibility that data edited in the transfer
                  window could be lost from the current sync execution and picked up by the next one.
                </p>
                <p className="mb-4">
                  The following three tables, which cover 60 - 80% of changes within most CMDBs, are sent to your AIOps
                  Platform by default:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All servers</li>
                  <li>All applications</li>
                  <li>All network gear</li>
                </ul>
                <p>
                  You can customize the sending of additional CMDB data by following the instructions in the
                  documentation linked below.
                </p>
              </div>
            </motion.div>

            {/* Writing Sample 2 */}
            <motion.div className="bg-black text-white p-8 rounded-lg shadow-lg" variants={item}>
              <h2 className="text-2xl font-bold mb-4 text-primary">Writing Sample #2: Incident Tags</h2>
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">
                  Incident tags are a powerful tool within your AIOps Platform that allows you to add specific
                  contextual information to your incidents. They are key-value pairs that can be added to incidents for
                  additional incident enrichment. Tags can also be used to sort your incidents to ensure that you have
                  visibility on the most relevant tasks. Add Incident Tags to your Ticketing Platform Incidents through
                  the AIOps Platform UI or via the Incidents API.
                </p>
                <p className="mb-4">
                  Incident Tag Mapping is the last step of the Incident API chain. The incident is built, enriched, and
                  saved, and then the AIOps Platform reviews the Incident Tag Mapping. Anything bidirectional will cause
                  the incident to be remapped, but the new mapping fields are applied to the bottom of Alert Enrichment.
                  This is important, as Alert Enrichment is order-centric. It processes down, and some items will be
                  retagged, or tags can be rolled together to form a more significant tag.
                </p>
                <div className="bg-gray-800 p-4 rounded-md mb-4">
                  <p className="italic">
                    Example: If you create code that maps an incident to a Group but also indicates an Assignment Group
                    in Incident Tag Mapping, the Assignment Group from the Tag Mapping will override the code.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={item}>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Writing Approach</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clear, concise technical explanations</li>
                  <li>Appropriate for high-level IT professionals</li>
                  <li>Balances technical detail with readability</li>
                  <li>Includes practical examples for context</li>
                </ul>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Course Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Step-by-step integration instructions</li>
                  <li>Interactive configuration exercises</li>
                  <li>Troubleshooting scenarios</li>
                  <li>Best practices for system optimization</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
