import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Lightbulb, Mail, Presentation, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            Melissa L Cogswell - Instructional Design Portfolio
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-primary hover:text-white"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-primary hover:text-white"
            >
              Portfolio
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-primary hover:text-white"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-primary hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Creating and delivering transformative learning experiences
                </h1>
                <p className="text-white md:text-xl">
                  I am a skilled, charismatic trainer and instructional designer who creates engaging, effective
                  learning experiences that drive results. Explore my portfolio to see how I can help your organization
                  achieve its learning objectives.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="#portfolio">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact" className="text-primary">
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/fractal-header.gif"
                  alt="Fractal pattern visualization"
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/images/headshot.jpg"
                  alt="Professional headshot"
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="text-muted-foreground md:text-xl">
                  I am a trainer and instructional designer with 15 years of experience creating effective learning
                  solutions for diverse audiences. My background in both education and technology allows me to design
                  engaging experiences that drive real results.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  I've worked with organizations across many industries including educational technology, financial
                  services, cybersecurity, and AI-driven technology to develop training programs that improve
                  performance and achieve business objectives.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  My approach combines a strong understanding of instructional design principles, a desire to help
                  people achieve their full potential, and a true passion for teaching and learning experiences that
                  engage, inspire, and transform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" asChild>
                    <Link href="/resume">Download Resume</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="https://www.linkedin.com/in/melissa-l-cogswell"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore my recent projects, learning solutions, and instructional design philosophies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/addie-fractal.gif"
                    alt="Modified ADDIE Method of Instructional Design"
                    className="object-cover transition-transform group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Modified ADDIE Method of Instructional Design</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    I was tasked with developing a framework for instructional design that reflected both the ADDIE best
                    practices and the team's current workflow.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/addie-analyze">View Sample</Link>
                  </Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/objectives-fractal.gif"
                    alt="Course Learning Objectives and Knowledge Checks"
                    className="object-cover transition-transform group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Course Learning Objectives and Knowledge Checks</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An example of learning objectives created using action verbs and the knowledge check questions that
                    test this learning.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/learning-objectives">View Sample</Link>
                  </Button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/architecture.gif"
                    alt="Cybersecurity Solution Architecture Presentation"
                    className="object-cover transition-transform group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Cybersecurity Solution Architecture Presentation</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An excerpt from a complex technical training I developed and conducted on the architecture of an
                    AI-powered cybersecurity solution.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/cybersecurity-architecture">View Sample</Link>
                  </Button>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-black flex items-center justify-center py-4">
                  <img
                    src="/images/features-2.gif"
                    alt="Cybersecurity Solution Feature Presentation"
                    className="object-contain h-full max-h-[200px] transition-transform group-hover:scale-105 slow-animation"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Cybersecurity Solution Feature Presentation</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An excerpt from a complex technical training I developed and conducted on features of an AI-powered
                    cybersecurity solution.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/cybersecurity-features">View Sample</Link>
                  </Button>
                </div>
              </div>

              {/* Project 5 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/integration.gif"
                    alt="AIOps Integration Training Writing Samples"
                    className="object-cover transition-transform group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">AIOps Integration Training Writing Samples</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    I created, using text and interactive activities, a training for high-level IT users on how to
                    integrate two complex systems.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/aiops-integration">View Sample</Link>
                  </Button>
                </div>
              </div>

              {/* Project 6 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/course-completion-2.gif"
                    alt="Certification Program Completion Survey"
                    className="object-cover transition-transform group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Certification Program Completion Survey</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    I was tasked with developing a survey for the end of a 15-hour certification program.
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <Link href="/portfolio/survey">View Sample</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills & Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expertise in creating effective learning experiences
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Presentation className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Instructional Design</h3>
                <p className="text-center text-muted-foreground">
                  Creating structured learning experiences using ADDIE, SAM, and other methodologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Learning Strategy</h3>
                <p className="text-center text-muted-foreground">
                  Developing comprehensive learning strategies aligned with organizational goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">E-Learning Development</h3>
                <p className="text-center text-muted-foreground">
                  Creating engaging digital learning experiences using cutting edge technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Facilitation</h3>
                <p className="text-center text-muted-foreground">
                  Leading engaging workshops and training sessions, both virtual and in-person.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Learning Assessment</h3>
                <p className="text-center text-muted-foreground">
                  Designing effective assessments to measure learning outcomes and ROI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Content Development</h3>
                <p className="text-center text-muted-foreground">
                  Creating clear, engaging learning content for various modalities and audiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get In Touch</h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how I can help with your learning and development needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 mt-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-white">cogswellm@gmail.com</span>
                </div>
                <p className="text-white/80">
                  I'm available for freelance projects, consulting, and full-time opportunities. Feel free to reach out
                  to discuss your needs.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild className="border-primary">
                    <Link
                      href="https://www.linkedin.com/in/melissa-l-cogswell"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Melissa Cogswell. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
