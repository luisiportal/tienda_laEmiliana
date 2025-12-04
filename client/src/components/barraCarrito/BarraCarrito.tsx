import { useCargarCarrito } from "../../hooks/useCargarCarrito";

const BarraCarrito = () => {
  const { carrito } = useCargarCarrito();
  return (
    <a href="/carrito" className="bg-green-500 h-14 sticky w-full bottom-0 flex gap-3 items-center justify-center z-50">
      <div>
        {" "}
        <h4 className="text-xs font-light -mb-2">Ver el</h4>
        <h2 className="font-bold text-xl">Carrito</h2>
      </div>
      <button className="bg-[#FFC20E] rounded-xl size-10 flex justify-center items-center">
        <img className="size-8" src="/svg/Cart.svg" alt="Carrito" />
      </button>
      <div>
        {" "}
        <h4 className="text-xs font-light -mb-2">Total Productos</h4>
        <h2 className="font-bold text-xl">{carrito.total?.toFixed(2)} USD</h2>
      </div>
    </a>
  );
};

export default BarraCarrito;
