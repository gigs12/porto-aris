import { useReveal } from "../hooks.js";
import WorkArt from "./WorkArt.jsx";

export default function Work(props) {
  const onOpen = props.onOpen;
  const ref = useReveal({ repeat: true });
  const projects = [
    {
      id: "Gigs Visual Studio",
      name: "GIGS VISUAL STUDIO",
      cat: "Web · 2025",
      tag: "Web",
      yr: "2025",
      art: " ",
      cover: "/assets/WEBGIGS.jpg",
      size: "med-r",
      link: "-",
      desc: "Creating Websites and Website Design for the needs of government agencies, individuals and companies",
      year: "2026",
      tools: "Php · FIGMA · Adobe · SQL · Cloud",
      tags: ["Web", "Software", "Tools", "PHP"],
    },
    {
      id: "3D WEB LAYOUT",
      name: "3D LAYOUT BERBASIS WEB MENGGUNAKAN WEB GL",
      cat: "3D · WEB · 2026",
      tag: "3D WEB",
      yr: "2025",
      art: "Gigs",
      cover: "/assets/3DWEB.jpg",
      size: "med-r",
      link: " ",
      desc: "Create a 3D Layout Design that can be accessed via a website and create a new launch in the world of event planning or architecture industry.",
      year: "2025",
      tools: "Blener · Sketchup · PHP · FIGMA· NODEjs · Threejs",
      tags: ["Arsitektur", "3DWEB", "Layout", "EventPlanner"],
    },
    {
      id: "Design Graphis",
      name: "Design Graphis",
      cat: "Design",
      tag: "Design",
      yr: "2020-2026",
      art: "aris",
      cover: "/assets/designaris.JPG",
      size: "med-r",
      desc: "Create graphic designs such as logos, motion graphics, posters or banners",
      year: "2020-2026",
      tools: "After Effect · Blender · Adobe Photoshop · Adobe Illuslator · Pinterest",
      duration: "1 Mount",
      tags: ["Desgin"],
    },
    {
      id: "Operator-Videotron",
      name: "Operator Videotron",
      cat: "Resolume Arena Software",
      tag: "OP VID",
      yr: "2024",
      art: "Digital",
      cover: "/assets/VJ.jpeg",
      size: "med-r",
      desc: "Becoming a Videotron Operator and Visual Jockey for the needs of artists who come to East Kalimantan",
      year: "2024-2026",
      tools: "Resolume Arena · OBS · Nvdia BroadCast",
      duration: "3 years",
      tags: ["Resolume Arena", "Visual Jockey", "Operator Videotron, Event"],
    },
  ];
  return (
    <section id="work" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="work-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">03</span> Selected Work
            </div>
            <h2 className="work-title anim-left" style={{ "--d": "220ms" }}>
              Things I've <span className="italic-accent">shipped.</span>
            </h2>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={"work-card anim-up " + p.size}
              style={{ "--d": 320 + i * 200 + "ms" }}
              onClick={() => onOpen(p)}
            >
            <div className="work-art">
              {p.cover ? (
                <img className="work-art-cover" src={p.cover} alt={p.name} />
              ) : (
                <>
                  <div className={"work-art-fill art-" + p.art} />
                  <WorkArt kind={p.art} />
                </>
              )}
            </div>
            <div className="work-tag-top">{p.tag}</div>
            <div className="work-year-chip">{p.yr}</div>
            <div className="work-meta">
              <div className="work-meta-main">
                <div className="work-name">{p.name}</div>
                <div className="work-cat">{p.cat}</div>
                <div className="work-reveal">
                  <p className="work-desc">{p.desc}</p>
                  <div className="work-chips">
                    {p.tags.map((t) => (
                      <span key={t} className="work-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="work-open-hint">Open case study</span>
                </div>
              </div>
              <div className="work-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </button>
        ))}
        </div>
        <a
          className="work-banner anim-up"
          style={{ "--d": "1120ms" }}
          href="https://github.com/gigs12"
          target="_blank"
          rel="noopener noreferrer"
          data-hover={true}
        >
          <span className="work-banner-text">
            <span className="work-banner-label">
              Want the full picture?
            </span>
            <span className="work-banner-big">
              Explore more builds on <strong>GitHub</strong>
            </span>
          </span>
          <span className="work-banner-arrow" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
