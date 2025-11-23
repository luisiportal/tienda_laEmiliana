import type { Carrito } from "../../types/General.type";

const EnviarPedido = ({ carrito }: { carrito: Carrito }) => {
  const mensaje = carrito?.productos?.map(
      (p) =>
        `• ${p.nombre} x${p.cantidad} = $${(p.precio * p.cantidad).toFixed(2)}`
    )
    .join("\n");

  const texto = `Hola, quiero hacer el siguiente pedido:\n${mensaje}\n\nTotal: $${carrito?.total?.toFixed(
    2
  )} USD`;
  const url = `https://wa.me/5358155198?text=${encodeURIComponent(texto)}`;

  const enviarPedido = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={() => enviarPedido()}
      className="bg-green-500 rounded-xl text-white font-bold p-2 m-2 mx-10 cursor-pointer"
    >
      Enviar Pedido
    </button>
  );
};

export default EnviarPedido;
