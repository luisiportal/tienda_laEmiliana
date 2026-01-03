import { useQuery } from "@tanstack/react-query";
import { getAllproductos } from "../../api/productos.api";
import { queryClient } from "../../stores";
import PaginationModule from "../../DesingSystem/Paginacion/PaginationModule";
import HeaderProductosPAge from "./HeaderProductosPAge";
import ProductoCardAdmin from "./ProductoCardAdmin";

const ListarProductos = () => {
  const { data } = useQuery(
    {
      queryKey: ["categorias"],
      queryFn: getAllproductos,
    },
    queryClient
  );


  return (
    <div>
      <HeaderProductosPAge productos={data ?? []} />
      <div className="mt-5 flex flex-col gap-5">
        {" "}
        {data?.map((item) => (
          <ProductoCardAdmin producto={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListarProductos;
