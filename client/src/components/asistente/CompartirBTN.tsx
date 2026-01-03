const CompartirBTN = ({ alias }: { alias: string }) => {
  return (
    <div className="absolute top-1 left-2 z-10 size-8">
      <button
        title="Compartir"
        onClick={() =>
          navigator.share({
            title: "La Emiliana",
            text: "Mira este producto de La Emiliana 👇",
            url: `https://www.tiendalaemiliana.com/productos/${alias}`,
          })
        }
        className="text-xs bg-green-100 rounded-lg p-1 cursor-pointer"
      >
        <img className="size-8" src="/svg/share.svg" alt="Compartir" />
      </button>
    </div>
  );
};

export default CompartirBTN;
