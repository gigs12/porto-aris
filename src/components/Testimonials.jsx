import { useReveal } from "../hooks.js";

export default function Testimonials() {
  const ref = useReveal({ repeat: true });
  const items = [
    {
      text: "Aris is a meticulous, hardworking, and highly skilled individual. He is also very responsible in the tasks assigned to him. He is highly skilled in video editing, motion graphics, and UI design, as well as assisting with network management in the office..",
      name: "DISKOMINFO BONTANG",
      role: "IT SUPPORT",
      initial: "IT",
    },
    {
      text: "Aris is an excellent UI/UX Designer and also a dear friend and is someone who brings cohesiveness to the team. He always went beyond expectation and put extra attention to every element of his design.",
      name: "Gigs Visual Studio",
      role: "Graphic Design & UI/UX Design Enthusiast",
      initial: "GF",
    },
    {
      text: "Aris is one of the videotron operators at local vocals who works hard and is also able to work under pressure and can solve problems quickly in the field.",
      name: "Local Vocal",
      role: "Digital Operator Videotron",
      initial: "OP",
    },
  ];
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div ref={ref} className="reveal reveal-anim">
          <div className="section-label anim-left" style={{ "--d": "60ms" }}>
            <span className="section-num">04</span> Voices
          </div>
          <h2 className="anim-left" style={{ fontSize: "clamp(30px, 4vw, 54px)", "--d": "220ms" }}>
            Kind words from{" "}
            <span className="italic-accent">good people.</span>
          </h2>
          <div className="testimonial-grid">
            {items.map((t, i) => (
              <div key={i} className="testimonial anim-up" style={{ "--d": 380 + i * 140 + "ms" }}>
                <div className="testimonial-quote-mark">”</div>
                <div className="testimonial-text">{t.text}</div>
                <div className="testimonial-foot">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
