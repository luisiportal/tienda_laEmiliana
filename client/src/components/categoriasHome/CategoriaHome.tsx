import { useProductosVender } from "../../hooks/useProductosVender";
import { slugify } from "../../utils/slugify";
import TituloModulo from "../DS/TituloModulo";
import ProductoCard from "./ProductoCard";

const CategoriaHome = ({ categoria }: { categoria: string }) => {
  const { productos } = useProductosVender();
  const impar = (index: number) => {
    if (productosCategoria.length % 2 !== 0) {
      const ultimo = productosCategoria.length - 1;
      return ultimo === index ? "w-full" : "w-[48%]";
    } else {
      return "w-40";
    }
  };

  const productosCategoria = productos.filter(
    (item) => item.categoria.nombre === categoria && item.stock > 0
  );

  return (
    <>
      <TituloModulo titulo={categoria} alias={slugify(categoria)} />
      <section className="flex justify-center gap-3 flex-wrap mx-3">
        {productosCategoria.map((producto, index) => (
          <ProductoCard
            key={index}
            producto={producto}
            css={`
              ${impar(index)}
            `}
          />
        ))}
      </section>
    </>
  );
};

export default CategoriaHome;
