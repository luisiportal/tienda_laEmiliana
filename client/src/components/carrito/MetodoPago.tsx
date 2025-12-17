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

        <h2> 1 - Escoge los productos que desee y sus cantidades.</h2>
        <h2>2- Rellena los datos del beneficiario.</h2>
        <h2>
          {" "}
          3- Presione Enviar Pedido, será enviado al vendedor por WhatsApp.
        </h2>
        <h2>
          {" "}
          4- Una vez recibido su pedido, le enviaremos el número de Zelle para
          que pueda realizar el pago.
        </h2>

        
      </section>
    </>
  );
};

export default MetodoPago;
