import React from "react";
import type { Categoria } from "../../types/General.type";

const CategoriaCard = ({ categoria }: { categoria: Categoria }) => {
  return (
    <div key={categoria.id} className="bg-neutral-200 flex flex-wrap">
        <img src={`/images/categorias/${categoria.image}`} alt={categoria.nombre} />
      <h2>{categoria.nombre}</h2>
    </div>
  );
};

export default CategoriaCard;
