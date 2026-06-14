import { useReveal } from "../hooks.js";

export default function Services() {
  const ref = useReveal({ repeat: true });

  // Cursor-following spotlight + 3D tilt: write CSS vars on the card,
  // the stylesheet consumes them in the hover transform/gradient.
  const onMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    card.style.setProperty("--ry", ((x / r.width - 0.5) * 9).toFixed(2) + "deg");
    card.style.setProperty("--rx", ((y / r.height - 0.5) * -7).toFixed(2) + "deg");
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      num: "01",
      icon: "🌐",
      name: "Web Design & Devlopment",
      desc: "Web Developer & Graphic Designer focused on developing modern, responsive, and high-performance websites and creating professional and engaging visual designs. Combining creativity and technical expertise to produce effective and functional digital solutions that support branding and business needs.",
      tags: ["Web", "Dev", "Desgin"],
    },
    {
      num: "02",
      icon: "📜",
      name: "Design Graphics",
      desc: "Graphic Designer | Creating modern and professional visual designs for branding, social media, and digital promotions. Experienced in Photoshop, Illustrator, Canva, and Figma..",
      tags: ["Graphic Desginer", "Photoshop", "Illuslator", "Figma", "Canva"],
    },
    {
      num: "03",
      icon: "🧊",
      name: "GIGS VISUAL STUDIO",
      desc: "We offer services in the creative industry, catering to the needs of websites, graphic design, motion graphics, and social media specialists. We have been operating since 2025 and have partnered with several trusted clients to manage their website and graphic design needs.We provide creative services such as Videotron Operators, Photographers & Videographers",
      tags: ["Web Dev", "PhotoGrafi", "Videographer", "Desgin"],
    },
    {
      num: "04",
      icon: "🖥️",
      name: "Operator Videotron",
      desc: "Become a Powerman for event or entertainment needs to run videotron",
      tags: ["Event", "Artis", "Videotron", "Digital", "Monitoring"],
    },
  ];
  return (
    <section id="services" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="services-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">02</span> What I Do
            </div>
            <h2 className="services-title anim-left" style={{ "--d": "220ms" }}>
              Services &amp; <span className="italic-accent">capabilities.</span>
            </h2>
          </div>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="service-card anim-up"
              data-hover={true}
              style={{
                "--d": 380 + i * 140 + "ms",
                "--spot-c": i % 2 ? "var(--accent-2)" : "var(--accent)",
                "--float-d": i * 0.6 + "s",
              }}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <span className="service-card-spot" aria-hidden="true" />
              <span className="service-card-ghost" aria-hidden="true">
                {s.num}
              </span>
              <div className="service-card-num">{s.num}</div>
              <div className="service-card-icon">
                <span className="service-icon-ring" aria-hidden="true" />
                <span className="service-icon-emoji">{s.icon}</span>
              </div>
              <div className="service-card-name">{s.name}</div>
              <p className="service-card-desc">{s.desc}</p>
              <div className="service-card-tags">
                {s.tags.map((t, ti) => (
                  <span key={t} className="service-tag" style={{ "--ti": ti }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                className="service-card-cta"
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
              >
                Start a project{" "}
                <span className="service-cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
