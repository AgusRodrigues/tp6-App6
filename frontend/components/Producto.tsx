"use client";

import Image from "next/image";
import { useCart } from "./CartContext";
import React, { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number
}

interface ProductoProps {
  producto: Producto;
}

const ProductCard = ({ producto }: ProductoProps) => {
  const { addToCart } = useCart();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageClick = () => {
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };


  return (
    <div className="card">
      <div className="image-container cursor-pointer">
        <Image
          src={`http://18.225.10.41/v1/productos/consultarImagen/${producto.id}`}
          alt={producto.nombre}
          width={300}
          height={300}
          unoptimized={true}
          onClick={handleImageClick}
        />
      </div>
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center">
          <Image
            src={`http://18.225.10.41/v1/productos/consultarImagen/${producto.id}`}
            alt={producto.nombre}
            width={800}
            height={800}
            unoptimized={true}
            className="max-w-md max-h-md mx-4 my-4"
          />
          <button
            onClick={handleLightboxClose}
            className="absolute top-4 right-4 text-3xl text-white cursor-pointer"
          >
            ×
          </button>
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-text">${producto.precio}</p>
        <button onClick={() => addToCart(producto)} className="btn btn-primary">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
