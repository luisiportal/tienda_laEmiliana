import { useEffect } from "react";
import { useCarritoStore } from "../../stores/carritoStore";
import type { Carrito } from "../../types/General.type";
import { readLocalStorage } from "../../utils/useLocalStorage";
import CardCarrito from "./CardCarrito";

const CarritoMap = () => {
  const { carrito, setCarrito } = useCarritoStore();
  const carritoGuardado = readLocalStorage("carrito") as Carrito;


  useEffect(() => {
    carritoGuardado.total && carritoGuardado.total > 0 && setCarrito(carritoGuardado);
  }, []);

  return (
   <section> <div className="flex flex-col gap-3 m-3 mt-5">
      {carrito?.productos?.map((item) => (
        <CardCarrito item={item} key={item.id} productos={carrito.productos}/>
      ))}
    </div>
    <h2>Total {carrito.total}</h2>
    </section>
  );
};

export default CarritoMap;
