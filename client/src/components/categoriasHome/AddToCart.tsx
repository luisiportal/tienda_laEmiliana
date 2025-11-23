import { useCarritoStore } from "../../stores/carritoStore";
import type { Producto } from "../../types/General.type";

const AddToCart = ({ producto }: { producto: Producto }) => {
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
    <button
      onClick={() => addProductToCart(producto)}
      className={` ${
        isAdded
          ? "bg-none border text-slate-800  pointer-events-none "
          : "bg-green-500 text-white"
      } h-full  font-bold rounded-xl p-2 transition-colors duration-1000 cursor-pointer flex justify-center items-center text-sm`}
    >
      {isAdded ? "Agregado" : "Agregar"}
    </button>
  );
};

export default AddToCart;
