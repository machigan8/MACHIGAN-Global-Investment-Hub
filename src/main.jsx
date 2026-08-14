import React from "react";
import ReactDOM from "react-dom/client";
import {
  Monitor,
  Palette,
  Megaphone,
  Wrench,
  FileText,
  Cpu,
  Mail,
} from "lucide-react";
import "./styles.css";

const WHATSAPP = "254713482474";
const EMAIL = "machiganglobalinvestmenthub@gmail.com";

function App() {
  const whatsappMessage = encodeURIComponent(
    "Hello Machigan Global Investment Hub, I would like to discuss a project with you."
  );

  return (
    <div>
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
  <span className="logo-mark">
    <span className="logo-m">M</span>
    <span className="logo-g">G</span>
  </span>

  <span className="logo-text">
    MACHIGAN
    <small>GLOBAL INVESTMENT HUB</small>
  </span>
</a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="nav-button"
            href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Start a Project
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">
                SMART DIGITAL SOLUTIONS. TRUSTED BUSINESS SUPPORT.
              </p>

              <h1>
                Building Digital Solutions
                <span> For Individuals & Businesses.</span>
              </h1>

              <p className="hero-description">
                Machigan Global Investment Hub helps individuals and
                businesses turn ideas into practical digital solutions through
                technology, branding, business support and innovative
                services.
              </p>

              <div className="hero-buttons">
                <a href="#services" className="primary-button">
                  Explore Our Services
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Talk to Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="mg-circle">MG</div>

              <h3>MACHIGAN</h3>
              <p>Global Investment Hub</p>

              <div className="hero-line"></div>

              <div className="hero-stat">
                <strong>Digital</strong>
                <span>Solutions</span>
              </div>

              <div className="hero-stat">
                <strong>Business</strong>
                <span>Support</span>
              </div>

              <div className="hero-stat">
                <strong>Global</strong>
                <span>Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHO WE ARE</p>

              <h2>
                Technology that helps businesses move forward.
              </h2>

              <p>
                We are building MACHIGAN into a trusted technology company
                serving individuals, startups, SMEs and organizations with
                affordable and practical digital solutions.
              </p>
            </div>

            <div className="about-grid">
              <div className="info-card">
                <h3>Our Vision</h3>

                <p>
                  To become one of Kenya's most trusted technology companies
                  by providing affordable digital solutions that help
                  businesses grow.
                </p>
              </div>

              <div className="info-card">
                <h3>Our Mission</h3>

                <p>
                  To empower businesses and individuals through innovative
                  technology, professional branding and reliable IT services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
<section id="services" className="section services-section">
  <div className="container">
    <div className="section-heading">
      <p className="eyebrow">WHAT WE DO</p>

      <h2>Digital solutions designed to move your business forward.</h2>

      <p>
        From establishing your digital presence to supporting your everyday
        technology needs, MACHIGAN provides practical solutions for
        individuals, startups and growing businesses.
      </p>
    </div>

    <div className="services-grid">

      {/* SERVICE 01 */}
      <div className="service-card">
        <div className="service-icon">
          <Monitor size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">01</span>

        <h3>Digital Solutions</h3>

        <p>
          Professional business websites, personal websites, portfolios
          and digital platforms built around your goals.
        </p>

        <ul className="service-list">
          <li>Business websites</li>
          <li>Personal portfolios</li>
          <li>Digital platforms</li>
        </ul>
      </div>

      {/* SERVICE 02 */}
      <div className="service-card">
        <div className="service-icon">
          <Palette size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">02</span>

        <h3>Branding & Design</h3>

        <p>
          Build a professional identity that makes your business
          recognizable and memorable.
        </p>

        <ul className="service-list">
          <li>Logo design</li>
          <li>Business cards</li>
          <li>Marketing materials</li>
        </ul>
      </div>

      {/* SERVICE 03 */}
      <div className="service-card">
        <div className="service-icon">
          <Megaphone size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">03</span>

        <h3>Digital Marketing</h3>

        <p>
          Reach your customers online through practical digital marketing
          and social media support.
        </p>

        <ul className="service-list">
          <li>Social media support</li>
          <li>WhatsApp Business</li>
          <li>Digital marketing</li>
        </ul>
      </div>

      {/* SERVICE 04 */}
      <div className="service-card">
        <div className="service-icon">
          <Wrench size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">04</span>

        <h3>IT & Computer Services</h3>

        <p>
          Reliable technical support to keep your computers and digital
          tools working properly.
        </p>

        <ul className="service-list">
          <li>Computer troubleshooting</li>
          <li>Software installation</li>
          <li>Windows installation</li>
        </ul>
      </div>

      {/* SERVICE 05 */}
      <div className="service-card">
        <div className="service-icon">
          <FileText size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">05</span>

        <h3>Business Documents</h3>

        <p>
          Professional documents that help individuals and businesses
          present themselves with confidence.
        </p>

        <ul className="service-list">
          <li>CVs & cover letters</li>
          <li>Company profiles</li>
          <li>Business proposals</li>
        </ul>
      </div>

      {/* SERVICE 06 */}
      <div className="service-card future-card">
        <div className="service-icon">
          <Cpu size={28} strokeWidth={1.8} />
        </div>

        <span className="service-number">06</span>

        <h3>Future Technology</h3>

        <p>
          As MACHIGAN grows, we plan to expand into advanced technology
          solutions for businesses.
        </p>

        <ul className="service-list">
          <li>Software development</li>
          <li>Automation & AI</li>
          <li>Cloud solutions</li>
        </ul>
      </div>

    </div>
  </div>
</section>
        {/* WHY CHOOSE US */}
<section id="why-us" className="section why-section">
  <div className="container">

    <div className="section-heading">
      <p className="eyebrow">WHY MACHIGAN</p>

      <h2>More than a service provider. A partner for your growth.</h2>

      <p>
        We combine technology, creativity and business support to provide
        practical solutions that help our clients establish, operate and grow.
      </p>
    </div>

    <div className="why-grid">

      <div className="why-card">
        <span className="why-number">01</span>
        <h3>Practical Solutions</h3>
        <p>
          We focus on solving real problems with solutions that are useful,
          affordable and built around your specific needs.
        </p>
      </div>

      <div className="why-card">
        <span className="why-number">02</span>
        <h3>Built for Growth</h3>
        <p>
          Whether you're starting small or already established, our solutions
          are designed to support your next stage of growth.
        </p>
      </div>

      <div className="why-card">
        <span className="why-number">03</span>
        <h3>Professional & Accessible</h3>
        <p>
          We believe quality digital services should be accessible to
          individuals, startups and growing businesses.
        </p>
      </div>

      <div className="why-card">
        <span className="why-number">04</span>
        <h3>One Technology Partner</h3>
        <p>
          From your first website to future software and technology needs,
          MACHIGAN can grow alongside your business.
        </p>
      </div>

    </div>

  </div>
</section>
        {/* CTA */}
        <section className="cta">
          <div className="container cta-content">
            <div>
              <p className="eyebrow">HAVE AN IDEA?</p>

              <h2>Let's build something valuable together.</h2>

              <p>
                Tell us what you need and let's find the right digital
                solution for your business.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Start a Project
            </a>
          </div>
        </section>

        {/* CONTACT */}
<section id="contact" className="section contact-section">
  <div className="container">

    <div className="section-heading">
      <p className="eyebrow">GET IN TOUCH</p>

      <h2>Let's talk about your next project.</h2>

      <p>
        Have an idea, need a website, or looking for reliable digital
        support? Reach out to MACHIGAN and let's discuss how we can help.
      </p>
    </div>

    <div className="contact-grid">

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <span className="contact-icon whatsapp-icon">

          <svg
            viewBox="0 0 32 32"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="15" fill="currentColor" />

            <path
              fill="#ffffff"
              d="M23.2 8.7A10.1 10.1 0 0 0 16 5.8c-5.6 0-10.2 4.5-10.2 10.1
              0 1.8.5 3.5 1.3 5L5.7 26.2l5.4-1.4a10.2 10.2 0 0 0 4.9 1.2h.1
              c5.6 0 10.1-4.5 10.1-10.1 0-2.7-1.1-5.2-3-7.2zm-7.2 15.6h-.1
              c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3a8.4 8.4 0 0 1-1.3-4.5
              c0-4.6 3.8-8.4 8.5-8.4 2.2 0 4.3.9 5.9 2.5a8.4 8.4 0 0 1 2.5 5.9
              c0 4.7-3.8 8.5-8.4 8.5zm4.6-6.3c-.3-.2-1.7-.9-2-.9
              -.3-.1-.5-.1-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1
              -1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6
              -.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4
              -.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8
              .8.4 1.4.6 1.9.7.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4
              .2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.5z"
            />
          </svg>

        </span>

        <div>
          <small>WhatsApp / Phone</small>
          <strong>+254 713 482 474</strong>
        </div>
      </a>


      {/* EMAIL */}
      <a
        href={`mailto:${EMAIL}`}
        className="contact-card"
      >
        <span className="contact-icon email-icon">
          <Mail size={28} strokeWidth={2} />
        </span>

        <div>
          <small>Email</small>
          <strong>{EMAIL}</strong>
        </div>
      </a>

    </div>
  </div>
</section> 
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container footer-content">
          <div>
            <strong>MACHIGAN</strong>
            <p>Global Investment Hub</p>
          </div>

          <p>
            © 2026 Machigan Global Investment Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);