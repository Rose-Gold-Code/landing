import Image from 'next/image';

const basePath = process.env.PAGES_BASE_PATH || '';

const projects = [
  { name: 'F52', category: 'Film discovery & ranking', description: 'Give your movie opinions a little more character. A playing-card-inspired film app that uses suits, tiers, and head-to-head comparisons to help you rank what you watch.', label: 'In development', className: 'film', image: '/images/f52.png', number: '01' },
  { name: 'Fidrate', category: 'Personal budgeting', description: 'Build a budget around when you actually get paid. Plan upcoming paychecks, bills, and savings goals without squeezing everything into a calendar month.', label: 'In development', className: 'budget', number: '02' },
  { name: 'Whittle', category: 'Sports & games', description: 'Follow the season with a different kind of competition. A multi-sport elimination game where each round brings a new decision.', label: 'Private testing', className: 'sports', number: '03' },
  { name: 'Morel', category: 'Notes & organization', description: 'A quiet place for ideas, words, and numbers. A minimal note-taking app exploring spreadsheet-like tools inside your notes.', label: 'In development', className: 'notes', number: '04' },
  { name: 'Veritia', category: 'Social connection', description: 'An exploration of a healthier way to connect online, with tools designed to encourage thoughtful conversations and better social habits.', label: 'In development', className: 'social', number: '05' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#main" aria-label="Rose Gold Code home"><span className="brand-mark" aria-hidden="true">{'{'}<span>·</span>{'}'}</span><span>Rose Gold Code</span></a>
        <nav aria-label="Main navigation"><a href="#apps">Our apps</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <p className="eyebrow"><span className="small-line" aria-hidden="true" />Independent software studio · Arizona</p>
          <h1 id="hero-title">A little thought.<br />A lot of <em>possibility.</em></h1>
          <div className="hero-bottom"><p>We build apps around everyday interests.<br />Films worth remembering. Money worth planning.<br />Ideas worth keeping.</p><a className="text-link" href="#apps">Meet our apps <span aria-hidden="true">↓</span></a></div>
          <div className="hero-rule" aria-hidden="true"><span>ROSE / GOLD / CODE</span><span>EST. 2026</span></div>
        </section>
        <section id="apps" className="portfolio wrap" aria-labelledby="apps-title">
          <div className="section-heading"><div><p className="eyebrow">What we’re building</p><h2 id="apps-title">Small apps.<br />Distinct perspectives.</h2></div><p>Our portfolio is taking shape.<br />Here’s what we’re working on.</p></div>
          <div className="project-grid">
            {projects.map((project) => <article className={`project ${project.className}`} key={project.name}>
              <div className="project-top"><span className="project-number">/{project.number}</span><span className="status"><span aria-hidden="true" />{project.label}</span></div>
              <div className="project-title">{project.image && <Image src={`${basePath}${project.image}`} width={64} height={64} alt="" unoptimized />}<h3>{project.name}</h3></div>
              <p className="project-category">{project.category}</p><p className="project-description">{project.description}</p>
            </article>)}
            <aside className="portfolio-note"><span className="note-mark" aria-hidden="true">{'</>'}</span><p>Made with care.<br />Built to be used.</p><span>From first idea to everyday companion.</span></aside>
          </div>
        </section>
        <section id="about" className="about wrap" aria-labelledby="about-title"><p className="eyebrow">The studio</p><div><h2 id="about-title">Independent by design.</h2><p>Rose Gold Code LLC is an independent software company based in Arizona. Founded by William Cox, we develop and publish apps that bring a fresh perspective to everyday activities.</p><p>We keep the studio small and the work focused, giving each product its own purpose and personality. Our apps are currently in development or private testing as we prepare them for release.</p></div></section>
        <section id="contact" className="contact wrap" aria-labelledby="contact-title"><div><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let’s talk.</h2><p>Questions about the studio or one of our apps?<br />We’d like to hear from you.</p></div><a className="email-link" href="mailto:will@rosegoldcode.com">will@rosegoldcode.com <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="site-footer wrap"><a className="footer-brand" href="#main">Rose Gold Code LLC</a><p>© {new Date().getFullYear()} Rose Gold Code LLC</p><a href="mailto:will@rosegoldcode.com">Contact</a></footer>
    </>
  );
}
