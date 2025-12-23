import { useNavigate } from "react-router-dom";
import type { Articulo } from "../types/General.type";

const NombreCategoriaBtn = ({ articulo }: { articulo: Articulo }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() =>
        navigate(`secciones/seccion-${articulo?.categoria.nombre}`)
      }
      className="cursor-pointer bg-white border border-slate-100/50 font-bold w-fit p-2 lg:px-4  h-5 lg:h-8 absolute  left-2 top-3 lg:left-3 text-xs lg:text-sm rounded-lg flex justify-center items-center"
    >
      {articulo?.categoria.nombre}
    </button>
  );
};

export default NombreCategoriaBtn;
