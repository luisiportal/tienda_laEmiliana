const MetodoPago = () => {
  return (
    <>
      {" "}
      <div id="pago" className="relative ml-1 mt-5 flex">
        <h2 className="ml-1 font-bold text-2xl">Método de Pago</h2>
        <div className="-z-10 bg-green-500 w-32 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>{" "}
      </div>
      <section className="bg-neutral-200 rounded-xl p-3 mx-3">
        <h2 className="font-bold"> Moneda: USD</h2>
        <h2 className="flex gap-1 font-bold">
          {" "}
          Plataforma :{" "}
          <span>
            <img
              className=" object-cover rounded-sm"
              src="/images/zelle.png"
              alt="Zelle"
            />
          </span>
        </h2>
        <p className="text-sm">
          Una vez recibido su pedido, le enviaremos el número de Zelle para que
          pueda realizar el pago.
        </p>
      </section>
    </>
  );
};

export default MetodoPago;
