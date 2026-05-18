import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LUMÉA HOME",
  description: "Modern home furniture and accessories for stylish interiors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <nav className="nav" aria-label="Primary navigation">
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
