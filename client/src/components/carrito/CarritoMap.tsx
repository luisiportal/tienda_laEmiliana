import { useEffect } from "react";
import { useCarritoStore } from "../../stores/carritoStore";
import type { Carrito } from "../../types/General.type";
import { readLocalStorage } from "../../utils/useLocalStorage";
import CardCarrito from "./CardCarrito";
import EnviarPedido from "./EnviarPedido";

const CarritoMap = () => {
  const { carrito, setCarrito } = useCarritoStore();
  const carritoGuardado = readLocalStorage("carrito") as Carrito;

  useEffect(() => {
    carritoGuardado.total &&
      carritoGuardado.total > 0 &&
      setCarrito(carritoGuardado);
  }, []);

  return (
    <section className="flex flex-col justify-center">
      {" "}
      <div className="flex flex-col gap-3 m-3 mt-5">
        {carrito?.productos?.map((item) => (
          <CardCarrito
            item={item}
            key={item.id}
            productos={carrito.productos}
          />
        ))}
      </div>
      <section className="bg-neutral-200 rounded-xl p-3 mx-3 h-60">
        <h2 className="flex justify-center font-bold text-2xl">
          Total a Pagar
        </h2>
        <div className="flex justify-between">
          <h2 className="font-semibold">Total a pagar :</h2> <h2 className="font-bold text-xl">{carrito.total} USD</h2>
        </div>
      </section>

    <EnviarPedido carrito={carrito}/>
    </section>
  );
};

export default CarritoMap;
