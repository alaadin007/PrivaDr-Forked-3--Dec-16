import { ImageConfig } from "@/types/images"

// Centralized doctor image configurations
export const DOCTOR_IMAGES: Record<string, ImageConfig> = {
  DR_ANWAR_HAQ: {
    src: "https://www.cosmedocs.com/wp-content/uploads/2024/12/dr-anwar-haq.jpg",
    alt: "Dr. M. Anwar Haq - Consultant Pediatrician",
    width: 800,
    height: 1200
  },
  DR_AHMED_HAQ: {
    src: "https://www.cosmedocs.com/images/doctor-a.-farhan-haq.png",
    alt: "Dr. Ahmed Haq - Aesthetic Medicine Specialist",
    width: 800,
    height: 1200
  },
  DR_HENA_HAQ: {
    src: "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hena_haq.jpg",
    alt: "Dr. Hena Haq - General Practitioner",
    width: 800,
    height: 1200
  },
  DR_HASSAN_MIRZA: {
    src: "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hassan_mirza.jpg",
    alt: "Dr. Hassan A. Mirza - Consultant Dermatologist",
    width: 800,
    height: 1200
  }
} as const

// Blog image configurations
export const BLOG_IMAGES: Record<string, ImageConfig> = {
  ADHD_ASSESSMENT: {
    src: "https://www.cosmedocs.com/wp-content/uploads/2024/12/dr-anwar-haq.jpg",
    alt: "Child development and learning - ADHD assessment",
    width: 1920,
    height: 1080
  },
  IV_THERAPY: {
    src: "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hena_haq.jpg",
    alt: "IV Vitamin Therapy treatment",
    width: 1920,
    height: 1080
  }
} as const