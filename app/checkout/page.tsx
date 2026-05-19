export default function Checkout() {
  return (
    <main>
      <section className="card glow">
        <h1>Checkout</h1>
        <p className="lead">Finalize your home package in one minute.</p>

        <form className="form" style={{ marginTop: 18 }}>
          <input className="input" placeholder="Full name" />
          <input className="input" placeholder="Address" />
          <textarea className="input" placeholder="Delivery notes" rows={4} />
          <button type="button" className="btn primary">Pay (simulation)</button>
        </form>
      </section>
    </main>
  );
}
