/**
 * Portfolio projects data.
 * Consumed by the Projects view via the ProjectCard component.
 */

export const projects = [
  {
    id: 'portfolio-v2',
    title: 'Personal Portfolio',
    description:
      'A modern, dark-mode portfolio website built with Vue 3, Vite, and Tailwind CSS. Features smooth scrolling, responsive layout, and modular component architecture.',
    image: null,
    tags: ['Vue.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true,
    year: '2025',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description:
      'A full-stack task management application with user authentication, CRUD operations, and real-time status updates. Built to practice REST API design and state management.',
    image: null,
    tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: true,
    year: '2025',
  },
  {
    id: 'ecommerce-ui',
    title: 'E-Commerce UI Kit',
    description:
      'A responsive e-commerce frontend with product listings, cart functionality, and checkout flow. Focused on component reusability and mobile-first design principles.',
    image: null,
    tags: ['Vue.js', 'Tailwind CSS', 'Pinia', 'REST API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/ecommerce-ui',
    featured: false,
    year: '2024',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'A clean weather application that fetches live data from a public API. Displays current conditions, forecasts, and location-based search with a minimalist interface.',
    image: null,
    tags: ['JavaScript', 'API Integration', 'CSS3', 'Responsive'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: false,
    year: '2024',
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS',
    description:
      'A content management system for a personal blog with markdown support, category tagging, and an admin dashboard for creating and editing posts.',
    image: null,
    tags: ['Vue.js', 'Node.js', 'MySQL', 'Markdown'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/blog-cms',
    featured: false,
    year: '2024',
  },
  {
    id: 'student-portal',
    title: 'Student Portal Mockup',
    description:
      'A UI/UX prototype for a university student portal featuring course schedules, grade tracking, and announcement feeds. Designed as a coursework group project.',
    image: null,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/student-portal',
    featured: false,
    year: '2023',
  },
]

/**
 * Returns featured projects for hero or highlight sections.
 */
export const getFeaturedProjects = () => projects.filter((p) => p.featured)
