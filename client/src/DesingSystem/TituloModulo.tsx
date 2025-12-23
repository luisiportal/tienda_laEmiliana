interface Props {
  titulo: string;
}
const TituloModulo = ({ titulo }: Props) => {
  return <h2 className="font-bold uppercase text-lg lg:text-3xl p-6 pl-0 lg:p-12 lg:pl-0 min-h-20">{titulo}</h2>;
};

export default TituloModulo;
interface Props {
  titulo: string;
}

