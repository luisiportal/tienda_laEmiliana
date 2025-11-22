import { useCarritoStore } from "../../stores/carritoStore";

const CarritoMap = () => {
  const { carrito, setCarrito } = useCarritoStore();
  console.log(carrito);
  
  return <div>{carrito?.productos?.map((producto => <h2>{producto.nombre}</h2>))}</div>;
};

export default CarritoMap;
