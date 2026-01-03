import { useQuery } from "@tanstack/react-query";
import { getCategoriasRequest } from "../../api/categorias.api";
import { queryClient } from "../../stores";
import CategoriaCard from "./CategoriaCard";

const ListarCategorias = () => {
  const { data } = useQuery(
    {
      queryKey: ["categorias"],
      queryFn: getCategoriasRequest,
    },
    queryClient
  );

  return (
    <div className="flex flex-wrap gap-5">
      ListarCategorias
      {data?.map((item) => (
        <CategoriaCard categoria={item}/>
      ))}
    </div>
  );
};

export default ListarCategorias;
