import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import CartProvider from "../redux/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I AM",
  description: "shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>
          <header>
            <Header />
          </header>
          <main className="main">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}
