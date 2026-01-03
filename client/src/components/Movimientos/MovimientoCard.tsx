import { deleteMovimientoRequest } from "../../api/movimientos";
import FechaCreacion from "../../DesingSystem/FechaCreacion";
import { useDialogStore } from "../../stores/dialogStore";
import type { Movimiento } from "../../types/General.type";

const MovimientoCard = ({ movimiento }: { movimiento: Movimiento }) => {
  const { setDialog } = useDialogStore();
  return (
    <div
      className={`${
        movimiento.tipo === "entrada" ? "bg-green-500" : "bg-red-500"
      }  rounded-xl p-5 flex gap-5 relative`}
    >
      <button
        onClick={() =>
          setDialog({
            pregunta: "¿Desea eliminar el movimiento?",
            identificador: movimiento.id,
            show: true,
            request: deleteMovimientoRequest,
            navegarA:'/admin/movimientos'
          })
        }
        className="w-5 absolute right-2 cursor-pointer"
      >
        <img src="/svg/trash.svg" alt="Eliminar Producto" />
      </button>
      <img
        className="aspect-square size-20 rounded-xl"
        src={`/images/productos/${movimiento.producto.image}`}
        alt={movimiento.producto.nombre}
      />

      <div className="flex flex-col">
        <h2 className="font-bold text-xl">{movimiento.producto.nombre}</h2>{" "}
        <h2>
          Tipo:{" "}
          <span className="font-semibold">{movimiento.tipo.toUpperCase()}</span>
        </h2>
        <h2> Cantidad : {movimiento.cantidad}</h2>
        <FechaCreacion created={movimiento.created_at} />
      </div>
    </div>
  );
};

export default MovimientoCard;
