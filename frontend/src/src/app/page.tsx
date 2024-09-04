"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Grid from "../../components/Grid";
import CartModal from "../../components/CartModal";
import { CartProvider } from "../../components/CartContext";

export default function Home() {
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <CartProvider>
      <main className="min-h-screen flex-col items-center justify-between p-24">
        <Header onCartClick={() => setCartVisible(true)} />
        <Hero />
        <Grid />
        <CartModal
          isVisible={isCartVisible}
          onClose={() => setCartVisible(false)}
        />
      </main>
    </CartProvider>
  );
}
