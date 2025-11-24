import { useCarritoStore } from "../../stores/carritoStore";

import CardCarrito from "./CardCarrito";
import EnviarPedido from "./EnviarPedido";
import { useCargarCarrito } from "../../hooks/useCargarCarrito";
import Entregar from "./Entregar";

const CarritoMap = () => {
  const { carrito } = useCarritoStore();

  return (
    <section className="flex flex-col gap-5 justify-center">
      {" "}
      <div className="flex flex-col gap-3 m-3 mt-5">
        {carrito?.productos?.map((item) => (
          <CardCarrito item={item} key={item.id} />
        ))}
      </div>
      <section className="bg-neutral-200 rounded-xl p-3 mx-3 min-h-40">
        <h2 className="flex justify-center font-bold text-2xl">
          Total a Pagar
        </h2>
        <div className="flex justify-between">
          <h2 className="font-semibold">Total a pagar :</h2>{" "}
          <h2 className="font-bold text-xl">{carrito.total?.toFixed(2)} USD</h2>
        </div>
      </section>
      <Entregar carrito={carrito} />
    </section>
  );
};

export default CarritoMap;
