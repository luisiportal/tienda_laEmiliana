import { useCarritoStore } from "../../stores/carritoStore";
import type { Producto } from "../../types/General.type";
import { writeLocalStorage } from "../../utils/useLocalStorage";

const AddToCart = ({ producto }: { producto: Producto }) => {
  const { setCarrito, carrito } = useCarritoStore();
const addProductToCart = (producto: Producto) => {
  setCarrito({
    productos: [...(carrito?.productos ?? []), { ...producto, cantidad: 1 }],
    total: (carrito?.total ?? 0) + producto.precio,
  });
  writeLocalStorage({key:'carrito',value:carrito})
};
  console.log(carrito);

  return (
    <button
      onClick={() => addProductToCart(producto)}
      className="bg-green-500 text-white font-bold rounded-xl p-2"
    >
      Agregar
    </button>
  );
};

export default AddToCart;
