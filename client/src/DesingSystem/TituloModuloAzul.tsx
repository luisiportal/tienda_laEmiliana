
const TituloModuloAzul = ({ texto }: { texto: string }) => {
  return (
    <div className="bg-azulPortal rounded-4xl w-24 h-8 my-2 text-white text-xs font-bold flex justify-center items-center">
     <h3 className="mx-5"> {texto.toUpperCase()}</h3>
    </div>
  );
};

export default TituloModuloAzul;
