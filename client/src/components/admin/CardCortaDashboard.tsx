import { Link } from "react-router-dom";

const CardCortaDashboard = ({
  titulo,
  description,
  image,
  alias,
  enlace = `/admin/${alias}/nuevo`,
}: {
  titulo: string;
  description: string;
  image: string;
  alias: string;
  enlace?: string;
}) => {
  return (
    <div className="bg-neutral-200 rounded-xl p-2 relative">
      <Link
        to={enlace}
        className="bg-green-500 rounded-xl absolute -top-2 right-2 w-10 h-10 flex justify-center items-center font-bold"
      >
        {" "}
        <img className="w-8 h-8" src="/svg/plus.svg" alt="Agregar" />
      </Link>
      <Link to={`/admin/${alias}`}>
        {" "}
        <img className="w-8 h-8" src={`/svg/${image}`} alt={titulo} />
        <h2 className="font-bold text-lg">{titulo}</h2>
        <p className="text-xs font-light">{description}</p>
      </Link>
    </div>
  );
};

export default CardCortaDashboard;
