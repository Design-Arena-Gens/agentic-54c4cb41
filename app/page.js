import Link from "next/link";

const resources = [
  {
    title: "Ken Burns effect",
    description:
      "A pan-and-zoom animation applied to still imagery popularized by documentary filmmaker Ken Burns.",
    href: "https://en.wikipedia.org/wiki/Ken_Burns_effect"
  },
  {
    title: "Parallax photo animation",
    description:
      "Layered still images move at different speeds to create depth, often used to add motion while narrating.",
    href: "https://motionarray.com/learn/video-editing/parallax-effect/"
  },
  {
    title: "Photo slideshow storytelling",
    description:
      "Sequenced stills with motion graphics timed to narration, commonly produced inside editors like Premiere Pro or CapCut.",
    href: "https://helpx.adobe.com/premiere-pro/how-to/photo-slideshow.html"
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>What is the sliding image narration style called?</h1>
        <p>
          Creators who narrate without showing their face frequently rely on
          the <strong>Ken Burns effect</strong>—a simple set of pans and zooms
          applied to still images. When layered for depth, it becomes a{" "}
          <strong>parallax photo animation</strong>. Editors build these
          timelines in tools like Adobe Premiere Pro, Final Cut Pro, or
          CapCut by animating scale and position keyframes on still frames.
        </p>
      </section>

      <section className="details">
        <h2>How it works</h2>
        <ul>
          <li>
            <strong>Static imagery:</strong> Photos or screenshots replace a
            face cam feed to illustrate the narration.
          </li>
          <li>
            <strong>Animated motion:</strong> Position and scale keyframes
            slide or zoom across the image, producing gentle movement.
          </li>
          <li>
            <strong>Story pacing:</strong> Editors cut between images and
            motion beats to highlight key talking points in sync with voice-over.
          </li>
        </ul>
      </section>

      <section className="resources">
        <h2>Learn more</h2>
        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <Link href={resource.href} target="_blank" rel="noreferrer">
                Explore resource
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
