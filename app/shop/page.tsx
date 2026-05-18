import Link from "next/link";
import { products } from "../../lib/products";

export default function Shop() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Boutique</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {products.map((p) => (
          <div key={p.id}>
            <img src={p.image} width={200} />
            <h3>{p.name}</h3>
            <p>{p.price}€</p>

            <Link href={`/product/${p.id}`}>Voir</Link>
          </div>
        ))}
      </div>
    </main>
  );
}