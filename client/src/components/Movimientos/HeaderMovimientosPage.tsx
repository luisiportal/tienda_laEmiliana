import React from "react";
import TituloModulo from "../../DesingSystem/TituloModulo";
import { Link } from "react-router-dom";

const HeaderMovimientosPage = () => {
  return (
    <div>
      <TituloModulo titulo="Movimientos" />
      <div className="bg-neutral-200 rounded-xl p-2 relative mt-5">
        <div className="absolute -top-2 right-2 flex gap-2 text-2xl font-bold ">
          {" "}
          <div className="flex  flex-col items-center cursor-pointer">
            {" "}
            <Link
              to={`/admin/movimientos/entrada`}
              className="bg-green-500 rounded-xl  w-10 h-10 flex justify-center items-center font-bold z-50"
            >
              +
            </Link>
            <h3 className="text-xs font-light text-neutral-500">Entrada</h3>
          </div>
          <div className="flex  flex-col items-center">
            {" "}
            <Link
              to={`/admin/movimientos/salida`}
              className="bg-red-500 rounded-xl  w-10 h-10 flex justify-center items-center font-bold z-50"
            >
              -
            </Link>
            <h3 className="text-xs font-light text-neutral-500">Salida</h3>
          </div>
        </div>{" "}
        <div className="relative">
          {" "}
          <img className="w-14" src={`/svg/arrows.svg`} alt="Movimientos" />
         <h2 className="font-bold text-lg">Movimientos</h2>
      <p className="text-xs font-light">
        Gestiona las entradas y salidas del inventario
      </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovimientosPage;
