import { useCarritoStore } from "../../stores/carritoStore";
import Loader from "../DS/Loader";

import CardCarrito from "./CardCarrito";

import Entregar from "./Entregar";
import MetodoPago from "./MetodoPago";

const CarritoMap = () => {
  const { carrito } = useCarritoStore();

  return (
    <section id="productos" className="flex flex-col gap-5 justify-center">
      {" "}
      <div className="flex flex-col gap-3 m-3 mt-5">
        {carrito.productos?.length ? carrito?.productos?.map((item) => (
          <CardCarrito item={item} key={item.id} />
        )) : <Loader/>}
      </div>
       <div className="relative ml-1 mt-5 flex">
        <h2 className="ml-1 font-bold text-2xl">Total a Pagar</h2>
        <div className="-z-10 bg-green-500 w-32 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>{" "}
      </div>
      <section className="bg-neutral-200 rounded-xl p-3 mx-3 min-h-20">
        
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Productos :</h2>{" "}
          <h2 className="font-bold text-xl">{carrito.total?.toFixed(2)} USD</h2>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">
            Envío :{" "}
            <span className="text-slate-500 text-sm">Ciudad Holguín</span>
          </h2>{" "}
          <h2 className="font-bold text-xl">0 USD</h2>
        </div>
           <div className="flex items-center justify-between">
          <h2 className="font-semibold">
            Total a Pagar :{" "}
            
          </h2>{" "}
          <h2 className="font-bold text-xl bg-neutral-100 p-0.5 rounded-xl">{carrito?.total?.toFixed(2)} USD</h2>
        </div>
      </section>
      <MetodoPago/>

      <Entregar carrito={carrito} />

    </section>
  );
};

export default CarritoMap;
