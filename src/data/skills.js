/**
 * Skills data — categorized for the Skills section.
 * Each category groups related technologies with proficiency badges.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, accessible user interfaces.',
    skills: [
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building reliable server-side logic and APIs.',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'PHP', level: 'Beginner' },
      { name: 'MySQL', level: 'Intermediate' },

    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Development environment and collaboration tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Vite', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Figma', level: 'Beginner' },
      { name: 'Postman', level: 'Intermediate' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    description: 'Professional habits that complement technical ability.',
    skills: [
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Team Collaboration', level: 'Intermediate' },
      { name: 'Time Management', level: 'Advanced' },
      { name: 'Technical Writing', level: 'Intermediate' },
      { name: 'Self-Learning', level: 'Advanced' },
    ],
  },
]

/**
 * Maps proficiency levels to badge color variants.
 * Used by the Badge component in the Skills section.
 */
export const skillLevelVariants = {
  Beginner: 'muted',
  Intermediate: 'default',
  Advanced: 'accent',
}
