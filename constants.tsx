
import React from 'react';
import { 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  Microscope, 
  Activity, 
  Clock 
} from 'lucide-react';
import { Service, TeamMember, Testimonial } from './types';

export const CLINIC_NAME = "Browne Clinic";
export const CLINIC_LOCATION = "Johnsonville, Pepper Wulu Market, Montserrado County, Liberia";
export const CLINIC_LANDMARK = "Opposite the orange Tawar, adjacent Browne Clinic";
export const PHONE_NUMBERS = ["0775829276"];
export const CLINIC_EMAIL = "info@browneclinic.com";

// New Brand Color: Medical Blue (#0057B7)
export const BRAND_COLOR = "#0057B7";

export const SERVICES: (Service & { details: string })[] = [
  {
    id: 'primary-care',
    title: 'Primary Care & Consultations',
    description: 'Expert medical advice and general health management for your whole family.',
    details: 'Our general practitioners provide thorough examinations, chronic disease management, and prescriptions tailored to your recovery needs. We focus on preventive care to keep the Johnsonville community healthy.',
    icon: 'Stethoscope'
  },
  {
    id: 'maternal-health',
    title: 'Maternal & Neonatal Health',
    description: 'Specialized midwifery and prenatal care services for safe pregnancies.',
    details: 'Comprehensive antenatal care, safe delivery assistance, and postnatal checkups. We provide nutritional guidance for mothers and early developmental screenings for newborns.',
    icon: 'Baby'
  },
  {
    id: 'child-health',
    title: 'Child Health & Vaccinations',
    description: 'Pediatric care and routine immunization for local children.',
    details: 'Following the Ministry of Health guidelines, we offer all essential childhood vaccinations. Our pediatric team handles common childhood illnesses like malaria, respiratory infections, and more.',
    icon: 'HeartPulse'
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Services',
    description: 'Basic laboratory work and rapid testing for accurate diagnosis.',
    details: 'In-house rapid testing for Malaria, HIV, Typhoid, and blood sugar levels. Get your results quickly so treatment can begin without delay.',
    icon: 'Microscope'
  },
  {
    id: 'screenings',
    title: 'Routine Health Checks',
    description: 'Regular screenings for blood pressure and common health concerns.',
    details: 'Monitor your vital signs. We offer screening packages for hypertension, diabetes, and infectious diseases frequent in our region.',
    icon: 'Activity'
  },
  {
    id: 'emergency',
    title: 'Emergency & Outpatient',
    description: 'Quick response care for urgent medical needs during hours.',
    details: 'Triage and stabilization for urgent cases. We facilitate transfers to larger hospitals when specialized critical care is required.',
    icon: 'Clock'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Yamah Cheales Browne",
    role: "Administrator",
    image: "", 
    bio: "Dedicated to the smooth operations of Browne Clinic and ensuring every patient receives compassionate care."
  },
  {
    name: "Agatha Parsons",
    role: "OTC",
    image: "", 
    bio: "Expertly handling patient needs and providing essential health guidance to our local community."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "The care I received at Browne Clinic during my pregnancy was exceptional. The staff treated me like family.",
    author: "Mary K.",
    location: "Johnsonville"
  },
  {
    text: "Fast service and very professional. It's great to have such high-quality care right here in Pepper Wulu Market.",
    author: "Joseph T.",
    location: "Mount Barclay"
  }
];

export const ICON_MAP: Record<string, React.ElementType> = {
  Stethoscope,
  Baby,
  HeartPulse,
  Microscope,
  Activity,
  Clock
};
