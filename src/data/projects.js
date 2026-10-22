import p1 from '../assets/images/hotel.png'
import p2 from '../assets/images/crypto.png'
import p3 from '../assets/images/khmer_tourist.png'
import p4 from '../assets/images/lumiere.png'
import p5 from '../assets/images/coffee.png'
import p6 from '../assets/images/food.png'
import p7 from '../assets/images/library.png'
import p8 from '../assets/images/gamax.png'
const GH = 'https://github.com/Chana758'

export const projects = [
  {
    id: 'food-shop',
    type: 'fullstack',
    title: 'Food Shop',
    description:
      'Restaurant ordering system with Admin, Staff and Customer roles. Manages products, orders, tables and reservations, with a POS that supports cash, card and KHQR payments.',
    image: p6,
    tags: ['Laravel', 'React.js', 'PostgreSQL', 'REST API'],
    links: [
      { label: 'Frontend', url: `${GH}/Food_Shop_API` },
      { label: 'Backend', url: `${GH}/Food_Shop_Backend` },
    ],
  },
  {
    id: 'library',
    type: 'fullstack',
    title: 'Library Management',
    description:
      'Smart Nexus LMS: a bilingual (Khmer/English) library system with role-based access. Covers borrowing and returns, overdue tracking, reservations, fines, QR scanning, member cards, reports, notifications and backup/restore.',
    image: p7,
    tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'REST API'],
    links: [
      { label: 'Frontend', url: `${GH}/SYSTEM_LMS` },
      { label: 'Backend', url: `${GH}/SYSTEM_LMS_API` },
    ],
  },
  {
    id: 'gamax',
    type: 'fullstack',
    title: 'GAMAX E-Commerce',
    description:
      'E-commerce platform with a React frontend using Redux for state management, connected to a Laravel REST API.',
    image: p8,
    tags: ['Laravel', 'React.js', 'Redux', 'PostgreSQL', 'REST API'],
    links: [
      { label: 'Frontend', url: `${GH}/EC-GAMAX-Front` },
      { label: 'Backend', url: `${GH}/E-Commers_GAMIX` },
    ],
  },
  {
    id: 'hotel',
    type: 'fullstack',
    title: 'KETO Hotel Booking',
    description:
      'Hotel booking website started from a free template and extended with a Laravel backend to practice admin panel development. Guests browse rooms, book by date and contact the hotel. Admins manage rooms, bookings, gallery, messages and site settings. Hosted on a free plan, so the first load can take about 50 seconds.',
    image: p1,
    tags: ['Laravel', 'Livewire', 'TiDB Cloud', 'Docker', 'Bootstrap'],
    links: [
      { label: 'Live demo', url: 'https://hotel-2xmb.onrender.com' },
      { label: 'Code', url: `${GH}/Hotel` },
    ],
  },
  {
    id: 'cryptography',
    type: 'frontend',
    title: 'Cryptography',
    description:
      'Interactive learning site built with React for classical ciphers, transposition and RSA, with quizzes.',
    image: p2,
    tags: ['React.js', 'Responsive'],
    links: [
      { label: 'Live demo', url: 'https://crytography-dusky.vercel.app/' },
      { label: 'Code', url: `${GH}/CRYTOGRAPHY` },
    ],
  },
  {
    id: 'khmerjourney',
    type: 'frontend',
    title: 'KhmerJourney',
    description:
      'Cambodia tourism website built with React, covering destinations, local services and travel information.',
    image: p3,
    tags: ['React.js', 'Responsive'],
    links: [
      { label: 'Live demo', url: 'https://tourist-cambodia-n9eq.vercel.app' },
      { label: 'Code', url: `${GH}/Tourist_CAMBODIA` },
    ],
  },
  {
    id: 'lumiere',
    type: 'frontend',
    title: 'Lumière',
    description: 'Skincare store front with product pages, built with React and Firebase.',
    image: p4,
    tags: ['React.js', 'Firebase', 'Responsive'],
    links: [
      { label: 'Live demo', url: 'https://skincare-firebase.vercel.app' },
      { label: 'Code', url: `${GH}/Skincare_Firebase` },
    ],
  },
  {
    id: 'brew-soul',
    type: 'frontend',
    title: 'Brew & Soul',
    description: 'Coffee shop website with home, menu, about, gallery and contact pages.',
    image: p5,
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Live demo', url: 'https://coffee-shop-five-ochre.vercel.app' },
      { label: 'Code', url: `${GH}/Coffee_Shop` },
    ],
  },
]