import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <article className="card glow">
          <h1>Curated luxury for remarkable interiors.</h1>
          <p className="lead">
            Discover signature house pieces crafted with elegant materials,
            rounded silhouettes, and subtle details that elevate everyday living.
          </p>
          <div className="actions">
            <Link href="/shop" className="btn primary">Explore Collection</Link>
            <Link href="/checkout" className="btn">Start a Project</Link>
          </div>
        </article>

        <article className="card">
          <h3>Private Interior Concierge</h3>
          <p className="lead">
            From statement lounge seating to dining accents, every selection is
            tailored for a calm, elevated, and timeless home atmosphere.
          </p>
        </article>
      </section>

      <section className="grid">
        {[
          ["Living Room", "Gallery-inspired comfort with sculpted forms"],
          ["Kitchen", "Refined utility finished in warm tones"],
          ["Bedroom", "Soft textures and layered ambient lighting"],
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
