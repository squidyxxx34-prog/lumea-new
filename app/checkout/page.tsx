export default function Checkout() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Checkout</h1>

      <input placeholder="Nom" />
      <br />
      <input placeholder="Adresse" />
      <br />

      <button>Payer (simulation)</button>
    </main>
  );
}