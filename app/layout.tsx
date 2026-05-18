import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="page-shell">
          <nav className="nav">
            <Link href="/" className="brand">LUMÉA HOME</Link>
            <div className="nav-links">
              <Link href="/shop">Shop</Link>
              <Link href="/checkout">Checkout</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
