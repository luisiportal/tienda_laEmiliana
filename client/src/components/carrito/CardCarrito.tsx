import type { CartItem } from "../../types/General.type";
import Deletebtn from "./Deletebtn";
import MasMenosBTN from "./MasMenosBTN";

const CardCarrito = ({ item }: { item: CartItem }) => {
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
          <MasMenosBTN id={item.id} />
        </div>
      </div>
    </div>
  );
};

export default CardCarrito;
