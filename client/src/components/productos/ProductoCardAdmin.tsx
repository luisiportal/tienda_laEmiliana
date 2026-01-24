import type { Producto } from "../../types/General.type";
import { Link } from "react-router-dom";
import { useDialogStore } from "../../stores/dialogStore";
import { deleteProductoRequest } from "../../api/productos.api";

const ProductoCardAdmin = ({ producto }: { producto: Producto }) => {
  const { setDialog } = useDialogStore();


  return (
    <div className="bg-neutral-200 p-5 flex gap-1 rounded-xl relative">
     
      <button
        onClick={() =>
          setDialog({
            pregunta: "¿Desea borrar el producto?",
            identificador : producto.id,
            show: true,
            request: deleteProductoRequest,
            navegarA: '/admin/productos'
          })
        }
        className="w-5 absolute right-2 cursor-pointer"
      >
        <img src="/svg/trash.svg" alt="Eliminar Producto" />
      </button>
      <div className="flex flex-col items-center gap-3 w-48">
        <img
          className="rounded-xl object-cover aspect-square w-40"
          src={`${import.meta.env.PUBLIC_VITE_BACKEND_URL}/images/productos/${producto.image}`}
          alt={producto.nombre}
        />
        <Link
          to={`/admin/productos/edit/${producto.id}`}
          className="text-xs flex items-center gap-1"
        >
          <img className="w-4 " src="/svg/edit.svg" alt="Editar" />
          Editar
        </Link>
            <h2 className="bg-[#FFC20E] rounded-xl flex justify-center items-center w-20 font-bold text-xl">{producto.stock}</h2>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <h2 className="bg-green-500 rounded-xl w-fit flex justify-center p-1 text-xs font-bold">
            {producto?.categoria?.nombre}
          </h2>
      
          <h2 className="font-bold text-lg">{producto.nombre}</h2>
          <p>{producto.description}</p>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <h2 className="italic">Precio Usd</h2>
            <h2>{producto.price_usd} USD</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="italic">Costo</h2> <h2>{producto.cost} CUP</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="italic">Total invertido </h2>{" "}
            <h2>{producto.cost * producto.stock} CUP</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoCardAdmin;
