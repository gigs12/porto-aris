import { Fragment } from "react";

export default function Marquee() {
  const items = [
      { name: "Web Design & Devlopment", sub: "Gigs Visual Studio" },
    { name: "Design Graphic", sub: "Desain · Motion · 3D" },
    { name: "Gigs Visual Studio", sub: "Design Graphic" · "Operator Videotron" },
    { name: "Operator Videotron", sub: "Resolume Arena · Visual Jockey · Event" },
  ];
  const loop = items.concat(items, items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <Fragment key={i}>
            <span className="marquee-item">{t.name}</span>
            <span className="marquee-dot" />
            <span className="marquee-item outline">{t.sub}</span>
            <span className="marquee-dot" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
