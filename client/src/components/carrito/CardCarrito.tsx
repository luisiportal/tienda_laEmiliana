import type { CartItem } from "../../types/General.type";
import { useCarritoStore } from "../../stores/carritoStore";
import Deletebtn from "./Deletebtn";

const CardCarrito = ({
  item,
  productos,
}: {
  item: CartItem;
  productos: CartItem[];
}) => {
  const { setCarrito, carrito } = useCarritoStore();
  const index = productos.indexOf(item);
  const increase = () => {
    productos[index] = {
      ...item,
      cantidad: item.cantidad + 1,
    };
    setCarrito({ productos });
  };

  const decrease = () => {
    const cantidad = item.cantidad - 1;
    if (item.cantidad > 1) {
      productos[index] = {
        ...item,
        cantidad,
      };
      setCarrito({ productos });
    }
  };

  return (
    <div className="relative bg-neutral-200 rounded-xl p-3 flex gap-1">
      <Deletebtn id={item.id} />

      <img
        className="size-28 rounded-xl object-cover"
        src={`/images/productos/${item.image}`}
        alt={item.nombre}
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          {" "}
          <h2 className="font-bold text-xl">{item.nombre}</h2>
          <p>{item.description}</p>
        </div>
        <div className="flex justify-between w-full">
          <h2 className="font-bold text-3xl flex items-center gap-1">
            {item.cantidad * item.precio}{" "}
            <span className="text-xs font-semibold text-neutral-600 mt-3">
              USD
            </span>
          </h2>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => decrease()}
              className="bg-neutral-400 rounded-xl size-8 font-bold text-2xl"
              title="Quitar"
            >
              {" "}
              -
            </button>
            <h2 className="font-semibold">{item.cantidad}</h2>
            <button
              onClick={() => increase()}
              className="bg-green-500 rounded-xl  size-8 font-bold text-2xl"
              title="Incrementar"
            >
              {" "}
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarrito;
