import React from "react";
import type { Producto } from "../../types/General.type";
import AddToCart from "./AddToCart";
import CompartirBTN from "../asistente/CompartirBTN";

const ProductoCard = ({
  producto,
  css,
}: {
  producto: Producto;
  css: string;
}) => {
  return (
    <section
      className={`bg-neutral-200 rounded-xl p-1 ${css} flex flex-col justify-between relative`}
    >
      <CompartirBTN alias={producto.alias} />
      <a href={`/productos/${producto.alias}`}>
        <img
          className="w-full aspect-square rounded-xl object-cover"
          src={`/images/productos/${producto.image}`}
          alt={producto.nombre}
        />
        <h2 className="font-bold ml-2 my-2">{producto.nombre}</h2>
      </a>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl flex items-center gap-1">
          {Number(producto.price_usd).toFixed(2)}
          <span className="text-xs font-semibold text-neutral-600 mt-3">
            USD
          </span>
        </h2>
        <AddToCart producto={producto} />
      </div>
    </section>
  );
};

export default ProductoCard;
