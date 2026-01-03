import { useState } from "react";
import { useCarritoStore } from "../../stores/carritoStore";
import type { CartItem, Producto } from "../../types/General.type";
import { useProductosVender } from "../../hooks/useProductosVender";

const SugerirProductos = () => {
  const { setCarrito, carrito } = useCarritoStore();
  const [showMensaje, setShowMensaje] = useState(false);
  const {productos} = useProductosVender();

  const randomProducts = productos
    .filter((item) => item.agotado === false)
    .sort(() => Math.random() - 0.5) // desordena el array
    .slice(0, 5); // toma los primeros 5

  const calcuCanrtidad = (producto: Producto) => {
    const { price_usd } = producto;
    if (price_usd >= 5) return 2;
    if (price_usd >= 10) return 1;
    if (price_usd <= 4) return 5;
    if (price_usd <= 2) return 10;
    return 5;
  };

  const productoConCantidad = randomProducts.map((producto) => ({
    ...producto,
    cantidad: Math.floor(Math.random() * calcuCanrtidad(producto)) + 1,
  })) as CartItem[];

  const addProductToCart = () => {
    setCarrito({
      productos: productoConCantidad,
    });
    setShowMensaje(true);
  };

  const frasesCasa = [
    "🏡 He escogido algunos productos que harán tu hogar más cómodo.",
    "🧺 Aquí tienes una selección pensada para tu casa y tu día a día.",
    "✨ Agarre todo lo que pude.",
    "🍳 Estos productos no se ven mal.",
    "🛋️ Qué caro está todo 😅, pero seleccioné lo mejor ✨.",
    "🌱 Aquí tienes una selección que combina frescura y utilidad para tu casa.",
    "🧹 He elegido artículos que facilitan las tareas del hogar.",
    "Espero no haberme excedido 😂.",
    "🛒 Tu carrito comienza con productos esenciales para tu casa.",
    "💡 Escogí lo mejor que vi.",
  ];
  function fraseAleatoria(arr: string[]) {
    const indice = Math.floor(Math.random() * arr.length);
    return arr[indice];
  }

  return (
    <div>
      <section
        onClick={() => addProductToCart()}
        className={`${
          showMensaje ? "hidden" : "visible"
        } bg-neutral-200 rounded-xl p-2 flex gap-2 m-2 mt-5 items-center cursor-pointer relative`}
      >
        {" "}
        <button className="size-10  aspect-square bg-green-500 text-white rounded-xl p-1">
          <img src="/svg/Sparkles.svg" alt="Sugerir" />
        </button>
        <div>
          <h4 className="text-xs">Puedo ayudarte a</h4>
          <h2 className="font-semibold -mt-1">Sugerir Productos</h2>
        </div>
      </section>{" "}
      <section
        className={`absolute z-50 m-2 bg-neutral-200 transition-all duration-700 rounded-xl p-2 ${
          showMensaje ? " opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="flex gap-2 items-center">
          {" "}
          <button className="size-10  aspect-square bg-green-500 text-white rounded-xl p-1">
            <img src="/svg/Sparkles.svg" alt="Sugerir" />
          </button>
          <h2 className="font-semibold">{fraseAleatoria(frasesCasa)}</h2>{" "}
        </div>
        <h3 className="text-xs mt-2">
          Siempre puedes ajustar las cantidades, eliminar productos o agregar
          otros de tu agrado. Tu decides
        </h3>
        <div className="flex justify-end w-full">
          {" "}
          <a
            onClick={() => setShowMensaje(false)}
            href="/carrito"
            className="font-bold"
          >
            {" "}
            Ver productos
          </a>
        </div>
      </section>
    </div>
  );
};

export default SugerirProductos;
