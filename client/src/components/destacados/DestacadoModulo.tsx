import { useProductosVender } from "../../hooks/useProductosVender";
import type { Producto } from "../../types/General.type";
import { getRandomElements } from "../../utils/ramdom";
import DestacadoCard from "./DestacadoCard";

const DestacadoModulo = () => {
  const { productos } = useProductosVender();

  const tienen = productos.filter((item) => !item.nombre.includes('flan') && item.stock > 0);

  const flan = productos.find((item) =>
    item.nombre.includes("Flan")
  ) as Producto;
  const ramdoms = getRandomElements(tienen, 2);

  const destacados = flan ? [flan, ...ramdoms] : ramdoms;
  

  return (
    <section className="bg-green-500 p-2 mt-5 pr-0">
      <div className="flex justify-between items-center p-2">
        <h2 className="font-bold text-2xl">Destacados</h2>
        <a href="/categoria/destacados">
          <h2 className="text-xs">Ver todos</h2>
        </a>
      </div>
      <section className="flex gap-5 overflow-x-scroll w-full">
        <div className="flex gap-3 pb-3">
          {destacados.length > 1 ? (
            destacados?.map((producto) => (
              <DestacadoCard producto={producto} key={producto.id} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </section>
  );
};

export default DestacadoModulo;
