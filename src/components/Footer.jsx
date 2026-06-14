export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer-kicker">Have ideas, both in the creative industry</div>
      <a
        className="footer-big"
        href="#contact"
        onClick={(e) => scrollTo(e, "contact")}
      >
        Let's <span className="italic-accent">build.</span>
        <span className="footer-big-arrow" aria-hidden="true">
          →
        </span>
      </a>
      <div className="footer-row">
        <div>© 2026 M Aris Subyantoro. All rights reserved.</div>
        <div className="footer-status">
          <span className="footer-status-dot" aria-hidden="true" />
          Open for IT Support &amp; Design Graphics
        </div>
        <div>Bontang, Indonesia · v2.0</div>
      </div>
    </footer>
  );
}
