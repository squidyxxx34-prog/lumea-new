import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>LUXE HOME</h1>
      <p>Mobilier premium pour intérieur moderne</p>

      <Link href="/shop">Accéder à la boutique</Link>
    </main>
  );
}