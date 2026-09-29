/**
 * Personal profile data — used by Hero, About, and Contact sections.
 * Update these values to match your real information.
 */

export const profile = {
  name: 'Your Name',
  title: 'ITE Student @ RUPP',
  role: 'Full Stack Developer',
  tagline:
    'Building clean, scalable web solutions with modern technologies and a passion for elegant code.',
  location: 'Phnom Penh, Cambodia',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resumeUrl: '#',
}

export const about = {
  headline: 'About Me',
  paragraphs: [
    'I am a 2nd-year ITE student at the Royal University of Phnom Penh (RUPP) with a strong academic foundation, including a High School Grade A. My journey into technology started with curiosity and has grown into a genuine passion for building software that solves real problems.',
    'I specialize in full-stack web development, combining frontend craftsmanship with solid backend logic. Whether it is a responsive UI or a RESTful API, I am committed to writing clean, maintainable code that stands the test of time.',
    'Beyond coursework, I actively explore new frameworks, contribute to personal projects, and stay current with industry best practices. I believe great software is built at the intersection of technical skill and thoughtful design.',
  ],
  highlights: [
    { label: 'Education', value: 'ITE @ RUPP (2nd Year)' },
    { label: 'High School', value: 'Grade A' },
    { label: 'Focus', value: 'Full Stack Development' },
    { label: 'Approach', value: 'Clean & Scalable Solutions' },
  ],
}

export const contact = {
  headline: 'Get In Touch',
  description:
    'I am open to internships, collaborations, and freelance opportunities. Fill out the form below or reach out directly — I typically respond within 24 hours.',
  formFields: [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Inquiry', required: true },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...', required: true },
  ],
}
