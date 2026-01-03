interface Props {
  titulo: string;
}
const TituloModulo = ({ titulo }: Props) => {
  return (
    <div className="relative ml-1 mt-2">
      <h2 className="ml-1 font-bold text-2xl">{titulo} </h2>
      <div className="-z-10 bg-green-500 w-20 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>
    </div>
  );
};

export default TituloModulo;
interface Props {
  titulo: string;
}
