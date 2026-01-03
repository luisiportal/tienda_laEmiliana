import type { Producto } from "../../types/General.type";
import AddToCart from "../categoriasHome/AddToCart";

const DestacadoCard = ({ producto }: { producto: Producto }) => {

  
  return (
    <div>
      <div className="bg-neutral-200 p-1 rounded-xl w-72 relative">
        <a href={`/productos/${producto.alias}`}>
          <img
            className="w-full h-40 rounded-xl object-cover"
            src={`/images/productos/${producto.image}`}
            alt={producto.nombre}
          />
        </a>
      </div>
      <div className="flex items-center justify-between p-2">
        <h2 className="font-bold text-3xl flex items-center gap-1">
          {Number(producto?.price_usd).toFixed(2)}
          <span className="text-xs font-semibold text-neutral-600 mt-3">
            USD
          </span>
        </h2>
        <AddToCart
          producto={producto}
          colorBtn="bg-neutral-200 text-neutral-900"
        />
      </div>
    </div>
  );
};

export default DestacadoCard;
