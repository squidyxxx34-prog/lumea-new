import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <article className="card glow">
          <h1>Design your dream home with living objects that move you.</h1>
          <p className="lead">
            A modern curated furniture concept: warm woods, textured ceramics, and
            smart lighting with timeless lines for every room.
          </p>
          <div className="actions">
            <Link href="/shop" className="btn primary">Explore Collection</Link>
            <Link href="/checkout" className="btn">Start a Project</Link>
          </div>
        </article>

        <article className="card">
          <h3>Smart Interior Mood</h3>
          <p className="lead">
            Ambient scenes transition automatically from morning light to cozy
            evening mode. Every surface is chosen to feel calm and premium.
          </p>
        </article>
      </section>

      <section className="grid">
        {[
          ["Living Room", "Soft modular sofas and sculptural tables"],
          ["Kitchen", "Functional pieces with minimalist finishes"],
          ["Bedroom", "Comfort fabrics and layered lighting"],
        ].map(([title, desc]) => (
          <article key={title} className="card">
            <h3>{title}</h3>
            <p className="lead">{desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
