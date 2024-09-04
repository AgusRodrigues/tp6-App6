"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";


interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number
}

interface CartContextType {
  cart: Producto[];
  addToCart: (producto: Producto) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Producto[]>([]);
  console.log("Contenido del carrito:", cart);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((producto) => producto.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
