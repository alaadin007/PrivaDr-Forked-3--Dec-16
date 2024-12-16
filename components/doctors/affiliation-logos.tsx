"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const affiliations = [
  {
    name: "NHS",
    logo: "/logos/nhs-logo.png",
    alt: "National Health Service"
  },
  {
    name: "Johns Hopkins Aramco Healthcare",
    logo: "/logos/johns-hopkins-aramco.png",
    alt: "Johns Hopkins Aramco Healthcare"
  },
  {
    name: "Royal College of Physicians of Ireland",
    logo: "/logos/rcpi-logo.png",
    alt: "Royal College of Physicians of Ireland"
  },
  {
    name: "British Association for Community Child Health",
    logo: "/logos/bacch-logo.png",
    alt: "British Association for Community Child Health"
  },
  {
    name: "Royal College of Paediatrics and Child Health",
    logo: "/logos/rcpch-logo.png",
    alt: "Royal College of Paediatrics and Child Health"
  }
]

export function AffiliationLogos() {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Professional Affiliations Of Our Doctors
        </h3>
        
        <div className="relative">
          {/* First row of scrolling logos */}
          <div className="flex space-x-12 animate-scroll">
            {affiliations.map((affiliation) => (
              <div
                key={affiliation.name}
                className="flex-shrink-0 w-48 h-24 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
              >
                <Image
                  src={affiliation.logo}
                  alt={affiliation.alt}
                  width={160}
                  height={80}
                  className="object-contain h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless scrolling */}
            {affiliations.map((affiliation) => (
              <div
                key={`${affiliation.name}-duplicate`}
                className="flex-shrink-0 w-48 h-24 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
              >
                <Image
                  src={affiliation.logo}
                  alt={affiliation.alt}
                  width={160}
                  height={80}
                  className="object-contain h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}