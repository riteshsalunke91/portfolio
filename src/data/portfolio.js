import { Code2, Server, Layout, Database, Brain, Wrench, Cloud, Layers, ShieldCheck, Sparkles, CalendarCheck, Wallet, Users, MessageSquareText } from 'lucide-react'

// Edit everything here. No component changes needed.
export const profile = {
  name: 'Ritesh Salunke',
  email: 'inforsalunke@gmail.com',              // TODO: your email
  github: 'https://github.com/riteshsalunke91',   // TODO
  linkedin: 'https://www.linkedin.com/in/ritesh-salunke-084494269', // TODO
  resume: '/resume.pdf',                        // put resume.pdf in /public
  roles: ['Java Full Stack Developer', 'Spring Boot Developer', 'AI Application Developer'],
}

export const skills = [
  { title: 'Programming Languages', icon: Code2, items: ['Java', 'JavaScript', 'SQL', ] },
  { title: 'Backend Development', icon: Server, items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA', 'JDBC', 'REST APIs'] },
  { title: 'Frontend Development', icon: Layout, items: ['React.js',  'JavaScript', 'Bootstrap', ] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'PostgreSQL', 'pgvector'] },
  { title: 'AI & Generative AI', icon: Brain, items: ['Spring AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Ollama'] },
  { title: 'Developer Tools', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Maven', 'Docker'] },
  { title: 'Cloud & Deployment', icon: Cloud, items: ['AWS (basics)', 'Docker'] },
]

export const projects = [
  { title: 'Meeting Room Booking System', icon: CalendarCheck, from: '#7c3aed', to: '#3b82f6',
    desc: 'Employees book rooms, admins manage them from a dashboard. Availability checks and double-booking prevention keep schedules clean.',
    tags: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Spring Security'], github: '#', demo: '#' },
  { title: 'BudgetBook', icon: Wallet, from: '#2563eb', to: '#06b6d4',
    desc: 'Track personal expenses, set budget goals, organise spending by category and review monthly financial reports.',
    tags: ['React.js', 'Spring Boot', 'MySQL'], github: '', demo: '' },
  { title: 'Huddle', icon: Users, from: '#9333ea', to: '#ec4899',
    desc: 'Manager and employee management application with token-based authentication and file storage on AWS S3.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'MySQL', 'AWS S3'], github: 'https://github.com/riteshsalunke91/Huddl', demo: 'https://huddl-mu.vercel.app' },
  { title: 'QueryMind AI', icon: MessageSquareText, from: '#4f46e5', to: '#a855f7',
    desc: 'AI-powered question-answering app that uses LLMs and Retrieval Augmented Generation over documents stored in pgvector.',
    tags: ['Java', 'Spring Boot', 'Spring AI', 'Ollama', 'PostgreSQL', 'pgvector'], github: '#', demo: '#' },
]

export const timeline = [
  { title: 'B.Tech, Computer Science Engineering', meta: '2026', text: 'Core CS foundations: data structures, databases, operating systems and software engineering.' },
  { title: 'Java & Spring Boot Development', meta: 'Learning', text: 'Building REST APIs with Spring MVC, Security, JPA and Hibernate.' },
  { title: 'Full Stack Development with React', meta: 'Learning', text: 'Connecting React interfaces to Spring Boot backends.' },
  { title: 'Exploring Spring AI, LLMs and RAG', meta: 'Now', text: 'Adding AI features to Java applications with local models.' },
  { title: 'Building real-world portfolio projects', meta: 'Ongoing', text: 'Shipping projects that solve practical problems end to end.' },
]

export const services = [
  { title: 'Backend API Development', icon: Server, text: 'Clean, versioned REST APIs with Spring Boot.' },
  { title: 'Full Stack Web Development', icon: Layers, text: 'React frontends wired to Java backends.' },
  { title: 'Database Design', icon: Database, text: 'Relational schemas in MySQL and PostgreSQL.' },
  { title: 'Authentication & Authorization', icon: ShieldCheck, text: 'JWT and role-based access with Spring Security.' },
  { title: 'AI Integration with Spring AI', icon: Sparkles, text: 'LLM and RAG features inside Java applications.' },
]

export const exploring = ['Spring AI', 'Retrieval Augmented Generation (RAG)', 'LLM Integration', 'pgvector', 'AI-powered applications']

// Content shown in the hero's live API console.
export const consoleData = {
  '/profile': { name: 'Ritesh Salunke', role: 'Java Full Stack Developer', education: 'B.Tech CSE, 2026', location: 'India', status: 'Open to fresher roles' },
  '/skills': { backend: ['Spring Boot', 'Spring Security', 'JPA'], frontend: ['React.js', ' CSS'], data: ['MySQL', 'PostgreSQL', 'pgvector'], ai: ['Spring AI', 'RAG', 'Ollama'] },
  '/projects': projects.map((p) => p.title),
  '/exploring': exploring,
}
