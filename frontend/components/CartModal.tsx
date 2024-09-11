"use client";

import { useCart } from "./CartContext";
import Image from "next/image";
import { useState } from "react";

const CartModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose,
}) => {
  const { cart, removeFromCart } = useCart();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendEmail = async () => {
    setIsSending(true);
    setMessage("");

    try {
      const payload = {
        nombre: "John Doe",  // Reemplaza con el nombre del usuario
        direccion: "ort.manu03@gmail.com",  // Reemplaza con la dirección de correo del usuario
        carrito: {
          productos_carrito: cart.map(producto => ({
            id_producto: producto.id,
            cantidad: producto.cantidad || 1,  // Asegúrate de que cada producto tiene una cantidad
          })),
        },
      };

      console.log("Sending payload:", JSON.stringify(payload)); // Para depuración

      const response = await fetch("http://18.225.10.41/v1/pedido/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      setMessage(
        typeof data === "string" ? data : "Correo enviado exitosamente"
      );
    } catch (error: any) {
      setMessage(`Error al enviar el correo: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${isVisible ? "" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg w-3/4 max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-3xl font-bold mb-4 text-black">Tu carrito</h1>
          {cart.length === 0 ? (
            <p className="text-black">Tu carrito está vacío.</p>
          ) : (
            <div className="grid grid-cols-4 gap-4 text-black">
              {cart.map((producto) => (
                <div key={producto.id} className="card">
                  <Image
                    src={`http://18.225.10.41/v1/productos/consultarImagen/${producto.id}`}
                    alt={producto.nombre}
                    width={100}
                    height={100}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{producto.nombre}</h2>
                    <p className="card-text">${producto.precio}</p>
                    <button
                      onClick={() => removeFromCart(producto.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="btn btn-secondary mr-2 py-2 px-4 bg-gray-500 text-white rounded"
            >
              Cerrar
            </button>
            <button
              onClick={handleSendEmail}
              className="btn btn-primary py-2 px-4 bg-blue-500 text-white rounded"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar Pedido"}
            </button>
          </div>
          {message && <p className="mt-2 text-black">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
