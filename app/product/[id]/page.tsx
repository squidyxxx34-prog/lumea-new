import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Produit introuvable</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      <img src={product.image} width={300} />

      <p>{product.price}€</p>

      <Link href="/checkout">Acheter</Link>
    </main>
  );
}