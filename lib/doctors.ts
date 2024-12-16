interface Doctor {
  name: string
  title: string
  image: string
  about: string[]
  expertise: string[]
  qualifications: string[]
  memberships?: string[]
  registrations?: string[]
}

const doctors: Record<string, Doctor> = {
  "dr-m-anwar-haq": {
    name: "Dr. M. Anwar Haq",
    title: "Consultant Pediatrician",
    image: "https://www.cosmedocs.com/wp-content/uploads/2024/12/dr-anwar-haq.jpg?auto=format&fit=crop&q=80",
    about: [
      "Every child is unique, with their own strengths and challenges. In understanding conditions like autism and ADHD, it's not just about diagnosing a disorder; it's about recognizing each child's potential and supporting their journey to thrive. With the right guidance and compassion, we can help them unlock doors to a brighter future.",
      "Dr. Anwar Haq is a distinguished pediatrician with over 40 years of clinical experience, specializing in developmental and neurodevelopmental disorders such as autism spectrum disorder (ASD), ADHD, and learning disabilities. He is a Fellow of the Royal College of Physicians in Ireland and the Royal College of Paediatrics and Child Health (UK), reflecting his dedication to advancing child healthcare."
    ],
    expertise: [
      "Autism Spectrum Disorder (ASD)",
      "ADHD",
      "Developmental Delays",
      "Learning Disabilities",
      "Speech and Language Disorders",
      "Multidisciplinary Development Assessments"
    ],
    qualifications: [
      "F.R.C.P.C.H. Fellow of the Royal College of Paediatrics and Child Health (UK), 1997",
      "F.R.C.P. Fellow of the Royal College of Physicians in Ireland, 1996",
      "M.R.C.P.I. (Paediatrics) Member of the Royal College of Physicians in Ireland, 1986",
      "D.C.H. Diploma in Child Health, University College Dublin, 1980",
      "M.B.B.S. Bachelor of Medicine and Bachelor of Surgery, Nishtar Medical College, 1973"
    ],
    memberships: [
      "Member, Royal College of Physicians of Ireland (MRCPI)",
      "Fellow, Royal College of Paediatrics and Child Health (FRCPCH), UK",
      "Fellow, Royal College of Physicians of Ireland (FRCP)",
      "Member, British Association of Community Child Health (BACCH)"
    ],
    registrations: [
      "GMC UK Full Registration (Specialist in Paediatrics), GMC No. 5109985",
      "Specialist Register in Paediatrics, Ireland, Reg. No. 10269"
    ]
  },
  "dr-hassan-a-mirza": {
    name: "Dr. Hassan A. Mirza",
    title: "Consultant Dermatologist",
    image: "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hassan_mirza.jpg?auto=format&fit=crop&q=80",
    about: [
      "Dr. Hassan A. Mirza is a highly skilled Consultant Dermatologist with extensive experience in both medical and aesthetic dermatology. His approach combines evidence-based medicine with cutting-edge treatments to deliver optimal results for his patients.",
      "With a special interest in skin cancer, inflammatory skin conditions, and aesthetic procedures, Dr. Mirza provides comprehensive care that addresses both medical concerns and cosmetic goals. His expertise in advanced dermatological procedures has made him a trusted name in the field."
    ],
    expertise: [
      "Medical Dermatology",
      "Skin Cancer Screening",
      "Acne Treatment",
      "Psoriasis Management",
      "Aesthetic Medicine",
      "Advanced Skin Procedures"
    ],
    qualifications: [
      "MRCP (UK) Member of the Royal College of Physicians",
      "Specialist Certificate in Dermatology (UK)",
      "Fellowship in Advanced Dermatology",
      "M.B.B.S. Bachelor of Medicine and Surgery"
    ],
    memberships: [
      "British Association of Dermatologists",
      "Royal Society of Medicine",
      "European Academy of Dermatology and Venereology"
    ],
    registrations: [
      "GMC Specialist Register in Dermatology",
      "British Cosmetic Dermatology Group"
    ]
  },
  "dr-hena-haq": {
    name: "Dr. Hena Haq",
    title: "General Practitioner",
    image: "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hena_haq.jpg?auto=format&fit=crop&q=80",
    about: [
      "Dr. Hena Haq is a dedicated General Practitioner with a holistic approach to healthcare. She believes in treating not just symptoms but understanding the whole person, including their lifestyle, environment, and personal circumstances.",
      "With special interests in women's health, preventive medicine, and lifestyle interventions, Dr. Haq helps patients achieve optimal health through comprehensive care plans that address both immediate concerns and long-term wellbeing."
    ],
    expertise: [
      "Women's Health",
      "Preventive Medicine",
      "Lifestyle Medicine",
      "Mental Health",
      "Chronic Disease Management",
      "Family Medicine"
    ],
    qualifications: [
      "MRCGP Member of the Royal College of General Practitioners",
      "DRCOG Diploma of the Royal College of Obstetricians and Gynaecologists",
      "DFSRH Diploma of the Faculty of Sexual and Reproductive Healthcare",
      "M.B.B.S. Bachelor of Medicine and Surgery"
    ],
    memberships: [
      "Royal College of General Practitioners",
      "British Medical Association",
      "Faculty of Sexual and Reproductive Healthcare"
    ],
    registrations: [
      "GMC Registration with License to Practice",
      "NHS England Performers List"
    ]
  },
  "dr-ahmed-haq": {
    name: "Dr. Ahmed Haq",
    title: "Aesthetic Medicine Specialist",
    image: "https://www.cosmedocs.com/images/doctor-a.-farhan-haq.png?auto=format&fit=crop&q=80",
    about: [
      "Dr. Ahmed Haq is an extensively experienced practitioner and a distinguished figure in the field of aesthetic medicine. A graduate of the Royal College of Surgeons Medical School, he is a member of the British Association of Cosmetic Doctors and has trained in a range of surgical specialties.",
      "Specializing in complex facial contouring and non-surgical jaw reduction, Dr. Haq has received widespread recognition for his highly regarded work. His expertise lies in creating subtle enhancements that provide youthful yet natural outcomes."
    ],
    expertise: [
      "Facial Contouring",
      "Non-Surgical Aesthetics", 
      "Dermal Fillers",
      "Anti-Wrinkle Treatments",
      "Skin Rejuvenation",
      "Advanced Injection Techniques"
    ],
    qualifications: [
      "MB,BCh,BAO,LRCSP&I Royal College of Surgeons Medical School",
      "MSc Surgical Technology - Imperial London",
      "Advanced Certification in Aesthetic Medicine",
      "Specialist Training in Non-Surgical Procedures"
    ],
    memberships: [
      "British Association of Cosmetic Doctors",
      "Royal College of Surgeons",
      "British Medical Association"
    ],
    registrations: [
      "GMC Registration with License to Practice"
    ]
  }
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors[slug]
}

export function getAllDoctors(): Doctor[] {
  return Object.values(doctors)
}