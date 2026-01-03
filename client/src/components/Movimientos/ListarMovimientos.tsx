import { useQuery } from "@tanstack/react-query";
import { getMovimientosRequest } from "../../api/movimientos";
import { queryClient } from "../../stores";
import HeaderMovimientosPage from "./HeaderMovimientosPage";
import PaginationModule from "../../DesingSystem/Paginacion/PaginationModule";
import { useState } from "react";
import FechaCreacion from "../../DesingSystem/FechaCreacion";
import MovimientoCard from "./MovimientoCard";

const ListarMovimientos = () => {
  const [page, setPage] = useState("/movimientos");
  const { data } = useQuery(
    {
      queryKey: ["movimientos", page],
      queryFn: () => getMovimientosRequest(page),
    },
    queryClient
  );

  const movimientos = data?.data;
  return (
    <div>
      <HeaderMovimientosPage />
      <div className="mt-5 flex flex-col gap-5">
        {movimientos?.map((item) => (
        <MovimientoCard movimiento={item} key={item.id}/>
        ))}
      </div>
      <PaginationModule links={data?.links ?? []} setPage={setPage} />
    </div>
  );
};

export default ListarMovimientos;
