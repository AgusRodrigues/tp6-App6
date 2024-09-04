// components/grid.tsx
"use client";

import { useState, useEffect } from "react";
import ProductCard from "./Producto";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number
}

const getRandomProducts = (products: Producto[], count: number): Producto[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Grid = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://18.225.10.41/v1/productos/consultar");
        if (!response.ok) {
          throw new Error(`Error al consultar la API: ${response.status} ${response.statusText}`);
        }
        const data: Producto[] = await response.json();
        console.log("Respuesta de la API:", data); // Depuración
        const randomProducts = getRandomProducts(data, 12);
        setProductos(randomProducts);
      } catch (error: any) {
        setError(`Hubo un problema al cargar los productos: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="my-10">
      <div className="text-4xl font-bold mb-5">Bienvenido a mi tienda</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-base-100 shadow-xl">
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
