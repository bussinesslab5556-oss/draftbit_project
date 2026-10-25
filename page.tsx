'use client';

import { useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, AudioLines, BrainCircuit, Check,
  Code2, Github, Globe2, Layers3, Linkedin, Mail, Menu, MessageCircle,
  Mic2, Network, Rocket, Send, Sparkles, X, Zap
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/'; // Replace with your GitHub profile URL
const LINKEDIN_URL = 'https://www.linkedin.com/'; // Replace with your LinkedIn profile URL
const CONTACT_EMAIL = 'hello@example.com'; // Replace with your professional email

const projects = [
  {
    number: '01', name: 'Joonexa', category: 'AI · Communication · Translation',
    description: 'A communication platform concept focused on helping people connect across language barriers through translated messaging and multilingual voice and video conversations.',
    tags: ['AI Translation', 'Realtime Communication', 'Supabase', 'In Development'],
    icon: MessageCircle, featured: true, status: 'IN DEVELOPMENT'
  },
  {
    number: '02', name: 'Multilingual Translation Engine', category: 'AI · Language Technology',
    description: 'An application concept exploring multilingual translation workflows for text and spoken communication, with a focus on making cross-language conversations easier.',
    tags: ['Translation Workflow', 'Speech Experience', 'Multilingual'],
    icon: AudioLines, featured: false, status: 'IN DEVELOPMENT'
  },
  {
    number: '03', name: 'Healthcare Assistant', category: 'AI · Healthcare Experience',
    description: 'A healthcare-oriented assistant concept designed to make health information and care navigation more accessible through a conversational interface.',
    tags: ['AI Assistant', 'Voice UX', 'Accessibility'],
    icon: BrainCircuit, featured: false, status: 'IN DEVELOPMENT'
  },
  {
    number: '04', name: 'Social & Dating Experiences', category: 'Consumer Apps · Product Design',
    description: 'A collection of social and dating application projects exploring user profiles, social interactions, and approachable digital experiences.',
    tags: ['Social Products', 'User Experience', 'Mobile-first'],
    icon: Network, featured: false, status: 'IN DEVELOPMENT'
  },
  {
    number: '05', name: 'Commercial App Concepts', category: 'Product Engineering · Business Tools',
    description: 'Commercial application concepts focused on practical workflows, clear interfaces, and building digital tools around real user needs.',
    tags: ['Product Thinking', 'Web Apps', 'Workflow Design'],
    icon: Layers3, featured: false, status: 'IN DEVELOPMENT'
  }
];

const skills = [
  { title: 'AI & Intelligent Products', text: 'AI-assisted development, AI product workflows, translation-focused experiences', icon: BrainCircuit },
  { title: 'Frontend Development', text: 'React, Next.js, TypeScript — portfolio and application stack', icon: Code2 },
  { title: 'Backend & Data', text: 'Supabase, Firebase, PostgreSQL', icon: Network },
  { title: 'Developer Tooling', text: 'Claude Code, Cursor, Antigravity, Codex, VS Code agents', icon: Zap }
];

const services = [
  { n: '01', title: 'AI-powered applications', desc: 'Product concepts and application workflows built around useful AI capabilities.' },
  { n: '02', title: 'Web application development', desc: 'Responsive interfaces and application experiences designed for real devices and users.' },
  { n: '03', title: 'Database-connected products', desc: 'Application data workflows using platforms such as Supabase, Firebase and PostgreSQL.' },
  { n: '04', title: 'AI-assisted prototyping', desc: 'Turn a product idea into a structured, testable prototype with a clear path toward production.' }
];

const articles = [
  { tag: 'BUILDING IN PUBLIC', title: 'Designing communication without language barriers', desc: 'Notes from exploring multilingual messaging and live communication experiences.', date: 'Coming soon' },
  { tag: 'AI WORKFLOWS', title: 'How I use AI coding agents in product development', desc: 'A practical look at an AI-assisted workflow, from idea to implementation.', date: 'Coming soon' },
  { tag: 'PRODUCT ENGINEERING', title: 'Prototype is not production: the gap that matters', desc: 'Why testing, reliability, security and clear scope matter in software projects.', date: 'Coming soon' }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };
  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Jubayer home"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JUBAYER<span className="brand-dot">/</span>AI</span></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#services" onClick={closeMenu}>Services</a><a href="#journal" onClick={closeMenu}>Journal</a><a href="#contact" className="nav-contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-pulse" /> AI DEVELOPER <span className="eyebrow-divider">/</span> OPEN TO REMOTE OPPORTUNITIES</div>
          <h1>Building useful<br />things with <span className="gradient-text">AI<span className="period">.</span></span></h1>
          <p className="hero-lede">I&apos;m Jubayer — an AI-focused developer exploring how intelligent systems and thoughtful software can solve real-world problems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me <ArrowRight size={16} /></a></div>
          <div className="hero-meta"><div className="meta-item"><span className="meta-label">FOCUS</span><span>AI-powered products</span></div><div className="meta-line" /><div className="meta-item"><span className="meta-label">WORK MODE</span><span>Remote · Global</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Abstract AI network illustration">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="visual-orbit orbit-c" />
          <div className="visual-cross cross-a" /><div className="visual-cross cross-b" />
          <div className="core-glow" /><div className="core-card glass-card"><div className="core-top"><span className="core-live"><span /> SYSTEM THINKING</span><Sparkles size={17} /></div><div className="core-symbol"><BrainCircuit size={72} strokeWidth={1.15} /></div><div className="core-caption">Human problems.<br /><span>Intelligent possibilities.</span></div><div className="core-bottom"><span>AI</span><span className="core-line" /><span>BUILD · LEARN · ITERATE</span></div></div>
          <div className="float-chip chip-top"><span className="chip-icon cyan"><AudioLines size={15} /></span><span><b>Multilingual AI</b><small>Exploring new interfaces</small></span></div>
          <div className="float-chip chip-bottom"><span className="chip-icon blue"><Code2 size={15} /></span><span><b>AI-assisted build</b><small>Idea → implementation</small></span></div>
          <div className="visual-index">FIG. 001 <span>—</span> EXPLORING INTELLIGENCE</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span className="trust-label">TOOLS IN MY WORKFLOW</span><div className="tool-list"><span>Claude Code</span><i /><span>Cursor</span><i /><span>Codex</span><i /><span>VS Code Agents</span><i /><span>Supabase</span><i /><span>PostgreSQL</span></div></div></section>

      <section className="section-wrap section-block" id="about"><div className="section-heading"><div><span className="section-kicker">01 / THE PERSON BEHIND THE PROJECTS</span><h2>Curiosity first.<br /><span className="muted-heading">Build with purpose.</span></h2></div><p className="section-intro">I enjoy exploring ambitious software ideas and using AI-assisted tools to turn them into tangible product experiences.</p></div>
        <div className="about-grid"><div className="about-note glass-card"><div className="quote-mark">“</div><p className="about-quote">Technology becomes meaningful when it helps people do something they couldn&apos;t do before.</p><div className="note-footer"><span className="mini-avatar">J.</span><div><b>Jubayer</b><small>AI Developer</small></div><Sparkles size={18} className="note-spark" /></div></div><div className="about-content"><p>I work on application concepts across communication, translation, healthcare, social platforms and commercial products. My workflow combines AI coding agents with hands-on review and implementation when needed.</p><p>I&apos;m interested in international teams and remote opportunities where curiosity, fast learning and product thinking can contribute to meaningful software.</p><div className="principles"><div><span>01</span><b>Think in systems</b></div><div><span>02</span><b>Build for people</b></div><div><span>03</span><b>Keep improving</b></div></div></div></div>
      </section>

      <section className="section-wrap section-block" id="skills"><div className="section-heading"><div><span className="section-kicker">02 / THE TOOLKIT</span><h2>Tools are means.<br /><span className="muted-heading">Outcomes matter.</span></h2></div><p className="section-intro">A snapshot of the technologies and AI-enabled workflow I use or am building with. Project-specific stacks should be confirmed in each case study.</p></div>
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <article className="skill-card glass-card" key={skill.title}><div className="skill-top"><span className="skill-index">0{i + 1}</span><span className="skill-icon"><Icon size={19} /></span></div><h3>{skill.title}</h3><p>{skill.text}</p><div className="skill-bottom"><span>WORKFLOW AREA</span><ArrowUpRight size={15} /></div></article>; })}</div>
      </section>

      <section className="work-section" id="work"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Ideas becoming<br /><span className="muted-heading">real products.</span></h2></div><p className="section-intro">A selection of projects I&apos;ve explored. They are currently in development, so live demos and public repositories will be added when available.</p></div>
        <div className="projects-grid">{projects.map((project) => { const Icon = project.icon; return <article className={project.featured ? 'project-card project-featured glass-card' : 'project-card glass-card'} key={project.number}><div className="project-head"><span className="project-number">/{project.number}</span><span className="project-status"><span />{project.status}</span></div><div className="project-art"><div className="project-art-orbit" /><div className="project-art-orbit orbit-small" /><div className="project-art-icon"><Icon size={project.featured ? 48 : 38} strokeWidth={1.2} /></div><span className="art-code">{project.featured ? 'LANGUAGE / CONNECTIVITY' : 'PRODUCT / EXPERIENCE'}</span></div><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><span className="private-note"><span className="tiny-dot" /> Demo coming soon</span><span className="project-link-muted">Case study in progress <ArrowUpRight size={14} /></span></div></div></article>; })}</div>
        <div className="work-footnote"><span className="footnote-icon"><Rocket size={17} /></span><p><b>More work is in progress.</b> I can share project walkthroughs and implementation details when they&apos;re ready to review.</p></div>
      </div></section>

      <section className="section-wrap section-block" id="experience"><div className="section-heading"><div><span className="section-kicker">04 / EXPERIENCE</span><h2>Learning by<br /><span className="muted-heading">building.</span></h2></div><p className="section-intro">My experience so far includes internship experience and hands-on work on personal software projects.</p></div>
        <div className="timeline"><div className="timeline-line" /><article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-date">CURRENT FOCUS</div><div className="timeline-card glass-card"><div className="timeline-title-row"><div><h3>Independent AI & Software Projects</h3><span className="timeline-company">Personal product development</span></div><span className="timeline-pill">IN PROGRESS</span></div><p>Exploring AI-assisted application development across communication, multilingual translation, healthcare and social product concepts.</p><div className="tag-list"><span>Product Prototyping</span><span>AI Coding Agents</span><span>Application Design</span></div></div></article><article className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-date">PROFESSIONAL EXPERIENCE</div><div className="timeline-card glass-card"><div className="timeline-title-row"><div><h3>Internship Experience</h3><span className="timeline-company">Details available on request</span></div><span className="timeline-pill neutral-pill">INTERNSHIP</span></div><p>Specific organization, dates, responsibilities and outcomes can be added once the details are confirmed.</p></div></article></div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-kicker">05 / HOW I CAN HELP</span><h2>From idea to<br /><span className="muted-heading">first implementation.</span></h2></div><p className="section-intro">Areas I&apos;m interested in contributing to with a clear scope, honest communication and an iterative workflow.</p></div><div className="services-list">{services.map(service => <article className="service-row" key={service.n}><span className="service-number">{service.n}</span><h3>{service.title}</h3><p>{service.desc}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div></div></section>

      <section className="section-wrap section-block" id="journal"><div className="section-heading"><div><span className="section-kicker">06 / NOTES & IDEAS</span><h2>Thinking out<br /><span className="muted-heading">loud.</span></h2></div><p className="section-intro">A future journal for build notes, lessons learned and practical observations from developing with AI.</p></div><div className="journal-grid">{articles.map((article, i) => <article className="journal-card glass-card" key={article.title}><div className="journal-top"><span>{article.tag}</span><span>0{i + 1}</span></div><div className="journal-graphic"><div className="journal-ring" /><div className="journal-line" /><Sparkles size={24} /></div><h3>{article.title}</h3><p>{article.desc}</p><div className="journal-bottom"><span>{article.date}</span><span className="coming-soon">DRAFTING <span /></span></div></article>)}</div></section>

      <section className="section-wrap section-block" id="testimonials"><div className="testimonial-panel glass-card"><div><span className="section-kicker">07 / COLLABORATION</span><h2>Good work is<br /><span className="muted-heading">built together.</span></h2></div><div className="testimonial-copy"><div className="testimonial-icon"><MessageCircle size={23} /></div><p>Professional recommendations and client feedback will appear here when I have permission to share them.</p><span className="testimonial-note">NO TESTIMONIALS PUBLISHED YET</span></div></div></section>

      <section className="resume-section" id="resume"><div className="section-wrap resume-inner"><div className="resume-icon"><Layers3 size={24} /></div><div className="resume-copy"><span className="section-kicker">08 / RESUME</span><h2>Want the concise version?</h2><p>My resume will be available here once I add a verified PDF with my experience, skills and project details.</p></div><a className="button button-outline" href="#contact">Request resume <ArrowUpRight size={16} /></a></div></section>

      <section className="section-wrap section-block contact-section" id="contact"><div className="contact-heading"><span className="section-kicker">09 / START A CONVERSATION</span><h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2><p>I&apos;m interested in remote opportunities, thoughtful collaborations and products with a clear purpose.</p><button className="email-copy" onClick={copyEmail}><Mail size={16} /> {CONTACT_EMAIL} <span>{copied ? <Check size={15} /> : <ArrowUpRight size={15} />}</span></button></div><form className="contact-form glass-card" onSubmit={submitContact}><div className="form-heading"><span>CONTACT FORM</span><span className="form-live"><span /> READY</span></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I address you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>What would you like to discuss?<textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the opportunity or idea..." /></label><button className="button button-primary form-submit" type="submit">Prepare email <Send size={15} /></button><p className="form-disclaimer">This opens your email app with your message prepared. It does not send data to a server.</p></form></section>

      <footer className="site-footer"><div className="footer-main"><a href="#home" className="brand"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JUBAYER<span className="brand-dot">/</span>AI</span></a><p>Exploring intelligent software.<br />Building with purpose.</p><div className="social-links"><a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"><Mail size={17} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jubayer. Built with curiosity.</span><span><span className="footer-status" /> DESIGNED FOR THE NEXT ITERATION</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
