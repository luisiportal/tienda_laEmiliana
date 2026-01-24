import { useQuery } from "@tanstack/react-query";
import { getFacturasRequest } from "../../api/facturas.api";
import { queryClient } from "../../stores";
import type { Factura } from "../../types/General.type";
import FacturaCard from "./FacturaCard";

const ListarFacturas = () => {
  const { data } = useQuery(
    {
      queryKey: ["facturas"],
      queryFn: getFacturasRequest,
    },
    queryClient,
  );

  const facturas = data?.data as Factura[];

  return (
    <div className="flex flex-col gap-10">
      ListarFacturas
      {facturas?.map((item) => (
        <FacturaCard factura={item ?? ({} as Factura)} key={item.id}/>
      ))}
    </div>
  );
};

export default ListarFacturas;
