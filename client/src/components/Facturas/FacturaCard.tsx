import { deleteFacturasRequest } from "../../api/facturas.api";
import type { Factura } from "../../types/General.type";
import Creado from "../DS/Creado";

const FacturaCard = ({ factura }: { factura: Factura }) => {
  console.log(factura);

  const { ventas, entrega } = factura;

  const deleteFactura = async (id: number) => {
    await deleteFacturasRequest(id);
  };

  return (
    <div className="bg-slate-700 rounded-xl p-2">
      <Creado created={factura.created_at} />{" "}
      <div className="bg-neutral-200 rounded-t-xl">
        {ventas.map((item) => (
          <section>
            {" "}
            <div className="flex justify-between p-3 py-1">
              <div className="flex gap-2">
                {" "}
                {Number(item.cantidad).toFixed(0)} x
                <h2 className="font-bold"> {item.producto.nombre}</h2>
              </div>
              <h2> {item.total}</h2>
            </div>
          </section>
        ))}
      </div>
      <div className="bg-green-400 rounded-b-md">
        <div>
          <h2 className="font-bold flex justify-end p-1">
            Total : {factura.total} USD
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-neutral-200 rounded-xl mt-5 p-2">
        <h2>Entrega</h2>
        <h2>Beneficiario: {entrega.beneficiario}</h2>
        <div>
          <h2 className="font-bold">Dirección :</h2>{" "}
          <h2>{entrega.tel_beneficiario}</h2>
        </div>
        <p>{entrega.direccion}</p>
        <h2>Enviado por :{entrega.ordenante}</h2>
      </div>
      <div className="bg-green-400 mt-5 rounded-xl">
        <button onClick={()=>deleteFacturasRequest(factura.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default FacturaCard;
