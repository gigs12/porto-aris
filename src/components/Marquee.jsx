import { Fragment } from "react";

export default function Marquee() {
  const items = [
    { name: "Web Design & Devlopment", },
    { name: "Design Graphic", },
    { name: "Gigs Visual Studio",  },
    { name: "Operator Videotron", },
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
