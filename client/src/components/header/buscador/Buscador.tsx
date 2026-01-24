import { useState, type ChangeEvent } from "react";
import type { Producto } from "../../../types/General.type";

import { useProductosVender } from "../../../hooks/useProductosVender";

const Buscador = () => {
  const [encontrados, setEncontrados] = useState<Producto[]>([]);
  const [show, setShow] = useState(false);
  const { productos } = useProductosVender();
 

  const buscarProductos = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();

    const filtrados = productos?.filter((item) =>
      item.nombre.toLowerCase().includes(text)
    );

    setEncontrados(filtrados ?? []);
    setShow(true);
  };

  return (
    <section className="flex ml-28 mr-3 gap-2 mt-5 relative">
      <div className="flex items-center border border-neutral-200 rounded-xl">
        <input
          onChange={(e) => buscarProductos(e)}
          className="rounded-xl h-full pl-2 w-52"
          type="text"
          placeholder="Buscar productos..."
        />
      </div>
      <a
        href="/carrito"
        className="bg-[#FFC20E] size-10 rounded-xl flex justify-center items-center"
      >
        <img className="size-6" src="/svg/Cart.svg" alt="Carrito" />
      </a>
      {show && (
        <section className="z-50 absolute top-12 -left-28 bg-neutral-200/80 backdrop-blur-xs  w-screen h-screen rounded-xl p-2 flex flex-col overflow-visible">
          <button
            className="size-6 absolute top-2 right-2 cursor-pointer"
            onClick={() => setShow(false)}
            title="Cerrar"
          >
            <img src="/svg/close.svg" alt="Cerrar" />
          </button>
          {encontrados.length === 0 &&
            "No tenemos en este momento el producto buscado"}
          {encontrados.map((encontrado) => (
            <a key={encontrado.id} href={`/productos/${encontrado.alias}`}>
              <h2 className="font-bold"> {encontrado.nombre}</h2>
            </a>
          ))}
        </section>
      )}
    </section>
  );
};

export default Buscador;
