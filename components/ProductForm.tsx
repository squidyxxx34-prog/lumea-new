"use client";

import { useState } from "react";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      title: form.get("title"),
      price: Number(form.get("price")),
      image_url: form.get("image_url"),
      description: form.get("description"),
      alibaba_url: form.get("alibaba_url"),
    };

    console.log("PRODUCT CREATED:", data);

    // plus tard : envoi vers Supabase ici
    // await fetch("/api/products", { method: "POST", body: JSON.stringify(data) });

    setLoading(false);
    alert("Produit créé (demo)");
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>Ajouter un produit</h2>

      <input name="title" placeholder="Titre" required />
      <input name="price" placeholder="Prix" type="number" required />
      <input name="image_url" placeholder="Image URL" />
      <textarea name="description" placeholder="Description" />
      <input name="alibaba_url" placeholder="Lien Alibaba" />

      <button type="submit">
        {loading ? "Création..." : "Créer produit"}
      </button>
    </form>
  );
}