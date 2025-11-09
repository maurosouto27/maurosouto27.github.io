"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const education = [
  {
    institution: "Universidad ORT Uruguay",
    degree: "Analista en Tecnologías de la Información",
    field: "Tecnología de la información",
    period: "March 2023 - December 2023",
  },
  {
    institution: "Universidad ORT Uruguay",
    degree: "Analista Programador",
    field: "Programación informática",
    period: "2018 - 2021",
  },
  {
    institution: "Bios Pocitos",
    degree: "Técnico en Gestión de Soporte IT",
    field: "Informática",
    period: "2017",
  },
  {
    institution: "UTU - Dirección General de Educación Técnico - Profesional",
    degree: "Bachillerato Tecnológico",
    field: "Bachillerato",
    period: "2011 - 2016",
  },
]

const certifications = [
  {
    name: "EF SET English Certificate",
    score: "72/100 (C2 Proficient)",
    link: "https://cert.efset.org/2FzQR4",
  },
]

export function EducationSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </CardHeader>
            </Card>
          ))}

          <Card
            className={`border-0 shadow-lg bg-accent/5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(education.length + 1) * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-xl">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center hover:bg-muted/50 p-2 -m-2 rounded-lg transition-colors group"
                >
                  <span className="font-medium group-hover:text-accent transition-colors">{cert.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{cert.score}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
