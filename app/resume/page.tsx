"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-4">
        <Button variant="outline" asChild className="mb-6 text-primary border-primary hover:bg-primary/10">
          <Link href="/#about">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="flex justify-end mb-6">
          <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/mlc-resume-pdf.pdf" target="_blank" download>
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>

        <div className="bg-black p-8 rounded-lg shadow-md max-w-4xl mx-auto border border-gray-800">
          <h1 className="text-3xl font-bold text-center mb-2 text-primary">MELISSA L. COGSWELL</h1>
          <div className="text-center mb-6 text-white/80">
            <p>40 Waterfront Drive | Brownsville, TX 78520</p>
            <p>857.488.5538 | cogswellm@gmail.com</p>
            <p>B.A. Keene State College, Keene, NH</p>
            <p>
              <Link
                href="https://www.linkedin.com/in/melissa-l-cogswell"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/melissa-l-cogswell
              </Link>
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-700 mb-3 text-white">CAREER HIGHLIGHTS</h2>
            <ul className="list-none space-y-2">
              <li>
                ★ I have created, developed, and delivered a synchronous, international online certification program for
                a Fortune 500 Insurance Brokerage.
              </li>
              <li>
                ★ I have planned, developed, and managed asynchronous global cybersecurity certification programs for
                both customers and revenue generators at an international startup.
              </li>
              <li>
                ★ Within five months of hire, I learned backend features of two advanced software programs, BigPanda (an
                AI powered ITOps tool) and ServiceNow (a cloud-based platform that helps businesses manage and automate
                their digital workflow), designing and implementing an e-learning course on the integration of the two
                platforms.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-700 mb-3 text-white">SKILLS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div>Adult Education Theory</div>
              <div>Presentations</div>
              <div>Collaboration</div>
              <div>Program development</div>
              <div>Critical thinking</div>
              <div>Program management</div>
              <div>Curriculum development</div>
              <div>Project management</div>
              <div>Data analysis</div>
              <div>SME management</div>
              <div>Facilitation</div>
              <div>Training</div>
              <div>Instructional design</div>
              <div>Train-the-Trainer</div>
              <div>Leadership</div>
              <div>Training evaluation</div>
              <div>Needs Analysis</div>
              <div>Technical training</div>
              <div>Onboarding</div>
              <div>Video recording and editing</div>
              <div>Organization</div>
              <div>Voiceover work</div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-700 mb-3 text-white">TECHNOLOGY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>APIs and API integrations</div>
              <div>Learning Management Systems (Docebo, LearnUpon, Moodle)</div>
              <div>Adobe Photoshop</div>
              <div>Salesforce</div>
              <div>Articulate Rise 360</div>
              <div>SharePoint</div>
              <div>Camtasia</div>
              <div>Slack</div>
              <div>Generative AI/LLMs</div>
              <div>Snagit</div>
              <div>iorad</div>
              <div>Virtualization technologies</div>
              <div>Jira</div>
              <div>Zoom</div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-700 mb-3 text-white">PROFESSIONAL EXPERIENCE</h2>

            <div className="mb-4">
              <h3 className="font-bold">
                SENIOR INSTRUCTIONAL DESIGNER - BigPanda, an AI powered ITOperations platform, Redwood City, CA
              </h3>
              <p className="italic text-white/70">April 2024 - September 2024, Remote position (role eliminated)</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Designed, developed, wrote, and published a customer-facing integration training between ServiceNow
                  and BigPanda.
                </li>
                <li>Applied ADDIE model of instructional design and adult education theory best practices.</li>
                <li>Reverse-engineered published courses into editable storyboards.</li>
                <li>Chaired the PandaPRIDE Employee Resource Group and hosted the annual PRIDE event.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">
                TECHNICAL TRAINING MANAGER - Deep Instinct, an AI cyber and network security product, New York, NY
              </h3>
              <p className="italic text-white/70">September 2021 - July 2023, Remote position (role eliminated)</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Managed, designed, developed, and implemented technical video certification programs on a Deep
                  Learning based cybersecurity software for MSSP and Enterprise cybersecurity customers.
                </li>
                <li>Facilitated onsite training with MSSP Sales Partners.</li>
                <li>Collaborated with global SMEs and stakeholders to align training strategies.</li>
                <li>
                  Managed, designed, developed, implemented and facilitated an effective Onboarding program for Training
                  Project Coordinators and Technical Training Managers.
                </li>
                <li>Aligned training processes with the ADDIE model of instructional design.</li>
                <li>
                  Aligned training processes to the most up-to-date adult education theories focusing on
                  self-directional and experiential learning.
                </li>
                <li>
                  Developed a comprehensive Certification Program Evaluation questionnaire to gather actionable insights
                  from learners.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">
                TRAINING SPECIALIST - Marsh McLennan Companies: Marsh USA, a financial services corporation, Austin, TX
              </h3>
              <p className="italic text-white/70">July 2016 - August 2021, Remote position March 2020 - August 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Conducted in-person new hire training in two insurance processes: Surplus Lines Tax Filings and
                  Certificates of Insurance (COI) processing.
                </li>
                <li>
                  Used ADDIE model of instructional design and knowledge of adult education theory to enhance existing
                  training materials.
                </li>
                <li>
                  Improved new hire quality review programs in collaboration with the Quality Assurance Manager using
                  Kirkpatrick's Model of Evaluation.
                </li>
                <li>Created and managed a 12-week virtual COI training program for colleagues in Mumbai.</li>
                <li>Conducted a virtual Train-the-Trainer program for COI trainers in Mumbai.</li>
                <li>Co-led PRIDE Colleague Resource Group in 2018 and 2019.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">
                ONBOARDING TRAINING SPECIALIST - Macmillan Learning, a print and digital textbook publisher, Austin, TX
              </h3>
              <p className="italic text-white/70">March 2014 - July 2016</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed training programs to onboard teachers and schools to new digital curricula.</li>
                <li>
                  Designed and facilitated over 150 training sessions for high school teachers adopting digital math and
                  science curricula.
                </li>
                <li>Implemented a Regional Teacher Training Program.</li>
                <li>Provided ongoing technical support and training to teachers via phone and email.</li>
                <li>Managed customer usage information databases.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">
                ANALYST - C4 Innovations, a training and technical assistance organization, Needham, MA
              </h3>
              <p className="italic text-white/70">November 2010 – April 2013, Hybrid position</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Coordinated 10 federally funded, onsite technical assistance events.</li>
                <li>
                  Conducted training in data collection for the Substance Abuse and Mental Health Services
                  Administration.
                </li>
                <li>
                  Facilitated live webinars and asynchronous online training programs for the US Department of Housing
                  and Urban Development.
                </li>
                <li>Managed Moodle LMS</li>
                <li>Certified Mental Health First Aid Trainer.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
