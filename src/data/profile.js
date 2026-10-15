/**
- Personal info used by Hero, About and Contact.
- Social links are optional: any link left out is hidden automatically.
 */
export const profile = {
  name: 'Sam Channa',
  role: 'Full-Stack Developer',
  tagline:
    'Third-year IT student at RUPP. I build full-stack web apps with Laravel, Vue.js and PostgreSQL, and I am looking for an internship.',
  location: 'Phnom Penh, Cambodia',
  email: 'csam26176@gmail.com',
  github: 'https://github.com/Chana758',
  telegram: 'https://t.me/CHANNA_SM', 
  resumeUrl: '/Sam_Channa_CV.pdf',
}

export const about = {
  headline: 'About me',
  paragraphs: [
    'I am a third-year IT student at the Royal University of Phnom Penh (RUPP). I like building complete web applications, from the database to the screen the user sees.',
    'So far I have built 3 full-stack systems, each with a separate frontend and REST API, and 4 frontend websites that are live on the web. I work mostly with Laravel, Vue.js and PostgreSQL.',
    'I am now learning TypeScript and Spring Boot by building a SaaS application. I am looking for an internship where I can work on real projects with a team.',
  ],
  highlights: [
    { label: 'Education', value: 'ITE @ RUPP, Year 3' },
    { label: 'Focus', value: 'Full-stack web development' },
    { label: 'Learning now', value: 'TypeScript, Spring Boot' },
    { label: 'Looking for', value: 'Internship' },
  ],
}

export const contact = {
  headline: 'Get in touch',
  description: 'I am open to internships and collaboration. Send a message or contact me directly.',
  formEndpoint: 'https://api.web3forms.com/submit',
  accessKey: '28c40046-dcf8-448f-a7b3-a06d2821f883',
  formFields: [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Job opportunity, Question, or Collaboration', required: true },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'How can I help?', required: true },
  ],
}