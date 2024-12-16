import { Card } from "@/components/ui/card"
import { ClipboardList, Users, FileText, Brain, Calendar } from "lucide-react"
import { AssessmentCTA } from "./adhd-cta"

const assessmentSteps = [
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: "Initial Documentation",
    description: "Complete comprehensive parent reports including Conners forms to gather detailed behavioral observations",
    details: [
      "Developmental history questionnaire",
      "Parent observation forms",
      "Daily routine assessment",
      "Previous medical records"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Teacher Assessment",
    description: "Collect detailed teacher reports including Conners forms for school-based observations",
    details: [
      "Classroom behavior evaluation",
      "Academic performance review",
      "Social interaction assessment",
      "Learning style analysis"
    ]
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Data Analysis",
    description: "Our specialists analyze all collected information to form a comprehensive understanding",
    details: [
      "Behavioral pattern analysis",
      "Cross-environment comparison",
      "Symptom frequency assessment",
      "Impact evaluation"
    ]
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Consultation & Diagnosis",
    description: "Detailed consultation with our consultant to discuss findings and receive diagnosis",
    details: [
      "Review of all assessments",
      "Discussion of findings",
      "Diagnosis explanation",
      "Treatment recommendations"
    ]
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Follow-up Care",
    description: "Ongoing support and monitoring to ensure effective management",
    details: [
      "Treatment plan implementation",
      "Progress monitoring",
      "Adjustments as needed",
      "Regular check-ins"
    ]
  }
]

export function ADHDProcess() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our ADHD Assessment Process
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            A comprehensive, multi-step approach to understanding and supporting your child
          </p>
          
          <div className="space-y-6">
            {assessmentSteps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-sm font-medium">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <AssessmentCTA />
        </div>
      </div>
    </section>
  )
}