import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Produit introuvable</p>;

  return (
    <main>
      <section className="hero">
        <article className="product card">
          <img src={product.image} alt={product.name} style={{ height: 380 }} />
        </article>

        <article className="card glow">
          <h1>{product.name}</h1>
          <p className="lead">
            Designed for modern homes: durable materials, soft contours and a
            balanced visual presence.
          </p>
          <p className="price" style={{ fontSize: 28 }}>{product.price}€</p>
          <div className="actions">
            <Link href="/checkout" className="btn primary">Buy now</Link>
            <Link href="/shop" className="btn">Back to shop</Link>
          </div>
        </article>
      </section>
    </main>
  );
}
