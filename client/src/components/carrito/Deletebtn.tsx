import { useCarritoStore } from "../../stores/carritoStore";
import { totalCarrito } from "../../utils/slugify";

const Deletebtn = ({id}:{id:number}) => {
  const { setCarrito,carrito } = useCarritoStore();
  const deleteProduct = (id: number) => {
    const productosRestantes = carrito.productos.filter(
      (producto) => producto.id != id
    );
   setCarrito({ productos:productosRestantes, total:totalCarrito({productos:productosRestantes}) });
  };
  return (
    <button onClick={()=>deleteProduct(id)} className="absolute top-2 right-2">
      <img
        className="size-5 rounded-xl object-cover cursor-pointer"
        src="/svg/trash.svg"
        alt="Eliminar"
      />
    </button>
  );
};

export default Deletebtn;
