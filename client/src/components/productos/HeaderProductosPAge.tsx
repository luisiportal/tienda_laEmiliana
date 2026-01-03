import React from "react";
import TituloModulo from "../../DesingSystem/TituloModulo";
import { Link } from "react-router-dom";
import type { Producto } from "../../types/General.type";

const HeaderProductosPAge = ({ productos }: { productos: Producto[] }) => {
  const cantidadProductos = productos?.length;
  const totalInvertido = productos.reduce((acumulado, producto) => {
    return acumulado + producto.cost * producto.stock;
  }, 0);

  return (
    <div>
      <TituloModulo titulo="Productos" />
      <div className="bg-neutral-200 rounded-xl p-2 relative mt-5">
        <Link
          to={`/admin/productos/nuevo`}
          className="bg-green-500 rounded-xl absolute -top-2 right-2 w-10 h-10 flex justify-center items-center font-bold"
        >
          <img className="w-8 h-8" src="/svg/plus.svg" alt="Agregar" />
        </Link>
        <Link className="flex items-center gap-16 mb-2" to={`/admin/productos`}>
          {" "}
          <div className="relative">
            {" "}
            <img
              className="w-14"
              src={`/svg/productos.svg`}
              alt="Productos"
            />
            <h2 className="font-bold bg-green-500 rounded-xl text-xs p-1 w-10 flex justify-center absolute left-4 top-10">
              {cantidadProductos}
            </h2>
          </div>
          <div>
            {" "}
            <h2 className="text-xs italic">Total Invertido</h2>
        <h2 className="font-bold text-3xl -mt-1"> {totalInvertido ? totalInvertido : 0} CUP </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderProductosPAge;
