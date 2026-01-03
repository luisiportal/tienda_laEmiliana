import React from "react";

const TituloModulo = ({ titulo, alias }: { titulo: string; alias: string }) => {
  return (
    <div className="flex items-center justify-between mx-2 my-5">
      <a
        href={`/categoria/${alias}`}
        className="bg-green-500  w-16 rounded-br-xl rounded-tr-xl"
      >
        <h2 className="ml-1 font-bold text-2xl">{titulo}</h2>
      </a>
      <a href={`/categoria/${alias}`}>
        <h2 className="text-xs">Ver todos</h2>
      </a>
    </div>
  );
};

export default TituloModulo;
