import frontendImg from '@/assets/certificates/frontend.jpg'
import laravelImg from '@/assets/certificates/laravel.jpg'
import htmlCssImg from '@/assets/certificates/html-css.jpg'
import cppImg from '@/assets/certificates/cpp.jpg'

/**
 * Education timeline (newest first).
 */
export const timeline = [
  {
    id: 'rupp-ite',
    title: 'Information Technology Engineering (ITE), Year 3',
    organization: 'Royal University of Phnom Penh (RUPP)',
    period: '2024 — Present',
    location: 'Phnom Penh, Cambodia',
    highlights: [
      'Coursework in web development, databases and algorithms',
      'Group and personal full-stack software projects',
    ],
  },
  {
    id: 'high-school',
    title: 'High School Diploma, Grade A',
    organization: 'National High School',
    period: '2019 — 2024', // TODO: check the years
    location: 'Cambodia',
    highlights: [
      'Graduated with Grade A in the National Examination',
      'Strong foundation in mathematics and logical thinking',
    ],
  },
]

/**
 * Certificates (newest first).
 * Only add `id` if that exact number is printed on the certificate.
 */
export const certificates = [
  {
    title: 'Basic / Advance PHP, Ajax, Laravel & Project Courses',
    issuer: 'ETEC Center',
    year: 'January 2026',
    image: laravelImg,
    id: '000191056ETEC',
  },
  {
    title: '4th IT Scholarship Training Course (Frontend)',
    issuer: 'ETEC Center',
    year: 'November 2025',
    image: frontendImg,
    // id: 'ETEC-FE-2025', // TODO: keep only if this number is printed on the certificate
  },
  {
    title: 'HTML, CSS, Tailwind & Project Courses',
    issuer: 'ETEC Center',
    year: 'July 2025',
    image: htmlCssImg,
    id: '3021ETEC',
  },
  {
    title: 'Basic C++ / Class + Objects & Project Courses',
    issuer: 'ETEC Center',
    year: 'June 2025',
    image: cppImg,
    id: '2092ETEC',
  },
]