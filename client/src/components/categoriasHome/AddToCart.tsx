import { useCarritoStore } from "../../stores/carritoStore";
import type { CartItem, Producto } from "../../types/General.type";
import MasMenosBTN from "../carrito/MasMenosBTN";
import Cantidad from "./Cantidad";

const AddToCart = ({
  producto,
  colorBtn = "bg-green-500 text-white",
}: {
  producto: Producto;
  colorBtn?: string;
}) => {
  const { setCarrito, carrito } = useCarritoStore();
  const addProductToCart = (producto: Producto) => {
    setCarrito({
      productos: [...(carrito?.productos ?? []), { ...producto, cantidad: 1 }],
    });
  };

  const isAdded = carrito?.productos?.find(
    (cartItem) => cartItem.id === producto.id
  );

  return (
    <>
     <div className={`${isAdded ?"opacity-100": "opacity-0"} transition-opacity duration-700 absolute top-20 right-6  bg-white/40 rounded-xl p-1`}>
        {" "}
        <MasMenosBTN id={isAdded?.id ?? 0} />
      </div>
      <button
        onClick={() => addProductToCart(producto)}
        className={` ${
          isAdded
            ? "bg-none border text-slate-800  pointer-events-none "
            : `${colorBtn}`
        } h-full  font-bold rounded-xl p-2 transition-colors duration-1000 cursor-pointer flex justify-center items-center text-sm`}
      >
        {isAdded ? "Agregado" : "Agregar"}
      </button>
    </>
  );
};

export default AddToCart;
