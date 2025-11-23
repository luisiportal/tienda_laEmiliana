import { useCarritoStore } from "../../stores/carritoStore";
import type { CartItem } from "../../types/General.type";

const MasMenosBTN = ({ id }: { id: number }) => {
  const { setCarrito, carrito } = useCarritoStore();

  const productos = carrito.productos;
  const item = productos?.find((item) => item.id === id) as CartItem;

  const index = productos?.indexOf(item);

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
    <div className="flex gap-4 items-center">
      <button
        onClick={() => decrease()}
        className="bg-neutral-400 rounded-xl size-8 font-bold text-2xl cursor-pointer"
        title="Quitar"
      >
        {" "}
        -
      </button>
      <h2 className="font-semibold">{item?.cantidad ?? 0}</h2>
      <button
        onClick={() => increase()}
        className="bg-green-500 rounded-xl  size-8 font-bold text-2xl cursor-pointer"
        title="Incrementar"
      >
        {" "}
        +
      </button>
    </div>
  );
};

export default MasMenosBTN;
