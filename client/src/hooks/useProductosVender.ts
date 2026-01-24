import { useQuery } from "@tanstack/react-query";
import { getProductosVenderRequest } from "../api/productos.api";
import { queryClient } from "../stores";
import type { Producto } from "../types/General.type";
import { useLoader } from "../stores/loaderStore";

export const useProductosVender = () => {
  const { setLoader } = useLoader();
  const { data,isLoading } = useQuery(
    {
      queryKey: ["productosVender"],
      queryFn: getProductosVenderRequest,
    },
    queryClient
  );

  

  

  return { productos: data ?? ([] as Producto[]) };
};
