import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface ExperienceCardProps {
  company: string
  position: string
  period: string
  location: string
  description: string
  highlights: string[]
}

export function ExperienceCard({ company, position, period, location, description, highlights }: ExperienceCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{position}</CardTitle>
            <p className="text-base font-medium text-muted-foreground">{company}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="text-xs">
                {period}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {location}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
