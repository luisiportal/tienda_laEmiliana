import { useCargarCarrito } from "../../hooks/useCargarCarrito";

const BarraPaginaCarrito = () => {
      const { carrito } = useCargarCarrito();
      console.log(carrito);
      
    
  return (
    <div className="bg-green-500 h-14 sticky bottom-0 flex gap-3 items-center justify-center font-semibold">
      <a href="#pago">Pago</a>
      <a
        href="#productos"
        className="bg-white rounded-xl size-10 flex justify-center items-center"
      >
        <img className="size-8" src="/svg/Cart.svg" alt="Carrito" />
      </a>
      <a href="#entrega"> Entrega</a>
    </div>
  );
};

export default BarraPaginaCarrito;
