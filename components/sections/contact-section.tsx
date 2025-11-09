"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Montevideo, Uruguay",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+598 91 296 186",
    href: "tel:+59891296186",
  },
  {
    icon: Mail,
    label: "Email",
    value: "maurosouto27@gmail.com",
    href: "mailto:maurosouto27@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/maurosouto27",
    href: "https://www.linkedin.com/in/maurosouto27",
  },
]

export function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          Get In Touch
        </h2>

        <Card
          className={`border-0 shadow-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-foreground hover:text-accent transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex justify-center mt-8">
              <Button size="lg" asChild className="hover:scale-105 transition-transform">
                <a href="https://www.linkedin.com/in/maurosouto27" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mauro Souto. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
