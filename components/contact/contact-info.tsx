import { Card } from "@/components/ui/card"
import { MessageCircle, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: <MessageCircle className="h-6 w-6 text-green-500" />,
    title: "WhatsApp",
    details: [
      { 
        label: "Business Chat", 
        value: "+44 7778 435806",
        link: "https://wa.me/447778435806",
        highlight: true
      }
    ]
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location",
    details: [
      { label: "Address", value: "8-10 Harley Street" },
      { label: "City", value: "London, UK" }
    ]
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Hours",
    details: [
      { label: "Weekdays", value: "9:00 AM - 6:00 PM" },
      { label: "Weekends", value: "10:00 AM - 4:00 PM" }
    ]
  }
]

export function ContactInfo() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg text-muted-foreground">
          Get in touch with us through WhatsApp for quick responses and easy communication
        </p>
      </div>

      <div className="grid gap-6">
        {contactInfo.map((info) => (
          <Card key={info.title} className={`p-6 ${info.title === 'WhatsApp' ? 'bg-green-500/10 border-green-500/20' : ''}`}>
            <div className="flex items-start space-x-4">
              <div className={`h-12 w-12 rounded-full ${info.title === 'WhatsApp' ? 'bg-green-500/10' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0`}>
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail) => (
                  <div key={detail.label} className="text-muted-foreground">
                    <span className="font-medium">{detail.label}:</span>{" "}
                    {'link' in detail ? (
                      <a 
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${detail.highlight ? 'text-green-500 hover:text-green-400' : 'text-primary hover:text-primary/80'} transition-colors font-medium`}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground">
          For general inquiries, you can also email us at{" "}
          <a href="mailto:info@privadr.com" className="text-primary hover:text-primary/80 transition-colors">
            info@privadr.com
          </a>
        </p>
      </div>
    </div>
  )
}