import Link from "next/link";
import { products } from "../../lib/products";

export default function Shop() {
  return (
    <main>
      <section className="card">
        <h1>House Essentials</h1>
        <p className="lead">Refined objects for every corner of your home.</p>
      </section>

      <section className="grid">
        {products.map((p) => (
          <article key={p.id} className="product">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}€</p>
            <Link href={`/product/${p.id}`} className="btn">View details</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
